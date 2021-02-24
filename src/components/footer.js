import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo.png";
import Icon from '@mdi/react';
import { mdiFacebook, mdiLinkedin ,  mdiTwitter , mdiYoutube } from '@mdi/js';

const Footer = () => {
    return (
        <div>
            <div className="footer bg-navy">
                <Container>
                    <div className="center-mode content">
                        <h2 className="main-title">  ابدأ استقبل الطلبات اونلاين! </h2>
                        <p className="main-paragraph">
                            استمتع بتجربة ميك اوردر لمدة ٣٠ يوم مجانا وتمتع بجميع المميزات الحصرية التي نقدمها لك
                        </p>
                        <Button variant="warning" size="lg" className="mt-4"> احصل علي ٣٠ يوم مجانا!</Button>
                    </div>
                </Container>
            </div>
            <div className="under-footer bg-white">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className='footer-logo'>
                                <Image src={logo} roundedCircle className="logo"/>
                                ميك اوردر
                            </div>
                            <ul className="list-unstyled list-inline list-social">
                                <li><a href="#">
                                    <Icon path={mdiFacebook} size={1} className="mdi-icon"/>
                                </a></li>
                                <li><a href="#">
                                    <Icon path={mdiLinkedin} size={1} className="mdi-icon"/>
                                </a></li>
                                <li><a href="#">
                                    <Icon path={mdiTwitter} size={1} className="mdi-icon"/>
                                </a></li>
                                <li><a href="#">
                                    <Icon path={mdiYoutube} size={1} className="mdi-icon"/>
                                </a></li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <Row>
                                <Col>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="footer-links">المميزات </a></li>
                                        <li><a href="#" className="footer-links"> اتصل بنا </a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="footer-links"> الاسعار </a></li>
                                        <li><a href="#" className="footer-links">  الدخول </a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <div>
                                        <p className="footer-links"> الشركة </p>
                                        <p className="footer-p">
                                             فيلا ١٩، التجمع الخامس، القاهرة الجديدة، مصر
                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <div className="copy-rights">
                        <Row>
                            <Col lg="6">
                                <p className="footer-p">
                                    جميع الحقوق محفوظةلميك اوردر ©2021
                                </p>
                            </Col>
                            <Col lg="6">
                               <div className="text-lg-left text-sm-center d-flex justify-content-end ">
                                   <p className="footer-p ml-5">
                                       سياسة الخصوصية
                                   </p>
                                   <p className="footer-p">
                                       الشروط والاحكام </p>
                               </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>

    )
};

export default Footer;
