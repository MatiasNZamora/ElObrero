import video from '../assets/hero.webm';
import logo from '../assets/logo.png';
// import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <>
            <section className="relative flex h-screen items-center justify-center" id='init'>
                <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                    <video 
                        className='h-full w-full object-cover' 
                        muted 
                        autoPlay
                        loop
                        playsInline
                        // poster={hero}
                        src={video} 
                    ></video>
                </div>
                <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black'></div>
                <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
                    <motion.img 
                        initial={{opacity:0, y:50}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.5}}
                        src={logo} 
                        alt="el obrero"  
                        className='w-full p-4'
                    />
                    <p className='p-4 text-lg tracking-tighter text-white'> Argentina </p>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
