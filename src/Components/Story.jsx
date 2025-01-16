import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import gsap from 'gsap';

function Story() {

    const frameRef = useRef(null);

    const handleMouseLeave = ()=>{



    }

    const handleMouseMove  = (e) =>{
        const {clientX , clientY} = e ;

        const element = frameRef.current ; 

        if(!element) return ; 

        const rect = element.getBoundingClientRect();

        const x = clientX - rect.left ; 
        const y = clientY - rect-top ;

        const centerX = rect.width / 2 
        const centerY = rect.height / 2 ; 

        const rotateX = y-centerY / centerY * -10
        const rotateY = x-centerX / centerX * 10

        console.log(rotateX , rotateY)

        gsap.to(element , {
            duration : 0.3 , 
            rotateX : rotateX , 
            rotateY : rotateY ,
            transformPerspective : 500 , 
            ease : 'power1.inOut'
        })
    }
 


  return (
    <section id='story'  className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
    <p className='font-general text-sm uppercase md:text-[10px]'>The Abderhaman world</p>
        <div className='relative size-full '>
            <AnimatedText title={'Created something <br/> from nothing'} sectionId = '#story' containerClass={'mt-5 pointer-events-none mix-blend-difference relative z-10'}/>
            <div className='story-img-container '>
                <div className='story-img-mask'>
                    <div className='story-img-content'>
                        <img src='/img/entrance.webp' alt='entarnce' className='object-contain' ref={frameRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave}/>
                    </div>

                </div>

            </div>
        </div>
        </div>
       
    </section>
  )
}

export default Story
