import { useEffect, useRef } from "react";

export default function BackgroundAnimation({ theme }) {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        // Increase population for a much denser particle field
        const particleCount = 600;
        
        // Mouse defaults off-screen so they don't instantly burst
        let mouseX = -1000;
        let mouseY = -1000;
        let isMoving = false;
        let moveTimeout;

        const getColorsForTheme = (t) => {
            if (t === "light") {
                return [
                    "71, 85, 105", // slate 600
                    "180, 83, 9",  // amber 700
                    "15, 118, 110", // teal 700
                    "190, 18, 60",  // rose 700
                    "67, 56, 202"   // indigo 700
                ];
            }
            return [
                "255, 255, 255", // white
                "251, 191, 36",  // gold
                "217, 119, 6",   // deep amber
                "20, 184, 166",  // ethnic teal
                "225, 29, 72"    // ruby
            ];
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * (canvas.width || window.innerWidth);
                this.y = Math.random() * (canvas.height || window.innerHeight);

                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                
                const depthRandom = Math.random();
                if (depthRandom < 0.2) {
                    this.size = Math.random() * 1.5 + 2.5; 
                } else if (depthRandom < 0.6) {
                    this.size = Math.random() * 1 + 2; 
                } else {
                    this.size = Math.random() * 1 + 1; 
                }

                this.updateColor();
                this.opacity = Math.random() * 0.5 + 0.4; 
            }

            updateColor() {
                const colors = getColorsForTheme(theme);
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                if (isMoving) {
                    this.x += this.vx;
                    this.y += this.vy;
                }

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                let dx = this.x - mouseX;
                let dy = this.y - mouseY;
                let dist = Math.sqrt(dx * dx + dy * dy);

                this.currentOpacity = 0;
                if (dist < 250) {
                    let fade = Math.max(0, Math.min(1, (250 - dist) / 50)); 
                    this.currentOpacity = this.opacity * fade;
                }

                if (isMoving && dist < 150) {
                    let force = (150 - dist) / 150;
                    this.x += (dx / dist) * force * 10;
                    this.y += (dy / dist) * force * 10;
                }

                if (dist > 0 && dist < 75) {
                    let pushRatio = 75 / dist;
                    this.x = mouseX + dx * pushRatio;
                    this.y = mouseY + dy * pushRatio;
                }
            }

            draw() {
                if (!this.currentOpacity || this.currentOpacity <= 0) return;

                ctx.fillStyle = `rgba(${this.color}, ${this.currentOpacity})`;
                ctx.shadowBlur = this.size * 2;
                ctx.shadowColor = `rgba(${this.color}, ${this.currentOpacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const init = () => {
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push(new Particle());
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const onMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            isMoving = true;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                isMoving = false;
            }, 50);
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesRef.current.length; i++) {
                particlesRef.current[i].update();
                particlesRef.current[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        resize();
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            clearTimeout(moveTimeout);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-initialize or update on theme change

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    );
}





