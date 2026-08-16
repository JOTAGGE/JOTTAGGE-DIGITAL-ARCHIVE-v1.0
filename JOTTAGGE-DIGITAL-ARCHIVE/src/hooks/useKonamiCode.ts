"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export function useKonamiCode() {
    const [isActivated, setIsActivated] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === KONAMI_CODE[index]) {
                if (index === KONAMI_CODE.length - 1) {
                    setIsActivated((prev) => !prev);
                    setIndex(0);
                } else {
                    setIndex((prev) => prev + 1);
                }
            } else {
                setIndex(0);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [index]);

    return isActivated;
}
