import { Keyboard } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
    const links = ["Features", "Gallery", "Specs", "Support"];

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
                    <button className=' w-24 h-12 bg-blue-500 rounded-2xl text-lg font-medium font-sans mr-2'> Buy Now</button>
                </nav>
                <h1 className="text-4xl font-extrabold font-serif text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 drop-shadow-lg">
                    <Typewriter
                        words={["The Ultimate Typing Experience"]}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />

                </h1>
                <h3 className="absolute m-2 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-2xl text-white">
                    <Typewriter
                        words={["Introducing the KeyCraft keyboard, meticulously crafted for unparalleled comfort and precision. Elevate your typing to an art form."]}
                        loop={0}
                        cursor
                        cursorStyle="~"
                        typeSpeed={70}
                        delaySpeed={2000}
                    />
                </h3>
            </div>

            <div className='h-screen w-screen absolute bg-zinc-300  '>
                <div className=''>
                    <div>
                        <h1 className='text-5xl h-40 font-semibold font-sans  pt-[60px] m-4 text-start'>Features</h1>
                        <h1 className='text-4xl m-4 h-30 font-bold'>Crafted for Excellence</h1>
                        <p className='m-2'>Experience the difference with TypeCraft's innovative features.</p>
                        <div className=' w-screen  '>
                        <div className='  bg-amber-700 grid  grid-col-4  '>
                            <div className=' col-span-2 bg-amber-300 h-40 '>
                               <div> <Keyboard /></div>
                               <h3 className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at quod magnam recusandae optio voluptatibus explicabo maiores! Sed assumenda, ex aliquam ea aspernatur, omnis consectetur unde eos ad quas consequuntur.</h3>
                            </div>
                            <div className=' col-span-3 bg-amber-200'><Keyboard /></div>
                            <div className=' col-span-4 bg-amber-500'><Keyboard /></div>
                            <div className=' col-span-1 bg-amber-600'><Keyboard /></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};