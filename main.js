gsap.registerPlugin(ScrollTrigger), window.onload = function () {
    document.body.classList.add("preloader"), window.setTimeout(function () {
        document.body.classList.add("loaded"), document.body.classList.remove("preloader")
    }, 3500)
};
let controller, slideScene, pageScene, progress = document.getElementById("progressbar"),
    totalHeight = document.body.scrollHeight - window.innerHeight;

function ea_scroll(e) {
    var t = $(e);
    if ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length) {
        var o = 35;
        return "fixed" == $(".site-header").css("position") && (o = $(".site-header").height()), $("body").hasClass("admin-bar") && (o += $("#wpadminbar").height()), $("html,body").animate({
            scrollTop: t.offset().top - o
        }, 850), !1
    }
}

const mouse = document.querySelector('.cursor');
const mouseText = document.querySelector('.cursor-text');
const burger = document.querySelector('.burger');
const crepeLu = document.querySelector(".header__logo");
const overflowHtml = document.querySelector(".html-overflow");

function cursor(e) {
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

function activeCursor(e) {
    const item = e.target;
    if (item.id === 'logo' || item.classList.contains('burger')) {
        mouse.classList.add('nav-active');
    } else {
        mouse.classList.remove('nav-active');
    };
    if (item.classList.contains('explore')) {
        gsap.to('.title-swipe', 1, {
            y: '0%',
            ease: 'power2.inOut'
        })
        mouse.classList.add('explore-active');
        mouseText.innerText = 'Tap';
    } else {
        mouse.classList.remove('explore-active');
        mouseText.innerText = '';
        gsap.to('.title-swipe', 1, {
            y: '100%',
            ease: 'power2.inOut'
        })
    };
};

function navToggle(e) {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('active');
        gsap.to('.line1',
            0.5, {
                rotate: '45',
                y: 7,
                background: 'white',
                // zIndex: 2
            });
        gsap.to('.line3',
            0.5, {
                rotate: '-45',
                y: -17.2,
                background: 'white',
                // zIndex: 2
            });
        gsap.to('.line2',
            0.5, {
                opacity: 0
            });
        gsap.to('.nav-bar', 1.35, {
            clipPath: 'circle(2000px at 100% -10%)',
            ease: 'power2.inOut'
        });
        gsap.to('#logo', 1, {
            color: '#17181a',
            // zIndex: 2
        })
        gsap.to(".header__logo", 0.5, {
            opacity: 0
        })
        gsap.to('.cursor', 1, {
            borderColor: '#17181a',
            zIndex: 100
        });
        gsap.to('.html-overflow', 0.2, {
            overflow: "hidden"
        });
        gsap.to(".header__nav-wrapper.fixed", 0.5, {
            background: "none",
            boxShadow: "none"
        });
    } else {
        e.target.classList.remove('active');
        gsap.to('.line1',
            0.5, {
                rotate: '0',
                y: 0,
                background: 'white'
            });
        gsap.to('.line3',
            0.5, {
                rotate: '0',
                y: 0,
                background: 'white'
            });
        gsap.to('.line2',
            0.5, {
                rotate: '-0',
                y: 0,
                opacity: 1,
                background: 'white'
            });
        gsap.to('.nav-bar', 1.35, {
            clipPath: 'circle(50px at 100% -10%)',
            ease: 'power2.inOut'
        });
        gsap.to('#logo', 1, {
            color: 'white'
        });
        gsap.to('.cursor', 1, {
            borderColor: 'white',
            zIndex: 100
        });
        gsap.to(".header__logo", 1, {
            opacity: 1
        });
        const overflowHtml = document.querySelector(".html-overflow").style = "overflow:auto";
        gsap.to(".header__nav-wrapper.fixed", 0.5, {
            background: "rgba(28, 28, 28, 0.99)",
            boxShadow: "0 2rem 5rem rgba(0, 0, 0, 0.2)"
        });
    }
}

burger.addEventListener('click', navToggle);
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);

window.onscroll = function () {
    let e = window.pageYOffset / totalHeight * 33;
    progress.style.height = e + "%"
}, window.location.hash && ea_scroll(window.location.hash), $('a[href*="#"]:not([href="#"]):not(.no-scroll)').click(function () {
    location.pathname.replace(/^\//, "") != this.pathname.replace(/^\//, "") && location.hostname != this.hostname || ea_scroll(this.hash)
}), $(window).scroll(function () {
    $(window).scrollTop() > 10 ? $(".header__nav-wrapper").addClass("fixed") : $(".header__nav-wrapper").removeClass("fixed")
});
for (var animateButton = function (e) {
        e.preventDefault, e.target.classList.remove("animate"), e.target.classList.add("animate"), setTimeout(function () {
            e.target.classList.remove("animate")
        }, 700)
    }, bubblyButtons = document.getElementsByClassName("bubbly-button"), i = 0; i < bubblyButtons.length; i++) bubblyButtons[i].addEventListener("mouseenter", animateButton, !1);

function animateSlides() {
    controller = new ScrollMagic.Controller;
    const e = document.querySelectorAll(".slide"),
        t = document.querySelector(".nav-header");
    e.forEach((e, o, a) => {
        const r = e.querySelector(".reveal-img"),
            s = e.querySelector(".slide-hero__img"),
            n = e.querySelector(".slide-hero"),
            l = e.querySelector(".reveal-text"),
            i = gsap.timeline({
                defaults: {
                    duration: 1.3,
                    ease: "power2.inOut"
                }
            });
        i.fromTo(r, {
            x: "0%"
        }, {
            x: "100%"
        }), i.fromTo(s, {
            scale: 2
        }, {
            scale: 1.05
        }, "-=1"), i.fromTo(n, {
            boxShadow: "0"
        }, {
            boxShadow: "0 2rem 5rem rgba(0, 0, 0, 0.18)"
        }, "-=1"), i.fromTo(l, {
            x: "0%"
        }, {
            x: "100%"
        }, "-=.85"), i.fromTo(t, {
            y: "-100%"
        }, {
            y: "0%"
        }, "-=0.75"), slideScene = new ScrollMagic.Scene({
            triggerElement: e,
            triggerHook: .25,
            reverse: !1
        }).setTween(i).addTo(controller);
        const c = gsap.timeline();
        let d = a.length - 1 === o ? "end" : a[o + 1];
        c.fromTo(d, {
            y: "0%"
        }, {
            y: "100%"
        }, "-=0.8"), c.fromTo(e, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: .5
        }, "+=0.8"), c.fromTo(d, {
            y: "100%"
        }, {
            y: "0%"
        }, "-=0.8"), pageScene = new ScrollMagic.Scene({
            triggerElement: e,
            duration: "300%",
            triggerHook: 0
        }).setPin(e, {}).setTween(c).addTo(controller)
    })
}
animateSlides();
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll",
        scrub: !0,
        pin: !0,
        start: "center center",
        end: "+=1000%"
    }
});
tl.to(".scroll__heading", {
    scale: 0
}), tl.from(".scroll-1", {
    scale: .5,
    rotation: 45,
    x: -1.5 * innerWidth,
    transform: "translate(0%, -50%) !important"
}), tl.from(".scroll-2", {
    scale: .5,
    rotation: 45,
    x: 1.5 * innerWidth
}), tl.from(".scroll-3", {
    scale: .5,
    rotation: 45,
    x: 1.5 * innerWidth
}), tl.from(".scroll-4", {
    scale: .5,
    rotation: 45,
    x: 1.5 * innerWidth
}), tl.from(".scroll-5", {
    scale: .5,
    rotation: 45,
    x: 1.5 * innerWidth
}), tl.from(".scroll-6", {
    scale: .5,
    rotation: 45,
    x: 1.5 * innerWidth
});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    this.parentNode.classList.add("focus")
}

function blurFunc() {
    let e = this.parentNode;
    "" == this.value && e.classList.remove("focus")
}
inputs.forEach(e => {
    e.addEventListener("focus", focusFunc), e.addEventListener("blur", blurFunc)
}), setTimeout(function () {
    $("#btn, #deny").css({
        "pointer-events": "all"
    })
}, 1e3), gsap.set("#leg-l, #leg-r", {
    scale: 0,
    transformOrigin: "top"
}), gsap.set("#heart-na", {
    x: -12
}), gsap.set("#mouth-no", {
    x: -10
});
var rotate = gsap.timeline({
    repeat: -1
});
rotate.to("#body", 6, {
    rotate: 360,
    transformOrigin: "center",
    ease: Linear.easeNone
});
var agree = gsap.timeline({
    repeat: -1
});
agree.to("#body", 1, {
    rotate: -12,
    y: 10,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .90)"
}), agree.to("#face", 2, {
    delay: -1,
    rotate: -18,
    transformOrigin: "center",
    ease: Elastic.easeOut
}), agree.to("#body", 1, {
    delay: -1.8,
    rotate: 12,
    y: -10,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .90)"
}), agree.to("#body", 1, {
    delay: -1.8,
    rotate: 12,
    y: -10,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .90)"
}), agree.to("#leg-l, #leg-r", .5, {
    delay: -1.8,
    y: -12,
    x: 6,
    rotate: -30,
    transformOrigin: "top",
    ease: "Elastic.easeOut(1, .90)"
}), agree.to("#face", 2, {
    delay: -1.8,
    rotate: 12,
    transformOrigin: "center",
    ease: Elastic.easeOut
}), agree.to("#body", 1, {
    delay: -1.6,
    rotate: 0,
    y: 0,
    x: 0,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .50)"
}), agree.to("#leg-l, #leg-r", .5, {
    delay: -1.6,
    y: 0,
    x: 0,
    rotate: 0,
    transformOrigin: "top",
    ease: "Elastic.easeOut(1, .90)"
}), agree.to("#face", 2, {
    delay: -1.6,
    rotate: 0,
    transformOrigin: "center",
    ease: Elastic.easeOut
}), agree.to("#body", .15, {
    delay: -1.2,
    rotate: -12,
    transformOrigin: "center",
    y: -4,
    ease: Power1.easeInOut
}), agree.to("#body", .15, {
    delay: -1.05,
    rotate: -12,
    transformOrigin: "center",
    y: 4,
    ease: Power1.easeInOut
}), agree.to("#body", .15, {
    rotate: 12,
    transformOrigin: "center",
    y: -4,
    ease: Power1.easeInOut
}), agree.to("#body", .15, {
    rotate: 12,
    transformOrigin: "center",
    y: 4,
    ease: Power1.easeInOut
}), agree.pause();
var thought = gsap.timeline();
thought.to("#thought-1", .5, {
    opacity: .1
}), thought.to("#thought-2", .5, {
    opacity: .1
}), thought.to("#thought-heart-na", .5, {
    opacity: .1
}), thought.to("#q-mark", .5, {
    delay: -.5,
    opacity: .1
});
var deny = gsap.timeline();
deny.to("#face-no", .5, {
    opacity: 1,
    ease: Power3.easeOut
}), deny.to("#mouth-no", 2, {
    x: 0,
    ease: Power3.easeOut
}), deny.to("#leg-l", 1, {
    delay: -2,
    rotate: -30,
    ease: Power3.easeOut
}), deny.to("#body", 1, {
    delay: -2,
    rotate: 12,
    transformOrigin: "center",
    ease: Power3.easeOut
}), deny.to("#leg-l, #body", 1, {
    delay: -1.5,
    rotate: 0,
    ease: Elastic.easeOut
}), deny.pause();
var transition = function () {
    var e = gsap.timeline();
    e.to("#cookie-policy", 1, {
        ease: Bounce.easeOut
    }), e.to("#cookie-policy", 1, {
        delay: -.25,
        x: -2e3,
        ease: Power3.easeIn
    }), e.to("#cookie-policy", 0, {
        x: 2e3
    }), e.to("#cookie-policy", 1, {
        delay: 1,
        x: 2e3,
        ease: Power3.easeOut
    }), e.to("#cookie-policy", 1, {
        ease: Bounce.easeOut
    })
};
$("#btn").click(function () {
    $("#btn, #deny").css({
        "pointer-events": "none"
    }), transition(), rotate.restart(), rotate.pause(), agree.play(), gsap.to("#leg-l, #leg-r", 1, {
        opacity: 1,
        scale: 1,
        transformOrigin: "top",
        ease: Elastic.easeOut
    }), gsap.to("#eyes, #mouth", .5, {
        opacity: 1,
        ease: Power3.easeOut
    }), gsap.to("#thought-1, #thought-2, #user-thought, #cookie-thought, #plus, #q-mark", 0, {
        opacity: 0,
        ease: Power3.easeOut
    }), gsap.to("#thought-heart-na", 3, {
        morphSVG: {
            shape: "#thought-heart-yes"
        },
        scale: 1.3,
        x: 10,
        y: 10,
        fill: "red",
        ease: Power3.easeOut
    }), setTimeout(function () {
        agree.restart(), agree.pause(), rotate.restart(), rotate.play(), thought.restart(), gsap.to("#user-thought, #plus, #cookie-thought", 0, {
            opacity: 1
        }), gsap.to("#eyes, #mouth", 0, {
            opacity: 0
        }), gsap.to("#leg-l, #leg-r", {
            scale: 0,
            transformOrigin: "top"
        })
    }, 3e3), setTimeout(function () {
        $("#btn, #deny").css({
            "pointer-events": "all"
        })
    }, 4e3), gsap.to("#thought-heart-na", 0, {
        delay: 3,
        morphSVG: {
            shape: "#thought-heart-na"
        },
        scale: 1,
        x: 0,
        y: 0,
        fill: "#6D3A1F",
        ease: Power3.easeOut
    })
}), $("#deny").click(function () {
    $("#btn, #deny").css({
        "pointer-events": "none"
    }), transition(), deny.play(), rotate.restart(), rotate.pause(), gsap.to("#leg-l, #leg-r", 1, {
        opacity: 1,
        scale: 1,
        transformOrigin: "top",
        ease: Power3.easeOut
    }), gsap.to("#thought-heart-na", .1, {
        morphSVG: {
            shape: "#heart-no-1"
        }
    }), gsap.to("#thought-heart-na", .1, {
        delay: .05,
        morphSVG: {
            shape: "#heart-no-2"
        }
    }), gsap.to("#thought-heart-na", .1, {
        delay: .1,
        morphSVG: {
            shape: "#heart-no-3"
        }
    }), gsap.to("#thought-heart-na", .5, {
        opacity: 0
    }), gsap.to("#thought-1, #thought-2, #user-thought, #cookie-thought, #plus, #q-mark", 0, {
        opacity: 0,
        ease: Power3.easeOut
    }), setTimeout(function () {
        deny.restart(), deny.pause(), rotate.play(), thought.restart(), gsap.to("#user-thought, #plus, #cookie-thought", 0, {
            opacity: 1
        }), gsap.to("#face-no", 0, {
            opacity: 0
        }), gsap.to("#leg-l, #leg-r", 0, {
            scale: 0,
            transformOrigin: "top"
        }), gsap.to("#thought-heart-na", .5, {
            morphSVG: {
                shape: "#thought-heart-na"
            }
        })
    }, 3e3), setTimeout(function () {
        $("#btn, #deny").css({
            "pointer-events": "all"
        })
    }, 4e3)
});
var cloudOne = gsap.timeline({
    repeat: -1,
    delay: -12
});
cloudOne.to("#cloud-one", 36, {
    x: "-720px",
    ease: Linear.easeNone
});
var cloudTwo = gsap.timeline({
    repeat: -1,
    delay: -3
});
cloudTwo.to("#cloud-two", 24, {
    x: "-720px",
    ease: Linear.easeNone
});
var cloudFour = gsap.timeline({
    repeat: -1,
    delay: 4
});
cloudFour.to("#cloud-four", 33, {
    x: "-720px",
    ease: Linear.easeNone
});
var cloudFive = gsap.timeline({
    repeat: -1
});
cloudFive.to("#cloud-five", 24, {
    x: "-720px",
    ease: Linear.easeNone
}), $("#email").focus(function () {
    "" == $("#email").val() && $("#placeholder").fadeToggle()
}), $("#email").focusout(function () {
    "" == $("#email").val() && $("#placeholder").fadeToggle()
}), $("#subscribe").mouseenter(function () {
    gsap.to("#btnSVG", .3, {
        fill: "#d85168"
    })
}), $("#subscribe").mouseleave(function () {
    gsap.to("#btnSVG", .3, {
        fill: "#e96f8c"
    })
}), $("#email").on("keypress", function (e) {
    13 === (e.keyCode || e.which) && $("#subscribe").click()
}), gsap.set("#mail", {
    scale: 0,
    x: 20,
    transformOrigin: "right"
}), $("#subscribe").click(function () {
    var e = gsap.timeline();
    e.to("#title, #disclaimer, #subscribe, #email, #placeholder", {
        opacity: 0,
        pointerEvents: "none",
        ease: Power1.easeInOut
    }), e.to("#inputSVG, #btnSVG", .5, {
        opacity: "0",
        ease: Power1.ease
    }), e.to("#inputSVG, #btnSVG", .5, {
        morphSVG: {
            shape: "#invisible-heart"
        },
        ease: Power1.easeInOut
    }), e.to("#success", .5, {
        delay: -.5,
        opacity: 1,
        ease: Power1.easeInOut
    });
    var t = gsap.timeline();
    t.to({}, 1, {}), t.to("#mailbox-stick", 3, {
        rotate: -90,
        x: 15,
        transformOrigin: "left",
        ease: Elastic.easeOut
    }), t.to("#cover-closed", 1, {
        delay: -3,
        y: -1,
        rotation: -180,
        transformOrigin: "bottom",
        ease: "Bounce.easeOut"
    }), t.to("#cover-open-side", .15, {
        delay: -2,
        opacity: 0
    }), t.to("#heart", .15, {
        delay: -3,
        opacity: 0
    }), t.to("#mail", 0, {
        delay: -3,
        opacity: 1,
        display: "block"
    }), t.to("#mail", 1, {
        delay: -3,
        scale: 1,
        x: 0,
        transformOrigin: "right",
        ease: "back.out"
    });
    var o = gsap.timeline({
        delay: 3
    });
    o.to("#svgWrapper", 1, {
        scale: 1,
        ease: Bounce.easeOut
    }), o.to("#svgWrapper", 1, {
        delay: -.6,
        x: "-200%",
        rotate: 9,
        ease: Power1.easeIn
    }), o.to("#title, #disclaimer, #subscribe, #email, #placeholder", 0, {
        opacity: 1,
        pointerEvents: "all"
    }), o.to("#inputSVG", 0, {
        morphSVG: {
            shape: "#inputSVG"
        },
        y: 0,
        opacity: 1
    }), o.to("#btnSVG", 0, {
        morphSVG: {
            shape: "#btnSVG"
        },
        y: 0,
        opacity: 1
    }), o.to("#success", 0, {
        opacity: 0
    }), o.to("#mailbox-stick", 0, {
        rotate: 0,
        x: 0,
        transformOrigin: "left"
    }), o.to("#cover-closed", 0, {
        rotation: 0,
        y: 0,
        transformOrigin: "bottom"
    }), o.to("#cover-open-side", 0, {
        opacity: 1
    }), o.to("#heart", 0, {
        opacity: 1
    }), o.to("#mail", 0, {
        opacity: 0,
        scale: 0,
        x: 0,
        transformOrigin: "right",
        display: "none"
    }), o.to("#svgWrapper", 0, {
        x: "200%"
    }), o.to("#svgWrapper", 1.5, {
        x: "0",
        rotate: -9,
        ease: "back.out"
    }), o.to("#svgWrapper", 1, {
        delay: -.5,
        rotate: 0,
        scale: 1,
        ease: Bounce.easeOut
    })
});
const modal = document.querySelector(".modal"),
    overlay = document.querySelector(".overlay"),
    btnCloseModal = document.querySelector(".close-modal"),
    btnsOpenModal = document.querySelectorAll(".show-modal"),
    html = document.querySelector("html"),
    progressBar = document.querySelector("#progressbar"),
    scrollPath = document.querySelector("#scrollPath"),
    header = document.querySelector(".header__nav-wrapper"),
    modalSecond = document.querySelector(".modal-second"),
    overlaySecond = document.querySelector(".overlay-second"),
    btnCloseModalSecond = document.querySelector(".close-modal-second"),
    openModal = function () {
        modal.classList.remove("hidden-modal"), modalSecond.classList.remove("hidden-modal"), overlay.classList.remove("hidden-modal"), overlaySecond.classList.remove("hidden-modal"), html.classList.add("hidden-overflow-modal"), progressBar.classList.add("hidden-modal"), scrollPath.classList.add("hidden-modal"), header.classList.add("hidden-modal")
    },
    closeModal = function () {
        modal.classList.add("hidden-modal"), modalSecond.classList.add("hidden-modal"), overlay.classList.add("hidden-modal"), overlaySecond.classList.add("hidden-modal"), html.classList.remove("hidden-overflow-modal"), progressBar.classList.remove("hidden-modal"), scrollPath.classList.remove("hidden-modal"), header.classList.remove("hidden-modal")
    };
for (let e = 0; e < btnsOpenModal.length; e++) btnsOpenModal[e].addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal), overlay.addEventListener("click", closeModal), document.addEventListener("keydown", function (e) {
    "Escape" !== e.key || modal.classList.contains("hidden-modal") || closeModal()
});
for (let e = 0; e < btnsOpenModal.length; e++) btnsOpenModal[e].addEventListener("click", openModal);

function detailAnimation() {
    controller = new ScrollMagic.Controller, document.querySelectorAll(".detail-slide").forEach((e, t, o) => {
        const a = gsap.timeline({
            defaults: {
                duration: 1
            }
        });
        let r = o.length - 1 === t ? "end" : o[t + 1];
        r.querySelector("img");
        a.fromTo(r, {
            x: "0%"
        }, {
            x: "100%"
        }, "-=0.8"), a.fromTo(e, {
            opacity: 1,
            scale: 1,
            x: "0%"
        }, {
            opacity: 0,
            scale: .5,
            x: "20%"
        }, "+=0.8"), a.fromTo(r, {
            x: "100%"
        }, {
            x: "0%"
        }, "-=0.8"), detailScene = new ScrollMagic.Scene({
            triggerElement: e,
            duration: "300%",
            triggerHook: 0
        }).setPin(e, {
            pushFollowers: !0
        }).setTween(a).addTo(controller)
    })
}
btnCloseModalSecond.addEventListener("click", closeModal), overlaySecond.addEventListener("click", closeModal), document.addEventListener("keydown", function (e) {
    "Escape" !== e.key || modalSecond.classList.contains("hidden-modal") || closeModal()
}), detailAnimation();