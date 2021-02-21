import React from "react";
import {Container} from "react-bootstrap";
import CustomersSectionSlider from "./customers-section-slider";

const CustomersSection = () => {
    return (
        <div className="customers-section bg-pink">
            <Container>
                <h2 className="main-title">أمنح زبائنك تجربة جديدة رائعة</h2>
                <p className="main-paragraph">
                     من الزيارة الأولى إلى موقع مطعمك، نعمل علي إسعاد العملاء في كل خطوة من خطوات طلب الاوردر الي الاستلام
                </p>
                <CustomersSectionSlider></CustomersSectionSlider>
            </Container>
        </div>
    )
};

export default CustomersSection;
