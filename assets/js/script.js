


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
