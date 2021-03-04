import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "react-bootstrap/Image";
import mainSectionPic from '../assets/images/slide-image-customer.png'
import mainSectionPic02 from '../assets/images/slide02.png'
import checkIcon from '../assets/images/checkIcon.png'




const FeatureMainSection = () => {
    return (
        <div className="feature-main-section main-section blue-bg">
                <div  className="main-section-slider">
                    <div className="slide-item">
                        <div className="background">
                            <div className="container">
                                <Row className="justify-content-md-between align-items-center " >
                                    <Col lg="6">
                                        <div className="content-slide">
                                            <h1 className="title">
                                                جميع ما تحتاجه لإطلاق مطعم والبيع أونلاين فى مكان واحد
                                            </h1>
                                            <p className='main-paragraph'>
                                                نؤمن بأن المطاعم يجب ان تتواصل مباشرتاً مع عملائها وأن لا يقتطع جزء كبير من مبيعاتك مقابل عمولة!
                                            </p>
                                            <Button variant="warning" size="lg"> احصل علي ٣٠ يوم مجانا!</Button>

                                        </div>
                                    </Col>
                                    <Col lg="6" >
                                        <div className="image-demo-box">
                                            {/*<Image src={mainSectionPic} className='image-demo'/>*/}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <Image src={mainSectionPic} className='image-demo-left'/>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default FeatureMainSection;
