import React, {Component} from "react";
import {Container} from "react-bootstrap";
import CustomersSectionSlider from "./customers-section-slider";

export default class CustomersSection extends Component {

    render() {
        return (
            <div className={`customers-section ${this.props.bg}`}>
                <Container>
                    <div className={`${ this.props.className } `}>
                        <h2 className="main-title">{this.props.title}</h2>
                        <p className="main-paragraph">
                            {this.props.subtitle}
                        </p>
                    </div>
                    <CustomersSectionSlider>
                    </CustomersSectionSlider>
                </Container>
            </div>
        )
    }


}

