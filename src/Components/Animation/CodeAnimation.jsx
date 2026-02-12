import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CodeAnimation() {
    const codeSnippets = [
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
    ];

    const [activeCodes, setActiveCodes] = useState([]);

    const longList = Array.from({ length: 100 }, () =>
        codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const randomCode =
                longList[Math.floor(Math.random() * longList.length)];
            const id = Date.now() + Math.random();

            setActiveCodes((prev) => [
                ...prev,
                {
                    id,
                    text: randomCode,
                    top: `${Math.random() * 90}%`,
                    left: `${Math.random() * 80}%`,
                    duration: 3 + Math.random() * 2,
                },
            ]);

            setActiveCodes((prev) => prev.slice(-15));
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] opacity-60 bg-black/ջ0 font-mono text-green-400/80 pointer-events-none z-0">
            {activeCodes.map((code) => (
                <TypingLine
                    key={code.id}
                    text={code.text}
                    top={code.top}
                    left={code.left}
                    duration={code.duration}
                />
            ))}
        </div>
    );
}

function TypingLine({ text, top, left, duration }) {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayed((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
        }, (duration * 1000) / text.length);

        if (index >= text.length) clearInterval(interval);
        return () => clearInterval(interval);
    }, [index, text, duration]);

    return (
        <motion.pre
            className="absolute text-2xl  whitespace-pre leading-5 select-none"
            style={{
                top,
                left,
                transform: `rotate(${Math.random() * 4 - 2}deg)`,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: [0.3, 1, 0.3],
                y: [10, -10],
            }}
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
