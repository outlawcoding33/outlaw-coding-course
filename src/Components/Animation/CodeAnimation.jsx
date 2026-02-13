import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CodeAnimation() {
    const prefersReducedMotion = useReducedMotion();

    const codeSnippets = useMemo(
        () => [
            `const greet = (name) => console.log("Hello, " + name);`,
            `for (let i = 0; i < 10; i++) console.log(i);`,
            `function sum(a, b) { return a + b; }`,
            `const colors = ["#5d8c73", "#FFD700", "#222"];`,
            `let user = { name: "Val", age: 25 };`,
            `class Animal { speak() { console.log("Woof!"); } }`,
            `const now = new Date().toLocaleTimeString();`,
            `import React from "react";`,
            `const btn = document.querySelector("#start");`,
            `try { JSON.parse("bad"); } catch(e) { console.error(e); }`,
            `fetch("/api/data").then(r => r.json());`,
            `const random = Math.floor(Math.random() * 100);`,
            `document.body.style.background = "black";`,
            `console.log("Learning React + Tailwind!");`,
            `let score = 0; score += 10;`,
        ],
        []
    );

    const longList = useMemo(
        () =>
            Array.from({ length: 120 }, () => {
                return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            }),
        [codeSnippets]
    );

    const [activeCodes, setActiveCodes] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const intervalMs = isMobile ? 1200 : 800;
        const maxLines = isMobile ? 8 : 15;

        const interval = setInterval(() => {
            const randomCode = longList[Math.floor(Math.random() * longList.length)];
            const id = Date.now() + Math.random();

            const leftMax = isMobile ? 60 : 80;
            const topMax = isMobile ? 92 : 90;

            const item = {
                id,
                text: randomCode,
                top: `${Math.random() * topMax}%`,
                left: `${Math.random() * leftMax}%`,
                duration: (isMobile ? 2.6 : 3.2) + Math.random() * (isMobile ? 1.2 : 2),
                rotate: Math.random() * 4 - 2,
            };

            setActiveCodes((prev) => [...prev, item].slice(-maxLines));
        }, intervalMs);

        return () => clearInterval(interval);
    }, [isMobile, longList, prefersReducedMotion]);

    const headerH = isMobile ? 64 : 72;

    if (prefersReducedMotion) return null;

    return (
        <div
            className="fixed left-0 right-0 opacity-60 font-mono text-green-400/80 pointer-events-none z-0 overflow-hidden"
            style={{
                top: `${headerH}px`,
                height: `calc(100dvh - ${headerH}px)`,
            }}
        >
            {activeCodes.map((code) => (
                <TypingLine
                    key={code.id}
                    text={code.text}
                    top={code.top}
                    left={code.left}
                    duration={code.duration}
                    rotate={code.rotate}
                    isMobile={isMobile}
                />
            ))}
        </div>
    );
}

function TypingLine({ text, top, left, duration, rotate, isMobile }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayed("");

        const stepMs = Math.max(18, (duration * 1000) / Math.max(10, text.length));
        const interval = setInterval(() => {
            i += 1;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(interval);
        }, stepMs);

        return () => clearInterval(interval);
    }, [text, duration]);

    return (
        <motion.pre
            className={`absolute whitespace-pre select-none overflow-hidden ${isMobile ? "text-xs leading-4" : "text-2xl leading-5"
                }`}
            style={{
                top,
                left,
                transform: `rotate(${rotate}deg)`,
                maxWidth: "90vw", // ՍԱ ա scroll-ը փակող հիմնականը
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.25, 1, 0.25], y: [10, -10] }}
            transition={{ duration: duration * 2, repeat: Infinity, ease: "easeInOut" }}
        >
            {displayed}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
            >
                |
            </motion.span>
        </motion.pre>
    );
}
