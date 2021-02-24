import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moneyIcon from '../assets/images/money.png'
import customerImageSlide01 from '../assets/images/slide-image-customer.png'
import shopIcon from '../assets/images/shop-icon.svg'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import saleIcon from "../assets/images/sale1.png";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';


export default class FeaturesSectionSlider extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     nav1: null,
        //     nav2: null
        // };
    }

    componentDidMount() {
        // this.setState({
        //     nav1: this.slider1,
        //     nav2: this.slider2
        // });
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
                    infinite: true,
                    centerPadding: "60px",
                }
            }
        ]

        return (
            <div className="customer-slider horizontal">
                <Row>
                    <Col lg="12">
                        <div>
                            <Slider
                                slidesToShow={1}
                                swipeToSlide={true}
                                centerPadding={"25%"}
                                centerMode={true}
                                draggable= {true}
                                dots={true}
                                arrows={true}
                                infinite= {true}
                                swipe= {true}
                                touchMove= {true}
                                vertical= {false}
                                autoplay={true}
                                speed= {800}
                                autoplaySpeed= {3000}
                                responsive={responsive}

                            >
                                <div className='main-slide-item primary-color'>
                                    <Row>
                                        <Col sm="12" md="12" lg="12" xl="6">
                                            <div>
                                                <span className='icon'>
                                                    <Image src={saleIcon} />
                                                </span>
                                                <h3 className="title"> الخصومات والعروض </h3>
                                                <p className="paragraph">
                                                     قم بإنشاء كوبونات الخصم مع العديد من الخيارات مثل كوبون الخصم على الطلب الأول أو عند شراء صنف معين أو عند تعدى لقيمة محددة
                                                </p>
                                                <Button variant="link" size="lg" className="action">
                                                    اعرف المزيد
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Button>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Image src={customerImageSlide01} className="image-preview"/>
                                </div>
                                <div className='main-slide-item warning-color'>
                                    <Row>
                                        <Col sm="12" md="12" lg="12" xl="6">
                                            <div>
                                                <span className='icon'>
                                                    <Image src={moneyIcon} />
                                                </span>
                                                <h3 className="title">
                                                     خيارات الدفع
                                                </h3>
                                                <p className="paragraph">
                                                     نتكامل مع طرق الدفع المختلفة مثل بطاقة مدى و ابل باي و STC Payو بطاقات الإتمان ويمكنك تفعيل خيار الدفع عند الإستلام </p>
                                                <Button variant="link" size="lg" className="action">
                                                    اعرف المزيد
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Button>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Image src={customerImageSlide01} className="image-preview"/>
                                </div>
                                <div className='main-slide-item success-color'>
                                    <Row>
                                        <Col sm="12" md="12" lg="12" xl="6">
                                            <div>
                                                <span className='icon'>
                                                    <Image src={moneyIcon} />
                                                </span>
                                                <h3 className="title">
                                                    خيارات الدفع
                                                </h3>
                                                <p className="paragraph">
                                                    نتكامل مع طرق الدفع المختلفة مثل بطاقة مدى و ابل باي و STC Payو بطاقات الإتمان ويمكنك تفعيل خيار الدفع عند الإستلام </p>
                                                <Button variant="link" size="lg" className="action">
                                                    اعرف المزيد
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Button>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Image src={customerImageSlide01} className="image-preview"/>
                                </div>


                            </Slider>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
