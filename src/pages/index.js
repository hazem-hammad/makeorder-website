import React, {Component} from "react";
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
export default class IndexPage extends Component {
 constructor(props) {
        super(props);
        this.state = {
            list:[
                {title:" الاستلام من الفرع أو السيارة " , paragraph:"مكن زبائنك من الطلب أونلاين واختيار خيار الإستلام من الفرع أو السيارة. "},
                {title:" التوصيل " , paragraph:"فعل التوصيل وفق المناطق التي تقوم بتغطيتها سواء من خلالك أو عبر شركات التوصيل المختلفة  "},
                {title:" الطلب داخل المطعم" , paragraph:"بدون تلامس وعبر الQR سيتمكن زبائنك من الطلب  والدفع من داخل المطعم. "},
                {title:" حجز طاولة طعام" , paragraph:"سيتمكن زبائنك من حجز طاولة مع تحديد عدد الأشخاص والتفاصيل بكل سهولة. "},
                {title:" قوائم الانتظار" , paragraph:"قم بتسجيل عملائك ليصلهم رسالة قصيرة أو عبر الواتس اب فور جاهزيتك لخدمتهم.  "},
            ],
            }
         }
render(){
        const {list} = this.state

 return (
  <div className="main-wrapper rtl">
    <PageLoader></PageLoader>
     <Layout></Layout>
     <MainSection></MainSection>
     <CustomersSection
     className='ss'
     bg='bg-pink'
     list={list}
     title="أمنح زبائنك تجربة جديدة رائعة"
     subtitle="ميك اوردر أنشئت خصيصاً لتقديم حلول متكاملة وليست أداة لانشاء موقع أو تطبيق فقط, نحن نمنح زبونك تجربة مختلفة بنيت خصيصاً لتلائم جميع الظروف والاحتياجات عبر توفير الخيارات التالية "></CustomersSection>
     <NextStepSection></NextStepSection>
     <InterfaceSection className=""></InterfaceSection>
     <FeaturesSection></FeaturesSection>
     <Footer></Footer>
  </div>
  );
  }
}
