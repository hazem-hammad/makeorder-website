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
                        <h2 className="main-title">   ندعم جميع قنوات البيع ونعظم انتشارك </h2>
                        <p className="main-paragraph">
                            لأننا نؤمن بأن المطاعم يجب أن تتواصل مباشرتاً مع عملائها وباختيارك ميك اوردر ستمتلك موقعك أو تطبيقك الخاص وكذلك امكانية البيع عبر قنوات التواصل المختلفة والواتساب كذلك لخلق تجربة رائعة لعملائك
                        </p>
                    </div>
                    <Row className="slider1">
                        <Col lg="4">
                            <div className='main-slide-item primary-color' >
                                <div className='image-box'>
                                    <Image src={customerImageSlide01} className='image'/>
                                </div>
                                <h3 className="title"><span> تطبيق ايفون واندرويد  </span></h3>
                                <p className="paragraph">
                                    ستصبح أقرب لزبائنك عبر التطبيق الخاص بك, والذي يمكنهم من الطلب بكل سهولة ويمكنك من ارسال الاشعارات لهم حيث تشمل باقية النمو حصولك على تطبيق للجوال خاص بعلامتك التجارية بمتجر IOS و جوجل متوافق مع مواقع ادارة الإشعارات والتحليلات ليضمن لك تجربة متكاملة رائعة
                                </p>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className='main-slide-item primary-color' >
                                <div className='image-box'>
                                    <Image src={customerImageSlide01} className='image'/>
                                </div>
                                <h3 className="title"><span>   موقع خاص   </span></h3>
                                <p className="paragraph">
                                    خلال دقائق ستحصل على موقع خاص ملائم للتصفح من الجوال أو الكمبيوتر وملائم لمحركات البحث يمكن زبائنك من الطلب والدفع بكل سهولة ومتابعة حالة الطلب .
                                </p>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className='main-slide-item primary-color' >
                                <div className='image-box'>
                                    <Image src={customerImageSlide01} className='image'/>
                                </div>
                                <h3 className="title"><span> البيع عبر وسائل التواصل المختلفه </span></h3>
                                <p className="paragraph">
                                    ستتمكن بسهولة من البيع والاستفادة من قوة وسائل التواصل الاجتماعي بالبيع عبر الانستقرام, والفيسبوك والمسنجر وكذلك الواتساب
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

