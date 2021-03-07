import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo.png";
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram ,  mdiTwitter , mdiYoutube } from '@mdi/js';
import { Link } from "gatsby";


const Footer = () => {
    return (
        <div>
            <div className="footer bg-navy">
                <Container>
                    <div className="center-mode content">
                        <h2 className="main-title">  ابدأ استقبل الطلبات اونلاين! </h2>
                        <p className="main-paragraph">
                            استمتع بتجربة ميك اوردر مجانا
                        </p>
                        <Button variant="warning" size="lg" className="mt-4"> ابدأ الآن مجانا</Button>
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
                                <p className='footer-p'>
                                    ميك أوردر تمكن عملائك من الطلب أونلاين مع خيار التوصيل ,والاستلام من المطعم , الإستلام من السيارة , حجز طاولة طعام, الطلب من داخل المطعم, قوائم الإنتظار كل ذلك بدون اية عمولات أو خبرة برمجة سابقة
                                </p>
                                <p className='footer-p'>
                                    اتصل بنا <br/>
                                    المملكة العربية السعودية <br/>
                                    ص.ب 13217 الرمز البريدي 13217 س.ج 1010460464 العنوان : ش الحسن بن حسين, حي الحمراء, الرياض <br/>
                                    الأيميل: hello@makeorder.com
                                </p>
                            </div>
                            <ul className="list-unstyled list-inline list-social">
                                <li><a href="https://www.facebook.com/GetMakeOrder/" target="_blank">
                                    <Icon path={mdiFacebook} size={1} className="mdi-icon"/>
                                </a></li>
                                <li><a href="https://twitter.com/getmakeorder" target="_blank">
                                    <Icon path={mdiTwitter} size={1} className="mdi-icon"/>
                                </a></li>
                                <li><a href="https://www.youtube.com/channel/UCiIhexgFAhHYjMK_hoBM44A" target="_blank">
                                    <Icon path={mdiYoutube} size={1} className="mdi-icon"/>
                                </a></li>
                                <li><a href="https://www.instagram.com/getmakeorder/" target="_blank">
                                    <Icon path={mdiInstagram} size={1} className="mdi-icon"/>
                                </a></li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <Row>
                                <Col>
                                    <ul className="list-unstyled">
                                        <li><Link to="/" className="footer-links">الرئيسية </Link></li>
                                        {/*<li><a href="/" className="footer-links">عن ميك أوردر </a></li>*/}
                                        <li><Link to="/features" className="footer-links">المميزات </Link></li>
                                        {/*<li><a href="/" className="footer-links">  الأسعار </a></li>*/}
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="list-unstyled">
                                        <li><Link to="/contact-us" className="footer-links"> اتصل بنا </Link></li>
                                        <li><Link to="/pricing" className="footer-links">  الأسعار </Link></li>

                                        {/*<li><a href="/" className="footer-links">   برنامج الشركاء </a></li>*/}
                                        {/*<li><a href="/" className="footer-links">    المدونة </a></li>*/}
                                        {/*<li><a href="/" className="footer-links">    مركز المساعدة </a></li>*/}
                                    </ul>
                                </Col>
                                <Col>
                                    <div>
                                        <p className="footer-links"> الشركة </p>
                                        <p className="footer-p">
                                            ش الحسن بن حسين, حي الحمراء, الرياض
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
                                    جميع الحقوق محفوظة ل ميك أوردر 2021
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
