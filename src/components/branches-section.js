import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import InterfaceSectionSlider from './interface-section-slider'
import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import customerImageSlide01 from "../assets/images/slide-image-customer.png";

export default class BranchesSection extends Component {
    render() {
        return (
            <div className={`customers-section interface-section branches-section bg-white `}>
                <Container>
                    <div>
                        <h2 className="main-title">    اداره فروعك وفريق عملك </h2>
                        <p className="main-paragraph">
                            نؤمن بأن المطاعم يجب أن تتواصل مباشرا مع عملائها وأن لا يقتطع جزء كبير من مبيعاتها مقابل عموله!
                        </p>
                    </div>
                    <Row className="slider1">
                        <Col lg="4">
                            <div className='main-slide-item primary-color' >
                                <div className='image-box'>
                                    <Image src={customerImageSlide01} className='image'/>
                                </div>
                                <h3 className="title"><span> إدارة قوائم الطعام  </span></h3>
                                <p className="paragraph">
                                    ستتمكن من اضافه قوائم الطعام والأصناف الخاصه بك بكل سهوله وعدد لا نهائى من الاضافات
                                </p>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className='main-slide-item primary-color' >
                                <div className='image-box'>
                                    <Image src={customerImageSlide01} className='image'/>
                                </div>
                                <h3 className="title"><span> حدد مناطق التوصيل الخاصه بك  </span></h3>
                                <p className="paragraph">
                                    ستتمكن من اضافه قوائم الطعام والأصناف الخاصه بك بكل سهوله وعدد لا نهائى من الاضافات
                                </p>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className='main-slide-item primary-color' >
                                <div className='image-box'>
                                    <Image src={customerImageSlide01} className='image'/>
                                </div>
                                <h3 className="title"><span>  حدد ساعات العمل  </span></h3>
                                <p className="paragraph">
                                    ستتمكن من اضافه قوائم الطعام والأصناف الخاصه بك بكل سهوله وعدد لا نهائى من الاضافات
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

