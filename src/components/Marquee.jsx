import { motion } from 'framer-motion';

function Marquee() {
  const marquee = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 8,  // tweak speed here
        }
      }
    }
  };
  return (
    <div className='w-full py-17 bg-[#004d3b] rounded-tl-3xl rounded-tr-3xl'>
      <div className='overflow-hidden border-t border-b border-zinc-100'>
        <motion.div  className="flex whitespace-nowrap gap-x-[7vw]"
        variants={marquee}
        animate="animate">
          <motion.h1
            className="text-[18vw] font-semibold uppercase leading-none text-zinc-300 font-[grostesk-semibold-v1]"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            className="text-[18vw] font-semibold uppercase leading-none text-zinc-300 font-[grostesk-semibold-v1]"
          >
            We are ochi
          </motion.h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee