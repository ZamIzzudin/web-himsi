import { useState, useEffect } from 'react'
import api from '../utils/api'
import { Carousel } from 'react-bootstrap'

import Loading from '../pages/Loading'

import '../styles/components/Hero.css'

const Hero = () => {
    const [slider, setSlider] = useState([])

    async function getDataSlider() {
        const data = await api.getSlider()

        setSlider(data)
    }

    useEffect(() => {
        getDataSlider()
    }, [])

    return (
        <div className='hero'>
            {slider.length === 0 && (
                <Loading />
            )}
            <Carousel >
                {slider?.map(item => (
                    <Carousel.Item interval={2000}>
                        <div className='gradient'>
                            <div className='gradient-overlay'></div>
                            <img
                                className="d-block w-100"
                                src={item?.gambar_slider.url}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 className='judul'>{item?.judul_slider}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Hero