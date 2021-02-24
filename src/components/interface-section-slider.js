import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import circleBg from '../assets/images/circle-bg-02.png'
import customerImageSlide01 from '../assets/images/slide-image-customer.png'
import shopIcon from '../assets/images/shop-icon.svg'
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


                            <div className='main-slide-item primary-color'>
                                <h3 className="title"><span> إدارة العملاء </span></h3>
                                <p className="paragraph">
                                     ستحصل على المعلومات الكاملة لعملائك, فكل زبون له صفحة بكل معلوماتة وكذلك تاريخ المشتريات مع امكانية اضافة ملاحظات
                                </p>
                            </div>

                            <div className='main-slide-item success-color'>
                                <h3 className="title"><span> إدارة الفروع </span></h3>
                                <p className="paragraph">
                                     تمكن من اضافة الفروع وتحديد النطاق الجغرافي للتوصيل وساعات العمل وخيارات الدفع والتوصيل مع التحكم فى حاله الفرع     </p>
                            </div>
                            <div className='main-slide-item warning-color'>
                                <h3 className="title"> تطبيق الإدارة العلي </h3>
                                <p className="paragraph">
                                     تطبيق للإدارة العليا للمطعم تبقيه دائما مطلع على عدد الطلبيات اليوم والأرباح وعدد العملاء والعديد من الإحصائيات المحدثه لحظياً
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
