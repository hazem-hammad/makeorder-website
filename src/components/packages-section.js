import React from "react";
import {Container,Tabs,Tab , Image , Form} from "react-bootstrap";
import PackageTable from './package-table'
import wafarIcon from "../assets/images/wafar.png";

const PackagesSection = () => {
  return (
      <div className="packages-section">
        <div className="center-mode">
          <h2 className="main-title"> باقات مرنة تناسب حجم مطعمك</h2>
          <p className="main-paragraph">
            اختار الباقه المناسبه , سجل قى 10 ثوان , قم بالترقيه او الالغاء فى اى وقت
             </p>
        </div>
          {/*<div>*/}
          {/*    <div key={`default-radio`} className="mb-3 pricing-tabs">*/}
          {/*        <div className='buttons'>*/}
          {/*            <Form.Check*/}
          {/*                className={'radio-button'}*/}
          {/*                type='radio'*/}
          {/*                id={`yearly`}*/}
          {/*                label={`سنوى`}*/}
          {/*                name={'ss'}*/}
          {/*            />*/}
          {/*            <span>سنوى</span>*/}
          {/*        </div>*/}
          {/*        <div className='buttons'>*/}
          {/*            <Form.Check*/}
          {/*                className={'radio-button'}*/}
          {/*                type='radio'*/}
          {/*                label={`شهرى`}*/}
          {/*                id={`monthly`}*/}
          {/*                name={'ss'}*/}
          {/*            />*/}
          {/*            <span>شهرى</span>*/}

          {/*        </div>*/}



          {/*    </div>*/}

          {/*</div>*/}

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
