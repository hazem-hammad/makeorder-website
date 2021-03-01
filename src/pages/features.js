import React from "react";
import Layout from '../components/layout'
import Footer from'../components/footer'
import FeatureMainSection from'../components/feature-main-section'
import CustomersSection from'../components/customers-section'
import BranchesSection from'../components/branches-section'
import OffersSection from'../components/offers-section'


const Features = () => {
  return (
      <div className="main-wrapper rtl">
        <Layout>
        </Layout>
          <FeatureMainSection>
          </FeatureMainSection>
          <CustomersSection
              className='center-mode'
              bg='bg-white feature-customers-section'
              title="أنواع طلبات مختلفه"
              subtitle="">
          </CustomersSection>
          <BranchesSection>
          </BranchesSection>
          <OffersSection>
          </OffersSection>
          <CustomersSection
              className='center-mode'
              bg='bg-white feature-customers-section'
              title="  تجربه طلب أونلاين مميزه "
              subtitle="">
          </CustomersSection>
        <Footer>
        </Footer>
    </div>
  );
};

export default Features;
