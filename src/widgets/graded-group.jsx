/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
/* eslint-disable comma-dangle, no-var, react/forbid-prop-types, react/jsx-closing-bracket-location, react/jsx-sort-prop-types, react/prop-types, react/sort-comp */
/* To fix, remove an entry above, run ka-lint, and fix errors. */

/* globals i18n */
var classNames = require("classnames");
var React = require("react");
var _ = require("underscore");

var ApiOptions = require("../perseus-api.jsx").Options;
var Changeable   = require("../mixins/changeable.jsx");
var {iconOk, iconRemove, icon} = require("../icon-paths.js");
var InlineIcon = require("../components/inline-icon.jsx");
var Renderer = require("../renderer.jsx");
var GradedGroupAnswerBar = require("./graded-group-answer-bar.jsx");
var {gray76, phoneMargin, negativePhoneMargin, tableBackgroundAccent} = require("../styles/constants.js");
var {StyleSheet, css} = require("aphrodite");

// A Graded Group is more or less a Group widget that displays a check
// answer button below the rendered content. When clicked, the widget grades
// the stuff inside and displays feedback about whether the inputted answer was
// correct or not.

var GRADING_STATUSES = {
    ungraded: 'ungraded',
    correct: 'correct',
    incorrect: 'incorrect',
    invalid: 'invalid',
};

var ANSWER_BAR_STATES = GradedGroupAnswerBar.ANSWER_BAR_STATES;

// Update answer bar state based on current state and whether the question is
// answerable (all parts have been filled out) or not.
var getNextState = (currentState, answerable) => {
    switch (currentState) {
        case ANSWER_BAR_STATES.HIDDEN:
            return answerable ? ANSWER_BAR_STATES.ACTIVE : currentState;
        case ANSWER_BAR_STATES.ACTIVE:
            return !answerable ? ANSWER_BAR_STATES.INACTIVE : currentState;
        case ANSWER_BAR_STATES.INACTIVE:
            return answerable ? ANSWER_BAR_STATES.ACTIVE : currentState;
        case ANSWER_BAR_STATES.INCORRECT:
            return answerable
                ? ANSWER_BAR_STATES.ACTIVE
                : ANSWER_BAR_STATES.INACTIVE;
        default:
            return currentState;
    }
};

// Prepended to all invalid messages to make the widget messages a bit clearer
var INVALID_MESSAGE_PREFIX = "We couldn't grade your answer.";
var DEFAULT_INVALID_MESSAGE = "It looks like you left something blank or " +
    "entered in an invalid answer.";

var GradedGroup = React.createClass({
    mixins: [Changeable],

    propTypes: {
        content: React.PropTypes.string,
        widgets: React.PropTypes.object,
        images: React.PropTypes.object,
        apiOptions: ApiOptions.propTypes,
        trackInteraction: React.PropTypes.func.isRequired,
    },

    getDefaultProps: function() {
        return {
            content: "",
            widgets: {},
            images: {},
        };
    },

    getInitialState: function() {
        return {
            status: GRADING_STATUSES.ungraded,
            message: "",
            answerBarState: ANSWER_BAR_STATES.HIDDEN,
        };
    },

    render: function() {
        var apiOptions = _.extend(
            {},
            ApiOptions.defaults,
            this.props.apiOptions,
            {
                // Api Rewriting to support correct onFocus/onBlur
                // events for the mobile API
                onFocusChange: (newFocus, oldFocus) => {
                    if (oldFocus) {
                        this.props.onBlur(oldFocus);
                    }
                    if (newFocus) {
                        this.props.onFocus(newFocus);
                    }
                }
            }
        );


        var icon = null;
        // Colors are 10% darker than the colors in graded-group.less
        if (this.state.status === GRADING_STATUSES.correct) {
            icon = <InlineIcon {...iconOk} style={{color: "#526f03"}} />;
        } else if (this.state.status === GRADING_STATUSES.incorrect) {
            icon = <InlineIcon {...iconRemove} style={{color: "#ff5454"}} />;
        }

        var classes = classNames({
            [css(styles.gradedGroup)]: apiOptions.xomManatee,
            "perseus-graded-group": true,
            "answer-correct": apiOptions.xomManatee
                ? false
                : this.state.status === GRADING_STATUSES.correct,
            "answer-incorrect": apiOptions.xomManatee
                ? false
                : this.state.status === GRADING_STATUSES.incorrect,
        });

        const {answerBarState} = this.state;

        // Disabled widgets after the answer has been answered correctly to
        // prevent a situation where the answer has been marked correct but
        // looks incorrect because a user has modified it afterwards.
        const isCorrect = answerBarState === ANSWER_BAR_STATES.CORRECT;
        const readOnly = apiOptions.readOnly ||
            (apiOptions.xomManatee && isCorrect);

        return <div className={classes}>
            <Renderer
                {...this.props}
                ref="renderer"
                apiOptions={{...apiOptions, readOnly}}
                onInteractWithWidget={this._onInteractWithWidget} />
            {!apiOptions.xomManatee && icon && <div className="group-icon">
                {icon}
            </div>}
            {!apiOptions.xomManatee && <p>{this.state.message}</p>}
            {!apiOptions.xomManatee && <input
                type="button"
                value={i18n._("Check Answer")}
                className="simple-button"
                disabled={this.props.apiOptions.readOnly}
                onClick={this._checkAnswer} />}
            {apiOptions.xomManatee &&
                answerBarState !== ANSWER_BAR_STATES.HIDDEN &&
                <GradedGroupAnswerBar
                    apiOptions={apiOptions}
                    answerBarState={answerBarState}
                    onCheckAnswer={this._checkAnswer}
                />}
        </div>;
    },

    // This is a little strange because the id of the widget that actually
    // changed is going to be lost in favor of the group widget's id. The
    // widgets prop also wasn't actually changed, and this only serves to
    // alert our renderer (our parent) of the fact that some interaction
    // has occurred.
    _onInteractWithWidget: function(id) {
        // Reset grading display when user changes answer
        this.setState({
            status: GRADING_STATUSES.ungraded,
            message: "",
        });

        if (this.refs.renderer) {
            this.change("widgets", this.props.widgets);
            const emptyWidgets = this.refs.renderer.emptyWidgets();
            const answerable = emptyWidgets.length === 0;
            const answerBarState = this.state.answerBarState;
            this.setState({
                answerBarState: getNextState(answerBarState, answerable),
            });
        }
    },

    _checkAnswer: function() {
        var score = this.refs.renderer.score();

        var status;
        var message;
        if (score.type === "points") {
            status = score.total === score.earned ?
                GRADING_STATUSES.correct : GRADING_STATUSES.incorrect;
            message = score.message || "";
        } else { // score.type is "invalid"
            status = GRADING_STATUSES.invalid;
            message = score.message ?
                `${INVALID_MESSAGE_PREFIX} ${score.message}` :
                `${INVALID_MESSAGE_PREFIX} ${DEFAULT_INVALID_MESSAGE}`;
        }

        this.setState({
            status: status,
            message: message,
            // TODO(kevinb) handle 'invalid' status
            answerBarState: status === 'correct'
                ? ANSWER_BAR_STATES.CORRECT
                : ANSWER_BAR_STATES.INCORRECT,
        });

        this.props.trackInteraction({
            status: status,
        });
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    },

    // Mobile API
    getInputPaths: function() {
        return this.refs.renderer.getInputPaths();
    },

    setInputValue: function(path, newValue, cb) {
        return this.refs.renderer.setInputValue(path, newValue, cb);
    },

    getAcceptableFormatsForInputPath: function(path) {
        return this.refs.renderer.getAcceptableFormatsForInputPath(path);
    },

    focus: function() {
        return this.refs.renderer.focus();
    },

    focusInputPath: function(path) {
        this.refs.renderer.focusPath(path);
    },

    blurInputPath: function(path) {
        this.refs.renderer.blurPath(path);
    },
});

var traverseChildWidgets = function(props, traverseRenderer) {
    return _.extend({}, props, traverseRenderer(props));
};

module.exports = {
    name: "graded-group",
    displayName: "Graded Group",
    widget: GradedGroup,
    traverseChildWidgets: traverseChildWidgets,
    hidden: false,
    tracking: "all",
};

const styles = StyleSheet.create({
    gradedGroup: {
        borderTop: `1px solid ${gray76}`,
        borderBottom: `1px solid ${gray76}`,
        backgroundColor: tableBackgroundAccent,
        marginLeft: negativePhoneMargin,
        marginRight: negativePhoneMargin,
        paddingBottom: phoneMargin,
        paddingLeft: phoneMargin,
        paddingRight: phoneMargin,
        paddingTop: 10,
        width: 'auto',
    },
});
