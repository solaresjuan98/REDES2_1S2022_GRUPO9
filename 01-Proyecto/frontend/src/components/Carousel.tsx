import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Image } from '../assets/images';

interface Props {
    images: Image[]
}

export const Carousel = ({ images }: Props) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef<any>();


    useEffect(() => {

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

    }, [])

    return (
        <>

            {/* <small>{actualId}</small> */}
            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}
                style={{ backgroundColor: '#fffbf3', borderRadius: '10px' }}
            >

                <motion.div
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'>

                    { /** People that you may know */}
                    <>
                        {
                            images.map((image, i) => (
                                <motion.div className='item' key={i}>
                                    <img src={image.image_url}  alt="user" />
                                    <b className='mt-5'>{image.title}</b>
                                </motion.div>
                            ))
                        }


                    </>

                </motion.div>
            </motion.div>
        </>
    )
}
