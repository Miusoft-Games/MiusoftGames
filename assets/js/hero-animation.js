/* head move */
gsap.to("#Head", {
    rotation: 5, // Subtle rotation
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    onUpdate: function () {
        let angle = this.progress() * 10 - 8; // Rotates between -2 and 2 degrees
        let rad = (angle * Math.PI) / 180; // Convert to radians
        let cos = Math.cos(rad);
        let sin = Math.sin(rad);
        let px = -1217.4, py = 1095.8; // HeadPivot_1_ coordinates

        // Apply matrix transformation
        gsap.set("#Head", {
            transform: `matrix(${cos}, ${sin}, ${-sin}, ${cos}, ${px - cos * px + sin * py}, ${py - sin * px - cos * py})`
        });
    }
});

/* hand move */
gsap.to("#hand-rotation", {
    rotation: 5, // Subtle rotation
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    onUpdate: function () {
        let angle = this.progress() * -10;  // Rotates between
        let rad = (angle * Math.PI) / 180; // Convert to radians
        let cos = Math.cos(rad);
        let sin = Math.sin(rad);
        let px = -1300.4, py = 1133.3; // Hand pivot coordinates

        // Apply matrix transformation
        gsap.set("#hand-rotation", {
            transform: `matrix(${cos}, ${sin}, ${-sin}, ${cos}, ${px - cos * px + sin * py}, ${py - sin * px - cos * py})`
        });
    }
});

// Create a timeline for the blinking animation
const blinkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

blinkTimeline
    // Eye open for 2 seconds
    .to("#left-eye, #right-eye", {
        duration: 2,
        attr: { rx: 9.4 }, // Keep the eye open
        ease: "none"
    })

    // Blink for 0.2 seconds
    .to("#left-eye, #right-eye", {
        duration: 0.1,
        attr: { rx: 0 }, // Eye closes (reduce radius X to 0)
        ease: "power1.inOut"
    })
    
    // Eye open for another 2 seconds
    .to("#left-eye, #right-eye", {
        duration: 0.1,
        attr: { rx: 9.4 }, // Keep the eye open again
        ease: "none"
    })

// Eyebrow movement during blink (slightly raised eyebrows)
gsap.to("#left-eyebrow-path, #right-eyebrow-path", {
    duration: 2,
    y: -4, // Raise the left eyebrow slightly during blink
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});