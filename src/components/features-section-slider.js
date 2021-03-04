import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moneyIcon from '../assets/images/money.png'
import customerImageSlide01 from '../assets/images/slide-image-customer.png'
// import shopIcon from '../assets/images/shop-icon.svg'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import saleIcon from "../assets/images/sale1.png";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { Link } from "gatsby";



export default class FeaturesSectionSlider extends Component {


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
                                                <h3 className="title"> الخصومات  </h3>
                                                <p className="paragraph">
                                                    ستتمكن من إنشاء كوبونات الخصم وفق عدد كبير من الخيارات مثل كوبون الخصم على الطلب الأول أو عند شراء صنف معين أو عند تعدى الطلب لقيمة محددة.
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
                                                    عبر تكاملنا مع بوابات الدفع المختلفة سيتمكن زبائنك من الدفع عبر وسائل الدفع المختلفه ومنها بطاقة مدى , ابل باي, STC Pay  و بطاقات الإتمان وقريبا نقاط قطاف وموبايلي وبالتأكيد يمكنك تفعيل خيار الدفع عند الإستلام
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
                                                    الاعلانات والاشعارات
                                                </h3>
                                                <p className="paragraph">
                                                    ستتمكن من اضافة اعلانات تظهر لمتصفحي الموقع بكل  سهولة كما ستتمكن من إرسال إشعارات للجوال عند اختيار الباقة الماسية
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Image src={customerImageSlide01} className="image-preview"/>
                                </div>

                                <div className='main-slide-item primary-color'>
                                    <Row>
                                        <Col sm="12" md="12" lg="12" xl="6">
                                            <div>
                                                <span className='icon'>
                                                    <Image src={saleIcon} />
                                                </span>
                                                <h3 className="title">  إدارة العملاء   </h3>
                                                <p className="paragraph">
                                                    ستحصل على المعلومات الكاملة لعملائك, فكل زبون له صفحة خاصة بكل معلوماتة وكذلك تاريخ المشتريات مع امكانية اضافة ملاحظات
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
                                                    التغطية الجغرافية
                                                </h3>
                                                <p className="paragraph">
                                                    ستتمكن من تحديد التغطية الجغرافية لكل فرع بكل سهولة عبر خرائط جوجل.
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
                                                    إدارة الصلاحيات
                                                </h3>
                                                <p className="paragraph">
                                                    ستتمكن من اضافة الموظفين مع تحديد صلاحية الوصول لكل منهم وفق دورة الوظيفي
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Image src={customerImageSlide01} className="image-preview"/>
                                </div>

                                <div className='main-slide-item primary-color'>
                                    <Row>
                                        <Col sm="12" md="12" lg="12" xl="6">
                                            <div>
                                                <span className='icon'>
                                                    <Image src={saleIcon} />
                                                </span>
                                                <h3 className="title">  اشعارات الواتساب  </h3>
                                                <p className="paragraph">
                                                    يصل للعميل اشعار بإتمام الطلب كما سيتمكن من معرفة حالة الطلب عبر الواتساب
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
                                                    تطبيق الإدارة العليا
                                                </h3>
                                                <p className="paragraph">
                                                    تطبيق خاص للإدارة العليا للمطعم لتبقى دائما على اطلاع على عدد الطلبيات اليوم والأرباح وعدد العملاء والعديد من الإحصائيات المحدثه لحظياً
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
                                                    قنوات بيع وتواصل متعددة
                                                </h3>
                                                <p className="paragraph">
                                                    سيتمكن زبائنك من مشاهدة قائمة الطعام والطلب عبر الفيسبوك, الانستقرام وجوجل للأعمال! وواتساب
                                                </p>
                                                <Link to="/features" variant="link" size="lg" className="action mt-4">
                                                    شاهد المزيد من المميزات
                                                    <Icon path={mdiArrowLeft} size={1} className="mdi-icon"/>
                                                </Link>
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
