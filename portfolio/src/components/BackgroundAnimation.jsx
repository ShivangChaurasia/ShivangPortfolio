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
        const particleCount = 250;
        const mouse = { x: -1000, y: -1000, radius: 120 };
        let lastPulseTime = 0;
        let isPulsing = false;
        let pulseStartTime = 0;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * (canvas.width || window.innerWidth);
                this.y = Math.random() * (canvas.height || window.innerHeight);
                this.baseX = this.x;
                this.baseY = this.y;
                
                // Parallax depth: close (fast/large), mid (normal), far (slow/small)
                const depthRandom = Math.random();
                if (depthRandom < 0.2) {
                    this.depth = 1.5; // Foreground
                    this.size = Math.random() * 1.5 + 2.5; // 2.5-4px
                } else if (depthRandom < 0.6) {
                    this.depth = 1.0; // Mid
                    this.size = Math.random() * 1 + 2; // 2-3px
                } else {
                    this.depth = 0.5; // Background
                    this.size = Math.random() * 1 + 1; // 1-2px
                }

                this.color = this.getRandomColor();
                this.opacity = Math.random() * 0.4 + 0.3; // 0.3 - 0.7
                
                // Floating motion
                this.floatAngle = Math.random() * Math.PI * 2;
                this.floatSpeed = (Math.random() * 0.005 + 0.002) * this.depth;
                this.floatRadius = Math.random() * 10 + 10; // 10-20px
                
                // Pulse state
                this.pulseOffsetX = 0;
                this.pulseOffsetY = 0;
            }

            getRandomColor() {
                const colors = [
                    "255, 255, 255", // white #ffffff
                    "34, 211, 238",  // cyan #22d3ee
                    "59, 130, 246",  // blue #3b82f6
                    "168, 85, 247",  // purple #a855f7
                    "249, 115, 22"   // orange #f97316
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update(time, pulseFactor) {
                // 1. Floating Motion
                this.floatAngle += this.floatSpeed;
                const targetX = this.baseX + Math.cos(this.floatAngle) * this.floatRadius;
                const targetY = this.baseY + Math.sin(this.floatAngle) * this.floatRadius;

                // 2. Energy Pulse from center
                if (isPulsing) {
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    const angleFromCenter = Math.atan2(this.baseY - centerY, this.baseX - centerX);
                    const expansionDist = 20 * pulseFactor * this.depth; // Scale by depth
                    
                    this.pulseOffsetX = Math.cos(angleFromCenter) * expansionDist;
                    this.pulseOffsetY = Math.sin(angleFromCenter) * expansionDist;
                } else {
                    this.pulseOffsetX *= 0.9; // settle back smoothly
                    this.pulseOffsetY *= 0.9;
                }

                let currentTargetX = targetX + this.pulseOffsetX;
                let currentTargetY = targetY + this.pulseOffsetY;

                // 3. Mouse Interaction
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    // repel strength medium ~ 30
                    currentTargetX -= forceDirectionX * force * 30 * this.depth;
                    currentTargetY -= forceDirectionY * force * 30 * this.depth;
                }

                // Smooth return / easing
                this.x += (currentTargetX - this.x) * 0.04;
                this.y += (currentTargetY - this.y) * 0.04;
            }

            draw() {
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.shadowBlur = this.size * 2;
                ctx.shadowColor = `rgba(${this.color}, ${this.opacity})`;
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
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const onMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const animate = (time) => {
            // Background color
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Handle Pulse timing
            if (!isPulsing && time - lastPulseTime > 6000) { // Every ~6 seconds
                isPulsing = true;
                pulseStartTime = time;
                lastPulseTime = time;
            }

            let pulseFactor = 0;
            if (isPulsing) {
                const pulseProgress = (time - pulseStartTime) / 2000; // 2 second pulse duration
                if (pulseProgress >= 1) {
                    isPulsing = false;
                } else {
                    // Sine wave easing for smooth out and back
                    pulseFactor = Math.sin(pulseProgress * Math.PI); 
                }
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(time, pulseFactor);
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseleave", onMouseLeave);
        resize();
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
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





