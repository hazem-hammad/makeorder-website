import React, { Component } from "react";
import Slider from "react-slick";
// import logo01 from '../assets/images/apps/5f32f299cbf7b2e4572ccae2_5ead02cfb41a9440deb0931c_Color logo - no background 1.png'
// import logo02 from '../assets/images/apps/16112550_250714788696443_7740741807703274989_o-removebg-preview 1.png'
// import logo03 from '../assets/images/apps/mEHEYNyY_400x400-removebg-preview 1.png'
// import logo04 from '../assets/images/apps/pasted-svg-1155608x450 1.png'
// import logo05 from '../assets/images/apps/Wssel-Work-By-YaStudio-Logo-01-removebg-preview 1.png'

import logo01 from '../assets/images/logos/476px-Facebook_Messenger_logo 1.png'
import logo02 from '../assets/images/logos/1024px-Facebook_Logo__2019_-removebg-preview 1.png'
import logo03 from '../assets/images/logos/unnamed__1_-removebg-preview 1.png'
import logo04 from '../assets/images/logos/597px-WhatsApp 1.png'
import logo05 from '../assets/images/logos/1200px-Instagram_logo_2016 1.png'

import logo06 from '../assets/images/apps/باي-بال-Paypal 1.png'
import logo07 from '../assets/images/apps/logo 1.png'
import logo08 from '../assets/images/apps/Amazon_Pay-Logo 1.png'
import logo09 from '../assets/images/apps/Screen_Shot_2021-02-13_at_4.56 1.png'
import logo10 from '../assets/images/apps/unnamed (2) 1.png'
import logo11 from '../assets/images/apps/Stripe_Logo,_revised_2016 1.png'
import logo12 from '../assets/images/apps/download (13) 1 (1).png'

import logo13 from '../assets/images/logos/Botme-Egypt-39970-1553547465 1.png'
import logo14 from '../assets/images/logos/cib-intercom 1.png'
import logo15 from '../assets/images/logos/Mailchimp-logo 1.png'
import logo16 from '../assets/images/logos/1024px-Facebook_Logo__2019_-removebg-preview 1 (1).png'
import logo17 from '../assets/images/logos/unnamed__1_-removebg-preview 1 (1).png'

import logo18 from '../assets/images/apps/5f32f299cbf7b2e4572ccae2_5ead02cfb41a9440deb0931c_Color logo - no background 1.png'
import logo19 from '../assets/images/apps/16112550_250714788696443_7740741807703274989_o-removebg-preview 1.png'
import logo20 from '../assets/images/apps/mEHEYNyY_400x400-removebg-preview 1.png'
import logo21 from '../assets/images/apps/pasted-svg-1155608x450 1.png'
import logo22 from '../assets/images/apps/Wssel-Work-By-YaStudio-Logo-01-removebg-preview 1.png'

import circleBg from '../assets/images/circle-yellow.png'
import circleBg01 from '../assets/images/circle-bg01.png'
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";


export default class FeatureAppsPaymentSection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="feature-apps-payment-section custom-width">
                <Row>
                    <Col md='12' lg="6">
                        <div className="integration-slider">
                            <p className="title">  التوافق مع مقدمي الخدمات المختلفة </p>
                            <p className="subtitle">لقوة أكبر لا محدودة, ستتمكن من الترابط مع العشرات من مقدمي الخدمات لإثراء تجربتك معنا وتجربة عملائك معك. </p>
                            <div className='logo-box'>
                                <div>
                                    <span><Image src={logo01} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo02} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo03} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo04} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo05} className="image-preview"/></span>
                                </div>
                            </div>
                            <Image src={circleBg} className="image-preview-background"/>
                        </div>

                        <div className="integration-slider second-slider card2">
                            <p className="title"> وسائل الدفع </p>
                            <p className="subtitle">نوفر العديد منها سواء كانت محلية أو عالمية مع توفر الدفع عند الإستلام فى كل الأحوال. </p>
                            <div className='app-logos  logo-box'>
                                <div>
                                    <span><Image src={logo06} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo07} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo08} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo09} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo10} className="image-preview"/></span>
                                </div>
                            </div>
                            <Image src={circleBg01} className="image-preview-background"/>
                        </div>

                    </Col>
                    <Col md='12' lg="6">
                        <div className="integration-slider card3">
                            <p className="title">  التسويق </p>
                            <p className="subtitle">نتوافق مع عشرات المنصات لتقديم تجربة فريدة تسويقياً ومنحك قوة التحليلات لعملائك</p>
                            <div className='logo-box'>
                                <div>
                                    <span><Image src={logo13} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo14} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo15} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo16} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo17} className="image-preview"/></span>
                                </div>
                            </div>
                            <Image src={circleBg01} className="image-preview-background"/>
                        </div>
                        <div className="integration-slider second-slider card4">
                            <p className="title"> اداره التوصيل</p>
                            <p className="subtitle">نتوافق مع العديد من مقدمي خدمات التوصيل لتسهيل انتشارك.
                                التواصل الأجتماعي </p>
                            <div className='app-logos logo-box'>
                                <div>
                                    <span><Image src={logo18} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo19} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo20} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo21} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo22} className="image-preview"/></span>
                                </div>
                            </div>
                            <Image src={circleBg01} className="image-preview-background"/>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}
