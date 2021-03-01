import React, {Component} from "react";
import {Container} from "react-bootstrap";
import InterfaceSectionSlider from './interface-section-slider'

export default class InterfaceSection extends Component {
    render() {
        return (
            <div className={`customers-section interface-section bg-white  ${ this.props.className }`}>
                <Container>
                    <div className="center-mode">
                        <h2 className="main-title"> واجهة تحكم لإدارة مطعمك</h2>
                        <p className="main-paragraph">
                            قم بالتركيز فيما تبدع فيه من اعداد اشهى الوجبات لعملائك واترك لنا الباقي                     </p>
                    </div>
                    <InterfaceSectionSlider>
                    </InterfaceSectionSlider>

                </Container>
            </div>
        )
    }
}

