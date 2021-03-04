import React from "react";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import TypeIt from "typeit-react";
import Image from "react-bootstrap/Image";
import mainSectionPic from '../assets/images/mainSectionImage.png'
import mainSectionPic02 from '../assets/images/slide02.png'
import checkIcon from '../assets/images/checkIcon.png'


const MainSection = () => {
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
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
                    <div className="background">
                        <div className="container">
                            <Row className="justify-content-md-between align-items-center ">
                                <Col lg="6">
                                    <div className="content-slide">
                                        <h1 className="title">
                                            أستقبل طلبات موقعك أونلاين عبر
                                            <span className="animated-text">موقعك الخاص</span>

                                        </h1>
                                        <ul className="list-unstyled slider-list">
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>بدون عمولة</strong>
                                                    صفر عموله لتوفر أكبر قدر من ارباحك
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>خلال دقائق</strong>
                                                    فقط دقائق من الاعدادات لتبدأ فى تلقى الطلبات
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong> لا نهائية </strong>
                                                    لا حدود لعدد الطلبات أو الاصناف أو الفروع
                                                </p>
                                            </li>
                                        </ul>
                                        <Button variant="warning" size="lg">ابدأ الآن مجانا </Button>

                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="image-demo-box">
                                        {/*<Image src={mainSectionPic} className='image-demo'/>*/}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Image src={mainSectionPic} className='image-demo-left'/>
                    </div>
                </div>
                <div className="slide-item">
                    <div className="background">
                        <div className="container">
                            <Row className="justify-content-md-between align-items-center">
                                <Col lg="6">
                                    <div className="content-slide">
                                        <h1 className="title">
                                            أستقبل طلبات موقعك أونلاين عبر
                                            <span className="animated-text"> تطبيقك الرائع</span>
                                        </h1>
                                        <ul className="list-unstyled slider-list">
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>بدون عمولة</strong>
                                                    صفر عموله لتوفر أكبر قدر من ارباحك
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>خلال دقائق</strong>
                                                    فقط دقائق من الاعدادات لتبدأ فى تلقى الطلبات
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong> لا نهائية </strong>
                                                    لا حدود لعدد الطلبات أو الاصناف أو الفروع
                                                </p>
                                            </li>
                                        </ul>
                                        <Button variant="warning" size="lg">ابدأ الآن مجانا </Button>

                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="image-demo-box">
                                        {/*<Image src={mainSectionPic02} className='image-demo'/>*/}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Image src={mainSectionPic02} className='image-demo-left'/>

                    </div>
                </div>
                <div className="slide-item">
                    <div className="background">
                        <div className="container">
                            <Row className="justify-content-md-between align-items-center">
                                <Col lg="6">
                                    <div className="content-slide">
                                        <h1 className="title">
                                            أستقبل طلبات موقعك أونلاين عبر
                                            <span className="animated-text">  الواتساب </span>
                                        </h1>
                                        <ul className="list-unstyled slider-list">
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>بدون عمولة</strong>
                                                    صفر عموله لتوفر أكبر قدر من ارباحك
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>خلال دقائق</strong>
                                                    فقط دقائق من الاعدادات لتبدأ فى تلقى الطلبات
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong> لا نهائية </strong>
                                                    لا حدود لعدد الطلبات أو الاصناف أو الفروع
                                                </p>
                                            </li>
                                        </ul>
                                        <Button variant="warning" size="lg">ابدأ الآن مجانا </Button>

                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="image-demo-box">
                                        {/*<Image src={mainSectionPic02} className='image-demo'/>*/}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Image src={mainSectionPic02} className='image-demo-left'/>

                    </div>
                </div>
                <div className="slide-item">
                    <div className="background">
                        <div className="container">
                            <Row className="justify-content-md-between align-items-center">
                                <Col lg="6">
                                    <div className="content-slide">
                                        <h1 className="title">
                                            أستقبل طلبات موقعك أونلاين عبر
                                            <span className="animated-text">  الفيسبوك  </span>
                                        </h1>
                                        <ul className="list-unstyled slider-list">
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>بدون عمولة</strong>
                                                    صفر عموله لتوفر أكبر قدر من ارباحك
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>خلال دقائق</strong>
                                                    فقط دقائق من الاعدادات لتبدأ فى تلقى الطلبات
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong> لا نهائية </strong>
                                                    لا حدود لعدد الطلبات أو الاصناف أو الفروع
                                                </p>
                                            </li>
                                        </ul>
                                        <Button variant="warning" size="lg">ابدأ الآن مجانا </Button>

                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="image-demo-box">
                                        {/*<Image src={mainSectionPic02} className='image-demo'/>*/}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Image src={mainSectionPic02} className='image-demo-left'/>

                    </div>
                </div>
                <div className="slide-item">
                    <div className="background">
                        <div className="container">
                            <Row className="justify-content-md-between align-items-center">
                                <Col lg="6">
                                    <div className="content-slide">
                                        <h1 className="title">
                                            أستقبل طلبات موقعك أونلاين عبر
                                            <span className="animated-text">  جوجل  </span>
                                        </h1>
                                        <ul className="list-unstyled slider-list">
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>بدون عمولة</strong>
                                                    صفر عموله لتوفر أكبر قدر من ارباحك
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong>خلال دقائق</strong>
                                                    فقط دقائق من الاعدادات لتبدأ فى تلقى الطلبات
                                                </p>
                                            </li>
                                            <li>
                                                <Image src={checkIcon} className='icons'/>
                                                <p>
                                                    <strong> لا نهائية </strong>
                                                    لا حدود لعدد الطلبات أو الاصناف أو الفروع
                                                </p>
                                            </li>
                                        </ul>
                                        <Button variant="warning" size="lg">ابدأ الآن مجانا </Button>

                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="image-demo-box">
                                        {/*<Image src={mainSectionPic02} className='image-demo'/>*/}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Image src={mainSectionPic02} className='image-demo-left'/>

                    </div>
                </div>


            </Slider>
        </div>
    )
};

export default MainSection;
