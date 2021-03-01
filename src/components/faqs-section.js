import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const FaqsSection = () => {
  return (
    <div className="faqs-section custom-width">
        <div className="center-mode">
          <h2 className="main-title">أسئلة شائعة</h2>
        </div>
          <Row>
              <Col lg="6">
                  <div>
                      <p className="main-paragraph">
                          هل هناك مصاريف لاتمام الاعدادات ؟
                      </p>
                      <p>
                          ميك أوردر لا يطلب أى مصاريف لاتمام الاعدادات وتسجيل مطعمك
                      </p>
                  </div>
              </Col>
              <Col lg="6">
                  <div>
                      <p className="main-paragraph">
                          هل يمكننى الغاء الاشتراك أيه وقت ؟
                      </p>
                      <p>
                          نعم يمكنك الغاء الاشتراك اى وقت
                      </p>
                  </div>
              </Col>
          </Row>
    </div>
  )
};

export default FaqsSection;
