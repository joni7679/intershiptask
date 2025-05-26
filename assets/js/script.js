


Shery.textAnimate(".heading", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


const cursor = document.querySelector('.cursor');

function createCursor() {
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - cursor.offsetWidth / 2,
            y: e.clientY - cursor.offsetHeight / 2,
            duration: 0.2,
            ease: "power4.out"
        });
    });
}
createCursor();

let main = document.querySelector("main");
let slides = document.querySelectorAll(".slide");
main.addEventListener("mousemove", (details) => {
    slides.forEach((elem) => {
        var x = (window.innerWidth - details.clientX * 15) / 50;
        elem.style.transform = `translateX(${-x}px)`
    });
});

// Shery.imageEffect(".img-effect", {
//     style: 4,
//     // debug: true,
//     gooey: true,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     config: { "uColor": { "value": true }, "uSpeed": { "value": 2.31, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.2234458550574083 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
// });

// Create a timeline
const tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power4.out" }
});

tl.from(".img-effect", {
    y: 100,
    opacity: 0,
}, "a")
    .from(".img-effect-2", {
        scale: 1.2,
        opacity: 0,
    }, "a")
    .from(".img-effect-3", {
        y: -100,
        opacity: 0,
    }, "a"); 
