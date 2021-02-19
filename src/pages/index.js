import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import MainSection from'../components/main-section'


import "../styles.scss";

const IndexPage = () => {
  return (
  <div className="main-wrapper rtl">
     <Layout></Layout>
     <MainSection></MainSection>
  </div>
  );
};

export default IndexPage;
