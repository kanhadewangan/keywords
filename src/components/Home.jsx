import { Zap, Shield, Palette, Headphones, Star, ChevronRight, CheckCircle, ArrowRight, Play, MousePointer, Cpu, Wifi, Keyboard } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import React from 'react';

export const Home = () => {
    const containerRef = useRef(null);
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const links = ["Features", "Gallery", "Specs", "Support"];

    const LogoSVG = (
        <svg
            width="40" height="40" viewBox="0 0 48 48" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
        >
            <rect x="4" y="12" width="40" height="24" rx="6" fill="url(#paint0_linear)"/>
            <rect x="8" y="16" width="32" height="16" rx="4" fill="#fff" fillOpacity="0.9"/>
            <rect x="12" y="20" width="4" height="4" rx="1" fill="#3b82f6"/>
            <rect x="20" y="20" width="4" height="4" rx="1" fill="#8b5cf6"/>
            <rect x="28" y="20" width="4" height="4" rx="1" fill="#f59e42"/>
            <rect x="36" y="20" width="4" height="4" rx="1" fill="#22d3ee"/>
            <rect x="16" y="28" width="16" height="4" rx="2" fill="#a3e635"/>
            <polygon points="24,8 27,16 21,16" fill="#facc15" />
            <defs>
                <linearGradient id="paint0_linear" x1="4" y1="12" x2="44" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6"/>
                    <stop offset="1" stopColor="#8b5cf6"/>
                </linearGradient>
            </defs>
        </svg>
    );

    const features = [
        {
            id: 1,
            icon: <Zap className="w-8 h-8" />,
            title: "Lightning Fast Response",
            description: "1ms response time with advanced mechanical switches for ultimate precision.",
            video: "src\\assets\\0c9e362a17b3d6a9ff9fb4e2619b4be5.mp4",
            image: "src/assets/design.png",
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            icon: <Shield className="w-8 h-8" />,
            title: "Premium Build Quality",
            description: "Aircraft-grade aluminum frame with premium PBT keycaps for durability.",
            video: "https://res.cloudinary.com/di6imgcup/video/upload/v1752414958/cd458ceafc0db91be7e7fa1c37da0f1a_o3lne0.mp4",
            image: "src/assets/image.png",
            color: "from-blue-400 to-purple-500"
        },
        {
            id: 3,
            icon: <Palette className="w-8 h-8" />,
            title: "Customizable RGB",
            description: "16.8 million colors with per-key customization and dynamic effects.",
            video: "https://console.cloudinary.com/app/c-82a10dbbc84a1516dc6763dc2d2ff5/assets/media_library/search/asset/4bfab3a38f6f3d6f4cf0f0cdc319e9e8/manage/summary?q=&view_mode=mosaic&context=manage",
            image: "src/assets/design.png",
            color: "from-pink-400 to-red-500"
        },
        {
            id: 4,
            icon: <Headphones className="w-8 h-8" />,
            title: "Silent Operation",
            description: "Advanced noise dampening technology for quiet, focused typing.",
            video: "https://res.cloudinary.com/di6imgcup/video/upload/v1752414886/42f01debb2d80ad2b9a1f147f3ba0634_rpqqoo.mp4",
            image: "src/assets/image.png",
            color: "from-green-400 to-teal-500"
        }
    ];

    const specs = [
        { label: "Switch Type", value: "Cherry MX Brown", icon: <MousePointer className="w-6 h-6" /> },
        { label: "Response Time", value: "1ms", icon: <Zap className="w-6 h-6" /> },
        { label: "Keycaps", value: "PBT Double-shot", icon: <Keyboard className="w-6 h-6" /> },
        { label: "Connectivity", value: "USB-C / Wireless 2.4GHz", icon: <Wifi className="w-6 h-6" /> },
        { label: "Battery Life", value: "Up to 200 hours", icon: <Cpu className="w-6 h-6" /> },
        { label: "Weight", value: "1.2kg", icon: <Shield className="w-6 h-6" /> }
    ];

    

   

    return (
        <div ref={containerRef} className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/di6imgcup/video/upload/v1752414806/1746e4fd0dbdf67bc0a4e465a00c3b30_qxjzwm.mp4"
                    autoPlay
                    loop
                    muted
                    alt="background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
                            animate={{
                                x: [0, Math.random() * window.innerWidth],
                                y: [0, Math.random() * window.innerHeight],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                left: Math.random() * 100 + "%",
                                top: Math.random() * 100 + "%",
                            }}
                        />
                    ))}
                </div>
                {/* Navigation */}
                <nav className="absolute top-0 left-0 right-0 z-50 p-6">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <motion.div 
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {LogoSVG}
                            <motion.span
                                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent tracking-tight drop-shadow-lg select-none"
                                initial={{ letterSpacing: "0.1em", scale: 1 }}
                                animate={{ letterSpacing: ["0.1em", "0.25em", "0.1em"], scale: [1, 1.08, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
                            >
                                KeyCraft
                            </motion.span>
                        </motion.div>
                        <motion.div 
                            className="hidden md:flex items-center space-x-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {links.map((item, key) => (
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    className="text-white hover:text-blue-400 transition-colors duration-300 font-medium relative group"
                                    key={key}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <motion.button 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium"
                                onHoverStart={() => {}}
                                onHoverEnd={() => {}}
                            >
                                Buy Now
                            </motion.button>
                        </motion.div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="relative z-40 text-center text-white max-w-4xl mx-auto px-6">
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Typewriter
                            words={["The Ultimate Typing Experience"]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={2000}
                        />
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <Typewriter
                            words={["Introducing the KeyCraft keyboard, meticulously crafted for unparalleled comfort and precision. Elevate your typing to an art form."]}
                            loop={0}
                            cursor
                            cursorStyle="~"
                            typeSpeed={70}
                            delaySpeed={2000}
                        />
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                    >
                        <motion.button 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center"
                            onHoverStart={() => {}}
                            onHoverEnd={() => {}}
                        >
                            Order Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </motion.button>
                        <motion.button 
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                            onHoverStart={() => {}}
                            onHoverEnd={() => {}}
                        >
                            <Play className="mr-2 w-5 h-5" />
                            Watch Demo
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section with Hover Effects */}
            <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Crafted for Excellence
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Experience the difference with KeyCraft's innovative features designed for professionals and enthusiasts alike.
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={feature.id}
                                className="relative group cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                onHoverStart={() => setHoveredFeature(feature.id)}
                                onHoverEnd={() => setHoveredFeature(null)}
                            >
                                {/* Hover Video/Image Overlay */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                                    initial={{ scale: 0.8 }}
                                    animate={hoveredFeature === feature.id ? { scale: 1 } : { scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {hoveredFeature === feature.id && (
                                        <video
                                            className="w-full h-full object-cover"
                                            src={feature.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20`}></div>
                                </motion.div>

                                {/* Feature Card */}
                                <motion.div 
                                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 relative z-20 group-hover:bg-gray-800/80 transition-all duration-500"
                                    animate={hoveredFeature === feature.id ? { y: -10, scale: 1.02 } : { y: 0, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div 
                                        className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white`}
                                        animate={hoveredFeature === feature.id ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Visual Excellence
                        </h2>
                        <p className="text-xl text-gray-300">
                            Every detail matters. See the craftsmanship up close.
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Premium Design", icon: <Keyboard className="w-16 h-16" />, desc: "Sleek aluminum frame with premium finishes", gradient: "from-blue-500 to-purple-600" },
                            { title: "RGB Mastery", icon: <Palette className="w-16 h-16" />, desc: "Customizable lighting for every mood", gradient: "from-green-500 to-blue-600" },
                            { title: "Performance", icon: <Zap className="w-16 h-16" />, desc: "Lightning-fast response for gaming", gradient: "from-orange-500 to-red-600" }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl text-white relative overflow-hidden group cursor-pointer`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                onHoverStart={() => setHoveredCard(index)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"
                                />
                                <div className="relative z-10">
                                    <motion.div 
                                        className="mb-4"
                                        animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-blue-100">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section id="specs" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Technical Specifications
                        </h2>
                        <p className="text-xl text-gray-300">
                            Built with cutting-edge technology for uncompromising performance.
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specs.map((spec, index) => (
                            <motion.div 
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                onHoverStart={() => setHoveredIcon(index)}
                                onHoverEnd={() => setHoveredIcon(null)}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-400 font-medium">{spec.label}</span>
                                    <motion.div
                                        className="text-blue-400"
                                        animate={hoveredIcon === index ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {spec.icon}
                                    </motion.div>
                                </div>
                                <p className="text-2xl font-bold text-white">{spec.value}</p>
                                <motion.div
                                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section id="support" className="py-20 bg-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            We're Here to Help
                        </h2>
                        <p className="text-xl text-gray-300">
                            Get the support you need, when you need it.
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Headphones className="w-8 h-8" />, title: "24/7 Support", desc: "Round-the-clock customer service for all your needs.", color: "blue" },
                            { icon: <Shield   color='blue' className="w-8 h-8" />, title: "3-Year Warranty", desc: "Comprehensive coverage for peace of mind.", color: "green" },
                            { icon: <Star  color = " blue " className="w-8 h-8" />, title: "Premium Service", desc: "Priority support for our valued customers.", color: "purple" }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className="text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 group cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                onHoverStart={() => setHoveredCard(index + 10)}
                                onHoverEnd={() => setHoveredCard(null)}
                            >
                                <motion.div 
                                    className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-${item.color}-600`}
                                    animate={hoveredCard === index + 10 ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 100 - 50],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                left: Math.random() * 100 + "%",
                                top: Math.random() * 100 + "%",
                            }}
                        />
                    ))}
                </div>
                
                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Ready to Transform Your Typing?
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 text-blue-100"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Join thousands of satisfied customers who've elevated their typing experience.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <motion.button 
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                            onHoverStart={() => {}}
                            onHoverEnd={() => {}}
                        >
                            Order Now - $299
                        </motion.button>
                        <motion.button 
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                            onHoverStart={() => {}}
                            onHoverEnd={() => {}}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};