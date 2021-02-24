import React from "react";
import {Container} from "react-bootstrap";
import FeaturesSectionSlider from './features-section-slider'

const FeaturesSection = () => {
    return (
        <div className="features-section customer-section bg-white">
            <Container>
                <div className="content-header">
                    <h2 className="main-title">  العديد من المميزات في انتظارك</h2>
                    <p className="main-paragraph">
                         يوفر ميك اوردر العديد من المميزات، التي تسهل عليك ادارة مطعمك وزيادة اوردراتك والحفاظ علي سعادة زبائنك الحاليين والجدد
                    </p>
                </div>
            </Container>
                <FeaturesSectionSlider>
                </FeaturesSectionSlider>
        </div>
    )
};

export default FeaturesSection;
