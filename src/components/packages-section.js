import React from "react";
import {Container,Tabs,Tab , Image} from "react-bootstrap";
import PackageTable from './package-table'
import wafarIcon from "../assets/images/wafar.png";
import lightsIcon from "../assets/images/lights.png";

const PackagesSection = () => {
  return (
      <div className="packages-section">
        <div className="center-mode">
          <h2 className="main-title"> باقات مرنة تناسب حجم مطعمك</h2>
          <p className="main-paragraph">
            اختار الباقه المناسبه , سجل قى 10 ثوان , قم بالترقيه او الالغاء فى اى وقت
             </p>
        </div>
          <Container className="relative">
              <div className="tabs-width">
                  <Image src={wafarIcon} className='wafarIcon'/>
              </div>
              <Tabs defaultActiveKey="year" id="uncontrolled-tab-example">
                  <Tab eventKey="year" title="سنوى">
                      <PackageTable>
                      </PackageTable>
                  </Tab>
                  <Tab eventKey="month" title="شهرى">
                      <div>dd</div>
                  </Tab>
              </Tabs>
          </Container>
      </div>
  );
};

export default PackagesSection;
