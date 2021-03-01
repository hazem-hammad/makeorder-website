import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "react-bootstrap/Image";
import mainSectionPic from '../assets/images/slide-image-customer.png'
import circleBg from '../assets/images/circle-yellow.png'
import checkIcon from '../assets/images/checkIcon.png'




const OffersSection = () => {
    return (
        <div className="offers-section main-section bg-navy">
            <Container>
                <Row className="justify-content-md-between align-items-center " >
                    <Col lg="6" >
                        <div className="image-demo-box">
                            <Image src={circleBg} className='image-demo-circle'/>
                            <Image src={mainSectionPic} className='image-demo'/>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="content-slide">
                            <h1 className="title">
                                العروض والخصومات
                            </h1>
                            <p className='main-paragraph'>
                                ستتمكن من انشاء كوبونات الخصم وفق عدد كبير من الخيارات مثل كوبون الخصم على الطلب الأول أو عند شراء صنف معين أو عند تعدى الطلب لقيمه محدده
                            </p>

                            <Row>
                                <Col lg="6" >
                                    <div>
                                        <p className='main-paragraph-title'>
                                            تفعيل الخصومات تلقائيا
                                        </p>
                                        <p className="subtitle">
                                            تفعيل الخصومات تلقائيا على عربه تسوق العميل اذا كانت تفى بالمتطلبات المحدده فى العرض الترويجى
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="6" >
                                    <div>
                                        <p className='main-paragraph-title'>
                                           شروط الخصم
                                        </p>
                                        <p className="subtitle">
                                            تفعيل الخصومات تلقائيا على عربه تسوق العميل اذا كانت تفى بالمتطلبات المحدده فى العرض الترويجى
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default OffersSection;
