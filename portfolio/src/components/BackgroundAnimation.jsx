import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        const particleCount = 200;
        
        // Mouse defaults off-screen so they don't instantly burst
        let mouseX = -1000;
        let mouseY = -1000;
        let isMoving = false;
        let moveTimeout;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                // Distribute evenly across the ENTIRE canvas
                this.x = Math.random() * (canvas.width || window.innerWidth);
                this.y = Math.random() * (canvas.height || window.innerHeight);

                // Small drift velocity to keep the background alive
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

                this.color = this.getRandomColor();
                this.opacity = Math.random() * 0.4 + 0.3; 
            }

            getRandomColor() {
                const colors = [
                    "255, 255, 255", // white
                    "251, 191, 36",  // gold
                    "217, 119, 6",   // deep amber
                    "20, 184, 166",  // ethnic teal
                    "225, 29, 72"    // ruby
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Keep particles slowly floating around when mouse is moving
                if (isMoving) {
                    this.x += this.vx;
                    this.y += this.vy;
                }

                // Bounce off edges smoothly
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // --- CURSOR INTERACTION ---
                let dx = this.x - mouseX;
                let dy = this.y - mouseY;
                let dist = Math.sqrt(dx * dx + dy * dy);

                // Visibility Logic: Invisible outside of ~5cm (approx 250px radius)
                this.currentOpacity = 0;
                if (dist < 250) {
                    // Fade in proportionally as they get within the 250px boundary
                    let fade = Math.max(0, Math.min(1, (250 - dist) / 50)); 
                    this.currentOpacity = this.opacity * fade;
                }

                // If cursor is actively moving, particles within 150px try to run away
                if (isMoving && dist < 150) {
                    // Force is inverse to distance
                    let force = (150 - dist) / 150;
                    this.x += (dx / dist) * force * 10; // Rapidly push outward
                    this.y += (dy / dist) * force * 10;
                }

                // Strict 75px (~2cm) Exclusion Zone: Prevents any particle from being "behind" or near cursor
                if (dist > 0 && dist < 75) {
                    let pushRatio = 75 / dist;
                    this.x = mouseX + dx * pushRatio;
                    this.y = mouseY + dy * pushRatio;
                }
            }

            draw() {
                // Do not render if completely invisible
                if (!this.currentOpacity || this.currentOpacity <= 0) return;

                ctx.fillStyle = `rgba(${this.color}, ${this.currentOpacity})`;
                ctx.shadowBlur = this.size * 2;
                ctx.shadowColor = `rgba(${this.color}, ${this.currentOpacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.shadowBlur = 0; // reset for performance
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
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
                isMoving = false; // "Paused" state when mouse stops
            }, 50);
        };

        const animate = () => {
            // Background color
            ctx.fillStyle = "#0f172a"; // slate 900
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
        />
    );
}





