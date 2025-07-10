import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
  const links = ["About", "Home", "Sections"];

  return (
    <>
    <div className="h-screen w-screen relative">
      <img className="h-screen w-screen object-cover absolute top-0 left-0" src="src/assets/image.png" alt="background" />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <nav className="absolute top-6 right-0.5 z-20 text-white text-xl font-bold">
        {links.map((item, key) => (
          <a href="#" className="m-4 p-3" key={key}>{item}</a>
        ))}
      </nav>
      <h1 className="text-4xl font-extrabold font-serif text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 drop-shadow-lg">
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
    <div className=' m-3 col-span-1'>
        <h1 className=' text-2xl  top-0 left-0 right-6'>Meet Our team  </h1>
        <p className='mt-4 text-base text-gray-700 max-w-2xl'>
          Our team is a passionate group of innovators, designers, and engineers dedicated to redefining the keyboard experience. With a shared vision for excellence and creativity, we work together to bring you products that combine cutting-edge technology with exceptional craftsmanship. Meet the people who make every keystroke extraordinary.
        </p>

    </div>
    <div className="bg-amber-400 flex flex-col items-center justify-center p-4">
  <img src="src\assets\design.png" alt="Team Member" className="w-26 h-26 rounded-full mb-2 object-contain" />
  <h2 className="font-bold">Jane Doe</h2>
  <p className="text-sm text-gray-800">Lead Designer</p>
</div>
    <div className='bg-blue-300 flex flex-col items-center justify-center p-4'>
      <h2 className="font-bold mb-2">Our Values</h2>
      <ul className="text-sm text-gray-800">
        <li>• Innovation</li>
        <li>• Quality</li>
        <li>• Community</li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded">Join Us</button>
    </div>
</div>

 </>     
  );
};