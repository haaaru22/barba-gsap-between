console.clear();

function pageTransition() {
    let tl = gsap.timeline();
    gsap.to("img", { duration: 0.4, opacity: 0 });

    tl.set(".transition-container span", { pointerEvents: "all" })
        .to("span#from-top", {
            duration: 0.4,
            transformOrigin: "top center",
            scaleY: 1,
            top: "0 %",
            delay: 0.2,
        })
        .to(
            "span#from-bottom",
            {
                duration: 0.4,
                transformOrigin: "bottom center",
                scaleY: 1,
                delay: 0.2,
            },
            "-=0.6"
        );
    tl.to("span#from-top", {
        duration: 0.4,
        transformOrigin: "bottom center",
        scaleY: 0,
        delay: 0.6,
    })
        .to(
            "span#from-bottom",
            {
                duration: 0.4,
                transformOrigin: "top center",
                scaleY: 0,
                delay: 0.6,
            },
            "-=1"
        )
        .set(".transition-container", { pointerEvents: "none" });
}

function fadeInContent() {
    let tl = gsap.timeline();

    tl.set(".transition-element", { top: "5%", opacity: 0 })
        .set("img", { opacity: 0 })

        .to(".transition-element", {
            duration: 0.4,
            top: "0%",
            opacity: 1,
            stagger: 0.1,
        })

        .to(
            "img",
            {
                duration: 0.4,
                opacity: 0.45,
            },
            "-=0.4"
        );
}

function fadeOutContent() {
    let tl = gsap.timeline();

    tl.to(".transition-element", {
        duration: 0.4,
        top: "5%",
        opacity: 0,
        stagger: -0.1,
    }).to("img", { duration: 0.4, opacity: 0 }, "-=0.4");
}


barba.init({
    sync: true,
    transitions: [{
        async leave() {
            
        }
    }]
})

function delay(n) {
    n = n || 2000;
    return new Promise({ done } => {
        setTimeout(() => {
            done();
        }, n);
});
}