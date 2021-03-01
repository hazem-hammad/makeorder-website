import React from "react";
import Layout from '../components/layout'
import Footer from '../components/footer'
import FeatureMainSection from '../components/feature-main-section'
import CustomersSection from '../components/customers-section'
import BranchesSection from '../components/branches-section'
import OffersSection from '../components/offers-section'
import FeatureAppsPaymentSection from '../components/feature-apps-payment-section'


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

            <OffersSection bg="bg-navy"
                           title="العروض والخصومات"
                           showTwoCol={true}
                           subtitle="                                    ستتمكن من انشاء كوبونات الخصم وفق عدد كبير من الخيارات مثل كوبون الخصم على الطلب الأول أو عند شراء صنف معين أو عند تعدى الطلب لقيمه محدده">
            </OffersSection>

            <CustomersSection
                className='center-mode'
                bg='bg-white feature-customers-section'
                title="  تجربه طلب أونلاين مميزه "
                subtitle="">
            </CustomersSection>

            <OffersSection bg="bg-blue"
                           title="تطبيق أندرويد وأيفون"
                           showTwoCol={false}
                           subtitle="على تطبيق الهاتف المحمول المخصص بك على المتجر , احصل على تطبيقات أيفون وأندرويد مقابل رسوم ثابته , طريقه رائعه لبناء علامتك التجاريه">
            </OffersSection>

            <CustomersSection
                className=''
                bg='bg-white feature-customers-section'
                title="حدد شكل مطعمك أونلاين"
                subtitle="">
            </CustomersSection>

                <FeatureAppsPaymentSection>
                </FeatureAppsPaymentSection>
            <Footer>
            </Footer>
        </div>
    );
};

export default Features;
