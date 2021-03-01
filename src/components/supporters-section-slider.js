import React, { Component } from "react";
import Slider from "react-slick";
// import Container from "react-bootstrap/Row";
import logo01 from '../assets/images/logos/3TeVrBi8yv 1.png'
import logo02 from '../assets/images/logos/19399014_10155401605188554_4262543020682209349_n-removebg-preview 1.png'
import logo03 from '../assets/images/logos/download__10_-removebg-preview (1) 1.png'
import logo04 from '../assets/images/logos/images 1.png'
import logo05 from '../assets/images/logos/New-Header3 1.png'
import logo06 from '../assets/images/logos/Subway_2016_logo 1.png'
import Image from "react-bootstrap/Image";
// import {Col,Row} from "react-bootstrap";


export default class SupportersSectionSlider extends Component {
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
                    slidesToShow: 2,
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
                    centerPadding: "60px",
                }
            }
        ]

        return (
            <div className={`supporters-slider horizontal ${ this.props.className }`}>
                <p className="text-center supporters-slider-title"> موثوقين من قبل اكثر من ١٠ الاف مطعما في الشرق الاوسط </p>
                <div>
                    <Slider
                        slidesToShow={6}
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
                    >
                        <Image src={logo01} className="image-preview"/>
                        <Image src={logo02} className="image-preview"/>
                        <Image src={logo03} className="image-preview"/>
                        <Image src={logo04} className="image-preview"/>
                        <Image src={logo05} className="image-preview"/>
                        <Image src={logo06} className="image-preview"/>
                        <Image src={logo01} className="image-preview"/>

                    </Slider>
                </div>
            </div>
        );
    }
}
