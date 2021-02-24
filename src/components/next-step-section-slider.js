import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import circleBg from '../assets/images/circle-bg01.png'
import customerImageSlide01 from '../assets/images/slide-image-customer.png'
import shopIcon from '../assets/images/shop-icon.svg'
import iPhoneIcon from '../assets/images/iPhoneX.png'
import userIcon from '../assets/images/user02.png'
import usersIcon from '../assets/images/user.png'
import Image from "react-bootstrap/Image";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default class NextStepSectionSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        let  responsive= [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    centerMode:true,
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        return (
            <div className="customer-slider horizontal">
                <Row>
                    <Col lg="12">
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            className=" slider1 "
                            responsive={responsive}
                        >
                            <div className='main-slide-item primary-color'>
                                <h3 className="title">
                                    <Image src={usersIcon} className='icon'/>
                                    <span>الادارة اسهل</span>
                                </h3>
                            </div>
                            <div className='main-slide-item success-color'>
                                <h3 className="title">
                                    <Image src={userIcon} className='icon'/>
                                    <span>عميلك اولا</span>
                                </h3>
                            </div>
                            <div className='main-slide-item warning-color'>
                                <h3 className="title">
                                    <Image src={iPhoneIcon} className='icon'/>
                                    <span>نوافذ بيع عديدة</span>
                                </h3>
                            </div>
                            <div className='main-slide-item info-color'>
                                <h3 className="title">
                                    <Image src={shopIcon} className='icon'/>
                                    <span>مطعمك اونلاين</span>
                                </h3>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg="12">
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            className=" customer-slider-preview next-step-slider-preview "
                            dots={false}
                            arrows={false}
                            autoplay={true}
                            fade={true}
                            speed= {800}
                            autoplaySpeed= {3000}
                        >
                            <div className="content-preview">
                                <Row>
                                    <Col lg="5">
                                        <div>
                                            <h2 className="title">ابدأ في استقبال طلبات مطعمك اونلاين </h2>
                                            <p className="paragraph">
                                                 موقعك وتطبيق بأسم مطعمك، ليقوم زبائنك بعرض قوائم الطعام والطلب بسهولة ثم الدفع بوسائل متعددة ومتابعة الطلب لحظة بلحظ
                                            </p>
                                            <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <div className="customer-preview-box primary-color">
                                            <Image src={circleBg} className='bg'/>
                                            <Image src={customerImageSlide01} className='image'/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="content-preview">
                                <Row>
                                    <Col lg="5">
                                        <div>
                                            <h2 className="title">ابدأ في استقبال طلبات مطعمك اونلاين </h2>
                                            <p className="paragraph">
                                                موقعك وتطبيق بأسم مطعمك، ليقوم زبائنك بعرض قوائم الطعام والطلب بسهولة ثم الدفع بوسائل متعددة ومتابعة الطلب لحظة بلحظ
                                            </p>
                                            <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <div className="customer-preview-box success-color">
                                            <Image src={circleBg} className='bg'/>
                                            <Image src={customerImageSlide01} className='image'/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="content-preview">
                                <Row>
                                    <Col lg="5">
                                        <div>
                                            <h2 className="title">ابدأ في استقبال طلبات مطعمك اونلاين </h2>
                                            <p className="paragraph">
                                                موقعك وتطبيق بأسم مطعمك، ليقوم زبائنك بعرض قوائم الطعام والطلب بسهولة ثم الدفع بوسائل متعددة ومتابعة الطلب لحظة بلحظ
                                            </p>
                                            <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <div className="customer-preview-box warning-color">
                                            <Image src={circleBg} className='bg'/>
                                            <Image src={customerImageSlide01} className='image'/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="content-preview">
                                <Row>
                                    <Col lg="5">
                                        <div>
                                            <h2 className="title">ابدأ في استقبال طلبات مطعمك اونلاين </h2>
                                            <p className="paragraph">
                                                موقعك وتطبيق بأسم مطعمك، ليقوم زبائنك بعرض قوائم الطعام والطلب بسهولة ثم الدفع بوسائل متعددة ومتابعة الطلب لحظة بلحظ
                                            </p>
                                            <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <div className="customer-preview-box info-color">
                                            <Image src={circleBg} className='bg'/>
                                            <Image src={customerImageSlide01} className='image'/>
                                            {/*<div className='background'>*/}
                                            {/*</div>*/}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </div>
        );
    }
}
