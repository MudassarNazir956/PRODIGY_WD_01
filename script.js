function headerAnimation() {
    const tl = gsap.timeline();

    tl.from("nav", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1,0.3)",
    });

    tl.from(".nav__links li", {
        y: -20,
        opacity: 0,
        stagger: 0.3,
        duration: 0.7,
        ease: "elastic.out(1.5,0.4)",
    });

    tl.from(".header__text", {
        x: -250,
        opacity: 0,
        duration: 0.5,
    });
    tl.from(
        ".header__image",
        {
            x: 250,
            opacity: 0,
            duration: 0.5,
        },
        "-=0.5"
    );

}

headerAnimation();



function overAnimation() {
    
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top 10%",
    end: "bottom 80%",
    scrub: 1,
    // markers: true
  },
});

    
tl3
  .from(".section__heading", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".form__group",
    {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

    
tl3
  .from(".plan__container .subheader", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".plan__container .section__header",
    {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".plan__content",
    {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

    
tl3
  .from(".memories__header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".memories__card",
    {
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

    
tl3
  .from(".lounge__content .section__header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".lounge__details",
    {
      x: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

    
tl3
  .from(".travellers__container .section__header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".travellers__card",
    {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

    
tl3
  .from(".subscribe__container .section__header", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  })
  .from(
    ".subscribe__form",
    {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.5"
  );

    
tl3.from(".footer__container .footer__col", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

}

overAnimation();



