// using moment js to display time in header on desktop view

function updateClock() {
    var theTime = moment().format('LT');
    $('#clock').html(theTime);
};

updateClock();
setInterval(function () {
    updateClock();
}, 1000);

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $("div.menu").toggleClass("menu-clicked");
    });
});



var resizeTimer;

function resizeFunction() {
    var viewportWidth = $(window).width();

    if (viewportWidth > 1000) {
        $("div.menu").removeClass("menu-clicked");
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open');
    }
};


$(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeFunction, 450);
});



$(window).resize(function () {
    var viewportWidth = $(window).width();

    if (viewportWidth > 1000) {
        $("div.menu").removeClass("menu-clicked");
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open');
    }
});

$("a.about").on("click", function () {

    $("div.about-me").toggleClass("about-me-clicked");

});

$("a.about-2").on("click", function () {

    $("div.about-me").toggleClass("about-me-clicked");
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
    $("div.menu").toggleClass("menu-clicked");
});

$("a.menu-link-2").on("click", function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
    $("div.menu").toggleClass("menu-clicked");
});

$("#about-close").on("click", function () {

    $("div.about-me").toggleClass("about-me-clicked");
});

// waves

! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports._vantaEffect = e() : t._vantaEffect = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        var e = {};

        function i(s) {
            if (e[s]) return e[s].exports;
            var o = e[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }
        return i.m = t, i.c = e, i.d = function (t, e, s) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: s
            })
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (i.r(s), Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(s, o, function (e) {
                    return t[e]
                }.bind(null, o));
            return s
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 15)
    }({
        0: function (t, e, i) {
            "use strict";

            function s(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }

            function o() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600
            }
            i.d(e, "c", function () {
                return s
            }), i.d(e, "d", function () {
                return o
            }), i.d(e, "h", function () {
                return n
            }), i.d(e, "g", function () {
                return r
            }), i.d(e, "f", function () {
                return h
            }), i.d(e, "e", function () {
                return a
            }), i.d(e, "a", function () {
                return c
            }), i.d(e, "b", function () {
                return l
            }), Number.prototype.clamp = function (t, e) {
                return Math.min(Math.max(this, t), e)
            };
            const n = t => t[Math.floor(Math.random() * t.length)];

            function r(t, e) {
                return null == t && (t = 0), null == e && (e = 1), t + Math.random() * (e - t)
            }

            function h(t, e) {
                return null == t && (t = 0), null == e && (e = 1), Math.floor(t + Math.random() * (e - t + 1))
            }
            var a = t => document.querySelector(t);
            const c = t => "number" == typeof t ? "#" + ("00000" + t.toString(16)).slice(-6) : t,
                l = (t, e = 1) => {
                    const i = c(t),
                        s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
                        o = s ? {
                            r: parseInt(s[1], 16),
                            g: parseInt(s[2], 16),
                            b: parseInt(s[3], 16)
                        } : null;
                    return "rgba(" + o.r + "," + o.g + "," + o.b + "," + e + ")"
                }
        },
        1: function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return n
            });
            var s = i(0);
            const o = "object" == typeof window;
            o && !window.VANTA && (window.VANTA = {
                version: "0.3.1"
            });
            const n = o && window.VANTA || {};
            n.register || (n.register = (t, e) => (n[t] = t => new e(t), n[t]));
            var r = function () {
                return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments)
            };
            n.VantaBase = class {
                constructor(t = {}) {
                    if (!o) return !1;
                    var e, i, h, a;
                    if (n.current = this, this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this), this.options = Object(s.c)({}, this.defaultOptions), t instanceof HTMLElement || "string" == typeof t ? Object(s.c)(this.options, {
                            el: t
                        }) : Object(s.c)(this.options, t), this.el = this.options.el, null == this.el) r('Instance needs "el" param!');
                    else if (!(this.options.el instanceof HTMLElement || (a = this.el, this.el = Object(s.e)(a), this.el))) return void r("Cannot find element", a);
                    for (h = 0; h < this.el.children.length; h++) e = this.el.children[h], "static" === getComputedStyle(e).position && (e.style.position = "relative"), "auto" === getComputedStyle(e).zIndex && (e.style.zIndex = 1);
                    "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative"), "object" == typeof THREE && this.initThree(), this.setSize(), this.uniforms = {
                        u_time: {
                            type: "f",
                            value: 1
                        },
                        u_resolution: {
                            type: "v2",
                            value: new THREE.Vector2(1, 1)
                        },
                        u_mouse: {
                            type: "v2",
                            value: new THREE.Vector2(0, 0)
                        }
                    };
                    try {
                        this.init()
                    } catch (t) {
                        return i = t, r("Init error"), r(i), this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(s.a)(this.options.backgroundColor)))
                    }
                    window.addEventListener("resize", this.resize), this.resize(), this.animationLoop(), this.el.addEventListener("mousemove", this.onMouseMoveWrapper, !1), window.addEventListener("scroll", this.onMouseMoveWrapper)
                }
                applyCanvasStyles(t, e = {}) {
                    Object(s.c)(t.style, {
                        position: "absolute",
                        zIndex: 0,
                        top: 0,
                        left: 0,
                        background: ""
                    }), Object(s.c)(t.style, e), t.classList.add("vanta-canvas")
                }
                initThree() {
                    this.renderer = new THREE.WebGLRenderer({
                        alpha: !0,
                        antialias: !0
                    }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new THREE.Scene
                }
                onMouseMoveWrapper(t) {
                    var e, i, s;
                    e = this.renderer.domElement.getBoundingClientRect(), i = this.mouseX = t.clientX - e.left, s = this.mouseY = t.clientY - e.top, i >= 0 && s >= 0 && !this.options.mouseEase && this.triggerMouseMove(i, s)
                }
                triggerMouseMove(t, e) {
                    this.uniforms && (this.uniforms.u_mouse.value.x = t / this.scale, this.uniforms.u_mouse.value.y = e / this.scale);
                    const i = t / this.width,
                        s = e / this.height;
                    "function" == typeof this.onMouseMove && this.onMouseMove(i, s)
                }
                setSize() {
                    this.scale || (this.scale = 1), Object(s.d)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = this.el.offsetWidth || window.innerWidth, this.height = this.el.offsetHeight || window.innerHeight
                }
                resize() {
                    var t, e;
                    this.setSize(), null != (t = this.camera) && (t.aspect = this.width / this.height), null != (e = this.camera) && "function" == typeof e.updateProjectionMatrix && e.updateProjectionMatrix(), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize()
                }
                animationLoop() {
                    var t, e, i, s, o, n, r, h;
                    return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += null != (n = this.options.speed) ? n : 1, this.uniforms && (this.uniforms.u_time.value = .016667 * this.t2), t = this.el.offsetHeight, e = this.el.getBoundingClientRect(), h = null != (r = window.pageYOffset) ? r : (document.documentElement || document.body.parentNode || document.body).scrollTop, s = (o = e.top + h) - window.innerHeight, i = o + t, this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX = this.mouseEaseX + .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY = this.mouseEaseY + .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), s <= h && h <= i && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update()), this.req = window.requestAnimationFrame(this.animationLoop)
                }
                restart() {
                    if (this.scene)
                        for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
                    "function" == typeof this.onRestart && this.onRestart(), this.init()
                }
                init() {
                    "function" == typeof this.onInit && this.onInit()
                }
                destroy() {
                    "function" == typeof this.onDestroy && this.onDestroy(), this.el.removeEventListener("mousemove", this.onMouseMoveWrapper), window.removeEventListener("scroll", this.onMouseMoveWrapper), window.removeEventListener("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null)
                }
            }, e.b = n.VantaBase
        },
        15: function (t, e, i) {
            "use strict";
            i.r(e);
            var s = i(1),
                o = i(0);
            class n extends s.b {
                static initClass() {
                    this.prototype.ww = 100, this.prototype.hh = 80, this.prototype.waveNoise = 4
                }
                getMaterial() {
                    const t = {
                        color: this.options.color,
                        shininess: this.options.shininess,
                        flatShading: !0,
                        vertexColors: THREE.FaceColors,
                        side: THREE.DoubleSide
                    };
                    return new THREE.MeshPhongMaterial(t)
                }
                onInit() {
                    let t, e;
                    const i = this.getMaterial(),
                        s = new THREE.Geometry;
                    for (this.gg = [], t = 0; t <= this.ww; t++)
                        for (this.gg[t] = [], e = 0; e <= this.hh; e++) {
                            const i = s.vertices.length,
                                n = new THREE.Vector3(18 * (t - .5 * this.ww), Object(o.g)(0, this.waveNoise) - 10, 18 * (.5 * this.hh - e));
                            s.vertices.push(n), this.gg[t][e] = i
                        }
                    for (t = 1; t <= this.ww; t++)
                        for (e = 1; e <= this.hh; e++) {
                            var n, r;
                            const i = this.gg[t][e],
                                h = this.gg[t][e - 1],
                                a = this.gg[t - 1][e],
                                c = this.gg[t - 1][e - 1];
                            Object(o.f)(0, 1) ? (n = new THREE.Face3(c, h, a), r = new THREE.Face3(h, a, i)) : (n = new THREE.Face3(c, h, i), r = new THREE.Face3(c, a, i)), s.faces.push(n, r)
                        }
                    this.plane = new THREE.Mesh(s, i), this.scene.add(this.plane);
                    const h = new THREE.AmbientLight(16777215, .9);
                    this.scene.add(h);
                    const a = new THREE.PointLight(16777215, .9);
                    a.position.set(-100, 250, -100), this.scene.add(a), this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 50, 1e4);
                    this.cameraPosition = new THREE.Vector3(240, 200, 390), this.cameraTarget = new THREE.Vector3(140, -30, 190), this.camera.position.copy(this.cameraPosition), this.scene.add(this.camera)
                }
                onUpdate() {
                    let t;
                    this.plane.material.color.set(this.options.color), this.plane.material.shininess = this.options.shininess, this.camera.ox = this.cameraPosition.x / this.options.zoom, this.camera.oy = this.cameraPosition.y / this.options.zoom, this.camera.oz = this.cameraPosition.z / this.options.zoom, null != this.controls && this.controls.update();
                    const e = this.camera;
                    Math.abs(e.tx - e.position.x) > .01 && (t = e.tx - e.position.x, e.position.x += .02 * t), Math.abs(e.ty - e.position.y) > .01 && (t = e.ty - e.position.y, e.position.y += .02 * t), Math.abs(e.tz - e.position.z) > .01 && (t = e.tz - e.position.z, e.position.z += .02 * t), e.lookAt(this.cameraTarget);
                    for (let t = 0; t < this.plane.geometry.vertices.length; t++) {
                        const e = this.plane.geometry.vertices[t];
                        if (e.oy) {
                            const t = this.options.waveSpeed,
                                i = Math.sqrt(t) * Math.cos(-e.x - .7 * e.z),
                                s = Math.sin(t * this.t * .02 - t * e.x * .025 + t * e.z * .015 + i),
                                o = Math.pow(s + 1, 2) / 4;
                            e.y = e.oy + o * this.options.waveHeight
                        } else e.oy = e.y
                    }
                    this.plane.geometry.dynamic = !0, this.plane.geometry.computeFaceNormals(), this.plane.geometry.verticesNeedUpdate = !0, this.plane.geometry.normalsNeedUpdate = !0, this.wireframe && (this.wireframe.geometry.fromGeometry(this.plane.geometry), this.wireframe.geometry.computeFaceNormals())
                }
                onMouseMove(t, e) {
                    const i = this.camera;
                    return i.oy || (i.oy = i.position.y, i.ox = i.position.x, i.oz = i.position.z), i.tx = i.ox + 100 * (t - .5) / this.options.zoom, i.ty = i.oy + -100 * (e - .5) / this.options.zoom, i.tz = i.oz + -50 * (t - .5) / this.options.zoom
                }
            }
            n.prototype.defaultOptions = {
                color: 21896,
                shininess: 30,
                waveHeight: 15,
                waveSpeed: 1,
                zoom: 1
            }, n.initClass(), e.default = VANTA.register("WAVES", n)
        }
    })
});