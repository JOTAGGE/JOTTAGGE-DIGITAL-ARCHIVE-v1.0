"use client";

import { useEffect, ReactNode } from "react";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export default function EasterEggProvider({ children }: { children: ReactNode }) {
    const isKonamiActivated = useKonamiCode();

    useEffect(() => {
        // Secret Console Message
        console.log(
            "%c Oi! Que bom que você está olhando por baixo do capô. ☕",
            "color: #00ff00; font-size: 16px; font-weight: bold; background: #000; padding: 10px; border-radius: 5px;"
        );
        console.log(
            "%c Se você gostou do que viu, vamos bater um papo! \n LinkedIn: https://linkedin.com/in/josé-gabriel-a02125234 \n GitHub: https://github.com/JOTAGGE",
            "color: #fff; font-size: 14px;"
        );
    }, []);

    return (
        <div className={isKonamiActivated ? "matrix-mode" : ""}>
            {children}
        </div>
    );
}
