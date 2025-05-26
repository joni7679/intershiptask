
Shery.textAnimate(".heading", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".logo", {
    y: -50,
    opacity: 0,
    duration: 1,

})

gsap.from(".social-link", {
    scale: 1.9,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
})



// filter.js
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all' || category === itemCategory) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        filterBtns.forEach(b => b.classList.remove('bg-green-500', 'text-white', 'shadow-md'));
        btn.classList.add('bg-green-500', 'text-white', 'shadow-md');
    });
});



const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
let isMenuOpen = false;
gsap.set(menu, { height: 0, opacity: 0, display: "none" });

toggleBtn.addEventListener("click", () => {
    if (isMenuOpen) {        gsap.to(menu, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                menu.style.display = "none";
            }
        });
    } else {
        menu.style.display = "flex";
        gsap.fromTo(
            menu,
            { height: 0, opacity: 0 },
            {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }
        );
    }
    isMenuOpen = !isMenuOpen;
});