/**
 * Icon paths to be used with `inline-icon.jsx`.
 *
 * These paths are taken directly from webapp's `icon-paths.js`. Unlike the
 * webapp equivalent, these can be directly required within Perseus files since
 * this is all bundled together anyway.
 */
module.exports = {
    iconCheck: {
        path: `M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10
        S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4
        l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1
        -0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,
        10,3.8z`,
        width: 10,
        height: 10,
    },
    iconChevronDown: {
        path: "M99.669 13.048q0 3.36-2.352 5.712l-41.664 41.664q-2.408 2.408-5.88 2.408t-5.712-2.408l-41.664-41.664q-2.408-2.24-2.408-5.712t2.408-5.88l4.76-4.816q2.52-2.352 5.88-2.352t5.656 2.352l31.136 31.136 31.08-31.136q2.352-2.352 5.712-2.352t5.88 2.352l4.816 4.816q2.352 2.52 2.352 5.88z", // @Nolint
        width: 100,
        height: 63.034,
    },
    iconChevronRight: {
        path: "M62.808 49.728q0 3.36-2.352 5.88l-41.72 41.664q-2.352 2.408-5.768 2.408t-5.768-2.408l-4.872-4.76q-2.352-2.52-2.352-5.88t2.352-5.712l31.08-31.136-31.08-31.024q-2.352-2.52-2.352-5.88t2.352-5.712l4.872-4.76q2.296-2.408 5.768-2.408t5.768 2.408l41.72 41.664q2.352 2.296 2.352 5.656z", // @Nolint
        width: 63.034,
        height: 100,
    },
    iconCircle: {
        path: "M100.035 50.046q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z", // @Nolint
        width: 100,
        height: 100,
    },
    iconCircleArrowDown: {
        path: "M50.046 83.676q1.767 0 2.907-1.14l29.526-29.526q1.197-1.197 1.197-2.907t-1.197-2.964l-5.928-5.928q-1.197-1.14-2.964-1.14t-2.907 1.14l-12.312 12.312l0-32.661q0-1.71-1.254-2.964t-2.907-1.254l-8.322 0q-1.71 0-2.964 1.254t-1.254 2.964l0 32.661l-12.312-12.312q-1.197-1.254-2.907-1.254t-2.907 1.254l-5.928 5.928q-1.197 1.197-1.197 2.964t1.197 2.907l29.469 29.526q1.197 1.14 2.964 1.14zm49.989-33.63q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z", // @Nolint
        width: 100,
        height: 100,
    },
    iconCircleArrowUp: {
        path: "M54.207 83.391q1.653 0 2.907-1.254t1.254-2.907l0-32.718l12.312 12.312q1.254 1.254 2.964 1.254t2.907-1.254l5.928-5.928q1.197-1.197 1.14-2.964 0-1.767-1.14-2.907l-29.526-29.526q-1.197-1.14-2.907-1.14t-2.964 1.14l-29.469 29.526q-1.197 1.254-1.197 2.964t1.197 2.907l5.928 5.928q1.197 1.197 2.907 1.197t2.907-1.197l12.312-12.312l0 32.718q0 1.653 1.254 2.907t2.964 1.254l8.322 0zm45.828-33.345q.057 13.623-6.669 25.137t-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.669 25.137z", // @Nolint
        width: 100,
        height: 100,
    },
    iconCircleThin: {
        path: "M50.046 8.322q-8.493 0-16.188 3.306-15.561 6.669-22.173 22.23-3.363 7.695-3.363 16.188t3.306 16.188 8.949 13.281q5.586 5.586 13.281 8.892t16.188 3.306 16.188-3.306 13.281-8.892 8.892-13.281 3.306-16.188-3.306-16.188-8.892-13.281-13.281-8.949q-7.695-3.306-16.188-3.306zm0 91.713q-13.623 0-25.137-6.726t-18.183-18.183q-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.726 25.137-6.726 25.137-18.24 18.126q-11.514 6.726-25.08 6.726z", // @Nolint
        width: 100,
        height: 99.944,
    },
    iconDesktop: {
        path: "M94.208 52.119l0-43.746q0-.69-.506-1.15t-1.196-.506l-84.088 0q-.69 0-1.196.506t-.506 1.15l0 43.746q0 .69.506 1.196t1.196.506l84.088 0q.69 0 1.196-.506t.506-1.196zm6.716-43.746l0 57.224q0 3.45-2.484 5.934t-5.934 2.484l-28.566 0q0 3.128 2.53 7.774.828 1.61.828 2.622t-1.012 2.07q-1.012 1.012-2.346.966l-26.91 0q-1.38 0-2.392-1.012t-1.012-2.024q0-1.058 1.656-4.14t1.748-6.256l-28.612 0q-3.45 0-5.934-2.484t-2.484-5.934l0-57.224q0-3.45 2.484-5.934t5.934-2.438l84.088 0q3.45 0 5.98 2.438 2.438 2.484 2.438 5.934z", // @Nolint
        width: 100,
        height: 86.648,
    },
    iconExclamationSign: {
        path: "M58.368 81.225l0-12.369q0-.912-.57-1.539t-1.425-.627l-12.54 0q-.855-.057-1.482.627t-.684 1.539l0 12.369q-.057.855.627 1.482t1.539.684l12.54 0q.855 0 1.425-.627t.57-1.539zm1.026-62.871q0-1.596-2.223-1.71l-14.307 0q-2.109 0-2.223 1.71l1.14 40.47q0 .627.627 1.14t1.539.456l12.084 0q.912-.057 1.539-.513t.684-1.083zm-9.348-18.354q13.566 0 25.08 6.726 11.514 6.669 18.24 18.183t6.726 25.137-6.726 25.137-18.24 18.183-25.08 6.669-25.137-6.726q-11.514-6.726-18.183-18.183-6.726-11.571-6.726-25.137t6.726-25.08 18.24-18.24 25.08-6.669z", // @Nolint
        width: 100,
        height: 99.944,
    },
    // Grabbed from https://github.com/encharm/Font-Awesome-SVG-PNG
    iconGear: {
        path: "M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z", // @Nolint
        width: 1792,
        height: 1792,
    },
    iconMobilePhone: {
        path: "M36.04 89.557q0-2.584-1.836-4.42t-4.42-1.836-4.352 1.836q-1.836 1.836-1.836 4.42t1.836 4.352 4.42 1.836q2.652-.068 4.42-1.836t1.768-4.352zm16.184-12.444l0-54.74q0-1.088-.748-1.768t-1.768-.68l-39.78 0q-1.088 0-1.768.748t-.68 1.7l0 54.74q0 1.02.748 1.768t1.7.68l39.78 0q1.02-.068 1.768-.748t.748-1.7zm-14.892-65.892q0-1.224-1.292-1.292l-12.444 0q-1.224.068-1.224 1.292t1.224 1.224l12.444 0q1.292 0 1.292-1.224zm22.372-1.292l0 79.628q0 3.944-2.992 6.936t-7.004 2.992l-39.78 0q-4.012 0-7.004-2.924-2.924-2.924-2.924-7.004l0-79.628q0-4.012 2.924-6.936t7.004-2.992l39.78 0q4.012-.068 7.004 2.924t2.992 7.004z", // @Nolint
        width: 60.013,
        height: 100,
    },
    iconOk: {
        path: "M37.964 76.048q-2.576 0-4.368-1.792l-31.864-31.864q-1.792-1.792-1.792-4.368t1.792-4.368l8.736-8.68q1.792-1.792 4.368-1.792t4.312 1.792l18.816 18.872 42-42.056q1.792-1.792 4.368-1.792t4.312 1.792l8.736 8.736q1.792 1.792 1.792 4.368t-1.792 4.312l-55.048 55.048q-1.792 1.792-4.368 1.792z", // @Nolint
        width: 100,
        height: 76.637,
    },
    iconPlus: {
        path: "M99.758 43.09l0 13.578q0 2.852-1.984 4.836t-4.836 1.984l-29.45 0l0 29.45q0 2.852-1.984 4.836t-4.836 1.984l-13.578 0q-2.852 0-4.836-1.984t-1.984-4.836l0-29.45l-29.45 0q-2.852 0-4.836-1.984t-1.984-4.836l0-13.578q0-2.852 1.984-4.836t4.836-1.984l29.45 0l0-29.45q0-2.852 1.984-4.836t4.836-1.984l13.578 0q2.852 0 4.836 1.984t1.984 4.836l0 29.45l29.45 0q2.852 0 4.836 1.984t1.984 4.836z", // @Nolint
        width: 100,
        height: 100,
    },
    iconRemove: {
        path: "M100.464 80.808q0 3.404-2.368 5.772l-11.47 11.544q-2.368 2.368-5.772 2.368t-5.698-2.368l-24.864-24.864-24.864 24.864q-2.368 2.368-5.772 2.368t-5.772-2.368l-11.47-11.544q-2.368-2.368-2.368-5.772t2.368-5.698l24.864-24.864-24.864-24.864q-2.368-2.368-2.368-5.772t2.368-5.772l11.47-11.47q2.368-2.368 5.772-2.368t5.772 2.368l24.864 24.864 24.864-24.864q2.294-2.368 5.698-2.368t5.772 2.368l11.47 11.47q2.368 2.368 2.368 5.772t-2.368 5.772l-24.864 24.864 24.864 24.864q2.368 2.294 2.368 5.698z", // @Nolint
        width: 100,
        height: 100,
    },
    iconTablet: {
        path: "M45.322 90.706q0-1.86-1.302-3.224-1.364-1.364-3.224-1.364t-3.224 1.364-1.302 3.224q0 1.86 1.364 3.224 1.302 1.364 3.162 1.302 1.86.062 3.224-1.302t1.302-3.224zm27.218-11.346l0-68.014q0-.93-.682-1.612t-1.55-.682l-58.962 0q-.93 0-1.612.682t-.682 1.612l0 68.014q0 .93.682 1.612t1.612.62l58.962 0q.992-.062 1.612-.682t.62-1.55zm9.114-68.014l0 77.066q0 4.65-3.348 7.998t-7.998 3.348l-58.962 0q-4.65 0-7.998-3.348t-3.348-7.998l0-77.066q0-4.65 3.348-7.998t7.998-3.348l58.962 0q4.65 0 7.998 3.348t3.348 7.998z", // @Nolint
        width: 81.852,
        height: 100,
    },
    iconTrash: {
        path: "M31.293 37.506q2.052 0 2.052 2.109l0 37.506q0 1.995-2.052 2.109l-4.218 0q-.912-.057-1.482-.627t-.57-1.482l0-37.506q0-2.109 2.052-2.109l4.218 0zm18.753 2.109l0 37.506q0 .912-.57 1.482t-1.539.627l-4.161 0q-1.995 0-2.109-2.109l0-37.506q.057-.912.627-1.482t1.482-.627l4.161 0q.969.057 1.539.627t.57 1.482zm14.592-2.109q2.052 0 2.052 2.109l0 37.506q0 1.995-2.052 2.109l-4.161 0q-.969-.057-1.539-.627t-.57-1.482l0-37.506q0-2.109 2.109-2.109l4.161 0zm10.431 49.248l0-61.731l-58.368 0l0 61.731q.057 2.679.969 3.819t1.083 1.14l54.207 0q.171 0 1.14-1.083t.969-3.876zm-43.776-70.11l29.184 0l-3.135-7.581q-.456-.57-1.14-.741l-20.634 0q-.627.114-1.083.741zm-31.293 2.109q0-1.995 2.109-2.109l20.121 0l4.56-10.83q.969-2.394 3.477-4.104 2.565-1.71 5.187-1.71l20.805 0q2.622 0 5.187 1.71t3.477 4.104l4.56 10.83l20.178 0q.912.057 1.482.627t.57 1.482l0 4.161q0 1.995-2.052 2.109l-6.27 0l0 61.731q0 5.415-3.078 9.348t-7.353 3.933l-54.207 0q-4.275 0-7.353-3.819t-3.078-9.177l0-62.016l-6.213 0q-.969 0-1.539-.57t-.57-1.539l0-4.161z", // @Nolint
        width: 91.681,
        height: 100,
    },
    iconUndo: {
        path: "M10,6.6C10,7.2,9.8,8,9.3,9.1c0,0,0,0.1-0.1,0.1S9.2,9.3,9.2,9.4c0,0,0,0.1-0.1,0.1C9,9.6,9,9.6,8.9,9.6 c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1s0-0.1,0-0.1c0-0.3,0-0.5,0-0.7c0-0.4,0-0.7-0.1-1C8.6,7.1,8.5,6.9,8.4,6.7S8.2,6.3,8,6.1C7.8,5.9,7.6,5.8,7.4,5.7S6.9,5.5,6.7,5.5S6.1,5.4,5.8,5.4c-0.3,0-0.6,0-1,0H3.6v1.4c0,0.1,0,0.2-0.1,0.3C3.4,7.1,3.3,7.1,3.2,7.1C3.1,7.1,3,7.1,3,7L0.1,4.1C0,4.1,0,4,0,3.9s0-0.2,0.1-0.3L3,0.8C3,0.7,3.1,0.7,3.2,0.7c0.1,0,0.2,0,0.3,0.1C3.5,0.9,3.6,0.9,3.6,1v1.4h1.2c2.6,0,4.3,0.7,4.9,2.2C9.9,5.2,10,5.8,10,6.6z", // @Nolint
        width: 10,
        height: 10,
    },
};
