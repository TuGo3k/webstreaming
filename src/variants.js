export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        opacity: 0, // Start with opacity 0 for smooth fade-in
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      },
      show: {
        opacity: 1, // End with full opacity
        y: 0,
        x: 0,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
      exit: {
        opacity: 0,
        // scale: 0.9,
        transition: { duration: 1.1, ease: "easeInOut" },
      },
    //   exit: {
    //     opacity: 0, // Fade out by reducing opacity to 0
    //     y: direction === "up" ? -40 : direction === "down" ? 40 : 0,
    //     x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    //     transition: {
    //       type: "tween",
    //       duration: 1,
    //       ease: [0.25, 0.25, 0.25, 0.75],
    //     },
    //   },
    };
  };
  