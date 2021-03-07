import React, {Component} from "react";
import Layout from '../components/layout'
import Footer from '../components/footer'
import FeatureMainSection from '../components/feature-main-section'
import CustomersSection from '../components/customers-section'
import BranchesSection from '../components/branches-section'
import OffersSection from '../components/offers-section'
import FeatureAppsPaymentSection from '../components/feature-apps-payment-section'
import PageLoader from '../components/page-loader'


export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {title:"1- التوصيل " , paragraph:"فعل التوصيل وفق المناطق التي تقوم بتغطيتها سواء من خلالك أو عبر شركات التوصيل المختلفة "},
                {title:"2- الاستلام من الفرع أو السيارة " , paragraph:"مكن زبائنك من الطلب أونلاين واختيار خيار الإستلام من الفرع أو السيارة. "},
                {title:"3- الطلب داخل المطعم" , paragraph:"دون تلامس وعبر الQR سيتمكن زبائنك من الطلب  والدفع من داخل المطعم.  "},
                {title:"4- حجز طاولة طعام" , paragraph:"سيتمكن زبائنك من حجز طاولة مع تحديد عدد الأشخاص والتفاصيل بكل سهولة. "},
                {title:"5- قوائم الانتظار" , paragraph:"قم بتسجيل عملائك ليصلهم رسالة قصيرة أو عبر الواتس اب فور جاهزيتك لخدمتهم.  "},
            ],
            list2:[
                {title:"التسجيل والدفع السريع" , paragraph:"بدون تعقيدات وخلال وفقط عبر رقم الجوال يستطيع زبونك الشراء وتسجيل الدخول والدفع سريعاً دون تعقيدات. "},
                {title:"الطلبات السابقة و الخيارات المتعددة  " , paragraph:"بسهولة يستطيع زبونك تصفح طلباته السابقة وتكرار الطلب بكل سهولة والاستفادة من العديد من المميزات "},
                {title:"مخلص الطلب والدعم الفني عبر الواتساب" , paragraph:"سيتمكن عملائك من استلام ملخص الطلب عبر الواتساب ليسهل عليك التواصل معهم لاحقاً بإستخدام الدردشة التفاعلية. "},
            ],
            list3:[
                {title:"إدارة الفروع " , paragraph:"اضافة الفروع مع تحديد النطاق الجغرافي وكذلك ساعات العمل وخيارات الدفع والتحكم في حالة الفرع ."},
                {title:"إدارة قوائم الطعام " , paragraph:"اضافة قوائم الطعام والأصناف والاضافات مع السعرات الحرارية والوقت المستغرق لأعداد الطعام . "},
                {title:"إدارة العملاء " , paragraph:"ستحصل على المعلومات الكاملة لعملائك, فكل زبون له صفحة خاصة بكل معلوماته وتاريخ مشترياته. "},
                {title:" إدارة الصلاحيات " , paragraph:"ستتمكن من اضافة الموظفين مع تحديد صلاحية الوصول لكل منهم وفق دورة الوظيفي "},
                {title:"  التحليلات  " , paragraph:"عبر التقارير والتحليلات الذكية ستتمكن من اتخاذ القرارات الصحيحة لنمو مبيعاتك ."},
            ],
            offerList:[
                {title:"تفعيل الخصومات تلقائيا " , paragraph:"تفعيل الخصومات تلقائيا على عربية تسوق العميل اذا كانت تفي بالمتطلبات المحددة بالعرض الترويجي مثل الشحن المجاني "},
                {title:"شروط العروض " , paragraph:"ستتمكن من اضافة الشروط للعروض الخاصة بك مثل استهداف اطباق محددة أو للعملاء الجدد أو خلال ساعات محددة"},
                {title:" إدارة الإعلانات والإشعارات  " , paragraph:"ستتمكن من اضافة مساحة إعلانية داخل الموقع والتطبيق الخاص وكذلك ارسال الإشعارات لعملائك عبر الموقع أو التطبيق"},

            ],

        };
    }

    render() {
        const {list , list2 ,list3, offerList} = this.state
        return(
            <div className="main-wrapper rtl">
                <PageLoader>
                </PageLoader>
                <Layout>
                </Layout>

                <FeatureMainSection>
                </FeatureMainSection>

                <CustomersSection
                    className='center-mode'
                    bg='bg-white feature-customers-section'
                    list={list}
                    title=" ندعم جميع أنواع طلبات المطاعم  "
                    subtitle="كن متأهبا لجميع الظروف واستخدم ميك اوردر ليتمكن زبائنك من الطلب عبر الطرق التالية  ">
                </CustomersSection>

                <BranchesSection>
                </BranchesSection>

                <OffersSection bg="bg-navy"
                               list={offerList}
                               title="العروض والإعلانات "
                               showTwoCol={true}
                               subtitle="بكل سهولة تستطيع منح عملائك الحاليين أو الجدد الخصومات وفق عدد كبير من الخيارات وكذلك إنشاء إعلانات داخلية مميزة بخيارات متعددة  ">
                </OffersSection>

                <CustomersSection
                    className='center-mode'
                    bg='bg-white feature-customers-section'
                    list={list2}
                    title=" تجربة مميزة لعملائك  "
                    subtitle="بدون تعقيدات وخلال وفقط عبر رقم الجوال يستطيع زبونك  الشراء وتسجيل الدخول والدفع سريعاً دون تعقيدات.">
                </CustomersSection>

                <OffersSection bg="bg-blue"
                               list={null}
                               title=" مطعمك معك وين ما تروح "
                               showTwoCol={false}
                               subtitle="تطبيق خاص للإدارة العليا للمطعم لتبقيه دائما على اطلاع على عدد الطلبيات اليوم والأرباح وعدد العملاء والعديد من الإحصائيات المحدثه لحظياً  ">
                </OffersSection>

                <CustomersSection
                    className=''
                    list={list3}
                    bg='bg-white feature-customers-section'
                    title="حدد شكل مطعمك أونلاين"
                    subtitle="">
                </CustomersSection>

                <FeatureAppsPaymentSection>
                </FeatureAppsPaymentSection>
                <Footer>
                </Footer>
            </div>
        )
    }
}
