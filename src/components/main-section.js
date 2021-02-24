import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import TypeIt from "typeit-react";
import Image from "react-bootstrap/Image";
import mainSectionPic from '../assets/images/mainSectionImage.png'
import mainSectionPic02 from '../assets/images/slide02.png'
import checkIcon from '../assets/images/checkIcon.png'




const MainSection = () => {
    let settings = {
        dots: false,
        arrows:false,
        infinite: true,
        centerMode:true,
        centerPadding:"0px",
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:false,
        fade: true,
        // cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        autoplay: true,
        autoplaySpeed: 3000,
        // rtl:true,
        pauseOnHover: false
    };
    return (
        <div className="main-section">
                <Slider {...settings} className="main-section-slider">
                    <div className="slide-item">
                        <Row className="justify-content-md-between align-items-center">
                            <Col lg="6">
                                <div className="content-slide">
                                    <h1 className="title">
                                        استقبل طلبات مطعمك اونلاين عبر
                                        <span                                             className="animated-text"
                                        >موقعك الخاص</span>
                                        {/*<TypeIt*/}
                                        {/*    className="animated-text"*/}
                                        {/*    options={{*/}
                                        {/*        strings: ["موقعك الخاص"],*/}
                                        {/*        speed: 100,*/}
                                        {/*        waitUntilVisible: true*/}
                                        {/*    }}*/}
                                        {/*/>*/}
                                        {/*<TypeIt*/}
                                        {/*    className="animated-text"*/}
                                        {/*    options={{*/}
                                        {/*        strings: ["موقعك الخاص"],*/}
                                        {/*        speed: 200,*/}
                                        {/*        waitUntilVisible: true,*/}
                                        {/*        loop: true,*/}
                                        {/*    }}*/}
                                        {/*    getBeforeInit={instance => {*/}
                                        {/*        instance*/}
                                        {/*            .pause(750)*/}
                                        {/*        return instance;*/}
                                        {/*    }}*/}
                                        {/*/>*/}

                                    </h1>
                                    <ul className="list-unstyled slider-list">
                                        <li>
                                            <Image src={checkIcon} className='icons'/>
                                            <p>
                                                <strong>بدون عمولة</strong>
                                                ، وفر اكبر قدر من ارباحك
                                            </p>
                                        </li>
                                        <li>
                                            <Image src={checkIcon} className='icons'/>
                                            <p>
                                                <strong>خلال دقائق</strong>
                                                ، استقبل الطلبات اونلاين خلال ٣٠ دقيقة
                                            </p>
                                        </li>
                                    </ul>
                                    <Button variant="warning" size="lg"> احصل علي ٣٠ يوم مجانا!</Button>

                                </div>
                            </Col>
                            <Col lg="6" >
                                <div className="image-demo-box">
                                    <Image src={mainSectionPic} className='image-demo'/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="slide-item">
                        <Row className="justify-content-md-between align-items-center">
                            <Col lg="6">
                                <div className="content-slide">
                                    <h1 className="title">
                                        استقبل طلبات مطعمك اونلاين عبر
                                        <span className="animated-text">تطبيق الموبايل</span>
                                        {/*<TypeIt*/}
                                        {/*    className="animated-text"*/}
                                        {/*    options={{*/}
                                        {/*        strings: ["جاهزين !"],*/}
                                        {/*        speed: 200,*/}
                                        {/*        waitUntilVisible: true,*/}
                                        {/*        loop: true,*/}
                                        {/*        startDelay:3300*/}

                                        {/*    }}*/}
                                        {/*    getBeforeInit={instance => {*/}
                                        {/*        instance*/}
                                        {/*            .pause(750)*/}
                                        {/*        return instance;*/}
                                        {/*    }}*/}
                                        {/*/>*/}
                                    </h1>
                                    <ul className="list-unstyled slider-list">
                                        <li>
                                            <Image src={checkIcon} className='icons'/>
                                            <p>
                                                <strong>بدون عمولة</strong>
                                                ، وفر اكبر قدر من ارباحك
                                            </p>
                                        </li>
                                        <li>
                                            <Image src={checkIcon} className='icons'/>
                                            <p>
                                                <strong>خلال دقائق</strong>
                                                ، استقبل الطلبات اونلاين خلال ٣٠ دقيقة
                                            </p>
                                        </li>
                                    </ul>
                                    <Button variant="warning" size="lg"> احصل علي ٣٠ يوم مجانا!</Button>

                                </div>
                            </Col>
                            <Col lg="6" >
                                <div className="image-demo-box">
                                    <Image src={mainSectionPic02} className='image-demo'/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
        </div>
    )
};

export default MainSection;
