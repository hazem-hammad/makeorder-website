import React from "react";
//import { Link } from "gatsby";
import Layout from '../components/layout'
import MainSection from'../components/main-section'
import CustomersSection from'../components/customers-section'
import NextStepSection from'../components/next-step-section'
import InterfaceSection from'../components/interface-section'
import FeaturesSection from'../components/features-section'
import Footer from'../components/footer'
import PageLoader from '../components/page-loader'



import "../styles.scss";

const IndexPage = () => {
  return (
  <div className="main-wrapper rtl">
    <PageLoader></PageLoader>
     <Layout></Layout>
     <MainSection></MainSection>
     <CustomersSection
     className='ss'
     bg='bg-pink'
     title="أمنح زبائنك تجربة جديدة رائعة"
     subtitle="من الزيارة الأولى إلى موقع مطعمك، نعمل علي إسعاد العملاء في كل خطوة من خطوات طلب الاوردر الي الاستلام"></CustomersSection>
     <NextStepSection></NextStepSection>
     <InterfaceSection className=""></InterfaceSection>
     <FeaturesSection></FeaturesSection>
     <Footer></Footer>
  </div>
  );
};

export default IndexPage;
