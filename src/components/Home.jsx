import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
    const links = ["About", "Home", "Sections"];

    return (
        <>
            <div className="h-screen w-screen relative">
                <video
                    className="h-screen w-screen object-cover absolute top-0 left-0"
                    src="src/assets/1746e4fd0dbdf67bc0a4e465a00c3b30.mp4"
                    autoPlay
                    loop
                    muted
                    alt="background"
                />
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <nav className="absolute top-6 right-0.5 z-20 text-white text-xl font-bold">
                    {links.map((item, key) => (
                        <a href="#" className="m-4 p-3" key={key}>{item}</a>
                    ))}
                </nav>
                <h1 className="text-4xl   font-extrabold font-serif text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 drop-shadow-lg">
                    <Typewriter
                        words={["Unleash Your Potential, One Key at a Time."]}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />

                </h1>
                <h3 className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-2xl text-white">
                    <Typewriter
                        words={["World Are Waiting for The New Revolution"]}
                        loop={0}
                        cursor
                        cursorStyle="~"
                        typeSpeed={70}
                        delaySpeed={2000}
                    />
                </h3>
            </div>

            <div className='h-screen w-screen absolute bg-zinc-300 grid grid-cols-3 '>
            <h1 className='text-5xl  font-semibold font-sans h-screen w-screen pt-[60px] text-center'>Why Choose KeyCraft?</h1>
            <div className=''></div>
            </div>
                        
                
              
        </>
    );
};