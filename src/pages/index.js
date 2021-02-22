import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import MainSection from'../components/main-section'
import CustomersSection from'../components/customers-section'
import NextStepSection from'../components/next-step-section'
import InterfaceSection from'../components/interface-section'


import "../styles.scss";

const IndexPage = () => {
  return (
  <div className="main-wrapper rtl">
     <Layout></Layout>
     <MainSection></MainSection>
     <CustomersSection></CustomersSection>
     <NextStepSection></NextStepSection>
     <InterfaceSection></InterfaceSection>
  </div>
  );
};

export default IndexPage;
