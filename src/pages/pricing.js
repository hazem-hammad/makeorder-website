import React from "react";
// import { Link } from "gatsby";
import Layout from '../components/layout'
import Footer from'../components/footer'
import SupportersSectionSlider from '../components/supporters-section-slider'
import IntegrationSection from '../components/integration-section'
import AppsPaymentSection from '../components/apps-payment-section'
import PackagesSection from '../components/packages-section'
import ComparePackagesSection from '../components/compare-packages-section'
import FaqsSection from '../components/faqs-section'
import {Container} from "react-bootstrap";
import PageLoader from '../components/page-loader'



const Pricing = () => {
  return (
      <div className="main-wrapper rtl">
        <PageLoader>
        </PageLoader>
        <Layout>
        </Layout>
          <div>
              <Container>
                  <PackagesSection>
                  </PackagesSection>
                  <IntegrationSection className="right-mode">
                  </IntegrationSection>
                  <AppsPaymentSection>
                  </AppsPaymentSection>
                  <ComparePackagesSection>
                  </ComparePackagesSection>
              </Container>
              <div className="blue-bg price-supporter">
                  <Container>
                          <SupportersSectionSlider className='custom-width'>
                          </SupportersSectionSlider>
                  </Container>
              </div>
              <FaqsSection>
              </FaqsSection>
          </div>
        <Footer>
        </Footer>
    </div>
  );
};

export default Pricing;
