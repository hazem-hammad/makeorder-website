import React, {Component} from "react";
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


export default class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPrices: {value1: null , value2:null, value3:null},
        }
    }
    handleLanguage= (oldPrices) => {
        this.setState(prevState => {
            let newPrices = Object.assign({}, prevState.newPrices);
            newPrices = oldPrices
            return { newPrices };
        })
    }
    render() {
        const {newPrices} = this.state
        return(
            <div className="main-wrapper rtl">
                <PageLoader>
                </PageLoader>
                <Layout>
                </Layout>
                <div>
                    <Container>
                        <PackagesSection onSelectLanguage={this.handleLanguage}>
                        </PackagesSection>
                        <IntegrationSection className="right-mode">
                        </IntegrationSection>
                        <AppsPaymentSection>
                        </AppsPaymentSection>
                        <ComparePackagesSection prices={newPrices}>
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

        )
    }

}
