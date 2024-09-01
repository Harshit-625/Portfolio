// HAMBURGER
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const navbarLinks = document.getElementById("navbarLinks");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("ham");
  });
})

// GSAP ANIMATIONS 
function applyAnimations() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    // MOBILE ANIMATIONS
    gsap.to(".animated-heading h1", {
      x: "-400%", // Use `x` for horizontal movement
      scrollTrigger: {
        trigger: ".animated-heading",
        start: "top 0%",
        end : 'top -100%',
        scrub: 2,
      },
    });

        // EXPERIENCE HEADING
        gsap.to(".experience-heading h1", {
          x: "-800%", // Use `x` for horizontal movement
          scrollTrigger: {
            trigger: ".experience-heading",
            start: "top 0%",
            end : 'top -100%',
            scrub: 2,
          },
        });

        

    // EXPERTISE SECTION ANIMATION
    gsap.from(
      ".page2-heading:nth-last-child(1) .expertise-list .expertise h2",
      {
        y: 100,
        opacity: -2,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger:
            ".page2-heading:nth-last-child(1)",
            start: "top 0%",
        },
      }
    );
  } else {
    // WEB ANIMATIONS
    // PAGE 1

    // HEADER ANIMATION
    gsap.from("header h1 span:nth-child(1)", {
      y: -200,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from("header h1 span:nth-child(2)", {
      y: 50,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from("#scroll-down", {
      scale: 0,
      duration: 1.5,
      opacity: 0,
    });

    // PROJECT HEADING
    gsap.to(".animated-heading h1", {
      transform: "translateX(-200%)",
      scrollTrigger: {
        trigger: ".animated-heading",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });

    // EXPERIENCE HEADING
    gsap.to(".experience-heading h1", {
      transform: "translateX(-200%)",
      scrollTrigger: {
        trigger: ".experience-heading",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });

    // PROJECT IMAGES ANIMATION
    gsap.fromTo(
      ".project-image:nth-child(1) img",
      {
        zIndex: -1,
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        zIndex: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".page2",
          start: "top 0%",
          end: "top -100%",
        },
      }
    );

    // EXPERTISE SECTION ANIMATION
    gsap.from(
      ".page2-heading:nth-last-child(1) .expertise-list .expertise h2",
      {
        y: 100,
        opacity: -2,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger:
            ".page2-heading:nth-last-child(1) .expertise-list .expertise h2",
          start: "top 80%",
        },
      }
    );
  }
}

applyAnimations();
window.addEventListener("resize", applyAnimations);
