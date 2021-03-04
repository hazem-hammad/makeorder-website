import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import circleBg from '../assets/images/circle-bg-02.png'
import customerImageSlide01 from '../assets/images/slide-image-customer.png'
// import shopIcon from '../assets/images/shop-icon.svg'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


export default class InterfaceSectionSlider extends Component {
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
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={false}
                            responsive={responsive}
                            className=" margin-right slider1"
                            pauseOnHover={false}
                            autoplay={true}
                            fade={false}
                            rtl={true}
                            speed= {800}
                            autoplaySpeed= {3000}
                        draggable={false}>


                            <div className='main-slide-item primary-color'  onClick={(e) => {this.slider2.slickGoTo('2')}}>
                                <h3 className="title"><span>  إدارة الفروع وقوائم الطعام  </span></h3>
                                <p className="paragraph">
                                    بكل سهولة ستتمكن من اضافة الفروع الخاصة بك مع تحديد النطاق الجغرافي للتوصيل وكذلك ساعات العمل وخيارات الدفع والتوصيل مع التحكم فى حاله الفرع مثل مشغول أو مغلق مؤقتاً و ستتمكن من اضافة قوائم الطعام والأصناف الخاصة بك بكل سهولة  والمزيد من المميزات...
                                </p>
                            </div>

                            <div className='main-slide-item success-color'  onClick={(e) => {this.slider2.slickGoTo('1')}}>
                                <h3 className="title"><span>  تطبيق للإدارة العليا  </span></h3>
                                <p className="paragraph">
                                    تطبيق خاص للإدارة العليا للمطعم لتبقيه دائما على اطلاع على عدد الطلبيات اليوم والأرباح وعدد العملاء والعديد من الإحصائيات المحدثه لحظياً  تبقيك دائما على إطلاع حيثما كنت.
                                </p>
                            </div>
                            <div className='main-slide-item warning-color'  onClick={(e) => {this.slider2.slickGoTo('0')}}>
                                <h3 className="title"> صلاحيات الموظفين </h3>
                                <p className="paragraph">
                                    ستتمكن من اضافة الموظفين للإدارة بكل سهولة مع تحديد الصلاحيات لكل موظف ليتمكن فقط من الإطلاع أو التحكم بالجزء الخاص به وفق دورة الوظيفي.
                                </p>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg="12">
                        <div className=" next-step-section ">
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
                                draggable={false}
                                pauseOnHover={false}


                            >
                                <div className="content-preview">
                                    <Row>
                                        <Col lg="12">
                                            <div className="customer-preview-box">
                                                <Image src={circleBg} className='bg'/>
                                                <Image src={customerImageSlide01} className='image'/>
                                                <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="content-preview">
                                    <Row>
                                        <Col lg="12">
                                            <div className="customer-preview-box">
                                                <Image src={circleBg} className='bg'/>
                                                <Image src={customerImageSlide01} className='image'/>
                                                <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="content-preview">
                                    <Row>
                                        <Col lg="12">
                                            <div className="customer-preview-box">
                                                <Image src={circleBg} className='bg'/>
                                                <Image src={customerImageSlide01} className='image'/>
                                                <Button variant="warning" size="lg">  ابدأ دلوقتي </Button>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
