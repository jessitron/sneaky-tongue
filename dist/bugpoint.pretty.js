const __DEV__ = false;
var q7 = {
    format: "BeepBox",
    version: 9,
    scale: "easy :)",
    key: "C",
    introBars: 0,
    loopBars: 3,
    beatsPerBar: 8,
    ticksPerBeat: 24,
    beatsPerMinute: 163,
    layeredInstruments: !1,
    patternInstruments: !1,
    channels: [{
        type: "pitch",
        instruments: [{
            type: "harmonics",
            volume: 40,
            eqFilter: [{
                type: "low-pass",
                cutoffHz: 1414.21,
                linearGain: 1.4142
            }],
            preset: 646,
            effects: ["vibrato", "reverb"],
            vibrato: "shaky",
            reverb: 33,
            fadeInSeconds: 0.0263,
            fadeOutTicks: -3,
            harmonics: [100, 57, 43, 43, 14, 14, 0, 0, 0, 14, 29, 29, 14, 0, 14, 29, 29, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            unison: "none",
            envelopes: []
        }],
        patterns: [{
            notes: [{
                pitches: [40, 36, 38, 43],
                points: [{
                    tick: 0,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }],
                continuesLastPattern: !1
            }, {
                pitches: [38, 40, 43, 48],
                points: [{
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 96,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [50, 43, 45, 40],
                points: [{
                    tick: 96,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [48, 40, 45, 52],
                points: [{
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 192,
                    pitchBend: 0,
                    volume: 100
                }]
            }]
        }, {
            notes: [{
                pitches: [55, 45, 43, 40],
                points: [{
                    tick: 1,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [55, 48, 43, 57],
                points: [{
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 96,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [45, 52, 55, 60],
                points: [{
                    tick: 96,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [57, 52, 50, 45],
                points: [{
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 192,
                    pitchBend: 0,
                    volume: 100
                }]
            }]
        }, {
            notes: [{
                pitches: [40, 48, 52, 55],
                points: [{
                    tick: 0,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }],
                continuesLastPattern: !1
            }, {
                pitches: [52, 48, 43, 40],
                points: [{
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 96,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [50, 45, 40, 36],
                points: [{
                    tick: 96,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [48, 43, 40, 36],
                points: [{
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 192,
                    pitchBend: 0,
                    volume: 100
                }]
            }]
        }, {
            notes: [{
                pitches: [50, 45, 52, 55],
                points: [{
                    tick: 0,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 24,
                    pitchBend: 0,
                    volume: 100
                }],
                continuesLastPattern: !1
            }, {
                pitches: [57, 55, 48, 50],
                points: [{
                    tick: 48,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 72,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [64, 40, 45, 50],
                points: [{
                    tick: 84,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 108,
                    pitchBend: 0,
                    volume: 100
                }]
            }, {
                pitches: [62, 60, 55, 69],
                points: [{
                    tick: 144,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 168,
                    pitchBend: 0,
                    volume: 100
                }]
            }]
        }, {
            notes: [{
                pitches: [45, 64, 57, 52],
                points: [{
                    tick: 0,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 24,
                    pitchBend: 0,
                    volume: 100
                }],
                continuesLastPattern: !1
            }, {
                pitches: [72, 69, 67, 36],
                points: [{
                    tick: 60,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: 84,
                    pitchBend: 0,
                    volume: 100
                }]
            }]
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }],
        sequence: [1, 2, 3, 4, 5, 6, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        octaveScrollBar: 3
    }, {
        type: "pitch",
        instruments: [{
            type: "harmonics",
            volume: 80,
            eqFilter: [],
            preset: 519,
            effects: ["note filter", "reverb"],
            noteFilter: [{
                type: "low-pass",
                cutoffHz: 4756.83,
                linearGain: 1
            }],
            reverb: 33,
            fadeInSeconds: 0.0263,
            fadeOutTicks: -3,
            harmonics: [86, 86, 86, 57, 71, 86, 57, 71, 71, 71, 57, 43, 57, 43, 71, 43, 71, 57, 57, 43, 43, 43, 57, 43, 43, 29, 29, 29],
            unison: "hum",
            envelopes: [{
                target: "noteFilterAllFreqs",
                envelope: "swell 1"
            }]
        }],
        patterns: [{
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }],
        sequence: [1, 2, 3, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        octaveScrollBar: 2
    }, {
        type: "pitch",
        instruments: [{
            type: "chip",
            volume: 80,
            eqFilter: [{
                type: "low-pass",
                cutoffHz: 4000,
                linearGain: 0.5
            }],
            preset: 67,
            effects: [],
            fadeInSeconds: 0,
            fadeOutTicks: -3,
            wave: "sawtooth",
            unison: "shimmer",
            envelopes: []
        }],
        patterns: [{
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }],
        sequence: [1, 2, 3, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        octaveScrollBar: 1
    }, {
        type: "drum",
        instruments: [{
            type: "drumset",
            volume: 80,
            eqFilter: [],
            preset: 960,
            effects: ["reverb"],
            reverb: 33,
            drums: [{
                filterEnvelope: "twang 1",
                spectrum: [57, 71, 71, 86, 86, 86, 71, 71, 71, 71, 57, 57, 57, 57, 43, 43, 43, 43, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
            }, {
                filterEnvelope: "twang 1",
                spectrum: [0, 0, 0, 100, 71, 71, 57, 86, 57, 57, 57, 71, 43, 43, 57, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43]
            }, {
                filterEnvelope: "twang 1",
                spectrum: [0, 0, 0, 0, 100, 57, 43, 43, 29, 57, 43, 29, 71, 43, 43, 43, 43, 57, 43, 43, 43, 43, 43, 43, 43, 43, 29, 43, 43, 43]
            }, {
                filterEnvelope: "twang 1",
                spectrum: [0, 0, 0, 0, 0, 71, 57, 43, 43, 43, 57, 57, 43, 29, 57, 43, 43, 43, 29, 43, 57, 43, 43, 43, 43, 43, 43, 29, 43, 43]
            }, {
                filterEnvelope: "decay 2",
                spectrum: [0, 14, 29, 43, 86, 71, 29, 43, 43, 43, 43, 29, 71, 29, 71, 29, 43, 43, 43, 43, 57, 43, 43, 57, 43, 43, 43, 57, 57, 57]
            }, {
                filterEnvelope: "decay 1",
                spectrum: [0, 0, 14, 14, 14, 14, 29, 29, 29, 43, 43, 43, 57, 57, 57, 71, 71, 71, 71, 71, 71, 71, 71, 57, 57, 57, 57, 43, 43, 43]
            }, {
                filterEnvelope: "twang 3",
                spectrum: [43, 43, 43, 71, 29, 29, 43, 43, 43, 29, 43, 43, 43, 29, 29, 43, 43, 29, 29, 29, 57, 14, 57, 43, 43, 57, 43, 43, 57, 57]
            }, {
                filterEnvelope: "decay 3",
                spectrum: [29, 43, 43, 43, 43, 29, 29, 43, 29, 29, 43, 29, 14, 29, 43, 29, 43, 29, 57, 29, 43, 57, 43, 71, 43, 71, 57, 57, 71, 71]
            }, {
                filterEnvelope: "twang 3",
                spectrum: [43, 29, 29, 43, 29, 29, 29, 57, 29, 29, 29, 57, 43, 43, 29, 29, 57, 43, 43, 43, 71, 43, 43, 71, 57, 71, 71, 71, 71, 71]
            }, {
                filterEnvelope: "decay 3",
                spectrum: [57, 57, 57, 43, 57, 57, 43, 43, 57, 43, 43, 43, 71, 57, 43, 57, 86, 71, 57, 86, 71, 57, 86, 100, 71, 86, 86, 86, 86, 86]
            }, {
                filterEnvelope: "flare 1",
                spectrum: [0, 0, 14, 14, 14, 14, 29, 29, 29, 43, 43, 43, 57, 57, 71, 71, 86, 86, 100, 100, 100, 100, 100, 100, 100, 100, 86, 57, 29, 0]
            }, {
                filterEnvelope: "decay 2",
                spectrum: [14, 14, 14, 14, 29, 14, 14, 29, 14, 43, 14, 43, 57, 86, 57, 57, 100, 57, 43, 43, 57, 100, 57, 43, 29, 14, 0, 0, 0, 0]
            }],
            envelopes: []
        }],
        patterns: [{
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }, {
            notes: []
        }],
        sequence: [1, 2, 3, 4, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
};
var v4 = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35, 36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60];
var T3 = {
        type: "harmonics",
        preset: 646,
        volume: 40,
        eqFilter: [{
            type: "low-pass",
            cutoffHz: 1414.21,
            linearGain: 1.4142
        }],
        effects: ["vibrato", "reverb"],
        vibrato: "shaky",
        reverb: 33,
        fadeInSeconds: 0.0263,
        fadeOutTicks: 48,
        harmonics: [100, 57, 43, 43, 14, 14, 0, 0, 0, 14, 29, 29, 14, 0, 14, 29, 29, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        unison: "none",
        envelopes: []
    },
    e7 = {
        normal: {
            instrument: T3,
            ticksPerNote: 16,
            streakStart: 0,
            intervals: [0]
        },
        emoji: {
            instrument: T3,
            ticksPerNote: 48,
            streakStart: 0,
            intervals: [0, 12, 19]
        },
        fanfare: {
            instrument: T3,
            ticksPerNote: 36,
            streakStart: 0,
            intervals: [0, 4, 7]
        }
    };

function $1($) {
    let J = $.ticksPerNote,
        Z = $.intervals || [0],
        Y = v4.map((q) => ({
            notes: [{
                pitches: Z.map((Q) => 24 + q + Q),
                points: [{
                    tick: 0,
                    pitchBend: 0,
                    volume: 100
                }, {
                    tick: J,
                    pitchBend: 0,
                    volume: 100
                }],
                continuesLastPattern: !1
            }]
        })),
        X = v4.map((q, Q) => Q + 1);
    return {
        format: "BeepBox",
        version: 9,
        scale: "easy :)",
        key: "C",
        introBars: 0,
        loopBars: v4.length,
        beatsPerBar: 8,
        ticksPerBeat: 24,
        beatsPerMinute: 163,
        layeredInstruments: !1,
        patternInstruments: !1,
        channels: [{
            type: "pitch",
            instruments: [$.instrument],
            patterns: Y,
            sequence: X,
            octaveScrollBar: 3
        }]
    }
}
var h4 = {
        normal: null,
        emoji: null,
        fanfare: null
    },
    m3 = null;

function J1() {
    if (!m3) m3 = new(window.AudioContext || window.webkitAudioContext);
    return m3
}

function Z1($) {
    if (h4[$]) return h4[$];
    let J = window.beepbox;
    if (!J || !J.Song || !J.Synth) return null;
    let Z = e7[$];
    if (!Z) return null;
    let Y = J1(),
        X = [];
    for (let q = 0; q < 5; q++) {
        let Q = new J.Song;
        Q.fromJsonObject($1(Z));
        let V = new J.Synth(Q);
        V.audioCtx = Y, V.deactivateAudio = function() {}, X.push({
            synth: V,
            chain: null,
            pauseTimer: null,
            pauseFinishTimer: null
        })
    }
    return h4[$] = {
        entries: X,
        nextIdx: 0,
        cfg: Z
    }, h4[$]
}

function Q1($) {
    if ($.chain) return;
    let J = $.synth;
    if (!J.scriptNode || !J.audioCtx) return;
    let Z = J.audioCtx,
        Y = Z.createGain(),
        X = Z.createChannelSplitter(2),
        q = Z.createGain(),
        Q = Z.createGain(),
        V = Z.createChannelMerger(2);
    if (!J.scriptNode._disconnectPatched) {
        let z = J.scriptNode.disconnect.bind(J.scriptNode);
        J.scriptNode.disconnect = function(...K) {
            try {
                return z(...K)
            } catch (W) {
                if (W && W.name !== "InvalidAccessError") throw W
            }
        }, J.scriptNode._disconnectPatched = !0
    }
    try {
        J.scriptNode.disconnect(Z.destination)
    } catch (z) {}
    J.scriptNode.connect(Y), Y.connect(X), X.connect(q, 0), X.connect(Q, 1), q.connect(V, 0, 0), Q.connect(V, 0, 1), V.connect(Z.destination), $.chain = {
        masterGain: Y,
        leftGain: q,
        rightGain: Q
    }
}

function z7() {
    let $ = [14, 16, 18],
        J = [0, 200, 400],
        Z = 320,
        Y = 640;
    for (let X = 0; X < $.length; X++) setTimeout(() => {
        _4("fanfare", $[X], 320, 640, 640)
    }, J[X])
}

function _4($, J, Z, Y, X) {
    let q = Z1($);
    if (!q) return;
    let Q = q.cfg,
        V = Q.ticksPerNote,
        z = q.entries[q.nextIdx % q.entries.length];
    q.nextIdx++;
    let K = z.synth,
        W = X > 0 ? Math.max(0, Math.min(1, 1 - Y / X)) : 0,
        j = Math.round(W * 7),
        U = Math.max(0, Math.min(Q.streakStart + j + J, v4.length - 1));
    if (K.playing) K.pause();
    if (K.playhead = U, K.play(), Q1(z), z.chain) {
        let O = Math.max(0, Math.min(1, Z / 640));
        z.chain.leftGain.gain.value = 1 - O * 0.7, z.chain.rightGain.gain.value = 0.3 + O * 0.7;
        let M = K.audioCtx;
        if (M) {
            let R = M.currentTime;
            z.chain.masterGain.gain.cancelScheduledValues(R), z.chain.masterGain.gain.setValueAtTime(1, R)
        }
    }
    let H = Q.instrument.fadeOutTicks > 0 ? Q.instrument.fadeOutTicks : 0,
        N = 0.36809815950920244 * ((V + H) / 24) * 1000,
        L = 30;
    if (z.pauseTimer) clearTimeout(z.pauseTimer), z.pauseTimer = null;
    if (z.pauseFinishTimer) clearTimeout(z.pauseFinishTimer), z.pauseFinishTimer = null;
    z.pauseTimer = setTimeout(() => {
        z.pauseTimer = null;
        let O = K.audioCtx;
        if (z.chain && O) {
            let M = O.currentTime;
            z.chain.masterGain.gain.cancelScheduledValues(M), z.chain.masterGain.gain.setValueAtTime(z.chain.masterGain.gain.value, M), z.chain.masterGain.gain.linearRampToValueAtTime(0.0001, M + L / 1000)
        }
        z.pauseFinishTimer = setTimeout(() => {
            if (z.pauseFinishTimer = null, K.playing) K.pause()
        }, L + 10)
    }, N)
}
var O3 = "0.1.0",
    y = {
        minR: 1,
        maxR: 3,
        color: [0.6901960784313725, 0.5019607843137255, 0.9725490196078431, 1],
        skeleton: !1,
        showAnchors: !1,
        emaStrength: 0.5,
        strokeSpacing: 15,
        maxDrawPoints: 20,
        revealSpeed: 2000,
        bugSpeedMult: 1,
        theme: "light"
    },
    X1 = {
        light: {
            background: "#F4F2F1",
            headTip: "#6C6C6C",
            bugLight: "#A2A2A2",
            bugDark: "#565656",
            bugAvg: "#B0B0B0"
        },
        dark: {
            background: "#000000",
            headTip: "#6C6C6C",
            bugLight: "#787878",
            bugDark: "#303030",
            bugAvg: "#606060"
        }
    },
    D0 = {
        background: "#F4F2F1",
        headTip: "#6C6C6C",
        headBase: "#F4F2F1",
        bugLight: "#A2A2A2",
        bugDark: "#565656",
        bugAvg: "#B0B0B0"
    },
    q1 = "bezier-pg-v1";
try {
    let $ = JSON.parse(localStorage.getItem(q1) || "null");
    if ($) Object.assign(y, $)
} catch ($) {}
y.bugSpeedMult = 1;
y.revealSpeed = 2000;
var p4 = null;

function z1() {
    if (!p4) p4 = new(window.AudioContext || window.webkitAudioContext);
    if (p4.state === "suspended") p4.resume()
}
var b4 = !1;
var N5 = Math.PI / 5;

function w3($) {
    return (Math.round(($ - Math.PI / 2) * 6 / Math.PI) % 12 + 12) % 12
}
var w = null,
    _ = null,
    e0 = null,
    $4 = null,
    $0 = null,
    C0 = null,
    k4 = -1,
    Y7 = 700,
    Y1 = 0,
    u4 = 163,
    M4 = 4;

function L7() {
    if (w) return w;
    let $ = window.beepbox;
    if (!$ || !$.Song || !$.Synth) return null;
    let J = JSON.parse(JSON.stringify(q7));
    for (let X of J.channels || [])
        for (let q of X.instruments || []) {
            if (q.effects) q.effects = q.effects.filter((Q) => Q !== "vibrato" && Q !== "reverb");
            delete q.vibrato, delete q.reverb
        }
    let Z = J.channels?.[0];
    if (Z && Array.isArray(Z.patterns) && Array.isArray(Z.sequence)) {
        let X = J.beatsPerBar * J.ticksPerBeat,
            q = [];
        for (let z = 0; z < 3; z++) {
            let K = (Z.sequence[z] || 0) - 1,
                W = K >= 0 ? Z.patterns[K] : null;
            if (!W) continue;
            let j = [...W.notes || []].sort((U, H) => (U.points?.[0]?.tick ?? 0) - (H.points?.[0]?.tick ?? 0));
            for (let U of j) q.push(U.pitches)
        }
        let Q = [],
            V = [];
        for (let z of q)
            for (let K = 0; K < M4; K++) Q.push({
                notes: [{
                    pitches: z,
                    points: [{
                        tick: 0,
                        pitchBend: 0,
                        volume: 100
                    }, {
                        tick: X,
                        pitchBend: 0,
                        volume: 100
                    }],
                    continuesLastPattern: K !== 0
                }]
            }), V.push(Q.length);
        Z.patterns = Q, Z.sequence = V, J.loopBars = V.length;
        for (let z = 1; z < J.channels.length; z++) J.channels[z].sequence = new Array(V.length).fill(0)
    }
    let Y = new $.Song;
    return Y.fromJsonObject(J), w = new $.Synth(Y), w.deactivateAudio = function() {}, window._bb = w, w
}

function A7() {
    if (_) return;
    if (!w || !w.scriptNode || !w.audioCtx) return;
    let $ = w.audioCtx;
    _ = $.createGain(), _.gain.value = 1;
    let J = $.createChannelSplitter(2);
    e0 = $.createGain(), $4 = $.createGain(), e0.gain.value = 1, $4.gain.value = 1;
    let Z = $.createChannelMerger(2);
    if (!w.scriptNode._disconnectPatched) {
        let Y = w.scriptNode.disconnect.bind(w.scriptNode);
        w.scriptNode.disconnect = function(...X) {
            try {
                return Y(...X)
            } catch (q) {
                if (q && q.name !== "InvalidAccessError") throw q
            }
        }, w.scriptNode._disconnectPatched = !0
    }
    try {
        w.scriptNode.disconnect($.destination)
    } catch (Y) {}
    w.scriptNode.connect(_), _.connect(J), J.connect(e0, 0), J.connect($4, 1), e0.connect(Z, 0, 0), $4.connect(Z, 0, 1), Z.connect($.destination)
}

function V1() {
    if (!_ || !w?.audioCtx) return;
    let J = w.audioCtx.currentTime,
        Z = Math.max(0.0001, _.gain.value);
    _.gain.cancelScheduledValues(J), _.gain.setValueAtTime(Z, J), _.gain.linearRampToValueAtTime(1, J + 0.01)
}

function W1($) {
    if (!e0 || !$4) return;
    let J = Math.max(0, Math.min(1, $));
    e0.gain.value = 1 - J * 0.7, $4.gain.value = 0.3 + J * 0.7
}

function K1($, J) {
    let Z = L7();
    if (!Z) return;
    A7();
    let Y = 0.5;
    if ($.length > 0) {
        let Q = 0;
        for (let V of $) Q += V.x;
        Y = Math.max(0, Math.min(1, Q / $.length / o))
    }
    W1(Y);
    let X = J / Math.PI * Y1,
        q = Math.pow(2, X / 1200);
    Z.song.beatsPerMinute = Math.max(30, Math.min(400, u4 * q))
}

function S3($) {
    let J = L7();
    if (!J) return;
    if ($ === k4) return;
    if ($0) clearTimeout($0), $0 = null;
    if (C0) clearTimeout(C0), C0 = null;
    if (J.playing && k4 >= 0 && _) {
        let Q = J.audioCtx.currentTime,
            V = Math.max(0.001, _.gain.value);
        _.gain.cancelScheduledValues(Q), _.gain.setValueAtTime(V, Q), _.gain.linearRampToValueAtTime(0.0001, Q + 0.02), _.gain.linearRampToValueAtTime(1, Q + 0.06), setTimeout(() => {
            if (J.playing) J.pause();
            J.playhead = $ * M4, J.play()
        }, 22)
    } else {
        if (J.playing) J.pause();
        J.playhead = $ * M4, J.play(), A7(), V1()
    }
    k4 = $;
    let Y = 60 / J.song.getBeatsPerMinute() * J.song.beatsPerBar * M4 * 1000,
        X = () => {
            $0 = setTimeout(() => {
                if (!w || !w.playing) return;
                w.playhead = $ * M4, X()
            }, Y - 30)
        };
    X()
}

function H1() {
    if (k4 < 0) return;
    if (k4 = -1, !w || !w.playing) {
        if ($0) clearTimeout($0), $0 = null;
        if (w?.song) w.song.beatsPerMinute = u4;
        return
    }
    if (_ && w.audioCtx) {
        let J = w.audioCtx.currentTime,
            Z = Math.max(0.01, Y7 / 1000),
            Y = Math.max(0.001, _.gain.value);
        if (_.gain.cancelScheduledValues(J), _.gain.setValueAtTime(Y, J), _.gain.exponentialRampToValueAtTime(0.001, J + Z), C0) clearTimeout(C0);
        C0 = setTimeout(() => {
            if ($0) clearTimeout($0), $0 = null;
            if (w?.playing) w.pause();
            if (w?.song) w.song.beatsPerMinute = u4;
            C0 = null
        }, Y7 + 30)
    } else {
        if ($0) clearTimeout($0), $0 = null;
        if (w.pause(), w?.song) w.song.beatsPerMinute = u4
    }
}
var w4 = 0;

function c3($) {
    return function() {
        $ |= 0, $ = $ + 1831565813 | 0;
        let J = Math.imul($ ^ $ >>> 15, 1 | $);
        return J = J + Math.imul(J ^ J >>> 7, 61 | J) ^ J, ((J ^ J >>> 14) >>> 0) / 4294967296
    }
}
var A = c3(0),
    R4 = 0;

function u3() {
    let $ = c3(w4);
    R4 = 0, A = function() {
        return R4++, $()
    }
}(function() {
    let $ = c3(0);
    A = function() {
        return R4++, $()
    }
})();
window._debugGetRngCallCount = () => R4;
var h = [],
    v0 = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    },
    H0 = null,
    l3 = null,
    P7 = null,
    l4 = null,
    _0 = [],
    b = [],
    l = null,
    X0 = null,
    R0 = [],
    a = 0,
    p0 = null,
    b0 = null,
    d0 = null,
    z4 = document.getElementById("game-bg-bug-count"),
    o0 = document.getElementById("game-bg-bug-num"),
    M3 = document.getElementById("game-bg-best-stroke"),
    G5 = document.getElementById("game-bg-best-stroke-num"),
    x0 = document.getElementById("game-bg-final-score-breakdown"),
    k3 = document.getElementById("game-bg-bug-label"),
    c = document.getElementById("game-bg-record-label"),
    F0 = document.getElementById("game-bg-new-record-banner"),
    V7 = document.getElementById("game-bg-version");
if (V7) V7.textContent = `v${O3}`;
var z0 = document.getElementById("game-bg-level-label");

function f7($) {
    if (!z0) return;
    z0.textContent = `Level ${$}`, z0.classList.remove("game-bg-level-pop"), z0.offsetWidth, z0.classList.add("game-bg-level-pop"), z7()
}
var W7 = {
        speedup: "\uD83D\uDC07 Faster bugs",
        slowdown: "\uD83D\uDC22 Slower bugs",
        big: "\uD83C\uDF44 Big bugs",
        small: "\uD83E\uDD0F Small bugs",
        time: "⏱️ Rewind time",
        magnet: "\uD83E\uDDF2 Magnet",
        mirror: "\uD83E\uDE9E Double tongue",
        spiral: "\uD83D\uDD04 Spiral move",
        wave: "\uD83C\uDF0A Wave move",
        scatter: "\uD83D\uDCA5 Scatter move",
        dizzy: "\uD83D\uDE35 Dizzy move",
        zigzag: "\uD83C\uDFC3 Zigzag move",
        wacky: "\uD83E\uDD2A Wacky move",
        ghost: "\uD83D\uDC7B Ghost mode",
        restless: "\uD83D\uDE24 Restless bugs",
        twitchy: "\uD83D\uDE35‍\uD83D\uDCAB Twitchy bugs",
        heart: "❤️ Heart formation",
        circle: "⭕ Circle formation",
        club: "♣️ Club formation",
        sparkle: "❇️ Sparkle formation",
        infinity: "♾️ Infinity formation",
        envelope: "✉️ Envelope formation",
        dollar: "\uD83D\uDCB2 Dollar formation",
        skull: "\uD83D\uDC80 30% bugs elimination",
        crossbones: "☠️ 50% bugs elimination",
        tongueslow: "\uD83D\uDC0C Slow tongue",
        tonguefast: "\uD83D\uDE1B Fast tongue"
    },
    s4 = document.getElementById("game-bg-event-labels");

function C3($, J, Z) {
    if (!$ || !s4) return;
    let Y = document.createElement("div");
    Y.className = "game-bg-event-label", Y.textContent = $, Y.style.left = `${J}px`, Y.style.top = `${Z}px`, s4.appendChild(Y), Y.addEventListener("animationend", () => Y.remove(), {
        once: !0
    })
}

function B7() {
    if (s4) s4.innerHTML = ""
}
var L3 = document.getElementById("game-bg-results"),
    Y4 = document.getElementById("game-bg-record-actions"),
    S4 = document.getElementById("game-bg-results-btn"),
    N4 = document.getElementById("game-bg-replay-btn"),
    G4 = document.getElementById("game-bg-save-replay-btn"),
    j1 = document.getElementById("game-bg-load-replay-btn"),
    R7 = document.getElementById("game-bg-load-replay-file"),
    T0 = document.getElementById("game-bg-high-score-btn"),
    g4 = "best_bugpoint_recording",
    Z4 = document.getElementById("game-bg-replay-badge"),
    x7 = document.getElementById("game-bg-tongue-msg"),
    F1 = document.getElementById("game-bg-head"),
    y3 = Array.from(F1.querySelectorAll("img")),
    O4 = 0,
    K7 = -1,
    H7 = document.querySelector("#game-bg-head-debug .spr img"),
    U1 = document.querySelector("#game-bg-head-debug .lbl"),
    j7 = Array.from({
        length: 25
    }, ($, J) => J / 24 * Math.PI);

function N1($) {
    let J = ($ + Math.PI / 2) % (2 * Math.PI);
    if (J < 0) J += 2 * Math.PI;
    let Z = J > Math.PI,
        Y = Z ? 2 * Math.PI - J : J,
        X = 0,
        q = 1 / 0;
    for (let j = 0; j < 25; j++) {
        let U = Math.abs(j7[j] - Y);
        if (U < q) X = j, q = U
    }
    let Q = Z && X !== 0 && X !== 24,
        V = j7[X],
        z = X % 8,
        K = X / 8 | 0,
        W = Q ? `scaleX(-1) rotate(${2*Math.PI-V-J}rad)` : `rotate(${J-V}rad)`;
    if (X !== K7) {
        O4 = 1 - O4;
        let j = y3[O4],
            U = y3[1 - O4];
        j.style.left = `-${z*128}px`, j.style.top = `-${K*128}px`, j.style.transformOrigin = `${z*128+64}px ${K*128+64}px`, j.style.transform = W, j.style.transition = "none", j.style.opacity = "1", U.style.transition = "opacity 100ms ease-out", U.style.opacity = "0", K7 = X
    } else y3[O4].style.transform = W;
    if (s) H7.style.left = `-${z*128}px`, H7.style.top = `-${K*128}px`, U1.textContent = `idx ${X}  row ${K}  col ${z}${Q?"  (mirror)":""}`
}

function G1($) {
    let J = document.createElement("div");
    J.className = "game-bg-score-pop", J.textContent = `+${$}`;
    let [Z, Y, X] = y.color.map((V) => Math.round(V * 255));
    J.style.color = `rgb(${Z},${Y},${X})`;
    let q = G7.getBoundingClientRect(),
        Q = o0.getBoundingClientRect();
    J.style.left = `${(Q.right-q.left)/U4+4}px`, J.style.top = `${(Q.top+Q.height/2-q.top)/U4}px`, G7.appendChild(J), J.addEventListener("animationend", () => J.remove())
}

function D1($) {
    o0.textContent = `${a}`
}
var A3 = 120000,
    I1 = 0.8,
    O1 = 40000;

function M1($) {
    return Math.max(O1, A3 * Math.pow(I1, Math.max(0, $ - 1)))
}
var C = 16.666666666666668,
    n0 = C,
    p = 0;
window.setGameTickDelay = ($) => {
    n0 = $, W4 = !1
};
window.getVNow = () => p;
window._debugGetRecording = () => w0;
var o4 = [];
window._debugGetCatchLog = () => o4.slice();
window._debugClearCatchLog = () => {
    o4.length = 0
};
var i4 = [];
window._debugGetCatchSnapshots = () => i4.slice();
window._debugClearCatchSnapshots = () => {
    i4.length = 0
};
var j0 = [];
window._debugGetStrokeLog = () => j0.slice();
window._debugClearStrokeLog = () => {
    j0.length = 0
};
w4 = Date.now() & 4294967295;
u3();
var M0 = 0,
    P3 = 0,
    E7 = 0,
    E0 = !1,
    I0 = !1,
    T7 = !1,
    m7 = !1,
    w7 = 0,
    k0 = 0,
    c0 = !1,
    m0 = 0,
    V4 = A3,
    r4 = !1,
    S7 = 0;
var J0 = !1,
    w0 = null,
    i0 = [],
    Q0 = [],
    W4 = !1,
    g3 = !1;

function n3() {
    for (let $ = 0; $ < 5; $++) A()
}
n3();
var x4 = ["spiral", "wave", "scatter", "dizzy", "zigzag", "wacky", "ghost"],
    U0 = new Set(["heart", "circle", "club", "sparkle", "infinity", "envelope", "dollar"]),
    s0 = !1,
    k1 = 0;
var L1 = !1,
    L0 = 0,
    A1 = 0.5,
    P1 = 0,
    f1 = 0,
    B1 = 0,
    K4 = !1,
    H4 = !1,
    R1 = 0,
    x1 = 0,
    D4 = 0,
    C4 = 0,
    L4 = !0;
var E1 = new Set,
    A4 = {
        speedup: 3,
        permanent: 20,
        time: 8,
        slowdown: 3,
        skull: 8,
        tonguepower: 5
    },
    C7 = 20,
    F7 = 1,
    T1 = 7,
    m1 = 0.3,
    U7 = 0.2,
    w1 = 0.15,
    N7 = 0.25,
    S1 = 0.25,
    u0 = 0,
    n = 0,
    J4 = [],
    s3 = null,
    o3 = 0,
    a4 = !1,
    f3 = null,
    i3 = 0,
    t4 = !1,
    j4 = null,
    B3 = 0,
    E4 = !1,
    y7 = 0,
    e4 = !1,
    $3 = null,
    J3 = !1,
    Z3 = null,
    Q3 = !1,
    X3 = null,
    q3 = !1,
    z3 = null,
    Y3 = !1,
    P4 = [],
    f4 = [],
    V3 = null,
    W3 = !1,
    K3 = [],
    B4 = 0;

function u($) {
    return B.some((J) => !J.dead && J.type === $)
}

function r3($ = !0) {
    if (u0++, n = 0, m0 = k, k0 = 0, V4 = M1(u0), $) f7(u0);
    s3 = x4[Math.floor(A() * x4.length)], o3 = F7 + Math.floor(A() * (T1 - F7 + 1)), a4 = !1;
    let J = A(),
        Z = A(),
        Y = A();
    e4 = !1;
    try {
        r0 = null
    } catch (x) {}
    try {
        S0 = null
    } catch (x) {}
    $3 = Z < m1 ? A4.time : null, J3 = !1, Z3 = Y < 0.3333333333333333 ? "restless" : Y < 0.6666666666666666 ? "twitchy" : null, Q3 = !1;
    let X = A();
    X3 = X < U7 ? "skull" : X < U7 + w1 ? "crossbones" : null, q3 = !1;
    let q = A();
    z3 = q < N7 ? "tongueslow" : q < N7 + S1 ? "tonguefast" : null, Y3 = !1;
    let Q = Math.floor(A() * 3),
        V = 3 + Math.floor(A() * 20),
        z = 3 + Math.floor(A() * 20),
        K = Math.floor(A() * 3),
        W = 3 + Math.floor(A() * 20),
        j = 3 + Math.floor(A() * 20);
    P4 = (Q === 0 ? [] : Q === 1 ? [V] : [V, z]).sort((x, E) => x - E), f4 = (K === 0 ? [] : K === 1 ? [W] : [W, j]).sort((x, E) => x - E);
    let U = A(),
        H = 2 + Math.floor(A() * 14);
    V3 = U < 0.5 ? H : null, W3 = !1;
    let N = 1 + Math.floor(A() * 3),
        L = 2 + Math.floor(A() * 17),
        O = 2 + Math.floor(A() * 17),
        M = 2 + Math.floor(A() * 17),
        R = [L];
    if (N >= 2) R.push(O);
    if (N >= 3) R.push(M);
    K3 = R.sort((x, E) => x - E), B4 = 0;
    let m = A(),
        G = 3 + Math.floor(A() * 16),
        D = A(),
        P = 3 + Math.floor(A() * 16);
    f3 = m < 0.5 ? "speedup" : "slowdown", i3 = G, t4 = !1, j4 = null, B3 = P, E4 = !1, y7 = D
}

function C1() {
    if (x4.some(($) => u($))) return !0;
    if (F && x4.includes(F.type) && k < F.expiresAtTick) return !0;
    return !1
}

function h7() {
    if (!a4 && n >= o3) {
        if (!C1()) Z0(s3);
        a4 = !0
    }
    if (!t4 && n >= i3) {
        if (!u("speedup") && !u("slowdown")) Z0(f3);
        t4 = !0
    }
    if (j4 && !E4 && n >= B3) {
        if (!u("speedup") && !u("slowdown")) Z0(j4);
        E4 = !0
    }
    if (Z3 && !Q3 && n >= A4.permanent) {
        if (!u("restless") && !u("twitchy")) Z0(Z3);
        Q3 = !0
    }
    while (B4 < K3.length && n >= K3[B4] && a >= C7) {
        if (J4.length === 0) J4 = [...U0], c7(J4);
        let $ = J4.shift();
        if (!u($)) Z0($);
        B4++
    }
    while (P4.length && n >= P4[0]) {
        if (!u("big")) Z0("big");
        P4.shift()
    }
    while (f4.length && n >= f4[0]) {
        if (!u("small")) Z0("small");
        f4.shift()
    }
    if (V3 != null && !W3 && n >= V3) {
        if (!u("magnet")) Z0("magnet");
        W3 = !0
    }
    if ($3 != null && !J3 && n >= $3) {
        if (!u("time")) Z0("time");
        J3 = !0
    }
    if (X3 && !q3 && n >= A4.skull) {
        if (!u("skull") && !u("crossbones")) Z0(X3);
        q3 = !0
    }
    if (z3 && !Y3 && n >= A4.tonguepower) {
        if (!u("tongueslow") && !u("tonguefast")) Z0(z3);
        Y3 = !0
    }
}

function a3() {
    E1 = new Set, L1 = !0, L0 = 0, K4 = !1, H4 = !1, D4 = 0, k1 = 0, P1 = 0, f1 = 0, B1 = 0, R1 = 0, x1 = 0, u0 = 0, J4 = [], r3(!1)
}
a3();
L3.classList.add("game-bg-visible");
M3.style.opacity = "0";
S4.addEventListener("click", () => {
    if (J0 = !1, n0 = C, Z4.classList.remove("game-bg-visible"), N4.style.display = "none", G4.style.display = "none", T0.style.display = "none", i0 = [], w4 = Date.now() & 4294967295, u3(), a = 0, p0 = null, b0 = null, d0 = null, D4 = 0, C4 = 0, L4 = !0, s0 = !1, o0.textContent = "0", E0 = !1, I0 = !1, k = 0, M0 = P3 = p, T7 = !1, m7 = !1, w7 = 0, S7 = 0, k0 = 0, c0 = !1, m0 = 0, V4 = A3, r4 = !1, n3(), a3(), z0) z0.classList.remove("game-bg-level-pop"), z0.textContent = "";
    if (B7(), c) c.classList.remove("game-bg-visible", "game-bg-new-record"), c.textContent = "";
    if (F0) F0.classList.remove("game-bg-visible");
    L3.classList.remove("game-bg-visible"), M3.style.opacity = "1", x0.textContent = "", x0.style.opacity = "0", k3.textContent = "bugs caught", z4.style.opacity = "0.4", A0.style.opacity = "1", z4.style.opacity = "0.4", F4(0), l = null, X0 = null, R0 = [], _0 = [], b = [], h = [], H0 = null, W0 = null, K0 = null, O0 = null, r0 = null, S0 = null, F = null, l0 = [], F3 = 0, U3 = 0, N3 = 0, x3 = 240, x7.classList.remove("game-bg-show"), B.length = R3;
    for (let $ of B) $.reset();
    $7(), l0 = []
});

function v7($) {
    if (!$) return !1;
    let J = typeof $.v === "string" ? $.v : "",
        [Z, Y] = J.split("."),
        [X, q] = O3.split(".");
    return Z === X && Y === q
}

function t3($) {
    if (!$) return;
    let J = !v7($);
    if (J) console.warn(`[replay] recording version "${$.v||"(unknown)"}" does not match current game ${O3} — playback may diverge.`);
    if (g3 = J, Z4) Z4.classList.toggle("game-bg-incompat", J);
    if (a = 0, p0 = null, b0 = null, d0 = null, D4 = 0, C4 = 0, L4 = !0, s0 = !1, o0.textContent = "0", E0 = !1, I0 = !1, T7 = !1, m7 = !1, w7 = 0, S7 = 0, k0 = 0, c0 = !1, m0 = 0, V4 = A3, r4 = !1, z0) z0.classList.remove("game-bg-level-pop"), z0.textContent = "";
    if (B7(), c) c.classList.remove("game-bg-visible", "game-bg-new-record"), c.textContent = "";
    if (F0) F0.classList.remove("game-bg-visible");
    L3.classList.remove("game-bg-visible"), M3.style.opacity = "1", x0.textContent = "", x0.style.opacity = "0", k3.textContent = "bugs caught", S4.style.display = "none", N4.style.display = "none", G4.style.display = "none", T0.style.display = "none", A0.style.opacity = "1", z4.style.opacity = "0.4", F4(0), l = X0 = null, R0 = [], _0 = [], b = [], h = [], H0 = null, W0 = K0 = O0 = r0 = S0 = F = null, l0 = [], F3 = U3 = N3 = 0, x3 = 240, x7.classList.remove("game-bg-show"), w4 = $.s, u3(), k = 0, n3(), a3(), B.length = R3;
    for (let Z of B) Z.reset();
    if ($7(), J0 = !0, Q0 = $.e.slice(), i0 = [], M0 = v3 = E7 = p, Z4.classList.add("game-bg-visible"), W4 = !1, Q0.length > 0 && Q0[0].tick > 30) n0 = 0, W4 = !0
}
N4.addEventListener("click", () => t3(w0));
var y1 = document.getElementById("game-bg-replay-stop-btn");
y1?.addEventListener("click", () => {
    if (J0 = !1, n0 = C, W4 = !1, g3 = !1, Q0 = [], l = X0 = null, R0 = [], _0 = [], b = [], h = [], H0 = null, Z4.classList.remove("game-bg-visible"), Z4.classList.remove("game-bg-incompat"), I0 = !0, E0 = !0, p0 = a, b0 = D4, d0 = C4, F4(1), z4.style.opacity = "1", M3.style.opacity = "0", S4.style.display = "none", N4.style.display = "none", G4.style.display = "none", T0.style.display = "none", Y4) Y4.style.visibility = "hidden";
    if (F0) F0.classList.remove("game-bg-visible");
    if (c) c.classList.remove("game-bg-visible"), c.textContent = "";
    L3.classList.add("game-bg-visible"), d7(), A0.style.opacity = "0.25"
});
T0.addEventListener("click", () => {
    try {
        let $ = localStorage.getItem(g4);
        if (!$) return;
        let J = JSON.parse($);
        if (J && J.recording) t3(J.recording)
    } catch ($) {}
});
G4.addEventListener("click", () => {
    if (!w0) return;
    let $ = new Blob([JSON.stringify(w0)], {
            type: "application/json"
        }),
        J = URL.createObjectURL($),
        Z = document.createElement("a");
    Z.href = J, Z.download = `replay-${w0.s}.json`, Z.click(), URL.revokeObjectURL(J)
});
j1?.addEventListener("click", () => R7?.click());
R7?.addEventListener("change", async ($) => {
    let J = $.target.files?.[0];
    if (!J) return;
    try {
        let Z = await J.text(),
            Y = JSON.parse(Z);
        if (Y && typeof Y.s === "number" && Array.isArray(Y.e)) t3(Y)
    } catch (Z) {}
    $.target.value = ""
});
(async function setupNewestReplayButton() {
    if (!Y4) return;
    let creditsBtn = document.getElementById("game-bg-credits-btn"),
        btn = document.createElement("button");
    btn.type = "button";
    btn.className = "game-bg-bundled-replay-btn";
    btn.textContent = "WATCH NEWEST";
    btn.disabled = true;
    Y4.insertBefore(btn, creditsBtn);
    let newestFile = null;
    try {
        let listRes = await fetch("./replays/");
        if (!listRes.ok) throw new Error(`directory listing HTTP ${listRes.status}`);
        let html = await listRes.text(),
            doc = new DOMParser().parseFromString(html, "text/html"),
            files = [...doc.querySelectorAll("a")]
                .map(a => a.getAttribute("href"))
                .filter(h => h && /^replay-.*\.json$/i.test(h));
        if (files.length === 0) throw new Error("no replay-*.json files in ./replays/");
        let withMtime = await Promise.all(files.map(async name => {
            let h = await fetch("./replays/" + name, { method: "HEAD" }),
                lm = h.headers.get("Last-Modified");
            return { name, mtime: lm ? Date.parse(lm) : 0 };
        }));
        withMtime.sort((a, b) => b.mtime - a.mtime);
        newestFile = withMtime[0].name;
        let seed = newestFile.replace(/^replay-/, "").replace(/\.json$/, "");
        btn.textContent = `WATCH NEWEST (${seed})`;
        btn.disabled = false
    } catch (err) {
        console.warn("[bundled-replay] could not find newest replay:", err);
        btn.textContent = "WATCH NEWEST (none found)"
    }
    btn.addEventListener("click", async () => {
        if (!newestFile) return;
        try {
            let res = await fetch("./replays/" + newestFile);
            if (!res.ok) throw new Error(`fetch HTTP ${res.status}`);
            let data = await res.json();
            if (!(data && typeof data.s === "number" && Array.isArray(data.e))) throw new Error("replay JSON missing s/e");
            t3(data)
        } catch (err) {
            console.warn("[bundled-replay] could not play replay:", err)
        }
    })
})();
(function setupAliveCounter() {
    let numEl = document.getElementById("game-bg-alive-num"),
        addedEl = document.getElementById("game-bg-alive-added"),
        lostEl = document.getElementById("game-bg-alive-lost"),
        meterEl = document.getElementById("game-bg-bug-meter"),
        meterFill = document.getElementById("game-bg-bug-meter-fill");
    if (!numEl || !addedEl || !lostEl) return;
    let lastDead = null,
        meterHot = false;

    function flash(el, text) {
        el.textContent = text;
        el.classList.remove("game-bg-alive-delta-show");
        void el.offsetWidth;
        el.classList.add("game-bg-alive-delta-show")
    }

    function updateMeter(alive) {
        if (!meterEl || !meterFill) return;
        let capped = alive > 99 ? 99 : alive;
        meterFill.style.height = `${(capped / 99) * 100}%`;
        if (capped >= 99) meterHot = true;
        else if (alive === 0) meterHot = false;
        meterEl.classList.toggle("game-bg-bug-meter-hot", meterHot)
    }

    function tick() {
        if (!Array.isArray(B)) {
            requestAnimationFrame(tick);
            return
        }
        if (lastDead === null) {
            lastDead = B.map((bug) => bug.dead);
            let initialAlive = 0;
            for (let bug of B)
                if (!bug.dead) initialAlive++;
            numEl.textContent = initialAlive;
            updateMeter(initialAlive);
            requestAnimationFrame(tick);
            return
        }
        let alive = 0,
            added = 0,
            lost = 0;
        for (let i = 0; i < B.length; i++) {
            let isDead = B[i].dead;
            if (!isDead) alive++;
            let wasDead = lastDead[i];
            if (wasDead === undefined) {
                if (!isDead) added++
            } else if (wasDead && !isDead) added++;
            else if (!wasDead && isDead) lost++
        }
        lastDead.length = B.length;
        for (let i = 0; i < B.length; i++) lastDead[i] = B[i].dead;
        numEl.textContent = alive;
        updateMeter(alive);
        if (added > 0) flash(addedEl, `+${added}`);
        if (lost > 0) flash(lostEl, `−${lost}`);
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
})();
(function setupEmojiAdvice() {
    let eventLabels = document.getElementById("game-bg-event-labels");
    if (!eventLabels || !eventLabels.parentElement) return;
    let container = document.createElement("div");
    container.id = "game-bg-advice-labels";
    container.setAttribute("aria-hidden", "true");
    eventLabels.parentElement.insertBefore(container, eventLabels.nextSibling);
    const formations = new Set(["heart", "circle", "club", "sparkle", "infinity", "envelope", "dollar"]),
        alwaysGrab = new Set(["big", "mirror", "magnet", "tonguefast", "ghost"]),
        alwaysAvoid = new Set(["speedup", "small", "tongueslow", "restless", "twitchy", "spiral", "wave", "scatter", "dizzy", "zigzag", "wacky"]);

    function adviceFor(bug) {
        let t = bug.type;
        if (t === "normal") return null;
        if (formations.has(t)) return { label: "GRAB", kind: "grab" };
        if (alwaysGrab.has(t)) return { label: "GRAB", kind: "grab" };
        if (alwaysAvoid.has(t)) return { label: "AVOID", kind: "avoid" };
        if (t === "time") {
            let elapsed = c0 ? Math.max(0, k - m0 + k0) * C : 0,
                frac = V4 > 0 ? elapsed / V4 : 0;
            return frac >= 0.5
                ? { label: "GRAB NOW", kind: "grab" }
                : { label: "NOT YET", kind: "wait" }
        }
        if (t === "slowdown") {
            return L0 > 0
                ? { label: "GRAB", kind: "grab" }
                : { label: "SKIP", kind: "skip" }
        }
        if (t === "skull" || t === "crossbones") {
            return F
                ? { label: "GRAB", kind: "grab" }
                : { label: "AVOID", kind: "avoid" }
        }
        return null
    }
    let nodes = new Map();

    function tick() {
        if (!Array.isArray(B)) {
            requestAnimationFrame(tick);
            return
        }
        let used = new Set();
        for (let i = 0; i < B.length; i++) {
            let bug = B[i];
            if (!bug || bug.dead || bug.attached) continue;
            let advice = adviceFor(bug);
            if (!advice) continue;
            let node = nodes.get(i);
            if (!node) {
                node = document.createElement("div");
                container.appendChild(node);
                nodes.set(i, node)
            }
            let cls = `game-bg-advice-label game-bg-advice-${advice.kind}`;
            if (node.className !== cls) node.className = cls;
            if (node.textContent !== advice.label) node.textContent = advice.label;
            node.style.left = `${bug.x}px`;
            node.style.top = `${bug.y}px`;
            used.add(i)
        }
        for (let [i, node] of nodes) {
            if (!used.has(i)) {
                node.remove();
                nodes.delete(i)
            }
        }
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
})();
var H3 = document.getElementById("game-bg-credits"),
    h1 = document.getElementById("game-bg-credits-btn"),
    v1 = document.getElementById("game-bg-credits-close");
h1?.addEventListener("click", () => {
    H3.classList.add("game-bg-credits-visible"), H3.setAttribute("aria-hidden", "false")
});
v1?.addEventListener("click", () => {
    H3.classList.remove("game-bg-credits-visible"), H3.setAttribute("aria-hidden", "true")
});
var _1 = document.getElementById("game-bg-game-container"),
    p1 = document.getElementById("game-bg-canvas-wrap"),
    G7 = document.getElementById("game-bg-game-ui"),
    _7 = document.getElementById("game-bg-time-sweep"),
    b1 = _7.querySelector("circle"),
    d1 = 2 * Math.PI * 324;

function F4($) {
    let J = Math.max(0, Math.min(1, $));
    b1.style.strokeDashoffset = String(d1 * (1 - J))
}
var T4 = document.getElementById("game-bg-gl-canvas"),
    A0 = document.getElementById("game-bg-bug-canvas"),
    y0 = document.getElementById("game-bg-ui-canvas"),
    f = T4.getContext("webgl2"),
    e = A0.getContext("2d"),
    T = y0.getContext("2d");
if (!f) throw document.body.innerHTML = '<p style="color:#f85149;padding:40px;font-family:system-ui">WebGL2 is not supported in this browser.</p>', new Error("WebGL2 unavailable");
var d = window.devicePixelRatio || 1,
    Q4 = document.createElement("canvas"),
    g = Q4.getContext("2d"),
    X4 = 640,
    c1 = 8,
    D7 = X4 + c1 * 2,
    u1 = 4,
    U4 = 1,
    o = X4,
    q0 = X4;

function p7() {
    let $ = Math.min(window.innerWidth, window.innerHeight);
    U4 = Math.min($, D7) / (D7 + u1 * 2), _1.style.transform = `translate(-50%, -50%) scale(${U4})`, o = X4, q0 = X4;
    let J = X4 * d;
    T4.width = J, T4.height = J, A0.width = J, A0.height = J, y0.width = J, y0.height = J, Q4.width = J, Q4.height = J, f.viewport(0, 0, J, J)
}
p7();
window.addEventListener("resize", p7);
var l1 = `#version 300 es
void main() {
  // IDs 0-3 map to the four corners of clip space [-1,+1]².
  vec2 p = vec2(float(gl_VertexID & 1),
                float((gl_VertexID >> 1) & 1)) * 2.0 - 1.0;
  gl_Position = vec4(p, 0.0, 1.0);
}`,
    g1 = `#version 300 es
precision highp float;

// One cubic Bézier segment: four control points (x, y, r).
// Coordinates are in physical pixels, WebGL y-up convention.
uniform vec3 u_p0, u_p1, u_p2, u_p3;

// Premultiplied-alpha stroke colour.
uniform vec4 u_color;

out vec4 fragColor;

// ── Bernstein squaring ────────────────────────────────────────────────────────
// Squares a degree-3 Bernstein polynomial with coefficients (a,b,c,d) and
// returns the 7 Bernstein coefficients of the resulting degree-6 polynomial.
//
// Derivation: the product of two Bernstein polynomials of degrees m and n has
// Bernstein coefficients  (f·g)_k = Σ_{i+j=k} C(m,i)·C(n,j)/C(m+n,k)·f_i·g_j
// For m=n=3 (squaring), this gives the exact coefficients below.
void bsq(float a, float b, float c, float d,
         out float g0, out float g1, out float g2, out float g3,
         out float g4, out float g5, out float g6) {
  g0 = a*a;
  g1 = a*b;
  g2 = 0.4*a*c + 0.6*b*b;
  g3 = 0.1*a*d + 0.9*b*c;
  g4 = 0.4*b*d + 0.6*c*c;
  g5 = c*d;
  g6 = d*d;
}

// ── Polynomial evaluation in Bernstein form ───────────────────────────────────
float eval6(float c0,float c1,float c2,float c3,float c4,float c5,float c6, float t) {
  float u=1.-t, u2=u*u, u3=u2*u, u4=u3*u, u5=u4*u, u6=u5*u;
  float         t2=t*t, t3=t2*t, t4=t3*t, t5=t4*t, t6=t5*t;
  return c0*u6 + 6.*c1*u5*t + 15.*c2*u4*t2 + 20.*c3*u3*t3
       + 15.*c4*u2*t4 + 6.*c5*u*t5 + c6*t6;
}

// Degree-5 evaluator — used for h′(t).
float eval5(float c0,float c1,float c2,float c3,float c4,float c5, float t) {
  float u=1.-t, u2=u*u, u3=u2*u, u4=u3*u, u5=u4*u;
  float         t2=t*t, t3=t2*t, t4=t3*t, t5=t4*t;
  return c0*u5 + 5.*c1*u4*t + 10.*c2*u3*t2 + 10.*c3*u2*t3
       + 5.*c4*u*t4 + c5*t5;
}

// Degree-4 evaluator — used for h″(t).
float eval4(float c0,float c1,float c2,float c3,float c4, float t) {
  float u=1.-t, u2=u*u, u3=u2*u, u4=u3*u;
  float         t2=t*t, t3=t2*t, t4=t3*t;
  return c0*u4 + 4.*c1*u3*t + 6.*c2*u2*t2 + 4.*c3*u*t3 + c4*t4;
}

// Cubic Bernstein evaluator — used to recover r(t) at the minimum.
float evalCubic(float a,float b,float c,float d, float t) {
  float u=1.-t;
  return u*u*u*a + 3.*u*u*t*b + 3.*u*t*t*c + t*t*t*d;
}

// ── Main ──────────────────────────────────────────────────────────────────────
void main() {
  vec2 px = gl_FragCoord.xy;   // this pixel (physical coords, y-up)

  // Δ = control_point − pixel  (offsets in each axis)
  float dx0=u_p0.x-px.x, dy0=u_p0.y-px.y;
  float dx1=u_p1.x-px.x, dy1=u_p1.y-px.y;
  float dx2=u_p2.x-px.x, dy2=u_p2.y-px.y;
  float dx3=u_p3.x-px.x, dy3=u_p3.y-px.y;

  // Square each component polynomial (degree 3 → degree 6, 7 coefficients).
  float hx0,hx1,hx2,hx3,hx4,hx5,hx6;
  bsq(dx0,dx1,dx2,dx3, hx0,hx1,hx2,hx3,hx4,hx5,hx6);

  float hy0,hy1,hy2,hy3,hy4,hy5,hy6;
  bsq(dy0,dy1,dy2,dy3, hy0,hy1,hy2,hy3,hy4,hy5,hy6);

  float hr0,hr1,hr2,hr3,hr4,hr5,hr6;
  bsq(u_p0.z,u_p1.z,u_p2.z,u_p3.z, hr0,hr1,hr2,hr3,hr4,hr5,hr6);

  // h(t) = Δx(t)² + Δy(t)² − r(t)²   — 7 Bernstein coefficients.
  float h0=hx0+hy0-hr0, h1=hx1+hy1-hr1, h2=hx2+hy2-hr2,
        h3=hx3+hy3-hr3, h4=hx4+hy4-hr4, h5=hx5+hy5-hr5,
        h6=hx6+hy6-hr6;

  // ── Convex hull early-out ─────────────────────────────────────────────────
  // The Bernstein convex hull property: the range of a Bernstein polynomial
  // on [0,1] lies within the convex hull of its coefficients.
  // → If all 7 coefficients are positive, h(t) > 0 everywhere: discard.
  if (h0>0. && h1>0. && h2>0. && h3>0. && h4>0. && h5>0. && h6>0.) discard;

  // ── Build derivative Bernstein coefficients ───────────────────────────────
  // Bernstein derivative formula: h′ has degree n−1 with coeff n·(c_{i+1}−c_i).
  float dh0=6.*(h1-h0), dh1=6.*(h2-h1), dh2=6.*(h3-h2),
        dh3=6.*(h4-h3), dh4=6.*(h5-h4), dh5=6.*(h6-h5);

  // Second derivative (needed for Newton step).
  float ddh0=5.*(dh1-dh0), ddh1=5.*(dh2-dh1), ddh2=5.*(dh3-dh2),
        ddh3=5.*(dh4-dh3), ddh4=5.*(dh5-dh4);

  // ── Newton minimisation ───────────────────────────────────────────────────
  // Find the global minimum of h on [0,1].
  // Strategy: seed from 9 evenly-spaced starting points, run 4 Newton steps
  // on each (Newton's method applied to h′ = 0, i.e. minimising h), then
  // keep the result with the lowest h value.
  float minH = 1.0e10;
  float tMin = 0.5;

  for (int seed = 0; seed <= 8; seed++) {
    float t = float(seed) * 0.125;   // 0, 0.125, 0.25 … 1.0

    for (int iter = 0; iter < 4; iter++) {
      float grad = eval5(dh0,dh1,dh2,dh3,dh4,dh5, t);   // h′(t)
      float hess = eval4(ddh0,ddh1,ddh2,ddh3,ddh4, t);   // h″(t)
      if (abs(hess) < 1.0e-5) break;
      t = clamp(t - grad / hess, 0.0, 1.0);
    }

    float val = eval6(h0,h1,h2,h3,h4,h5,h6, t);
    if (val < minH) { minH = val; tMin = t; }
  }

  // ── Signed distance & anti-aliasing ──────────────────────────────────────
  // Near the stroke boundary (dist ≈ r):
  //   h(t*) = dist² − r² = (dist−r)(dist+r) ≈ 2r·(dist−r)
  //   → signed distance from boundary ≈ h(t*) / (2·r(t*))
  // Negative means inside, positive means outside.
  float rAtT  = evalCubic(u_p0.z, u_p1.z, u_p2.z, u_p3.z, tMin);
  float sdist = minH / (2.0 * max(rAtT, 0.5));

  // Smooth transition over ±1 physical pixel (sub-CSS-pixel on HiDPI screens).
  float alpha = 1.0 - smoothstep(-1.0, 1.0, sdist);
  if (alpha < 0.004) discard;

  // Premultiplied alpha output; use blendFunc(ONE, ONE_MINUS_SRC_ALPHA).
  float a = u_color.a * alpha;
  fragColor = vec4(u_color.rgb * a, a);
}`;

function b7($, J) {
    let Z = f.createShader($);
    if (f.shaderSource(Z, J), f.compileShader(Z), !f.getShaderParameter(Z, f.COMPILE_STATUS)) throw new Error(`Shader error:
` + f.getShaderInfoLog(Z));
    return Z
}
var Y0 = f.createProgram();
f.attachShader(Y0, b7(f.VERTEX_SHADER, l1));
f.attachShader(Y0, b7(f.FRAGMENT_SHADER, g1));
f.linkProgram(Y0);
if (!f.getProgramParameter(Y0, f.LINK_STATUS)) throw new Error(`Program link error:
` + f.getProgramInfoLog(Y0));
var h0 = {
    p0: f.getUniformLocation(Y0, "u_p0"),
    p1: f.getUniformLocation(Y0, "u_p1"),
    p2: f.getUniformLocation(Y0, "u_p2"),
    p3: f.getUniformLocation(Y0, "u_p3"),
    color: f.getUniformLocation(Y0, "u_color")
};
f.bindVertexArray(f.createVertexArray());
f.enable(f.BLEND);
f.blendFunc(f.ONE, f.ONE_MINUS_SRC_ALPHA);

function n1($, J, Z, Y) {
    let X = $ / Math.max(J - 1, 1),
        q = Y * (1 - X) + Z * X,
        Q = 2,
        V = 0.1;
    if (X < 0.1) return 2 + (q - 2) * (X / 0.1);
    return q
}

function s1($) {
    let J = $.length;
    if (J < 2) return [];
    let Z = (q, Q, V) => ({
        x: q.x + (Q.x - q.x) * V,
        y: q.y + (Q.y - q.y) * V,
        r: q.r + (Q.r - q.r) * V
    });
    if (J === 2) return [{
        b0: $[0],
        b1: Z($[0], $[1], 0.3333333333333333),
        b2: Z($[0], $[1], 0.6666666666666666),
        b3: $[1]
    }];
    let Y = $.slice(0, -1).map((q, Q) => Z(q, $[Q + 1], 0.5)),
        X = [];
    X.push({
        b0: $[0],
        b1: Z($[0], Y[0], 0.3333333333333333),
        b2: Z($[0], Y[0], 0.6666666666666666),
        b3: Y[0]
    });
    for (let q = 0; q < J - 2; q++) {
        let Q = Y[q],
            V = $[q + 1],
            z = Y[q + 1];
        X.push({
            b0: Q,
            b1: Z(Q, V, 0.6666666666666666),
            b2: Z(z, V, 0.6666666666666666),
            b3: z
        })
    }
    return X.push({
        b0: Y[J - 2],
        b1: Z(Y[J - 2], $[J - 1], 0.3333333333333333),
        b2: Z(Y[J - 2], $[J - 1], 0.6666666666666666),
        b3: $[J - 1]
    }), X
}

function I7($, J) {
    let Z = (U, H) => ({
            x: U.x + (H.x - U.x) * J,
            y: U.y + (H.y - U.y) * J,
            r: U.r + (H.r - U.r) * J
        }),
        {
            b0: Y,
            b1: X,
            b2: q,
            b3: Q
        } = $,
        V = Z(Y, X),
        z = Z(X, q),
        K = Z(q, Q),
        W = Z(V, z),
        j = Z(z, K);
    return {
        b0: Y,
        b1: V,
        b2: W,
        b3: Z(W, j)
    }
}

function d4($) {
    return [$.x * d, T4.height - $.y * d, $.r * d]
}

function o1($, J) {
    T.beginPath(), T.moveTo(J[0].b0.x, J[0].b0.y);
    for (let Z of J) T.bezierCurveTo(Z.b1.x, Z.b1.y, Z.b2.x, Z.b2.y, Z.b3.x, Z.b3.y);
    if (T.strokeStyle = "rgba(255,255,255,0.55)", T.lineWidth = 1.5, T.setLineDash([]), T.stroke(), $.length >= 2) {
        T.beginPath(), T.moveTo($[0].x, $[0].y);
        for (let Z = 1; Z < $.length; Z++) T.lineTo($[Z].x, $[Z].y);
        T.strokeStyle = "rgba(255,255,255,0.35)", T.lineWidth = 1, T.setLineDash([4, 6]), T.stroke(), T.setLineDash([]);
        for (let Z = 0; Z < $.length - 1; Z++) {
            let Y = ($[Z].x + $[Z + 1].x) / 2,
                X = ($[Z].y + $[Z + 1].y) / 2;
            T.beginPath(), T.arc(Y, X, 3, 0, Math.PI * 2), T.strokeStyle = "rgba(255,255,255,0.60)", T.lineWidth = 1.5, T.stroke()
        }
    }
    if (y.showAnchors) i1($)
}

function i1($) {
    let [J, Z, Y] = y.color, X = `rgb(${Math.round(J*255)},${Math.round(Z*255)},${Math.round(Y*255)})`;
    for (let q = 0; q < $.length; q++) {
        let {
            x: Q,
            y: V
        } = $[q], z = q === 0 || q === $.length - 1, K = z ? 6 : 4.5;
        T.beginPath(), T.arc(Q, V, K, 0, Math.PI * 2), T.fillStyle = z ? "#ffffff" : X, T.fill(), T.strokeStyle = "rgba(0,0,0,0.5)", T.lineWidth = 1.5, T.stroke()
    }
}
var R3 = 3,
    r1 = 55,
    j3 = r1 * 1.5;
class e3 {
    constructor($ = "normal") {
        this.type = $, this.reset()
    }
    reset() {
        let $ = o / 2,
            J = A() * Math.PI * 2;
        this.x = $ + ($ + 10) * Math.cos(J), this.y = $ + ($ + 10) * Math.sin(J), this.prevX = this.x, this.prevY = this.y, this.ang = Math.atan2($ - this.y, $ - this.x) + (A() - 0.5) * 0.5, this.speed = 18 + A() * 14, this.paused = !1, this.pauseTimer = 0, this.pauseTimerTick = 0, this.speedTimer = 600 + A() * 800, this.speedTimerTick = k + Math.round(this.speedTimer / C), this.turnTimer = 400 + A() * 600, this._pickTurnRate(), this.attached = !1, this.attachT = 0, this.dead = !1, this.speedMult = 1
    }
    _pickSpeed() {
        let $ = A(),
            J = K4 ? 0.1 : 0.15,
            Z = K4 ? 0.6 : 0.3;
        if ($ < J) this.speed = 0, this.paused = !0, this.pauseTimer = 300 + A() * 800, this.pauseTimerTick = k + Math.round(this.pauseTimer / C);
        else if ($ < Z) this.speed = 60 + A() * 80, this.paused = !1;
        else this.speed = 8 + A() * 22, this.paused = !1;
        let Y = H4 ? 100 + A() * 200 : 400 + A() * 1200;
        this.speedTimer = Y, this.speedTimerTick = k + Math.round(this.speedTimer / C)
    }
    _pickTurnRate() {
        let $ = Math.PI * 1.2;
        this.omega = (A() * 2 - 1) * $;
        let J = H4 ? 50 + A() * 150 : 200 + A() * 800;
        this.turnTimer = J, this.turnTimerTick = k + Math.round(this.turnTimer / C)
    }
    update($, J) {
        if (this.prevX = this.x, this.prevY = this.y, this._wackyScaleTarget !== void 0) this._wackyScale = (this._wackyScale ?? 1) + (this._wackyScaleTarget - (this._wackyScale ?? 1)) * Math.min($ * 7, 1);
        if (this.paused) {
            if (this.pauseTimer -= $ * 1000, k >= this.pauseTimerTick) this._pickSpeed();
            return
        }
        if (this.speedTimer -= $ * 1000, k >= this.speedTimerTick) this._pickSpeed();
        if (this.turnTimer -= $ * 1000, k >= this.turnTimerTick) this._pickTurnRate();
        let Z = o / 2,
            Y = Z,
            X = Z,
            q = this.x - Y,
            Q = this.y - X,
            V = Math.sqrt(q * q + Q * Q) + 0.000001;
        if (this.ang += this.omega * $, this._initialFrozen) return;
        let z = (1 + L0 * (L0 + 1) / 2 * A1) * y.bugSpeedMult;
        if (!(this._spawnProtectTick && k < this._spawnProtectTick) && F && k < F.expiresAtTick && z > 0) {
            let H = o / 2,
                N = H,
                L = H,
                O = this.x - N,
                M = this.y - L,
                R = Math.sqrt(O * O + M * M) + 0.000001,
                m = (J - F.startTime) / 1000;
            if (F.type === "spiral") {
                let D = Math.atan2(M, O) + 0.12 * $;
                this.x = N + R * Math.cos(D), this.y = L + R * Math.sin(D), this.ang = D + Math.PI / 2
            } else if (F.type === "wave") {
                let G = Math.atan2(M, O),
                    D = Math.sin(G - 2.2 * m) * 75;
                this.x += Math.cos(G) * D * $, this.y += Math.sin(G) * D * $, this.x += Math.cos(this.ang) * this.speed * this.speedMult * z * $, this.y += Math.sin(this.ang) * this.speed * this.speedMult * z * $
            } else if (F.type === "scatter") {
                let D = Math.cos(m * 1 * Math.PI * 2) * 240 * Math.exp(-0.7 * m),
                    P = Math.atan2(M, O);
                this.x += Math.cos(P) * D * $, this.y += Math.sin(P) * D * $, this.x += Math.cos(this.ang) * this.speed * 0.4 * z * $, this.y += Math.sin(this.ang) * this.speed * 0.4 * z * $
            } else if (F.type === "dizzy") {
                this._dizzyAngle += (this._dizzyDir || 1) * 2 * $;
                let G = this._dizzyR || 15,
                    D = this._dizzyOx !== void 0 ? this._dizzyOx : N,
                    P = this._dizzyOy !== void 0 ? this._dizzyOy : L;
                this.x = D + G * Math.cos(this._dizzyAngle || 0), this.y = P + G * Math.sin(this._dizzyAngle || 0), this.ang = (this._dizzyAngle || 0) + Math.PI / 2 * (this._dizzyDir || 1)
            } else if (F.type === "wacky") this.x += Math.cos(this.ang) * this.speed * this.speedMult * z * $, this.y += Math.sin(this.ang) * this.speed * this.speedMult * z * $;
            else if (F.type === "zigzag") {
                let G = this._zigGroup || 0,
                    P = (F.zigAngle || 0) + (G === 1 ? Math.PI : 0) - this.ang;
                while (P > Math.PI) P -= Math.PI * 2;
                while (P < -Math.PI) P += Math.PI * 2;
                this.ang += P * 5 * $, this.x += Math.cos(this.ang) * this.speed * 3.6 * z * $, this.y += Math.sin(this.ang) * this.speed * 3.6 * z * $
            } else if (U0.has(F.type))
                if (this._formationSlot) {
                    let G = this._formationSlot;
                    if (k < F.holdStartTick) {
                        F.formationPhase = "assemble";
                        let D = G.x - this.x,
                            P = G.y - this.y,
                            x = Math.sqrt(D * D + P * P);
                        if (x < 2) this.x = G.x, this.y = G.y;
                        else {
                            let E = Math.min(x * 3, 400);
                            this.x += D / x * E * $, this.y += P / x * E * $, this.ang = Math.atan2(P, D)
                        }
                    } else if (k < F.returnStartTick) F.formationPhase = "hold", this.x = G.x, this.y = G.y;
                    else {
                        let D = this._formationScatter || G,
                            P = D.x - this.x,
                            x = D.y - this.y,
                            E = Math.sqrt(P * P + x * x);
                        if (E < 2) this.x = D.x, this.y = D.y;
                        else {
                            let v = Math.min(E * 3, 400);
                            this.x += P / E * v * $, this.y += x / E * v * $, this.ang = Math.atan2(x, P)
                        }
                    }
                } else this.x += Math.cos(this.ang) * this.speed * this.speedMult * z * $, this.y += Math.sin(this.ang) * this.speed * this.speedMult * z * $
        } else this.x += Math.cos(this.ang) * this.speed * this.speedMult * z * $, this.y += Math.sin(this.ang) * this.speed * this.speedMult * z * $;
        let W = this.x - Y,
            j = this.y - X,
            U = Math.sqrt(W * W + j * j) + 0.000001;
        if (U > Z - 2) {
            let H = (Z - 2) / U;
            this.x = Y + W * H, this.y = X + j * H;
            let N = W / U,
                L = j / U,
                O = Math.cos(this.ang) * N + Math.sin(this.ang) * L;
            if (O > 0) this.ang = Math.atan2(Math.sin(this.ang) - 2 * O * L, Math.cos(this.ang) - 2 * O * N)
        }
        if (U < j3) {
            let H = j3 / U;
            this.x = Y + W * H, this.y = X + j * H;
            let N = W / U,
                L = j / U,
                O = Math.cos(this.ang) * N + Math.sin(this.ang) * L;
            if (O < 0) this.ang = Math.atan2(Math.sin(this.ang) - 2 * O * L, Math.cos(this.ang) - 2 * O * N)
        }
    }
    draw($, J) {
        let Z = u7() * (this._wackyScale ?? 1);
        $.save(), $.translate(this.x * J, this.y * J);
        let Y = this._spawnProtectTick && k < this._spawnProtectTick ? 1 - (this._spawnProtectTick - k) / 6 : 1,
            X = 1;
        if (F && F.type === "ghost" && k < F.expiresAtTick) {
            let W = p - F.startTime;
            X = 0.01 + 0.99 * ((Math.sin(W * Math.PI * 2 / 3000) + 1) / 2)
        }
        $.globalAlpha = Y * (Z > 1 ? 0.82 : 1) * X;
        let q = x4.includes(this.type),
            Q = s0 || F && U0.has(F.type) && k < F.expiresAtTick;
        if (this.type !== "normal" && !Q) {
            $.save();
            let W = (Math.sin(p * Math.PI / 1000) + 1) / 2;
            $.globalAlpha = (Z > 1 ? 0.82 : 1) * 0.85 * W * X, $.font = `${18*J}px serif`, $.textAlign = "center", $.textBaseline = "bottom";
            let j = this.type === "slowdown" ? "\uD83D\uDC22" : this.type === "big" ? "\uD83C\uDF44" : this.type === "small" ? "\uD83E\uDD0F" : this.type === "speedup" ? "\uD83D\uDC07" : this.type === "time" ? "⏱️" : this.type === "magnet" ? "\uD83E\uDDF2" : this.type === "mirror" ? "\uD83E\uDE9E" : this.type === "spiral" ? "\uD83D\uDD04" : this.type === "wave" ? "\uD83C\uDF0A" : this.type === "scatter" ? "\uD83D\uDCA5" : this.type === "dizzy" ? "\uD83D\uDE35" : this.type === "zigzag" ? "\uD83C\uDFC3" : this.type === "wacky" ? "\uD83E\uDD2A" : this.type === "ghost" ? "\uD83D\uDC7B" : this.type === "heart" ? "❤️" : this.type === "circle" ? "⭕" : this.type === "club" ? "♣️" : this.type === "sparkle" ? "❇️" : this.type === "restless" ? "\uD83D\uDE24" : this.type === "twitchy" ? "\uD83D\uDE35‍\uD83D\uDCAB" : this.type === "infinity" ? "♾️" : this.type === "envelope" ? "✉️" : this.type === "dollar" ? "\uD83D\uDCB2" : this.type === "skull" ? "\uD83D\uDC80" : this.type === "crossbones" ? "☠️" : this.type === "tongueslow" ? "\uD83D\uDC0C" : this.type === "tonguefast" ? "\uD83D\uDE1B" : "❓";
            $.fillText(j, 0, -5 * J), $.restore()
        }
        $.rotate(this.ang);
        let V = 5 * J * Z,
            z = 2.5 * J * Z,
            K = $.createLinearGradient(-V, 0, V, 0);
        K.addColorStop(0, D0.bugLight), K.addColorStop(1, D0.bugDark), $.beginPath(), $.ellipse(0, 0, V, z, 0, 0, Math.PI * 2), $.fillStyle = K, $.fill(), $.restore()
    }
}
var k = 0,
    B = Array.from({
        length: R3
    }, () => new e3("normal"));

function d7() {
    let $ = () => {
        if (p0 === null) {
            setTimeout($, 50);
            return
        }
        let J = p0 + b0 * 3 + d0 * 4;
        k3.textContent = "bugpoints earned";
        let Z = 900,
            Y = performance.now();
        (function X(q) {
            let Q = Math.min((q - Y) / Z, 1);
            if (o0.textContent = Math.round(Q * J), Q < 1) requestAnimationFrame(X);
            else {
                if (!g3) {
                    let K = [`${p0} bugs`];
                    if (b0 > 0) K.push(`${b0} in multibug stroke × 3`);
                    if (d0 > 0) K.push(`${d0} emoji bugs × 4`);
                    x0.innerHTML = K.join("<br>+<br>"), x0.style.opacity = "1"
                } else x0.innerHTML = "", x0.style.opacity = "0";
                if (Y4) Y4.style.visibility = "";
                S4.style.display = "";
                let V = null,
                    z = !1;
                try {
                    let K = localStorage.getItem(g4),
                        W = K ? JSON.parse(K) : null;
                    if (W && typeof W.score === "number") V = W.score
                } catch (K) {}
                if (w0) {
                    if (N4.style.display = "", G4.style.display = "", !J0 && (V === null || J > V)) {
                        z = !0;
                        try {
                            localStorage.setItem(g4, JSON.stringify({
                                score: J,
                                recording: w0
                            }))
                        } catch (K) {}
                    }
                }
                try {
                    let K = localStorage.getItem(g4);
                    if (K) {
                        let W = JSON.parse(K),
                            j = v7(W?.recording);
                        T0.style.display = "", T0.disabled = !j, T0.title = j ? "" : "Saved recording was made on a different build version — cannot be played."
                    }
                } catch (K) {}
                if (!J0) {
                    if (z) {
                        if (F0) F0.classList.add("game-bg-visible");
                        if (c) c.textContent = "", c.classList.remove("game-bg-visible")
                    } else if (V !== null && c) c.textContent = `The best is ${V}`, c.classList.add("game-bg-visible")
                }
            }
        })(performance.now())
    };
    $()
}

function $7() {
    let $ = o / 2,
        J = q0 / 2,
        Z = Math.PI / 6,
        Y = -Math.PI / 6,
        X = [200, 240, 290];
    for (let q = 0; q < R3; q++) {
        let Q = B[q],
            V = Y + q * Z,
            z = X[q];
        Q.type = "normal", Q.dead = !1, Q.attached = !1, Q._spawnProtectTick = 0, Q.x = $ + Math.cos(V) * z, Q.y = J + Math.sin(V) * z, Q.prevX = Q.x, Q.prevY = Q.y, Q.ang = V + Math.PI, Q.speed = 18 + A() * 14, Q.paused = !1, Q._initialFrozen = !0
    }
}
$7();
var v3 = 0,
    F3 = 0,
    U3 = 0,
    N3 = 0,
    x3 = 240,
    n4 = null,
    W0 = null,
    K0 = null,
    O0 = null,
    r0 = null,
    S0 = null,
    F = null,
    l0 = [];

function c7($) {
    for (let J = $.length - 1; J > 0; J--) {
        let Z = Math.floor(A() * (J + 1));
        [$[J], $[Z]] = [$[Z], $[J]]
    }
}

function u7() {
    if (W0) {
        if (k < W0.expiresAtTick) return 1.5;
        W0 = null
    }
    if (K0) {
        if (k < K0.expiresAtTick) return 0.6;
        K0 = null
    }
    return 1
}

function O7($, J) {
    let Z = o / 2,
        Y = q0 / 2,
        X = Math.cos(2 * J),
        q = Math.sin(2 * J),
        Q = (V) => {
            let z = V.x - Z,
                K = V.y - Y;
            return {
                x: Z + z * X + K * q,
                y: Y + z * q - K * X,
                r: V.r
            }
        };
    return {
        b0: Q($.b0),
        b1: Q($.b1),
        b2: Q($.b2),
        b3: Q($.b3)
    }
}

function a1($) {
    if ($.length < 2) return 0;
    let J = o / 2,
        Z = q0 / 2,
        Y = 0;
    for (let X = 1; X < $.length; X++) {
        let q = Math.atan2($[X - 1].y - Z, $[X - 1].x - J),
            V = Math.atan2($[X].y - Z, $[X].x - J) - q;
        while (V > Math.PI) V -= 2 * Math.PI;
        while (V < -Math.PI) V += 2 * Math.PI;
        Y += Math.abs(V)
    }
    return Y
}

function q4($, J) {
    let Z = Math.min($, 1) * J.length,
        Y = Math.min(Math.floor(Z), J.length - 1),
        X = Z - Y,
        q = J[Y],
        Q = 1 - X;
    return {
        x: Q * Q * Q * q.b0.x + 3 * Q * Q * X * q.b1.x + 3 * Q * X * X * q.b2.x + X * X * X * q.b3.x,
        y: Q * Q * Q * q.b0.y + 3 * Q * Q * X * q.b1.y + 3 * Q * X * X * q.b2.y + X * X * X * q.b3.y
    }
}

function l7($, J) {
    let Z = Math.min($, 0.9999) * J.length,
        Y = Math.min(Math.floor(Z), J.length - 1),
        X = Z - Y,
        q = J[Y],
        Q = 1 - X,
        V = 3 * (Q * Q * (q.b1.x - q.b0.x) + 2 * Q * X * (q.b2.x - q.b1.x) + X * X * (q.b3.x - q.b2.x)),
        z = 3 * (Q * Q * (q.b1.y - q.b0.y) + 2 * Q * X * (q.b2.y - q.b1.y) + X * X * (q.b3.y - q.b2.y));
    return Math.atan2(z, V)
}
var t1 = 5,
    V0 = 40,
    g0 = Math.ceil(o / V0),
    G3 = Math.ceil(q0 / V0);

function _3($, J, Z, Y, X) {
    let q = q4(J, $),
        Q = q4(Z, $),
        V = (J + Z) * 0.5,
        z = q4(V, $),
        K = (q.x + Q.x) * 0.5,
        W = (q.y + Q.y) * 0.5;
    if (Math.abs(z.x - K) + Math.abs(z.y - W) > Y && Z - J > 0.0001) _3($, J, V, Y, X), _3($, V, Z, Y, X);
    else X.push({
        x: Q.x,
        y: Q.y,
        t: Z
    })
}

function e1($, J) {
    let Z = $,
        Y = q4(0, J),
        X = [{
            x: Y.x,
            y: Y.y,
            t: 0
        }];
    _3(J, 0, Z, 3, X);
    let q = new Array(g0 * G3);
    for (let Q = 0; Q < X.length - 1; Q++) {
        let V = X[Q],
            z = X[Q + 1],
            K = Math.max(0, Math.floor(Math.min(V.x, z.x) / V0) - 1),
            W = Math.max(0, Math.floor(Math.min(V.y, z.y) / V0) - 1),
            j = Math.min(g0 - 1, Math.floor(Math.max(V.x, z.x) / V0) + 1),
            U = Math.min(G3 - 1, Math.floor(Math.max(V.y, z.y) / V0) + 1);
        for (let H = W; H <= U; H++)
            for (let N = K; N <= j; N++) {
                let L = H * g0 + N;
                if (!q[L]) q[L] = [];
                q[L].push(Q)
            }
    }
    return {
        polyline: X,
        grid: q
    }
}

function g7($, J, Z, Y, X, q) {
    let Q = X - Z,
        V = q - Y,
        z = Q * Q + V * V,
        K = 0;
    if (z > 0) K = Math.max(0, Math.min(1, (($ - Z) * Q + (J - Y) * V) / z));
    let W = Z + K * Q,
        j = Y + K * V;
    return {
        d2: ($ - W) * ($ - W) + (J - j) * (J - j),
        t: K
    }
}
var J7 = 0,
    Z7 = 0;

function $5($, J) {
    if (!J || J.length === 0 || $ <= 0) return;
    let Z = t1 * u7(),
        Y = s0 || F && U0.has(F.type) && k < F.expiresAtTick,
        X = e1($, J);
    n4 = X;
    let {
        polyline: q,
        grid: Q
    } = X, V = $;
    for (let z of B) {
        if (z.attached || z.dead) continue;
        if (z._spawnProtectTick && k < z._spawnProtectTick) continue;
        if (Y && z.type !== "normal") continue;
        let K = Math.floor(z.x / V0),
            W = Math.floor(z.y / V0),
            j = -1,
            U = new Set;
        $: for (let H = -1; H <= 1; H++)
            for (let N = -1; N <= 1; N++) {
                let L = K + N,
                    O = W + H;
                if (L < 0 || L >= g0 || O < 0 || O >= G3) continue;
                let M = Q[O * g0 + L];
                if (!M) continue;
                for (let R of M) {
                    if (U.has(R)) continue;
                    U.add(R);
                    let m = q[R],
                        G = q[R + 1],
                        D = (m.t + G.t) * 0.5,
                        P = V > 0 ? D / V : 0,
                        x = y.maxR * (1 - P) + y.minR * P,
                        E = Z + x + 4,
                        {
                            d2: v,
                            t
                        } = g7(z.x, z.y, m.x, m.y, G.x, G.y);
                    if (v <= E * E) {
                        j = m.t + t * (G.t - m.t);
                        break $
                    }
                }
            }
        if (j >= 0) {
            z.attached = !0, z.attachT = j / $, z._attachX = z.x, z._attachY = z.y;
            let H = 0;
            for (let M of B) {
                if (M === z || M.dead || M.attached) continue;
                H++
            }
            let N = a === 0 && !r4,
                L = H === 0 && a > 0;
            if (N || L) {
                if (N) r4 = !0;
                let M = L ? u0 + 1 : u0;
                f7(M)
            } else if (z.type !== "normal") _4("emoji", Z7++, z.x, z.y, q0);
            else _4("normal", J7++, z.x, z.y, q0);
            if (U0.has(z.type)) s0 = !0;
            let O = l7(j, J);
            for (let M = 0; M < 2; M++) {
                let R = O + (M === 0 ? 0.22 : -0.22);
                l0.push({
                    x: z.x,
                    y: z.y,
                    vx: Math.cos(R),
                    vy: Math.sin(R),
                    speed: 24,
                    size: 2.5,
                    spin: (M === 0 ? 1 : -1) * (Math.PI * 2.5 + Math.random() * Math.PI),
                    startTime: p,
                    duration: 450
                })
            }
        }
    }
}

function Z0($) {
    if (a < 3) return;
    let J = B.filter((Y) => !Y.dead && !Y.attached && Y.type === "normal");
    if (J.length === 0) return;
    let Z = J[Math.floor(A() * J.length)];
    Z.type = $
}

function M7($, J) {
    let Z = o / 2,
        Y = j3 + 10,
        X = Z - 10,
        q = 40,
        Q = 5,
        V = J && J.length ? J : null,
        z = new Array(5).fill(-1),
        K = new Array(5).fill(0),
        W = new Array(5).fill(0);
    for (let U = 0; U < 40; U++) {
        let H = A() * Math.PI * 2,
            N = Math.sqrt(Y * Y + A() * (X * X - Y * Y)),
            L = Z + N * Math.cos(H),
            O = Z + N * Math.sin(H),
            M = 1 / 0;
        for (let G of B) {
            if (G === $ || G.dead) continue;
            let D = G.x - L,
                P = G.y - O,
                x = D * D + P * P;
            if (x < M) M = x
        }
        let R = 1 / 0;
        if (V)
            for (let G = 0; G < V.length; G++) {
                let D = V[G].x - L,
                    P = V[G].y - O,
                    x = D * D + P * P;
                if (x < R) R = x
            }
        let m = Math.min(M, R);
        if (m > z[4]) {
            let G = 4;
            while (G > 0 && m > z[G - 1]) z[G] = z[G - 1], K[G] = K[G - 1], W[G] = W[G - 1], G--;
            z[G] = m, K[G] = L, W[G] = O
        }
    }
    let j = Math.floor(A() * 5);
    $.x = K[j], $.y = W[j], $.prevX = $.x, $.prevY = $.y, $.ang = A() * Math.PI * 2, $.type = "normal", $.dead = !1, $.attached = !1, $.speedMult = 1, $._initialFrozen = !1, $._wackyScale = 1, $._wackyScaleTarget = 1, $._dizzyR = void 0, $._dizzyDir = void 0, $._dizzyAngle = void 0, $._dizzyOx = void 0, $._dizzyOy = void 0, $._zigGroup = 0, $._formationSlot = null, $._formationHeld = !1, $._formationHoldUntil = 0, $._formationScatter = null, $.speed = 18 + A() * 14, $.paused = !1, $.pauseTimer = 0, $.pauseTimerTick = 0, $.speedTimer = 600 + A() * 800, $.speedTimerTick = k + Math.round($.speedTimer / C), $.turnTimer = 400 + A() * 600, $.turnTimerTick = k + Math.round($.turnTimer / C), $._pickTurnRate(), $._spawnProtectTick = k + 6
}

function D3($, J) {
    if ($ <= 0) return;
    let Z = 0;
    for (let Y of B) {
        if (Z >= $) break;
        if (Y.dead) M7(Y, J), Z++
    }
    while (Z < $) {
        let Y = new e3("normal");
        M7(Y, J), B.push(Y), Z++
    }
}

function n7() {
    let $ = B.filter((Z) => !Z.dead);
    c7($);
    let J = Math.ceil($.length / 2);
    $.slice(0, J).forEach((Z) => {
        Z._wackyScaleTarget = 1.8
    }), $.slice(J).forEach((Z) => {
        Z._wackyScaleTarget = 0.5
    })
}

function s7($) {
    let J = Math.cos($ + Math.PI / 2),
        Z = Math.sin($ + Math.PI / 2),
        Y = B.filter((X) => !X.dead && !X.attached);
    Y.sort((X, q) => X.x * J + X.y * Z - (q.x * J + q.y * Z)), Y.forEach((X, q) => {
        X._zigGroup = q % 2
    })
}

function J5($, J) {
    let Z = o / 2,
        Y = q0 / 2,
        X = [];
    if ($ === "heart") {
        let K = new Array(2000),
            W = new Array(2000),
            j = new Array(2000);
        for (let N = 0; N < 2000; N++) {
            let L = N / 1999 * Math.PI * 2 - Math.PI,
                O = 16 * Math.pow(Math.sin(L), 3),
                M = -(13 * Math.cos(L) - 5 * Math.cos(2 * L) - 2 * Math.cos(3 * L) - Math.cos(4 * L));
            K[N] = Z + O * 8.5, W[N] = Y + M * 8.5 - 10, j[N] = N === 0 ? 0 : j[N - 1] + Math.hypot(K[N] - K[N - 1], W[N] - W[N - 1])
        }
        let U = j[1999],
            H = 0;
        for (let N = 0; N < J; N++) {
            let L = N / J * U;
            while (H < 1998 && j[H + 1] < L) H++;
            let O = j[H + 1] - j[H],
                M = O > 0 ? (L - j[H]) / O : 0;
            X.push({
                x: K[H] + (K[H + 1] - K[H]) * M,
                y: W[H] + (W[H + 1] - W[H]) * M
            })
        }
    } else if ($ === "circle")
        for (let V = 0; V < J; V++) {
            let z = V / J * Math.PI * 2;
            X.push({
                x: Z + 200 * Math.cos(z),
                y: Y + 200 * Math.sin(z)
            })
        } else if ($ === "club")
            for (let V = 0; V < J; V++) {
                let z = V / J * 4,
                    K = Math.floor(z),
                    W = z - K,
                    j = K * Math.PI / 2,
                    U = j - Math.PI / 2 + W * Math.PI;
                X.push({
                    x: Z + 125 * Math.cos(j) + 125 * Math.cos(U),
                    y: Y + 125 * Math.sin(j) + 125 * Math.sin(U)
                })
            } else if ($ === "infinity") {
                let V = new Array(2000),
                    z = new Array(2000),
                    K = new Array(2000),
                    W = 200;
                for (let H = 0; H < 2000; H++) {
                    let N = H / 1999 * Math.PI * 2,
                        L = 1 + Math.sin(N) * Math.sin(N);
                    V[H] = Z + 200 * Math.cos(N) / L, z[H] = Y + 200 * Math.sin(N) * Math.cos(N) / L, K[H] = H === 0 ? 0 : K[H - 1] + Math.hypot(V[H] - V[H - 1], z[H] - z[H - 1])
                }
                let j = K[1999],
                    U = 0;
                for (let H = 0; H < J; H++) {
                    let N = H / J * j;
                    while (U < 1998 && K[U + 1] < N) U++;
                    let L = K[U + 1] - K[U],
                        O = L > 0 ? (N - K[U]) / L : 0;
                    X.push({
                        x: V[U] + (V[U + 1] - V[U]) * O,
                        y: z[U] + (z[U + 1] - z[U]) * O
                    })
                }
            } else if ($ === "envelope") {
        let K = Z - 130,
            W = Z + 130,
            j = Y - 85,
            U = Y + 85,
            H = [{
                x: K,
                y: j
            }, {
                x: W,
                y: j
            }, {
                x: W,
                y: U
            }, {
                x: K,
                y: U
            }, {
                x: K,
                y: j
            }, {
                x: K,
                y: j
            }, {
                x: Z,
                y: Y
            }, {
                x: W,
                y: j
            }],
            N = [],
            L = 0;
        for (let D = 1; D < H.length; D++) {
            let P = Math.hypot(H[D].x - H[D - 1].x, H[D].y - H[D - 1].y);
            N.push(P), L += P
        }
        let O = new Array(2000),
            M = new Array(2000),
            R = new Array(2000);
        for (let D = 0; D < 2000; D++) {
            let P = D / 1999 * L,
                x = 0,
                E = 0;
            while (E < N.length && x + N[E] < P) x += N[E], E++;
            let v = N[E] || 1,
                t = (P - x) / v;
            O[D] = H[E].x + (H[E + 1].x - H[E].x) * t, M[D] = H[E].y + (H[E + 1].y - H[E].y) * t, R[D] = D === 0 ? 0 : R[D - 1] + Math.hypot(O[D] - O[D - 1], M[D] - M[D - 1])
        }
        let m = R[1999],
            G = 0;
        for (let D = 0; D < J; D++) {
            let P = D / J * m;
            while (G < 1998 && R[G + 1] < P) G++;
            let x = R[G + 1] - R[G],
                E = x > 0 ? (P - R[G]) / x : 0;
            X.push({
                x: O[G] + (O[G + 1] - O[G]) * E,
                y: M[G] + (M[G + 1] - M[G]) * E
            })
        }
    } else if ($ === "dollar") {
        let z = Z,
            K = Y - 110,
            W = Z,
            j = Y + 110,
            U = new Array(2000),
            H = new Array(2000),
            N = new Array(2000);
        for (let M = 0; M < 2000; M++) {
            let R = M / 1999,
                m, G;
            if (R < 0.5) {
                let P = 0 + R * 2 * (Math.PI * 1.5);
                m = z + 110 * Math.cos(P), G = K - 110 * Math.sin(P)
            } else {
                let D = (R - 0.5) * 2,
                    P = Math.PI + D * (Math.PI * 1.5);
                m = W + 110 * Math.cos(P), G = j - 110 * Math.sin(P)
            }
            U[M] = m, H[M] = G, N[M] = M === 0 ? 0 : N[M - 1] + Math.hypot(U[M] - U[M - 1], H[M] - H[M - 1])
        }
        let L = N[1999],
            O = 0;
        for (let M = 0; M < J; M++) {
            let R = M / J * L;
            while (O < 1998 && N[O + 1] < R) O++;
            let m = N[O + 1] - N[O],
                G = m > 0 ? (R - N[O]) / m : 0;
            X.push({
                x: U[O] + (U[O + 1] - U[O]) * G,
                y: H[O] + (H[O + 1] - H[O]) * G
            })
        }
    } else if ($ === "sparkle") {
        let V = [{
            ox: Z + 160,
            oy: Y - 160,
            a0: Math.PI
        }, {
            ox: Z + 160,
            oy: Y + 160,
            a0: -Math.PI / 2
        }, {
            ox: Z - 160,
            oy: Y + 160,
            a0: 0
        }, {
            ox: Z - 160,
            oy: Y - 160,
            a0: Math.PI / 2
        }];
        for (let z = 0; z < J; z++) {
            let K = z / J * 4,
                W = Math.floor(K),
                j = K - W,
                U = V[W],
                H = U.a0 - j * Math.PI / 2;
            X.push({
                x: U.ox + 160 * Math.cos(H),
                y: U.oy + 160 * Math.sin(H)
            })
        }
    }
    let q = 290;
    if (X.length > 0) {
        let Q = Math.max(...X.map((V) => Math.hypot(V.x - Z, V.y - Y)));
        if (Q > 0) {
            let V = q / Q;
            for (let z of X) z.x = Z + (z.x - Z) * V, z.y = Y + (z.y - Y) * V
        }
    }
    return X
}

function r($) {
    let J = p;
    if (F && U0.has(F.type)) B.forEach((Z) => {
        Z._formationSlot = null, Z._formationHeld = !1, Z._formationHoldUntil = 0
    });
    if (B.forEach((Z) => {
            Z._wackyScaleTarget = 1
        }), F = {
            type: $,
            startTime: J,
            expiresAt: J + 7000,
            expiresAtTick: k + Math.round(7000 / C)
        }, $ === "ghost") F.expiresAt = J + 1e4, F.expiresAtTick = k + Math.round(1e4 / C);
    if ($ === "wacky") F.expiresAt = J + 6000, F.expiresAtTick = k + Math.round(6000 / C), F.wackyPhase = "split", F.wackyTicks = 0, F.wackyNextAt = 60, W0 = null, K0 = null, B.forEach((Z) => {
        Z._wackyScale = 1
    }), n7();
    if ($ === "zigzag") F.zigAngle = A() * Math.PI * 2, F.zigTicks = 0, F.zigNextAt = 90, s7(F.zigAngle);
    if ($ === "dizzy")
        for (let Z of B) {
            if (Z.dead || Z.attached) continue;
            Z._dizzyR = 12 + A() * 12, Z._dizzyDir = A() < 0.5 ? 1 : -1, Z._dizzyAngle = A() * Math.PI * 2, Z._dizzyOx = Z.x - Z._dizzyR * Math.cos(Z._dizzyAngle), Z._dizzyOy = Z.y - Z._dizzyR * Math.sin(Z._dizzyAngle)
        }
    if (U0.has($)) {
        let Z = Math.round(2000 / C),
            Y = Math.round(3000 / C);
        F.holdStartTick = k + Z, F.returnStartTick = k + Z + Y, F.expiresAtTick = F.returnStartTick + Z, F.expiresAt = J + 4000 + 5000, F.formationPhase = "assemble", W0 = null, K0 = null, O0 = null, r0 = null, S0 = null;
        let X = B.filter((K) => !K.dead && !K.attached);
        X.forEach((K) => {
            K._formationSlot = null, K._formationHeld = !1, K._formationHoldUntil = 0, K._formationScatter = null, K._wackyScale = 1, K._wackyScaleTarget = 1, K.speedMult = 1
        });
        let q = J5($, X.length),
            Q = new Array(q.length).fill(!1),
            V = X.map((K, W) => {
                let j = 1 / 0,
                    U = 0;
                for (let H = 0; H < q.length; H++) {
                    let N = Math.hypot(K.x - q[H].x, K.y - q[H].y);
                    if (N < j) j = N, U = H
                }
                return {
                    bi: W,
                    bestD: j,
                    bestS: U
                }
            });
        V.sort((K, W) => K.bestD - W.bestD);
        for (let {
                bi: K
            }
            of V) {
            let W = X[K],
                j = 1 / 0,
                U = -1;
            for (let H = 0; H < q.length; H++) {
                if (Q[H]) continue;
                let N = Math.hypot(W.x - q[H].x, W.y - q[H].y);
                if (N < j) j = N, U = H
            }
            if (U >= 0) W._formationSlot = q[U], Q[U] = !0
        }
        let z = o / 4;
        for (let K of X) {
            if (!K._formationSlot) continue;
            let W = A() * Math.PI * 2,
                j = A() * z;
            K._formationScatter = {
                x: K._formationSlot.x + Math.cos(W) * j,
                y: K._formationSlot.y + Math.sin(W) * j
            }
        }
        F.formationSlots = q
    }
}

function Z5() {
    if (F && U0.has(F.type) && F.formationPhase === "hold") {
        let I = Math.round(2000 / C);
        F.returnStartTick = k, F.expiresAtTick = k + I, F.expiresAt = p + 2000, F.formationPhase = "scatter"
    }
    let $ = [];
    for (let I of B)
        if (I.attached) $.push({
            x: I.x,
            y: I.y
        });
    let J = 0,
        Z = !1,
        Y = !1,
        X = !1,
        q = !1,
        Q = !1,
        V = !1,
        z = !1,
        K = !1,
        W = !1,
        j = !1,
        U = !1,
        H = !1,
        N = !1,
        L = !1,
        O = !1,
        M = !1,
        R = !1,
        m = !1,
        G = !1,
        D = !1,
        P = !1,
        x = !1,
        E = !1,
        v = !1,
        t = !1,
        a0 = !1,
        t0 = !1,
        N0 = [],
        G0 = null;
    for (let I of B)
        if (I.attached) {
            let i = I._attachX != null ? I._attachX : I.x,
                f0 = I._attachY != null ? I._attachY : I.y;
            if (I.type === "normal") G0 = {
                x: i,
                y: f0
            };
            else N0.push({
                type: I.type,
                x: i,
                y: f0
            });
            if (I.type === "heart") R = !0;
            if (I.type === "circle") m = !0;
            if (I.type === "club") G = !0;
            if (I.type === "sparkle") D = !0;
            if (I.type === "infinity") P = !0;
            if (I.type === "envelope") x = !0;
            if (I.type === "dollar") E = !0
        } let I4 = R || m || G || D || P || x || E || s0 || F && U0.has(F.type) && k < F.expiresAtTick;
    for (let I of B)
        if (I.attached) {
            let i = I.type === "skull" || I.type === "crossbones";
            if (I.dead = !0, I.attached = !1, !i) {
                if (J++, I.type !== "normal") C4++
            }
            if (!I4) {
                if (I.type === "speedup") Z = !0;
                if (I.type === "slowdown") Y = !0;
                if (I.type === "big") X = !0;
                if (I.type === "small") q = !0;
                if (I.type === "time") Q = !0;
                if (I.type === "magnet") V = !0;
                if (I.type === "mirror") z = !0;
                if (I.type === "spiral") j = !0;
                if (I.type === "wave") U = !0;
                if (I.type === "scatter") H = !0;
                if (I.type === "dizzy") N = !0;
                if (I.type === "zigzag") L = !0;
                if (I.type === "wacky") O = !0;
                if (I.type === "ghost") M = !0;
                if (I.type === "restless") K = !0;
                if (I.type === "twitchy") W = !0;
                if (I.type === "infinity") P = !0;
                if (I.type === "envelope") x = !0;
                if (I.type === "dollar") E = !0;
                if (I.type === "skull") v = !0;
                if (I.type === "crossbones") t = !0;
                if (I.type === "tongueslow") a0 = !0;
                if (I.type === "tonguefast") t0 = !0
            }
        } s0 = !1;
    let P0 = p;
    if (Z) L0++;
    if (Y) L0 = Math.max(0, L0 - 1);
    if (Y && f3 === "slowdown" && !j4 && y7 < 0.5 && B3 > n) j4 = "speedup", E4 = !1;
    if (X) {
        if (W0 = {
                expiresAt: P0 + 5000,
                expiresAtTick: k + Math.round(5000 / C)
            }, K0 = null, F && F.type === "wacky") F = null;
        B.forEach((I) => {
            I._wackyScaleTarget = 1, I._wackyScale = 1
        })
    }
    if (q) {
        if (K0 = {
                expiresAt: P0 + 5000,
                expiresAtTick: k + Math.round(5000 / C)
            }, W0 = null, F && F.type === "wacky") F = null;
        B.forEach((I) => {
            I._wackyScaleTarget = 1, I._wackyScale = 1
        })
    }
    if (Q) {
        let I = Math.max(0, k - m0 + k0);
        k0 -= Math.floor(I / 2)
    }
    if (V) O0 = {
        expiresAt: P0 + 3000,
        expiresAtTick: k + Math.round(3000 / C)
    };
    if (z) r0 = !0;
    if (j) r("spiral");
    if (U) r("wave");
    if (H) r("scatter");
    if (N) r("dizzy");
    if (L) r("zigzag");
    if (O) r("wacky");
    if (M) r("ghost");
    if (R) r("heart");
    if (m) r("circle");
    if (G) r("club");
    if (D) r("sparkle");
    if (P) r("infinity");
    if (x) r("envelope");
    if (E) r("dollar");
    if (K) K4 = !0;
    if (W) H4 = !0;
    if (a0 || t0) {
        let I = m0 + Math.round(V4 / C) + k0;
        S0 = {
            expiresAt: P0 + Math.max(0, I - k) * C,
            expiresAtTick: I,
            speedPxPerSec: a0 ? 1000 : 4000
        }
    }
    if ((v || t) && !I4) {
        let I = v ? 0.3 : 0.5,
            i = B.filter((S) => !S.dead && !S.attached && S.type !== "skull" && S.type !== "crossbones");
        for (let S = i.length - 1; S > 0; S--) {
            let y4 = Math.floor(A() * (S + 1));
            [i[S], i[y4]] = [i[y4], i[S]]
        }
        let f0 = Math.floor(I * i.length);
        for (let S = 0; S < f0; S++) i[S].dead = !0
    }
    let X7 = {
        speedup: Z,
        slowdown: Y,
        big: X,
        small: q,
        time: Q,
        magnet: V,
        mirror: z,
        spiral: j,
        wave: U,
        scatter: H,
        dizzy: N,
        zigzag: L,
        wacky: O,
        ghost: M,
        restless: K,
        twitchy: W,
        heart: R,
        circle: m,
        club: G,
        sparkle: D,
        infinity: P,
        envelope: x,
        dollar: E,
        tongueslow: a0,
        tonguefast: t0,
        skull: v,
        crossbones: t
    };
    if (J === 0 && (v || t)) {
        for (let I of N0)
            if (X7[I.type]) C3(W7[I.type], I.x, I.y)
    }
    if (J > 0) {
        if (J >= 3) D4 += J;
        if (i4.length < 80) i4.push({
            strokeIdx: o4.length,
            t: Math.round(P0 - M0),
            eaten: J,
            bugs: B.filter((S) => !S.dead).map((S) => ({
                x: +S.x.toFixed(2),
                y: +S.y.toFixed(2),
                type: S.type,
                attached: S.attached
            }))
        });
        if (j0.length < 500) j0.push({
            kind: "catch",
            vNow: P0,
            t: Math.round(P0 - M0),
            eaten: J
        });
        o4.push({
            t: Math.round(P0 - M0),
            eaten: J,
            total: a + J
        });
        let I = a === 0;
        if (a += J, !c0) c0 = !0, m0 = k;
        n += J;
        let i = a <= 50;
        if (i) x3 += J * 40;
        for (let S of N0)
            if (X7[S.type]) C3(W7[S.type], S.x, S.y);
        let f0 = B.filter((S) => !S.dead).length;
        if (i && !I && f0 !== 0 && N0.length === 0 && G0) C3("\uD83D\uDC45 Longer tongue", G0.x, G0.y);
        if (L4) {
            let S = Math.max(0, 99 - f0);
            if (D3(Math.min(J * 3, S), $), B.filter((y4) => !y4.dead).length >= 99) {
                if (L4 = !1, !e4 && !u("mirror")) Z0("mirror"), e4 = !0
            }
        } else if (f0 === 0) D3(3, $), L4 = !0, r3(!1);
        o0.textContent = `${a}`, G1(J), D1(J), F3++, U3 = 0, N3 = 0, h7()
    } else F3 = 0, U3++, N3++
}

function k7($, J, Z, Y = !1) {
    let X = Math.min(($ - v3) / 1000, 0.05);
    if (v3 = $, !B0) e.clearRect(0, 0, A0.width, A0.height);
    if (!B0 && F && U0.has(F.type) && k < F.expiresAtTick) {
        let Q = e,
            V = (Math.sin($ * Math.PI / 600) + 1) / 2,
            z = F.formationSlots;
        if (z && z.length > 1) {
            Q.save(), Q.scale(d, d), Q.globalAlpha = 0.13 + V * 0.07, Q.strokeStyle = "#ffffff", Q.lineWidth = 1.5, Q.setLineDash([4, 6]), Q.lineDashOffset = -$ * 0.04, Q.beginPath(), Q.moveTo(z[0].x, z[0].y);
            for (let K = 1; K < z.length; K++) Q.lineTo(z[K].x, z[K].y);
            Q.closePath(), Q.stroke(), Q.setLineDash([]), Q.restore()
        }
    }
    if (F && F.type === "wacky") {
        if (k >= F.expiresAtTick) {
            if (!F.cleanedUp) F.cleanedUp = !0, B.forEach((Q) => {
                Q._wackyScaleTarget = 1
            })
        } else if (!Y) {
            if (F.wackyTicks++, F.wackyTicks >= F.wackyNextAt)
                if (F.wackyPhase === "split") F.wackyPhase = "return", F.wackyNextAt += 30, B.forEach((Q) => {
                    Q._wackyScaleTarget = 1
                });
                else F.wackyPhase = "split", F.wackyNextAt += 60, n7()
        }
    }
    if (F && F.type === "zigzag" && k < F.expiresAtTick) {
        if (!Y) {
            if (F.zigTicks++, F.zigTicks >= F.zigNextAt) F.zigNextAt += 90, F.zigAngle = A() * Math.PI * 2, s7(F.zigAngle)
        }
    }
    if (!Y)
        if (Z && Z.length > 0 && J > 0) $5(J, Z);
        else n4 = null;
    for (let Q of B) {
        if (Q.dead) continue;
        if (Q.attached && Z && Z.length > 0 && J > 0) {
            let V = Q.attachT * J,
                z = q4(V, Z);
            Q.x = z.x, Q.y = z.y, Q.ang = l7(V, Z), Q.draw(e, d)
        } else {
            if (Q.attached) Q.attached = !1;
            if (O0 && k < O0.expiresAtTick) {
                let W = o / 2,
                    j = q0 / 2,
                    U = 35;
                if (!Y) {
                    let H = W - Q.x,
                        N = j - Q.y,
                        L = Math.hypot(H, N),
                        O = j3;
                    if (L > O) {
                        let M = Math.min(L - O, 35 * X);
                        Q.x += H / L * M, Q.y += N / L * M, Q.prevX = Q.x, Q.prevY = Q.y, Q.ang = Math.atan2(N, H)
                    }
                }
                if (Q.speedMult = 1, !B0) Q.draw(e, d);
                continue
            }
            let z = 28;
            if (!(Q._spawnProtectTick && k < Q._spawnProtectTick) && Z && Z.length > 0 && J > 0 && n4) {
                let W = z,
                    j = 1 / 0,
                    U = 0,
                    H = 0,
                    {
                        polyline: N,
                        grid: L
                    } = n4,
                    O = Math.ceil(W / V0) + 1,
                    M = Math.floor(Q.x / V0),
                    R = Math.floor(Q.y / V0);
                for (let m = -O; m <= O; m++)
                    for (let G = -O; G <= O; G++) {
                        let D = M + G,
                            P = R + m;
                        if (D < 0 || D >= g0 || P < 0 || P >= G3) continue;
                        let x = L[P * g0 + D];
                        if (!x) continue;
                        for (let E of x) {
                            let v = N[E],
                                t = N[E + 1],
                                {
                                    d2: a0
                                } = g7(Q.x, Q.y, v.x, v.y, t.x, t.y),
                                t0 = Math.sqrt(a0);
                            if (t0 < j) {
                                j = t0;
                                let N0 = t.x - v.x,
                                    G0 = t.y - v.y,
                                    E3 = N0 * N0 + G0 * G0,
                                    I4 = E3 > 0 ? Math.max(0, Math.min(1, ((Q.x - v.x) * N0 + (Q.y - v.y) * G0) / E3)) : 0;
                                U = v.x + I4 * N0, H = v.y + I4 * G0
                            }
                        }
                    }
                if (j < W) {
                    let m = 1 - j / W;
                    Q.speedMult = 1 - m * 0.85;
                    let D = Math.atan2(Q.y - H, Q.x - U) - Q.ang;
                    while (D > Math.PI) D -= Math.PI * 2;
                    while (D < -Math.PI) D += Math.PI * 2;
                    Q.ang += D * m * 0.6
                } else Q.speedMult = 1
            } else Q.speedMult = 1;
            if (!Y) Q.update(X, $);
            if (!B0) Q.draw(e, d)
        }
    }
    let q = !1;
    try {
        q = typeof s !== "undefined" && s
    } catch (Q) {}
    if (q && !Y && (!window._lastDensityLog || $ - window._lastDensityLog > 1000)) {
        let Q = {},
            V = 0;
        for (let W of B) {
            if (W.dead) continue;
            if (W.attached) V++;
            let j = Math.floor(W.x / 60) + "," + Math.floor(W.y / 60);
            Q[j] = (Q[j] || 0) + 1
        }
        let z = null,
            K = 0;
        for (let W in Q)
            if (Q[W] > K) K = Q[W], z = W;
        if (K >= 10) {
            window._lastDensityLog = $;
            let W = !!(O0 && k < O0.expiresAtTick);
            console.log("[cluster]", {
                t: Math.round($ - M0),
                densestBin: z,
                densestCount: K,
                attachedCount: V,
                activeMagnet: W,
                activeBehavior: F ? F.type : null,
                activeBehaviorPhase: F ? F.formationPhase || F.wackyPhase || null : null
            })
        }
    }
    if (l0 = l0.filter((Q) => $ - Q.startTime < Q.duration), !B0)
        for (let Q of l0) {
            let V = ($ - Q.startTime) / Q.duration,
                z = 1 - Math.pow(1 - V, 2),
                K = 1 - V * V,
                W = Q.speed * z,
                j = (Q.x + Q.vx * W) * d,
                U = (Q.y + Q.vy * W + V * V * 18) * d,
                H = Q.size * (1 - V * 0.15) * d;
            e.save(), e.globalAlpha = K, e.translate(j, U), e.rotate(Math.atan2(Q.vy, Q.vx) + V * (Q.spin || 0)), e.beginPath(), e.ellipse(0, 0, H, H * 0.5, 0, 0, Math.PI * 2), e.fillStyle = D0.bugLight, e.fill(), e.restore()
        }
}

function c4($) {
    f.uniform3fv(h0.p0, d4($.b0)), f.uniform3fv(h0.p1, d4($.b1)), f.uniform3fv(h0.p2, d4($.b2)), f.uniform3fv(h0.p3, d4($.b3)), f.drawArrays(f.TRIANGLE_STRIP, 0, 4)
}

function h3($, J, Z, Y = T) {
    if (Z - J < 2) return;
    Y.beginPath(), Y.moveTo($[J].x, $[J].y);
    for (let X = J + 1; X < Z; X++) Y.lineTo($[X].x, $[X].y);
    Y.strokeStyle = "rgba(128,128,128,0.4)", Y.lineWidth = 1.5, Y.setLineDash([5, 6]), Y.stroke(), Y.setLineDash([])
}
var p3 = null,
    o7 = null,
    b3 = [],
    I3 = [],
    d3 = !1;
window._debugGetInitSnapshot = () => p3;
window._debugGetReplayInitSnapshot = () => o7;
window._debugGetBugTrace = () => b3.slice();
window._debugGetBugTraceReplay = () => I3.slice();
window._debugStartTrace = () => {
    d3 = !0
};
window._debugClearBugTraceReplay = () => {
    I3.length = 0
};
window._debugResetTickCount = () => {
    k = 0
};

function Q5() {
    if (k++, k === 1) {
        let X = B.map((q) => ({
            x: +q.x.toFixed(3),
            y: +q.y.toFixed(3),
            ang: +q.ang.toFixed(4),
            speed: +q.speed.toFixed(3)
        }));
        if (!p3) p3 = X;
        else o7 = X
    }
    if (d3 && k <= 4200) {
        let X = B[0],
            q = B[1],
            Q = B[10] || B[0],
            z = F ? {
                spiral: 1,
                wave: 2,
                scatter: 3,
                dizzy: 4,
                wacky: 5,
                zigzag: 6
            } [F.type] || 9 : 0,
            K = F ? +((p - F.startTime) / 1000).toFixed(4) : 0,
            W = [k, +X.x.toFixed(4), +X.y.toFixed(4), +X.ang.toFixed(6), +X.omega.toFixed(6), X.attached ? 1 : 0, X.dead ? 1 : 0, +q.x.toFixed(4), +q.y.toFixed(4), q.attached ? 1 : 0, q.dead ? 1 : 0, +Q.x.toFixed(4), +Q.y.toFixed(4), Q.attached ? 1 : 0, Q.dead ? 1 : 0, 0, z, K, R4, +((p - M0) / 1000).toFixed(4)];
        if (!J0) b3.push(W);
        else I3.push(W)
    }
    let $ = d3 ? J0 ? I3 : b3 : null,
        J = p;
    if (J0 && !E0) {
        if (W4 && Q0.length > 0 && Q0[0].tick - k <= 6) n0 = C, W4 = !1;
        if (Q0.length > 0 && Q0[0].tick < k) {
            k--;
            while (Q0.length > 0 && Q0[0].tick < k + 1) {
                let X = Q0.shift();
                if (p = E7 + X.t, X.k === "d") i7(X.x, X.y);
                else if (X.k === "m") X5(X.x, X.y);
                else if (X.k === "u") r7(X.x, X.y)
            }
            k++
        }
        p = J
    }
    if (!I0) {
        if (c0) {
            let z = B.filter((W) => !W.dead).length,
                K = J0 && Q0.length === 0;
            if (z <= 1 && !K) m0++
        }
        let q = (c0 ? Math.max(0, k - m0 + k0) : 0) * C,
            Q = Math.min(1, Math.max(0, q / V4));
        F4(Q);
        let V = Math.max(0, V4 - q);
        if (c0 && V === 0 && !I0) {
            if (I0 = !0, !J0 && !s) w0 = {
                v: O3,
                s: w4,
                e: i0.slice()
            };
            if (F4(1), h.length > 0) {
                if (h.length <= 2) h.push(h[h.length - 1]);
                a7(h), h = []
            }
            if (z4.style.opacity = "1", M3.style.opacity = "0", S4.style.display = "none", N4.style.display = "none", G4.style.display = "none", T0.style.display = "none", Y4) Y4.style.visibility = "hidden";
            if (F0) F0.classList.remove("game-bg-visible");
            if (c) c.classList.remove("game-bg-visible"), c.textContent = "";
            L3.classList.add("game-bg-visible"), d7(), A0.style.opacity = "0.25", z4.style.opacity = "1"
        }
    }
    if (!E0 && I0 && !l && !X0 && R0.length === 0 && h.length === 0) E0 = !0, p0 = a, b0 = D4, d0 = C4, T.clearRect(0, 0, y0.width, y0.height), f.clearColor(0, 0, 0, 0), f.clear(f.COLOR_BUFFER_BIT);
    if (E0) {
        k7(J, 0, [], !0);
        return
    }
    let Z = 0,
        Y = 0;
    if (l) {
        if (!b4 && b.length > 0) {
            b4 = !0;
            let q = l.rawPts ?? [],
                Q = q.length >= 2 ? a1(q) : 0;
            if (K1(q, Q), q.length >= 2) {
                let V = q[q.length - 1],
                    z = q[0],
                    K = (V.x + z.x) / 2 - o / 2,
                    W = (V.y + z.y) / 2 - q0 / 2;
                S3(w3(Math.atan2(W, K)))
            } else S3(w3(H0 ?? 0))
        }
        let X = Math.min((k - l.startTick) * C / l.duration, 1);
        if (Z = 1 - Math.pow(1 - X, 1.5), Y = Z, b.length > 0 && Z > 0.15) {
            let q = q4(Math.min(Z, 0.999), b),
                Q = q.x - o / 2,
                V = q.y - q0 / 2;
            if (Q * Q + V * V > 64) S3(w3(Math.atan2(V, Q)))
        }
        if (X >= 1) X0 = {
            startTick: k,
            duration: l.duration * 1.8
        }, l = null, Z = 1, Y = 1
    } else if (X0) {
        let X = Math.min((k - X0.startTick) * C / X0.duration, 1);
        if (Z = 1 - Math.pow(X, 1.5), X >= 1)
            if (X0 = null, _0 = [], b = [], Z = 0, Z5(), R0.length > 0) {
                let q = R0.shift();
                if (H0 = q.angle, _0 = q.pts, b = q.segs, J7 = 0, Z7 = 0, l = {
                        startTick: k,
                        duration: q.duration,
                        rawPts: q.rawPts
                    }, j0.length < 500) j0.push({
                    kind: "dequeue",
                    vNow: J,
                    dur: +q.duration.toFixed(1)
                });
                Z = 0
            } else if (h.length > 0) H0 = l3;
        else H0 = null
    }
    if (b4 && !l && !X0) b4 = !1, H1();
    if ($ && $.length > 0) $[$.length - 1][15] = +Z.toFixed(6);
    if (k7(J, Z, b), B0) return;
    if (f.clearColor(0, 0, 0, 0), f.clear(f.COLOR_BUFFER_BIT), f.useProgram(Y0), f.uniform4fv(h0.color, y.color), b.length > 0 && Z > 0) {
        let X = Z * b.length,
            q = Math.floor(X),
            Q = X - q;
        for (let V = 0; V < q; V++) c4(b[V]);
        if (q < b.length && Q > 0.0001) c4(I7(b[q], Q));
        if (r0) {
            let V = H0 ?? 0,
                [z, K, W] = y.color;
            f.uniform4fv(h0.color, [z * 0.5, K * 0.5, W * 0.5, 0.5]), f.blendEquation(f.MAX), f.blendFunc(f.ONE, f.ONE);
            for (let j = 0; j < q; j++) c4(O7(b[j], V));
            if (q < b.length && Q > 0.0001) c4(O7(I7(b[q], Q), V));
            f.blendFunc(f.ONE, f.ONE_MINUS_SRC_ALPHA), f.blendEquation(f.FUNC_ADD), f.uniform4fv(h0.color, y.color)
        }
    }
    if (T.clearRect(0, 0, y0.width, y0.height), T.save(), T.scale(d, d), y.skeleton && b.length > 0) o1(_0, b);
    if (N1(H0 ?? Math.atan2(v0.y - window.innerHeight / 2, v0.x - window.innerWidth / 2)), h.length > 1) h3(h, 0, h.length);
    for (let X of R0) h3(X.rawPts, 0, X.rawPts.length);
    if (l && Y < 1) {
        let X = l.rawPts,
            q = Math.floor(Y * X.length);
        if (g.clearRect(0, 0, Q4.width, Q4.height), g.save(), g.scale(d, d), g.globalAlpha = 1 - Y, h3(X, 0, X.length, g), g.globalAlpha = 1, q >= 2) {
            g.globalCompositeOperation = "destination-out", g.beginPath(), g.moveTo(X[0].x, X[0].y);
            for (let Q = 1; Q < q; Q++) g.lineTo(X[Q].x, X[Q].y);
            g.strokeStyle = "rgba(0,0,0,1)", g.lineWidth = 6, g.setLineDash([]), g.stroke(), g.globalCompositeOperation = "source-over"
        }
        g.restore(), T.restore(), T.drawImage(Q4, 0, 0), T.save(), T.scale(d, d)
    }
    T.restore()
}
var B0 = !1;
(function $() {
    let J = n0 <= 1 ? 60 : 1;
    B0 = J > 1;
    for (let Z = 0; Z < J; Z++)
        if (p += C, Q5(), E0 && I0) break;
    B0 = !1, setTimeout($, n0)
})();
F4(0);

function Q7($, J) {
    let Z = T4.getBoundingClientRect();
    return {
        x: ($ - Z.left) / U4,
        y: (J - Z.top) / U4
    }
}

function i7($, J) {
    P7 = null, l4 = null, v0 = {
        x: $,
        y: J
    };
    let Z = Math.atan2(v0.y - window.innerHeight / 2, v0.x - window.innerWidth / 2);
    if (l3 = Z, !l && !X0) H0 = Z;
    let Y = Math.cos(Z),
        X = Math.sin(Z),
        q = o / 2,
        Q = q0 / 2;
    h = [{
        x: q + 50 * Y,
        y: Q + 50 * X
    }, {
        x: q + 70 * Y,
        y: Q + 70 * X
    }]
}

function X5($, J) {
    if (v0 = {
            x: $,
            y: J
        }, h.length > 0) h.push(Q7($, J))
}

function r7($, J) {
    if (h.length > 0) {
        if (h.length <= 2) h.push(Q7($, J));
        a7(h)
    }
    h = []
}
var m4 = ($, J) => $ && typeof $.closest === "function" ? $.closest(J) : null;
window.addEventListener("pointerdown", ($) => {
    if ($.preventDefault(), m4($.target, "#game-bg-debug-panel") || m4($.target, "#game-bg-debug-toggle")) return;
    if (z1(), !$.isPrimary || I0 || J0) return;
    if (!s) i0.push({
        k: "d",
        x: $.clientX,
        y: $.clientY,
        t: p - P3,
        tick: k
    });
    i7($.clientX, $.clientY)
});
window.addEventListener("pointermove", ($) => {
    if (m4($.target, "#game-bg-debug-panel")) return;
    if (!$.isPrimary || J0) return;
    if (v0 = {
            x: $.clientX,
            y: $.clientY
        }, h.length > 0) {
        if (!s) i0.push({
            k: "m",
            x: $.clientX,
            y: $.clientY,
            t: p - P3,
            tick: k
        });
        h.push(Q7($.clientX, $.clientY))
    }
});
window.addEventListener("pointerup", ($) => {
    if (m4($.target, "#game-bg-debug-panel") || m4($.target, "#game-bg-debug-toggle")) return;
    if (!$.isPrimary || J0) return;
    if (!s) i0.push({
        k: "u",
        x: $.clientX,
        y: $.clientY,
        t: p - P3,
        tick: k
    });
    r7($.clientX, $.clientY)
});

function q5($, J) {
    if ($.length < 2) return $;
    let Z = [{
        x: $[0].x,
        y: $[0].y
    }];
    for (let z = 1; z < $.length; z++) {
        let K = Z[z - 1];
        Z.push({
            x: K.x * J + $[z].x * (1 - J),
            y: K.y * J + $[z].y * (1 - J)
        })
    }
    let Y = Z.length,
        X = $[Y - 1],
        q = X.x - Z[Y - 1].x,
        Q = X.y - Z[Y - 1].y,
        V = Math.min(8, Y - 1);
    for (let z = 0; z < V; z++) {
        let K = (z + 1) / V,
            W = K * K;
        Z[Y - V + z].x += q * W, Z[Y - V + z].y += Q * W
    }
    return Z[Y - 1] = {
        x: X.x,
        y: X.y
    }, Z
}

function z5($) {
    return $.map((J, Z) => ({
        x: J.x,
        y: J.y,
        r: n1(Z, $.length, y.minR, y.maxR)
    }))
}

function Y5($) {
    let J = q5($, y.emaStrength);
    if (J.length > y.maxDrawPoints) {
        let Z = (J.length - 1) / (y.maxDrawPoints - 1);
        J = Array.from({
            length: y.maxDrawPoints
        }, (Y, X) => J[Math.min(Math.round(X * Z), J.length - 1)])
    }
    return J
}

function V5($, J) {
    if ($.length < 2) return $;
    let Z = 0,
        Y = [$[0]];
    for (let X = 1; X < $.length; X++) {
        let q = Math.hypot($[X].x - $[X - 1].x, $[X].y - $[X - 1].y);
        if (Z + q >= J) {
            let Q = (J - Z) / (q || 1);
            return Y.push({
                x: $[X - 1].x + Q * ($[X].x - $[X - 1].x),
                y: $[X - 1].y + Q * ($[X].y - $[X - 1].y)
            }), Y
        }
        Z += q, Y.push($[X])
    }
    return $
}

function W5($) {
    let J = [$[0]];
    for (let Y of $) {
        let X = J[J.length - 1];
        if (Math.hypot(Y.x - X.x, Y.y - X.y) >= y.strokeSpacing) J.push(Y)
    }
    let Z = $[$.length - 1];
    if (J[J.length - 1] !== Z) J.push(Z);
    return J
}

function a7($) {
    let Z = V5($, x3);
    if (P7 = Z, l4 = W5(Z), l4.length < 2) return;
    let Y = z5(Y5(l4)),
        X = s1(Y),
        q = 0;
    for (let z = 1; z < Z.length; z++) q += Math.hypot(Z[z].x - Z[z - 1].x, Z[z].y - Z[z - 1].y);
    let Q = S0 && k < S0.expiresAtTick ? S0.speedPxPerSec : y.revealSpeed,
        V = Math.max(80, q / Q * 1000);
    if (l || X0) {
        if (R0.push({
                pts: Y,
                segs: X,
                rawPts: Z.slice(),
                duration: V,
                angle: l3
            }), j0.length < 500) j0.push({
            kind: "queued",
            vNow: p,
            dur: +V.toFixed(1)
        })
    } else if (_0 = Y, b = X, J7 = 0, Z7 = 0, l = {
            startTick: k,
            duration: V,
            rawPts: Z.slice()
        }, j0.length < 500) j0.push({
        kind: "start",
        vNow: p,
        dur: +V.toFixed(1)
    })
}

function K5($) {
    let J = X1[$];
    D0.background = J.background, D0.headTip = J.headTip, D0.headBase = J.background, D0.bugLight = J.bugLight, D0.bugDark = J.bugDark, D0.bugAvg = J.bugAvg, p1.style.background = J.background;
    let Z = $ === "dark" ? "#fff" : "#000";
    o0.style.color = Z, k3.style.color = Z, _7.style.setProperty("--sweep-color", J.background)
}
var D5 = window.matchMedia("(prefers-color-scheme: dark)");
K5("light");
var s = !1;
if (__DEV__) {
    let Y = function(W) {
            window._debugLastAction = W;
            let j = p;
            switch (W) {
                case "speedup":
                    L0++;
                    break;
                case "slowdown":
                    L0 = Math.max(0, L0 - 1);
                    break;
                case "big":
                    if (W0 = {
                            expiresAt: j + 5000,
                            expiresAtTick: k + Math.round(5000 / C)
                        }, K0 = null, F && F.type === "wacky") F = null;
                    B.forEach((U) => {
                        U._wackyScaleTarget = 1, U._wackyScale = 1
                    });
                    break;
                case "small":
                    if (K0 = {
                            expiresAt: j + 5000,
                            expiresAtTick: k + Math.round(5000 / C)
                        }, W0 = null, F && F.type === "wacky") F = null;
                    B.forEach((U) => {
                        U._wackyScaleTarget = 1, U._wackyScale = 1
                    });
                    break;
                case "time":
                    M0 = Math.min(j, M0 + 1e4), k0 -= Math.min(600, k + k0);
                    break;
                case "magnet":
                    O0 = {
                        expiresAt: j + 5000,
                        expiresAtTick: k + Math.round(5000 / C)
                    };
                    break;
                case "mirror":
                    r0 = !0;
                    break;
                case "restless":
                    K4 = !K4;
                    break;
                case "twitchy":
                    H4 = !H4;
                    break;
                default:
                    r(W);
                    break
            }
            q()
        },
        q = function() {
            let W = document.getElementById("game-bg-debug-bug-count");
            if (W) W.textContent = `${X()} alive`
        },
        K = function() {
            z.textContent = y.revealSpeed
        },
        $ = document.getElementById("game-bg-debug-toggle"),
        J = document.getElementById("game-bg-debug-panel");
    $.style.display = "block";
    let Z = [{
        section: "Power-ups"
    }, {
        type: "speedup",
        emoji: "\uD83D\uDC07",
        label: "speed+"
    }, {
        type: "slowdown",
        emoji: "\uD83D\uDC22",
        label: "speed-"
    }, {
        type: "big",
        emoji: "\uD83C\uDF44",
        label: "big"
    }, {
        type: "small",
        emoji: "\uD83E\uDD0F",
        label: "small"
    }, {
        type: "time",
        emoji: "⏱️",
        label: "time"
    }, {
        type: "magnet",
        emoji: "\uD83E\uDDF2",
        label: "magnet"
    }, {
        type: "mirror",
        emoji: "\uD83E\uDE9E",
        label: "mirror"
    }, {
        type: "tongueslow",
        emoji: "\uD83D\uDC0C",
        label: "tongue-"
    }, {
        type: "tonguefast",
        emoji: "\uD83D\uDE1B",
        label: "tongue+"
    }, {
        section: "Hazards"
    }, {
        type: "skull",
        emoji: "\uD83D\uDC80",
        label: "skull"
    }, {
        type: "crossbones",
        emoji: "☠️",
        label: "crossbones"
    }, {
        section: "Behaviors"
    }, {
        type: "spiral",
        emoji: "\uD83D\uDD04",
        label: "spiral"
    }, {
        type: "wave",
        emoji: "\uD83C\uDF0A",
        label: "wave"
    }, {
        type: "scatter",
        emoji: "\uD83D\uDCA5",
        label: "scatter"
    }, {
        type: "dizzy",
        emoji: "\uD83D\uDE35",
        label: "dizzy"
    }, {
        type: "zigzag",
        emoji: "\uD83C\uDFC3",
        label: "zigzag"
    }, {
        type: "wacky",
        emoji: "\uD83E\uDD2A",
        label: "wacky"
    }, {
        type: "ghost",
        emoji: "\uD83D\uDC7B",
        label: "ghost"
    }, {
        section: "Formations"
    }, {
        type: "heart",
        emoji: "❤️",
        label: "heart"
    }, {
        type: "circle",
        emoji: "⭕",
        label: "circle"
    }, {
        type: "club",
        emoji: "♣️",
        label: "club"
    }, {
        type: "sparkle",
        emoji: "❇️",
        label: "sparkle"
    }, {
        type: "infinity",
        emoji: "♾️",
        label: "infinity"
    }, {
        type: "envelope",
        emoji: "✉️",
        label: "envelope"
    }, {
        type: "dollar",
        emoji: "\uD83D\uDCB2",
        label: "dollar"
    }, {
        section: "Permanent"
    }, {
        type: "restless",
        emoji: "\uD83D\uDE24",
        label: "restless"
    }, {
        type: "twitchy",
        emoji: "\uD83D\uDE35‍\uD83D\uDCAB",
        label: "twitchy"
    }];
    window._debugState = () => ({
        active: s,
        aliveCount: B.filter((W) => !W.dead).length,
        recordEventsCount: i0.length,
        lastAction: window._debugLastAction || null
    }), window._debugBugPositions = () => B.filter((W) => !W.dead && !W.attached).map((W) => ({
        x: W.x,
        y: W.y
    })), window._debugKillAll = () => B.forEach((W) => {
        W.dead = !0, W.attached = !1
    }), window._debugSpawn = (W) => D3(W), window._debugBeginPeriod = () => r3(), window._debugSimulateCatch = (W = 1) => {
        n += W, h7()
    }, window._debugPeriod = () => ({
        periodIndex: u0,
        periodCatches: n,
        behavior: {
            type: s3,
            target: o3,
            done: a4
        },
        formations: {
            milestones: K3.slice(),
            index: B4,
            unlockAt: C7,
            totalCaught: a
        },
        pace: {
            first: {
                type: f3,
                at: i3,
                done: t4
            },
            follow: {
                type: j4,
                at: B3,
                done: E4
            }
        },
        mirror: {
            done: e4,
            fireOn: "last respawn"
        },
        big: {
            milestones: P4.slice()
        },
        small: {
            milestones: f4.slice()
        },
        magnet: {
            target: V3,
            done: W3
        },
        time: {
            target: $3,
            done: J3
        },
        permanent: {
            type: Z3,
            target: A4.permanent,
            done: Q3
        },
        hazard: {
            type: X3,
            done: q3
        },
        tonguepower: {
            type: z3,
            done: Y3
        },
        formationQueueRemaining: J4.slice()
    });
    let X = () => B.filter((W) => !W.dead).length,
        Q = '<div class="game-bg-debug-header"><span>Debug</span><button class="game-bg-debug-close" id="game-bg-debug-close">&times;</button></div>',
        V = !1;
    for (let W of Z)
        if (W.section) {
            if (V) Q += "</div>";
            Q += `<div class="game-bg-debug-section">${W.section}</div><div class="game-bg-debug-grid">`, V = !0
        } else Q += `<button class="game-bg-debug-emoji-btn" data-debug-type="${W.type}"><span class="de">${W.emoji}</span><span class="dl">${W.label}</span></button>`;
    if (V) Q += "</div>";
    Q += '<div class="game-bg-debug-section">Bugs</div>', Q += `<div class="game-bg-debug-bug-row"><button class="game-bg-debug-bug-btn" id="game-bg-debug-bug-minus">&minus;</button><span id="game-bg-debug-bug-count">${X()} alive</span><button class="game-bg-debug-bug-btn" id="game-bg-debug-bug-plus">+</button></div>`, Q += '<div class="game-bg-debug-hint">Hold Shift for &times;10</div>', Q += '<div class="game-bg-debug-section">Tongue speed</div>', Q += `<div class="game-bg-debug-bug-row"><button class="game-bg-debug-bug-btn" id="game-bg-debug-speed-minus">&minus;</button><span id="game-bg-debug-speed-val">${y.revealSpeed}</span><button class="game-bg-debug-bug-btn" id="game-bg-debug-speed-plus">+</button></div>`, Q += '<div class="game-bg-debug-hint">px/s (default 4000)</div>', J.innerHTML = Q, $.addEventListener("click", () => {
        if (s = !s, J.classList.toggle("game-bg-debug-visible", s), document.body.classList.toggle("game-bg-debug-open", s), $.textContent = s ? "Debug (on)" : "Debug", s) q()
    }), document.getElementById("game-bg-debug-close").addEventListener("click", () => {
        s = !1, J.classList.remove("game-bg-debug-visible"), document.body.classList.remove("game-bg-debug-open"), $.textContent = "Debug"
    });
    for (let W of J.querySelectorAll(".game-bg-debug-emoji-btn")) W.addEventListener("click", () => {
        let j = W.dataset.debugType;
        if (j) Y(j)
    });
    document.getElementById("game-bg-debug-bug-plus").addEventListener("click", (W) => {
        let j = W.shiftKey ? 10 : 1;
        D3(j), q()
    }), document.getElementById("game-bg-debug-bug-minus").addEventListener("click", (W) => {
        let j = W.shiftKey ? 10 : 1,
            U = 0;
        for (let H = B.length - 1; H >= 0 && U < j; H--)
            if (!B[H].dead && !B[H].attached) B[H].dead = !0, U++;
        q()
    });
    let z = document.getElementById("game-bg-debug-speed-val");
    document.getElementById("game-bg-debug-speed-plus").addEventListener("click", (W) => {
        y.revealSpeed += W.shiftKey ? 5000 : 1000, K()
    }), document.getElementById("game-bg-debug-speed-minus").addEventListener("click", (W) => {
        y.revealSpeed = Math.max(500, y.revealSpeed - (W.shiftKey ? 5000 : 1000)), K()
    }), setInterval(() => {
        if (s) q()
    }, 250)
}

//# debugId=4E8D783CC26BCDB364756E2164756E21
//# sourceMappingURL=bugpoint.js.map