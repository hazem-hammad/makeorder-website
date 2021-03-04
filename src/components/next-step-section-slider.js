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
// import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default class NextStepSectionSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            slideIndex: 0,
            updateCount: 0
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    handleClick = () => {
    }


    render() {
        // let settings={
        //     afterChange: () =>
        //         this.setState(state => ({ updateCount: state.updateCount + 1 })),
        //     beforeChange: (current, next) => this.setState({ slideIndex: next })
        // }
        let  responsive= [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode:true,
                    infinite: false,
                    centerPadding: "30px",
                    rtl:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode:true,
                    infinite: false,
                    centerPadding: "30px",
                    rtl:true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:true,
                    infinite: false,
                    centerPadding: "30px",
                    rtl:true
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
                            swipeToSlide={false}
                            draggable={false}
                            focusOnSelect={false}
                            className=" slider1 "
                            responsive={responsive}
                            pauseOnHover={false}
                            autoplay={true}
                            fade={false}
                            rtl={true}
                            speed= {800}
                            autoplaySpeed= {3000}
                        >
                            <div className='main-slide-item info-color'   onClick={(e) => {this.slider2.slickGoTo('3')}}>
                                <h3 className="title">
                                    <Image src={shopIcon} className='icon'/>
                                    <span>مطعمك اونلاين</span>
                                </h3>
                            </div>

                            <div className='main-slide-item warning-color' onClick={(e) => {this.slider2.slickGoTo('2')}}>
                                <h3 className="title">
                                    <Image src={iPhoneIcon} className='icon'/>
                                    <span>  قنوات متعددة </span>
                                </h3>
                            </div>
                            <div className='main-slide-item success-color' onClick={(e) => {this.slider2.slickGoTo('1')}}>
                                <h3 className="title">
                                    <Image src={userIcon} className='icon'/>
                                    <span> قوة وسهولة </span>
                                </h3>
                            </div>

                            <div className='main-slide-item primary-color' onClick={(e) => {this.slider2.slickGoTo('0')}}>
                                <h3 className="title">
                                    <Image src={usersIcon} className='icon'/>
                                    <span> تكامل </span>
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
                            // autoplay={true}
                            fade={true}
                            // speed= {800}
                            // autoplaySpeed= {3000}
                            pauseOnHover={false}
                            // rtl={true}
                        >
                            <div className="content-preview">
                                <Row>
                                    <Col lg="5">
                                        <div>
                                            <h2 className="title">خيارات دفع وتوصيل ومميزات لانهائية  </h2>
                                            <p className="paragraph">
                                                لن تحتاج شئ إلا الإبداع فى تقديم الأطباق الشهية فنحن نوفر مجموعة كبيرة من الترابط مع مختلف مقدمي الخدمات, مثل خدمات التوصيل , الدفع, التسويق, الاحصائيات, الولاء
                                            </p>
                                            <Button variant="warning" size="lg">   ابدأ الآن مجانا  </Button>
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
                                            <h2 className="title">إدارة سهلة و خصائص قياسية مع احصائيات احترافيه</h2>
                                            <p className="paragraph">
                                                مع لوحة تحكم تمنحك السيطرة الكاملة والمتابعة الفورية لمبيعاتك, بسهولة ستتمكن من ضبط الاعدادت الخاصة بفروع مطعمك والمناطق التي تغطيها ومواعيد العمل وخيارات الدفع  والتوصيل وقوائم الطعام المختلفة بما في ذلك الصور والسعرات الحرارية  وبالتأكيد السعر بكل مرونة, واضافة الموظفين بصلاحيات مختلفة, كما ستمكنك من فهم أكثر ودقيق لزبائنك
                                            </p>
                                            <Button variant="warning" size="lg">   ابدأ الآن مجانا </Button>
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
                                            <h2 className="title">قنوات بيع وتواصل متعددة  </h2>
                                            <p className="paragraph">
                                                سيتمكن زبائنك من مشاهدة قائمة الطعام والطلب عبر الفيسبوك, الانستقرام وجوجل للأعمال! وواتساب
                                            </p>
                                            <Button variant="warning" size="lg">    ابدأ الآن مجانا </Button>
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
                                            <h2 className="title">موقعك و تطبيقك الخاص بعلامتك التجارية </h2>
                                            <p className="paragraph">
                                                حان الوقت لامتلاكك لموقعك الخاص وكذلك تطبيقك بأسم مطعمك ليقوم زبائنك بمشاهدة قوائم الطعام والطلب بكل سهولة مع خاصية التسجيل السريع و الطلب  ثم الدفع عبر الوسائل الدفع المتعددة ومتابعة حالة الطلب لحظة بلحظة
                                            </p>
                                            <Button variant="warning" size="lg">   ابدأ الآن مجانا </Button>
                                        </div>
                                    </Col>
                                    <Col lg="7">
                                        <div className="customer-preview-box">
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
