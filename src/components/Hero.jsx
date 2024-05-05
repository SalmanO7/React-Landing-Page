import React from 'react'

const Hero = () => {
    return (
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='heroBtn'>
                    <button>Shop Now</button>
                    <button className='secondBtn'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Available On</p>
                    <div className='brandIcons'>
                        <img src="/images/amazon.png" alt="brandIcons" />
                        <img src="/images/flipkart.png" alt="brandIcons" />
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                <img src="/images/hero-image.png" alt="HeroImage" />
            </div>
        </main>
    )
}

export default Hero