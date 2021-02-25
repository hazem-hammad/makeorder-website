import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import Footer from'../components/footer'
import ContactUsHeader from '../components/contact-us-header'
import ContactUsForm from '../components/contact-us-form'
import SupportersSectionSlider from '../components/supporters-section-slider'
import {Container} from "react-bootstrap";


const ContactUs = () => {
  return (
      <div className="main-wrapper rtl">
        <Layout>
        </Layout>
          <div className="contact-us">
              <ContactUsHeader>
              </ContactUsHeader>
              <ContactUsForm>
              </ContactUsForm>
              <Container>
                  <SupportersSectionSlider>
                  </SupportersSectionSlider>
              </Container>
          </div>
        <Footer>
        </Footer>
    </div>
  );
};

export default ContactUs;
