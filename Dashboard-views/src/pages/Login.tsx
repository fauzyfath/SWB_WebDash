import { useEffect, useState } from "react";
import figureAssets from "../assets/Group 22.png";

function Login() {
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1D1D43] font-[rethink sans] overflow-hidden relative">
      {/* Image Section */}
      <section className="w-full md:w-1/2 h-screen flex justify-center items-center">
        <figure className="w-4/5 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 overflow-hidden rounded-3xl">
          <img src={figureAssets} alt="" className="select-none w-full h-auto" />    
        </figure>
      </section>

      {/* Form Section */}
      <main className="w-full md:w-1/2 h-screen px-4 md:px-0">
        <header className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl 2xl:mt-28 mt-10 md:mt-20 font-[platypi] tracking-widest">
          <h1>AirWaste</h1> 
          <h1>Dashboard</h1>
        </header>
        <form action="post" className="flex flex-col gap-y-5 mt-6 xl:mt-5 xl:gap-y-3 2xl:mt-10 2xl:gap-y-6 md:mt-10">
          <h2 className="text-xl text-white font-semibold">Username</h2>
          <input 
            type="text" 
            className="w-full md:w-[90%] lg:w-[27rem] h-10 rounded-md focus:outline-none select-none placeholder:text-sm px-5" 
            placeholder="Username"
          />
          <h2 className="text-xl text-white font-semibold">Password</h2>
          <input 
            type="password" 
            className="w-full md:w-[90%] lg:w-[27rem] h-10 rounded-md focus:outline-none select-none placeholder:text-sm px-5" 
            placeholder="Password"
          />
          <a href="" className="text-white text-sm hover:underline w-fit">Forgot Password? &#62;</a>
        </form>
        
        <div className="flex flex-col">
          <button 
            type="button" 
            className="w-full md:w-[90%] lg:w-[27rem] h-10 mt-10 xl:mt-7 rounded-md font-semibold bg-slate-400"
          >
            Login
          </button>
          
          <div className="mt-6 relative flex items-center w-full md:w-[90%] lg:w-[27rem]">
            <div className="h-px bg-gray-400 flex-grow mr-4"></div>
            <h2 className="text-white">alternative</h2>
            <div className="h-px bg-gray-400 flex-grow ml-4"></div>
          </div>
          
          <button 
            type="button" 
            className="w-full md:w-[90%] lg:w-[27rem] h-10 mt-6 rounded-md font-semibold bg-slate-400 hover:bg-yellow-400"
          >
            Guest
          </button>
        </div>
      </main>

      {/* Decorative Elements - Adjusted for different screen sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Yellow Circle Decoration */}
        <div 
          className={`absolute top-1/2 md:top-80 xl:top-[28%] 2xl:top-[35%] right-0 xl:left-18 md:right-auto transform translate-x-1/2 xl:translate-x-1/3 2xl:translate-x-2/4 translate-y-1/2 w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[45rem] xl:w-[50rem] h-[20rem] sm:h-[30rem] md:h-[40rem] lg:h-[45rem] xl:h-[50rem] bg-yellow-400 rounded-full opacity-55 transition-all duration-1000 ease-in-out ${isPulsing ? 'scale-110 opacity-55': 'scale-100 opacity-55'}`}
        ></div>
        
        <div 
          className={`absolute top-[60%] md:top-[26rem] xl:top-[40%] 2xl:top-[45%] left-0 md:left-20 xl:left-0 transform translate-x-0 md:translate-x-1/4 lg:translate-x-1/3 xl:translate-x-80 2xl:translate-x-[60%] translate-y-1/2 w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[40rem] xl:w-[45rem] h-[18rem] sm:h-[25rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] bg-yellow-400 rounded-full opacity-65 transition-all duration-[1500ms] ease-in-out ${isPulsing?'scale-110 opacity-65':'scale-100 opacity-65'}`}
        ></div>
        
        <div 
          className={`absolute top-[70%] md:top-[32rem] xl:top-[53%] 2xl:top-[55%] left-0 md:left-40 xl:left-28 transform translate-x-1/4 lg:translate-x-1/3 xl:translate-x-60 2xl:translate-x-[55%] translate-y-1/2 w-[15rem] sm:w-[20rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem] h-[15rem] sm:h-[20rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] bg-yellow-400 rounded-full opacity-100 transition-all duration-[2000ms] ease-in-out ${isPulsing?'scale-110 opacity-100':'scale-100 opacity-100'}`}
        ></div>
        
        {/*Green Circle Decoration */}
        <div 
          className={`absolute right-0 md:right-auto md:left-[60%] lg:left-[70%] xl:left-[77rem] 2xl:left-[80%] top-0 md:top-[-10rem] lg:top-[-15rem] xl:top-[-20rem] transform translate-x-1/2 md:translate-x-1/4 lg:translate-x-1/3 xl:translate-x-1/4 translate-y-(-1/4) md:translate-y-(-2/5) xl:translate-y-(-3/5) w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[28rem] xl:w-[30rem] h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[28rem] xl:h-[30rem] bg-green-500 rounded-full opacity-80 transition-all duration-[2000ms] ease-in-out ${isPulsing ? 'scale-110 opacity-90' : 'scale-100 opacity-80'}`}
        ></div>
        
        <div 
          className={`absolute right-0 md:right-auto md:left-[55%] lg:left-[65%] xl:left-[71rem] 2xl:left-[75%] top-0 md:top-[-12rem] lg:top-[-17rem] xl:top-[-21rem] transform translate-x-1/3 md:translate-x-1/4 lg:translate-x-1/3 xl:translate-x-1/4 translate-y-(-1/4) md:translate-y-(-2/5) xl:translate-y-(-3/5) w-[17rem] sm:w-[23rem] md:w-[28rem] lg:w-[32rem] xl:w-[35rem] h-[17rem] sm:h-[23rem] md:h-[28rem] lg:h-[32rem] xl:h-[35rem] bg-green-500 rounded-full opacity-65 transition-all duration-[1500ms] ease-in-out ${isPulsing ? 'scale-110 opacity-65' : 'scale-100 opacity-65'}`}
        ></div>
        
        <div 
          className={`absolute right-0 md:right-auto md:left-[50%] lg:left-[60%] xl:left-[66rem] 2xl:left-[70%] top-0 md:top-[-14rem] lg:top-[-18rem] xl:top-[-22rem] transform translate-x-1/4 md:translate-x-1/4 lg:translate-x-1/3 xl:translate-x-1/4 translate-y-(-1/4) md:translate-y-(-2/5) xl:translate-y-(-3/5) w-[20rem] sm:w-[25rem] md:w-[32rem] lg:w-[36rem] xl:w-[40rem] h-[20rem] sm:h-[25rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] bg-green-500 rounded-full opacity-55 transition-all duration-[1000ms] ease-in-out ${isPulsing ? 'scale-110 opacity-55' : 'scale-100 opacity-55'}`}
        ></div>
      </div>
    </div>
  );
}

export default Login;