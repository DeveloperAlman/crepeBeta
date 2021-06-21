gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 3500);
}

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 37;
    progress.style.height = progressHeight + "%";
}
// Smooth scrolling anchor links
function ea_scroll(hash) {
    var target = $(hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        var top_offset = 50;
        if ($('.site-header').css('position') == 'fixed') {
            top_offset = $('.site-header').height();
        }
        if ($('body').hasClass('admin-bar')) {
            top_offset = top_offset + $('#wpadminbar').height();
        }
        $('html,body').animate({
            scrollTop: target.offset().top - top_offset
        }, 800);
        return false;
    }
}
// -- Smooth scroll on pageload
if (window.location.hash) {
    ea_scroll(window.location.hash);
}
// -- Smooth scroll on click
$('a[href*="#"]:not([href="#"]):not(.no-scroll)').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        ea_scroll(this.hash);
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        $('.header__nav-wrapper').addClass('fixed');
    } else {
        $('.header__nav-wrapper').removeClass('fixed');
    }
});

var animateButton = function (e) {

    e.preventDefault;

    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseenter', animateButton, false);
}

let controller;
let slideScene;
let pageScene;

function animateSlides() {
    controller = new ScrollMagic.Controller();

    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    sliders.forEach((slide, index, slides) => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('.slide-hero__img');
        const boxImg = slide.querySelector('.slide-hero');
        const revealText = slide.querySelector('.reveal-text');

        const slideTl = gsap.timeline({
            defaults: {
                duration: 1.3,
                ease: 'power2.inOut'
            }
        });
        slideTl.fromTo(revealImg, {
            x: '0%'
        }, {
            x: '100%'
        });
        slideTl.fromTo(img, {
            scale: 2,
        }, {
            scale: 1.05
        }, '-=1');
        slideTl.fromTo(boxImg, {

            boxShadow: "0"
        }, {

            boxShadow: "0 2rem 5rem rgba(0, 0, 0, 0.18)"
        }, '-=1');
        slideTl.fromTo(revealText, {
            x: '0%'
        }, {
            x: '100%'
        }, '-=.85', )
        slideTl.fromTo(nav, {
            y: '-100%'
        }, {
            y: '0%'
        }, '-=0.75');

        slideScene = new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 0.25,
                reverse: false
            })
            .setTween(slideTl)

            .addTo(controller);

        const pageTl = gsap.timeline();
        let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
        pageTl.fromTo(nextSlide, {
            y: '0%'
        }, {
            y: '100%'
        }, '-=0.8');
        pageTl.fromTo(slide, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 0.5
        }, '+=0.8');
        pageTl.fromTo(nextSlide, {
            y: '100%'
        }, {
            y: '0%'
        }, '-=0.8')
        pageScene = new ScrollMagic.Scene({
                triggerElement: slide,
                duration: '240%',
                triggerHook: 0
            })
            .setPin(slide, {
                // pushFollowers: false
            })
            .setTween(pageTl)

            .addTo(controller)
    });
}
animateSlides();

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll",
        scrub: true,
        pin: true,
        start: "center center",
        end: "+=1000%",
    }
});

tl.to(".scroll__heading", {
    scale: 0
});

tl.from(".scroll-1", {
    scale: 0.5,
    rotation: 45,
    x: innerWidth * -1,
    transform: 'translate(0%, -50%) !important'

});

tl.from(".scroll-2", {
    scale: 0.5,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-3", {
    scale: 0.5,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-4", {
    scale: 0.5,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-5", {
    scale: 0.5,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-6", {
    scale: 0.5,
    rotation: 45,
    x: innerWidth * 1
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

setTimeout(function () {
    $("#btn, #deny").css({
        "pointer-events": "all"
    });
}, 1000);

gsap.set("#leg-l, #leg-r", {
    scale: 0,
    transformOrigin: "top"
});
gsap.set("#heart-na", {
    x: -12
});
gsap.set("#mouth-no", {
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
});
agree.to("#face", 2, {
    delay: -1,
    rotate: -18,
    transformOrigin: "center",
    ease: Elastic.easeOut
});
agree.to("#body", 1, {
    delay: -1.8,
    rotate: 12,
    y: -10,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .90)"
});
agree.to("#body", 1, {
    delay: -1.8,
    rotate: 12,
    y: -10,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .90)"
});
agree.to("#leg-l, #leg-r", .5, {
    delay: -1.8,
    y: -12,
    x: 6,
    rotate: -30,
    transformOrigin: "top",
    ease: "Elastic.easeOut(1, .90)"
});
agree.to("#face", 2, {
    delay: -1.8,
    rotate: 12,
    transformOrigin: "center",
    ease: Elastic.easeOut
});
agree.to("#body", 1, {
    delay: -1.6,
    rotate: 0,
    y: 0,
    x: 0,
    transformOrigin: "bottom",
    ease: "Elastic.easeOut(1, .50)"
});
agree.to("#leg-l, #leg-r", .5, {
    delay: -1.6,
    y: 0,
    x: 0,
    rotate: 0,
    transformOrigin: "top",
    ease: "Elastic.easeOut(1, .90)"
});
agree.to("#face", 2, {
    delay: -1.6,
    rotate: 0,
    transformOrigin: "center",
    ease: Elastic.easeOut
});
agree.to("#body", .15, {
    delay: -1.2,
    rotate: -12,
    transformOrigin: "center",
    y: -4,
    ease: Power1.easeInOut
});
agree.to("#body", .15, {
    delay: -1.05,
    rotate: -12,
    transformOrigin: "center",
    y: 4,
    ease: Power1.easeInOut
});
agree.to("#body", .15, {
    rotate: 12,
    transformOrigin: "center",
    y: -4,
    ease: Power1.easeInOut
});
agree.to("#body", .15, {
    rotate: 12,
    transformOrigin: "center",
    y: 4,
    ease: Power1.easeInOut
});
agree.pause();

var thought = gsap.timeline();
thought.to("#thought-1", .5, {
    opacity: .1
});
thought.to("#thought-2", .5, {
    opacity: .1
});
thought.to("#thought-heart-na", .5, {
    opacity: .1
});
thought.to("#q-mark", .5, {
    delay: -.5,
    opacity: .1
});

var deny = gsap.timeline();
deny.to("#face-no", .5, {
    opacity: 1,
    ease: Power3.easeOut
});
deny.to("#mouth-no", 2, {
    x: 0,
    ease: Power3.easeOut
});
deny.to("#leg-l", 1, {
    delay: -2,
    rotate: -30,
    ease: Power3.easeOut
});
deny.to("#body", 1, {
    delay: -2,
    rotate: 12,
    transformOrigin: "center",
    ease: Power3.easeOut
});
deny.to("#leg-l, #body", 1, {
    delay: -1.5,
    rotate: 0,
    ease: Elastic.easeOut
});
deny.pause();

var transition = function () {
    var wrapper = gsap.timeline();
    wrapper.to("#cookie-policy", 1, {
        ease: Bounce.easeOut
    });
    wrapper.to("#cookie-policy", 1, {
        delay: -.25,
        x: -2000,
        ease: Power3.easeIn
    });
    wrapper.to("#cookie-policy", 0, {
        x: 2000
    });
    wrapper.to("#cookie-policy", 1, {
        delay: 1,
        x: 2000,
        ease: Power3.easeOut
    });
    wrapper.to("#cookie-policy", 1, {
        ease: Bounce.easeOut
    });
}

$("#btn").click(function () {
    $("#btn, #deny").css({
        "pointer-events": "none"
    });

    transition();
    rotate.restart();
    rotate.pause();
    agree.play();

    gsap.to("#leg-l, #leg-r", 1, {
        opacity: 1,
        scale: 1,
        transformOrigin: "top",
        ease: Elastic.easeOut
    });
    gsap.to("#eyes, #mouth", .5, {
        opacity: 1,
        ease: Power3.easeOut
    });
    gsap.to("#thought-1, #thought-2, #user-thought, #cookie-thought, #plus, #q-mark", 0, {
        opacity: 0,
        ease: Power3.easeOut
    });
    gsap.to("#thought-heart-na", 3, {
        morphSVG: {
            shape: "#thought-heart-yes"
        },
        scale: 1.3,
        x: 10,
        y: 10,
        fill: "red",
        ease: Power3.easeOut
    });

    setTimeout(function () {
        agree.restart();
        agree.pause();
        rotate.restart();
        rotate.play();
        thought.restart();

        gsap.to("#user-thought, #plus, #cookie-thought", 0, {
            opacity: 1
        });
        gsap.to("#eyes, #mouth", 0, {
            opacity: 0
        });
        gsap.to("#leg-l, #leg-r", {
            scale: 0,
            transformOrigin: "top"
        });
    }, 3000);

    setTimeout(function () {
        $("#btn, #deny").css({
            "pointer-events": "all"
        });
    }, 4000);

    gsap.to("#thought-heart-na", 0, {
        delay: 3,
        morphSVG: {
            shape: "#thought-heart-na"
        },
        scale: 1,
        x: 0,
        y: 0,
        fill: "#6D3A1F",
        ease: Power3.easeOut
    });
});

$("#deny").click(function () {
    $("#btn, #deny").css({
        "pointer-events": "none"
    });

    transition();
    deny.play();
    rotate.restart();
    rotate.pause();

    gsap.to("#leg-l, #leg-r", 1, {
        opacity: 1,
        scale: 1,
        transformOrigin: "top",
        ease: Power3.easeOut
    });
    gsap.to("#thought-heart-na", .1, {
        morphSVG: {
            shape: "#heart-no-1"
        }
    });
    gsap.to("#thought-heart-na", .1, {
        delay: .05,
        morphSVG: {
            shape: "#heart-no-2"
        }
    });
    gsap.to("#thought-heart-na", .1, {
        delay: .10,
        morphSVG: {
            shape: "#heart-no-3"
        }
    });
    gsap.to("#thought-heart-na", .5, {
        opacity: 0
    });
    gsap.to("#thought-1, #thought-2, #user-thought, #cookie-thought, #plus, #q-mark", 0, {
        opacity: 0,
        ease: Power3.easeOut
    });

    setTimeout(function () {
        deny.restart();
        deny.pause();
        rotate.play();
        thought.restart();

        gsap.to("#user-thought, #plus, #cookie-thought", 0, {
            opacity: 1
        });
        gsap.to("#face-no", 0, {
            opacity: 0
        });
        gsap.to("#leg-l, #leg-r", 0, {
            scale: 0,
            transformOrigin: "top"
        });
        gsap.to("#thought-heart-na", .5, {
            morphSVG: {
                shape: "#thought-heart-na"
            }
        });
    }, 3000);

    setTimeout(function () {
        $("#btn, #deny").css({
            "pointer-events": "all"
        });
    }, 4000);
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
});

$("#email").focus(function () {
    if ($("#email").val() == "") {
        $("#placeholder").fadeToggle();
    }
});
$("#email").focusout(function () {
    if ($("#email").val() == "") {
        $("#placeholder").fadeToggle();
    }
});

$("#subscribe").mouseenter(function () {
    gsap.to("#btnSVG", .3, {
        fill: "#d85168"
    });
});
$("#subscribe").mouseleave(function () {
    gsap.to("#btnSVG", .3, {
        fill: "#e96f8c"
    });
});

$("#email").on("keypress", function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        $("#subscribe").click();
    }
});

gsap.set("#mail", {
    scale: 0,
    x: 20,
    transformOrigin: "right"
});

$("#subscribe").click(function () {
    var submit = gsap.timeline();
    submit.to("#title, #disclaimer, #subscribe, #email, #placeholder", {
        opacity: 0,
        pointerEvents: "none",
        ease: Power1.easeInOut
    });
    submit.to("#inputSVG, #btnSVG", .5, {
        opacity: "0",
        ease: Power1.ease
    });
    submit.to("#inputSVG, #btnSVG", .5, {
        morphSVG: {
            shape: "#invisible-heart"
        },
        ease: Power1.easeInOut
    });
    submit.to("#success", .5, {
        delay: -.5,
        opacity: 1,
        ease: Power1.easeInOut
    });

    var mailbox = gsap.timeline();
    mailbox.to({}, 1, {});
    mailbox.to("#mailbox-stick", 3, {
        rotate: -90,
        x: 15,
        transformOrigin: "left",
        ease: Elastic.easeOut
    });
    mailbox.to("#cover-closed", 1, {
        delay: -3,
        y: -1,
        rotation: -180,
        transformOrigin: "bottom",
        ease: "Bounce.easeOut"
    });
    mailbox.to("#cover-open-side", .15, {
        delay: -2,
        opacity: 0
    });
    mailbox.to("#heart", .15, {
        delay: -3,
        opacity: 0
    });
    mailbox.to("#mail", 0, {
        delay: -3,
        opacity: 1,
        display: "block"
    });
    mailbox.to("#mail", 1, {
        delay: -3,
        scale: 1,
        x: 0,
        transformOrigin: "right",
        ease: "back.out"
    });

    var wrapper = gsap.timeline({
        delay: 3
    });
    wrapper.to("#svgWrapper", 1, {
        scale: 1,
        ease: Bounce.easeOut
    });
    wrapper.to("#svgWrapper", 1, {
        delay: -.6,
        x: "-200%",
        rotate: 9,
        ease: Power1.easeIn
    });
    wrapper.to("#title, #disclaimer, #subscribe, #email, #placeholder", 0, {
        opacity: 1,
        pointerEvents: "all"
    });
    wrapper.to("#inputSVG", 0, {
        morphSVG: {
            shape: "#inputSVG"
        },
        y: 0,
        opacity: 1
    });
    wrapper.to("#btnSVG", 0, {
        morphSVG: {
            shape: "#btnSVG"
        },
        y: 0,
        opacity: 1
    });
    wrapper.to("#success", 0, {
        opacity: 0
    });
    wrapper.to("#mailbox-stick", 0, {
        rotate: 0,
        x: 0,
        transformOrigin: "left"
    });
    wrapper.to("#cover-closed", 0, {
        rotation: 0,
        y: 0,
        transformOrigin: "bottom"
    });
    wrapper.to("#cover-open-side", 0, {
        opacity: 1
    });
    wrapper.to("#heart", 0, {
        opacity: 1
    });
    wrapper.to("#mail", 0, {
        opacity: 0,
        scale: 0,
        x: 0,
        transformOrigin: "right",
        display: "none"
    });
    wrapper.to("#svgWrapper", 0, {
        x: "200%"
    });
    wrapper.to("#svgWrapper", 1.5, {
        x: "0",
        rotate: -9,
        ease: "back.out"
    });
    wrapper.to("#svgWrapper", 1, {
        delay: -.5,
        rotate: 0,
        scale: 1,
        ease: Bounce.easeOut
    });
});



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const html = document.querySelector("html");
const progressBar = document.querySelector("#progressbar");
const scrollPath = document.querySelector("#scrollPath");
const header = document.querySelector(".header__nav-wrapper");

const modalSecond = document.querySelector('.modal-second');
const overlaySecond = document.querySelector('.overlay-second');
const btnCloseModalSecond = document.querySelector('.close-modal-second');

const openModal = function () {
    modal.classList.remove('hidden-modal');
    modalSecond.classList.remove('hidden-modal');
    overlay.classList.remove('hidden-modal');
    overlaySecond.classList.remove('hidden-modal');
    html.classList.add("hidden-overflow-modal");
    progressBar.classList.add("hidden-modal");
    scrollPath.classList.add("hidden-modal");
    header.classList.add('hidden-modal');
};

const closeModal = function () {
    modal.classList.add('hidden-modal');
    modalSecond.classList.add('hidden-modal');
    overlay.classList.add('hidden-modal');
    overlaySecond.classList.add('hidden-modal');
    html.classList.remove("hidden-overflow-modal");
    progressBar.classList.remove("hidden-modal");
    scrollPath.classList.remove("hidden-modal");
    header.classList.remove('hidden-modal');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden-modal')) {
        closeModal();
    }
});

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModalSecond.addEventListener('click', closeModal);
overlaySecond.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modalSecond.classList.contains('hidden-modal')) {
        closeModal();
    }
});