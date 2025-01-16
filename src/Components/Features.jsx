import React, {  useRef, useState } from 'react'



const BentoTilt = ({children , className=""}) =>{

    const [transformStyle , setTransformStyle] = useState('')
    const itemRef = useRef();

    const handleMouseMove = (e) =>{
        if(!itemRef.current){
            return
        }

        const {left , top , width , height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width
        const relativeY = (e.clientY - top) / height

        const tiltX = (relativeY - 0.5) * 5
        const tiltY = (relativeX - 0.5) * -5 

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95) `


        setTransformStyle(newTransform);
    }

    const handleMouseLeave= (e) =>{
        setTransformStyle('')
    }



    return <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform : transformStyle}}>
        {children}
    </div>
}





const BentoCard = ({src , title , description }) =>{

    return (
        <div className='relative size-full'>
            <video src={src} loop muted autoPlay className='absolute left-0 top-0 size-full object-cover object-center'/>

            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>}
                </div>
            </div>
        </div>
    );
}







function Features() {
  return (
    <section className='bg-black pb-52 '>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>

                <p className='font-circular-web text-lg text-blue-50'>Into Our World</p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a possimus nihil dolores eaque quasi consequatur labore. Ipsa in at nihil animi delectus numquam, iusto consequuntur recusandae esse? Vel, ex?</p>

            </div>
                <BentoTilt className='border-hsla relative mb-7  h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>

                    <BentoCard 
                        src='videos/feature-1.mp4'
                        title = {
                            <>radiant</>
                        }
                        description = 'projects for companies'
                    
                    />
                </BentoTilt>

                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                            <BentoCard src={'videos/feature-2.mp4'} title = {"LIGMA"} description={"balls"}/>

                        </BentoTilt>

                        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                                <BentoCard src={'videos/feature-3.mp4'} title = {"LIGMA"} description={"balls"} />
                        </BentoTilt>
                        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                                <BentoCard src={'videos/feature-4.mp4'} title = {"LIGMA"} description={"balls"} />
                        </BentoTilt>
                </div>
            </div>
        
        
    </section>
  )
}

export default Features
