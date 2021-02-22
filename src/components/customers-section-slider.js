import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import circleBg from '../assets/images/circle-bg.png'
import customerImageSlide01 from '../assets/images/slide-image-customer.png'
import Image from "react-bootstrap/Image";


export default class CustomersSectionSlider extends Component {
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
        return (
            <div className="customer-slider vertical">
                <Row>
                    <Col lg="5">
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            vertical= {true}
                            className="slider1"
                        >
                            <div className='main-slide-item'>
                                <h3 className="title">الإستلام من الفرع</h3>
                                <p className="paragraph">
                                    سيتمكن زبائنك من الطلب أونلاين واختيار الإستلام من الفرع, ويمكنهم اختيار وقت الإستلام ايضا
                                </p>
                            </div>
                            <div className='main-slide-item'>
                                <h3 className="title">حجز طاولة طعام</h3>
                                <p className="paragraph">
                                     سيتمكن زبائنك من حجز طاولة وتحديد عدد الاشخاص بكل سهولة دون مزيد من الإتصالا
                                </p>
                            </div>
                            <div className='main-slide-item'>
                                <h3 className="title"> قوائم الانتظار</h3>
                                <p className="paragraph">
                                     بكل سهولة قم بتسجيل عملائك ليصلهم رسالة قصيرة أو عبر الواتساب فور جاهزيتك لخدمتهم
                                </p>
                            </div>
                            <div className='main-slide-item'>
                                <h3 className="title"> التوصيل السريع </h3>
                                <p className="paragraph">
                                    ستتمكن من توصيل الطلبات الى عملائك بالمناطق التي تغطيها سواء من خلالك أو عبر شركات التوصيل
                                </p>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg="7">
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            className="customer-slider-preview"
                            centerPadding={"10px"}
                            draggable= {true}
                            dots={false}
                            arrows={false}
                            infinite= {true}
                            pauseOnHover= {false}
                            swipe= {false}
                            touchMove= {false}
                            vertical= {true}
                            speed= {1000}
                            autoplaySpeed= {2000}
                            useTransform= {true}
                            cssEase= {'cubic-bezier(0.645, 0.045, 0.355, 1.000)'}
                            adaptiveHeight= {true}
                            autoplay={true}
                            verticalSwiping={true}
                        >
                            <div className="customer-preview-box">
                                <Image src={circleBg} className='bg'/>
                                <Image src={customerImageSlide01} className='image'/>
                            </div>
                            <div className="customer-preview-box">
                                <Image src={circleBg} className='bg'/>
                                <Image src={customerImageSlide01} className='image'/>
                            </div>
                            <div className="customer-preview-box">
                                <Image src={circleBg} className='bg'/>
                                <Image src={customerImageSlide01} className='image'/>
                            </div>
                            <div className="customer-preview-box">
                                <Image src={circleBg} className='bg'/>
                                <Image src={customerImageSlide01} className='image'/>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </div>
        );
    }
}
