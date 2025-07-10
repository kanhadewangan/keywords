import React from "react";
import { motion ,useMotionValue} from "motion/react";

const Quiz = () => {
    const scale = useMotionValue(1)
    const Rampage =(e) =>{
        scale.set(parseFloat(e.target.value))

    }
  return <> 

            <div className="bg-gray-500 w-[20vh] h-[50vh]  rounded-4xl">
            <motion.div
             animate ={{
                opacity:[0,1,0],
                transition:{
                repeat:Infinity,
                duration:3,
                repeatDelay:1                    
                }
             }}
            className="h-10  fadeout"
            style={{scale}}
>
            <h1 
            className="m-5 text-7xl overflow-hidden ">responsive</h1>
            </motion.div>
            <div className="mt-[30px]">
            <input type="range" 
                min ={0.4}
                defaultValue={1}
                onChange={Rampage}
                name="" id="" />
            </div>
               
            </div>
        
        
        
        </>;
};

export default Quiz;
