export const menuSlide = {
    initial: {
        x: "100%",
    },
    enter: {
        x: "0%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
}

export const linkSlide = {
    initial: {
        x: "80%",
    },
    enter: (delay = 0) => ({
        x: "0%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay },
    }),
    exit: (delay = 0) => ({
        x: "80%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay },
    }),
}
