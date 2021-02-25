import React, { Component } from "react";
import Slider from "react-slick";
import logo01 from '../assets/images/logos/476px-Facebook_Messenger_logo 1.png'
import logo02 from '../assets/images/logos/1024px-Facebook_Logo__2019_-removebg-preview 1.png'
import logo03 from '../assets/images/logos/7256989 1.png'
import logo04 from '../assets/images/logos/cib-intercom 1.png'
import logo05 from '../assets/images/logos/Logo-_Foodics-Gray-2048x424 1.png'
import logo06 from '../assets/images/logos/Mailchimp-logo 1.png'
import logo07 from '../assets/images/logos/qb_thumb 1.png'
import logo08 from '../assets/images/logos/qb_thumb 1 (1).png'
import logo09 from '../assets/images/logos/unnamed__1_-removebg-preview 1.png'
import logo10 from '../assets/images/logos/qb_thumb 1 (2).png'
import logo11 from '../assets/images/logos/qb_thumb 1 (3).png'
import logo12 from '../assets/images/logos/qb_thumb 1 (4).png'
import logo13 from '../assets/images/logos/qb_thumb 1 (5).png'
import logo14 from '../assets/images/logos/download (13) 1.png'
import logo15 from '../assets/images/logos/597px-WhatsApp 1.png'
import logo16 from '../assets/images/logos/1200px-Instagram_logo_2016 1.png'
import logo17 from '../assets/images/logos/Botme-Egypt-39970-1553547465 1.png'

import Image from "react-bootstrap/Image";


export default class IntegrationSection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let  responsive= [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 2,
                    centerMode:true,
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2,
                    centerMode:true,
                    infinite: true,
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true,
                    infinite: true,
                    centerPadding: "80px",
                }
            }
        ]

        return (
            <div className="integration-section">
                <div className="center-mode mb-3">
                    <h2 className="main-title">  التكامل خلال جميع الباقات </h2>
                    <p className="main-paragraph mb-5">
                        التوافق مع عدد كبير من تطبيقات التوصيل وخيارات الدفع والمزيد ...
                    </p>
                </div>
                <div className="integration-slider custom-width">
                    <p className="title">اضافات وتكامل غير محدود</p>
                    <Slider
                        slidesToShow={7}
                        swipeToSlide={true}
                        draggable= {true}
                        dots={false}
                        arrows={false}
                        infinite= {true}
                        swipe= {true}
                        touchMove= {true}
                        autoplay={true}
                        speed= {800}
                        autoplaySpeed= {3000}
                        responsive={responsive}
                        centerMode={true}
                        centerPadding={'65px'}
                    >
                        <div>
                        <span><Image src={logo01} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo02} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo03} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo04} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo05} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo06} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo07} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo08} className="image-preview"/></span>
                        </div>

                        <div>
                        <span><Image src={logo09} className="image-preview"/></span>
                        </div>


                    </Slider>
                    <Slider
                        slidesToShow={7}
                        swipeToSlide={true}
                        draggable= {true}
                        dots={false}
                        arrows={false}
                        infinite= {true}
                        swipe= {true}
                        touchMove= {true}
                        autoplay={true}
                        speed= {800}
                        autoplaySpeed= {3000}
                        responsive={responsive}
                        centerMode={true}
                        centerPadding={'65px'}
                    >
                        <div>
                            <span><Image src={logo10} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo12} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo13} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo14} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo15} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo16} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo17} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo11} className="image-preview"/></span>
                        </div>

                        <div>
                            <span><Image src={logo09} className="image-preview"/></span>
                        </div>


                    </Slider>
                </div>
            </div>
        );
    }
}
