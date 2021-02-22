import React from "react";
import {Container} from "react-bootstrap";
import NextStepSectionSlider from './next-step-section-slider'

const NextStepSection = () => {
    return (
        <div className="customers-section next-step-section bg-white">
            <Container>
                <div className="margin-right">
                    <h2 className="main-title"> انتقل الي مرحلة نموك التالية </h2>
                    <p className="main-paragraph">
                        نؤمن بأن المطاعم يجب ان تتواصل مباشرتاً مع عملائها! وأن لا يقتطع جزء كبير من مبيعاتها مقابل عمولة!
                    </p>
                </div>
                <NextStepSectionSlider>
                </NextStepSectionSlider>
            </Container>
        </div>
    )
};

export default NextStepSection;
