import React from "react";
import {Container} from "react-bootstrap";
import NextStepSectionSlider from './next-step-section-slider'

const NextStepSection = () => {
    return (
        <div className="customers-section next-step-section bg-white">
            <Container>
                <div className="">
                    <h2 className="main-title"> حل متكامل.. وعملاء سعداء </h2>
                    <p className="main-paragraph">
                        لأننا نؤمن بأن المطاعم يجب ان تتواصل مباشرتاً مع عملائها! وأن لا يقتطع جزء كبير من مبيعاتها مقابل عمولة! وأن زبونك النهائي هو الأولى بأية خصومات وليس أي طرف ثالث
                        توفر لك ميك اوردر حلول متكاملة لمطعمك خلال دقائق عبر توفير المميزات التالية
                    </p>
                </div>
                <NextStepSectionSlider>
                </NextStepSectionSlider>
            </Container>
        </div>
    )
};

export default NextStepSection;
