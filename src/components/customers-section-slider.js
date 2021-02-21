import React, { Component } from "react";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class CustomersSectionSlider extends Component {
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
        return (
            <div>
                <Row>
                    <Col lg="6">
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            infinite={false}
                            className="slider1"
                            autoplay={true}
                            autoplaySpeed={3300}
                        >
                            <div className='main-slide-item'>
                                <h3 className="title">الإستلام من الفرع</h3>
                                <p className="paragraph">
                                    سيتمكن زبائنك من الطلب أونلاين واختيار الإستلام من الفرع, ويمكنهم اختيار وقت الإستلام ايضا
                                </p>
                            </div>
                            <div className='main-slide-item'>
                                <h3 className="title">حجز طاولة طعام</h3>
                                <p className="paragraph">
                                     سيتمكن زبائنك من حجز طاولة وتحديد عدد الاشخاص بكل سهولة دون مزيد من الإتصالا
                                </p>
                            </div>
                            <div className='main-slide-item'>
                                <h3 className="title"> قوائم الانتظار</h3>
                                <p className="paragraph">
                                     بكل سهولة قم بتسجيل عملائك ليصلهم رسالة قصيرة أو عبر الواتساب فور جاهزيتك لخدمتهم
                                </p>
                            </div>
                            <div className='main-slide-item'>
                                <h3 className="title"> التوصيل السريع </h3>
                                <p className="paragraph">
                                    ستتمكن من توصيل الطلبات الى عملائك بالمناطق التي تغطيها سواء من خلالك أو عبر شركات التوصيل
                                </p>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg="6">
                        <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            autoplay={true}
                            autoplaySpeed={3300}
                        >
                            <div>
                                <h3 className="title">الإستلام من الفرع</h3>
                            </div>
                            <div>
                                <h3 className="title">حجز طاولة طعام</h3>
                            </div>
                            <div>
                                <h3 className="title"> قوائم الانتظار</h3>
                            </div>
                            <div>
                                <h3 className="title"> التوصيل السريع </h3>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </div>
        );
    }
}
