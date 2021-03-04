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
                {title:" الاستلام من الفرع أو السيارة " , paragraph:"سيتمكن زبائنك من الطلب أونلاين واختيار خيار الإستلام من الفرع أو السيارة, بالتأكيد لا يرغب أحد بالانتظار لذلك يمكنه من اختيار وقت الإستلام ايضاً. "},
                {title:" التوصيل " , paragraph:" سيتمكن زبائنك من اختيار خيار التوصيل للطلبات وفق المناطق التي تقوم بتغطيتها سواء من خلالك أو عبر شركات التوصيل المختلفة "},
                {title:" الطلب داخل المطعم" , paragraph:"سيتمكن زبائنك وبدون تلامس من الطلب فور وصولهم لمطعمك عبر الكود المثبت فوق طاولة الطعام بكل حرية كما يمكنهم إتمام عملية الدفع. "},
                {title:" حجز طاولة طعام" , paragraph:"سيتمكن زبائنك من حجز طاولة  و اختيار الإطلالة ان وجدت مع تحديد عدد الأشخاص وحتى المناسبة بكل سهولة. "},
                {title:" قوائم الانتظار" , paragraph:"بكل سهولة قم بتسجيل عملائك ليصلهم  رسالة قصيرة أو عبر الواتساب فور جاهزيتك لخدمتهم  , ستكون ايضا طريقة رائعة لاعادة التواصل معهم مرة اخرى لاحقاً واطلاعهم على العروض الخاصة بك أو برنامج المكافآت. "},
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
