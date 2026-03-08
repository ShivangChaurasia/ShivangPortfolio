import profileImg from "../assets/profile_avatar.png";

export default function Home() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="relative mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 animate-pulse"></div>
                <img
                    src={profileImg}
                    alt="Shivang Chaurasia"
                    className="relative w-40 h-40 rounded-full border-4 border-white/10 shadow-2xl animate-float"
                />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                Hi, I'm <span className="text-gradient">Shivang Chaurasia</span>
            </h1>

            <p className="max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed font-light">
                A passionate <span className="text-white font-medium">Software Developer</span> dedicated to building clean,
                high-performance web applications and creating exceptional digital experiences.
            </p>

            <div className="flex space-x-4">
                <a
                    href="#projects"
                    className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all"
                >
                    Get In Touch
                </a>
            </div>
        </div>
    );
}