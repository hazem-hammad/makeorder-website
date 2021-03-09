import React, {Component} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Image from "react-bootstrap/Image";
import mainSectionPic from '../assets/images/slide-image-customer.png'
import circleBg from '../assets/images/circle-yellow.png'
import {mdiAndroid , mdiApple} from "@mdi/js";
import Icon from "@mdi/react";
import Slider from "react-slick";




export default class OffersSection extends Component {

    render() {
        const {list} = this.props

        return(
            <div className={`offers-section main-section ${this.props.bg}`}>
                <Container>
                    <Row className="justify-content-md-between  " >
                        <Col lg="5" >
                            <div className="image-demo-box">
                                <Image src={circleBg} className='image-demo-circle'/>
                                <Image src={mainSectionPic} className='image-demo'/>
                            </div>
                        </Col>
                        <Col lg="7">
                            <div className="content-slide">
                                <h1 className="title">
                                    {this.props.title}
                                </h1>
                                <p className='main-paragraph'>
                                    {this.props.subtitle}
                                </p>

                                {this.props.showTwoCol?

                                    <Row>
                                        {
                                            list && list.map(function(el,index) {
                                                return (
                                                    <Col lg="6" >
                                                        <div>
                                                            <p className='main-paragraph-title'>
                                                                {el.title}
                                                            </p>
                                                            <p className="subtitle">
                                                                {el.paragraph}
                                                            </p>
                                                        </div>
                                                    </Col>

                                                )
                                            })
                                        }

                                        {/*<Col lg="6" >*/}
                                        {/*    <div>*/}
                                        {/*        <p className='main-paragraph-title'>*/}
                                        {/*            تفعيل الخصومات تلقائيا*/}
                                        {/*        </p>*/}
                                        {/*        <p className="subtitle">*/}
                                        {/*            تفعيل الخصومات تلقائيا على عربه تسوق العميل اذا كانت تفى بالمتطلبات المحدده فى العرض الترويجى*/}
                                        {/*        </p>*/}
                                        {/*    </div>*/}
                                        {/*</Col>*/}
                                        {/*<Col lg="6" >*/}
                                        {/*    <div>*/}
                                        {/*        <p className='main-paragraph-title'>*/}
                                        {/*            شروط الخصم*/}
                                        {/*        </p>*/}
                                        {/*        <p className="subtitle">*/}
                                        {/*            تفعيل الخصومات تلقائيا على عربه تسوق العميل اذا كانت تفى بالمتطلبات المحدده فى العرض الترويجى*/}
                                        {/*        </p>*/}
                                        {/*    </div>*/}
                                        {/*</Col>*/}
                                    </Row>
                                    :
                                    <ul className='list-unstyled list-inline list-social'>
                                        <li>
                                            <a href="/"><Icon path={mdiApple} size={2} className="mdi-icon"/></a>
                                        </li>
                                        <li>
                                            <a href="/"><Icon path={mdiAndroid} size={2} className="mdi-icon"/></a>
                                        </li>

                                    </ul>
                                }


                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
