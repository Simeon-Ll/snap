import React from "react";
import ImgDesktop from '../assets/images/image-hero-desktop.png'
import ImgMobile from '../assets/images/image-hero-mobile.png'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'
import audiophile from '../assets/images/client-audiophile.svg'

export default function Hero(){
    return(
        <div className="hero">
            <div className="left">
                <h1>
                    Make remote work
                </h1>
                <p>
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and
                    watch productivity soar.
                </p>
                <button>
                    Learn more
                </button>
                <div className="trusted">
                    <img src={databiz} alt="" />
                    <img src={audiophile} alt="" />
                    <img src={meet} alt="" />
                    <img src={maker} alt="" />
                </div>
            </div>
            <picture>
                <source media="(max-width: 780px)" srcset={ImgMobile} />
                <img src={ImgDesktop} alt="" />
            </picture>
        </div>
    )
}