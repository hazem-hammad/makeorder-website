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
                {title:"1- التوصيل " , paragraph:"ستتمكن من توصيل الطلبات الى عملائك بالمناطق التي تقوم بتغطيتها سواء من خلالك أو عبر شركات التوصيل المختلفة التى نتكامل معها"},
                {title:"2- الاستلام من الفرع أو السيارة " , paragraph:"سيتمكن زبائنك من الطلب أونلاين واختيار خيار الإستلام من الفرع أو الاستلام من السيارة بكل سهولة. "},
                {title:"3- الطلب داخل المطعم" , paragraph:"سيتمكن زبائنك وبدون تلامس من الطلب فور وصولهم لمطعمك عبر الكود المثبت فوق طاولة الطعام بكل حرية كما يمكنهم إتمام عملية الدفع. "},
                {title:"4- حجز طاولة طعام" , paragraph:"سيتمكن زبائنك من حجز طاولة  طعام وتحديد عدد الأشخاص وموعد الحجز ونوع المناسبة بكل سهولة دون مزيد من الإتصالات "},
                {title:"5- قوائم الانتظار" , paragraph:"بكل سهولة قم بتسجيل عملائك ليصلهم  رسالة قصيرة أو عبر الواتساب فور جاهزيتك لخدمتهم  , ستكون ايضا طريقة رائعة لاعادة التواصل معهم مرة اخرى لاحقاً واطلاعهم على العروض الخاصة بك أو برنامج المكافآت. "},
            ],
            list2:[
                {title:"الطلبات السابقة و الخيارات المتعددة " , paragraph:"بسهولة يستطيع زبونك تصفح طلباته السابقة وتكرار الطلب بكل سهولة والاستفادة من العديد من المميزات "},
                {title:"مخلص الطلب والدعم الفني عبر الواتساب  " , paragraph:"بكل سهولة سيمكن عملائك من استلام ملخص الطلب عبر الواتساب ليسهل عليك التواصل معهم لاحقاً بإستخدام الدردشة التفاعلية وكذلك للدعم الفني  "},
            ],
            list3:[
                {title:"إدارة الفروع " , paragraph:"بكل سهولة ستتمكن من اضافة الفروع الخاصة بك مع تحديد النطاق الجغرافي للتوصيل وكذلك ساعات العمل وخيارات الدفع والتوصيل مع التحكم فى حاله الفرع مثل مشغول أو مغلق مؤقتاً. "},
                {title:"إدارة قوائم الطعام " , paragraph:"ستتمكن من اضافة قوائم الطعام والأصناف الخاصة بك بكل سهولة وعدد لا نهائي من الإضافات مع التحكم الكامل بها سواء كانت اضافات اختيارية أو اجبارية مع تحديد السعر والسعرات الحرارية, مع تحديد الوقت المستغرق لأعداد الطعام . "},
                {title:"إدارة العملاء " , paragraph:"ستحصل على المعلومات الكاملة لعملائك, فكل زبون له صفحة خاصة بكل معلوماتة وكذلك تاريخ المشتريات مع امكانية اضافة ملاحظات "},
                {title:" إدارة الصلاحيات " , paragraph:"ستتمكن من اضافة الموظفين مع تحديد صلاحية الوصول لكل منهم وفق دورة الوظيفي "},
                {title:"  التحليلات  " , paragraph:"عبر التقارير والتحليلات الذكية التي ستحصل عليها ستتمكن من اتخاذ القرارات الصحيحة لنمو مبيعاتك , ستتمكن بكل سهولة من معرفة أكثر الأطباق طلباً وساعات الذروة والمناطق السكنية الأكثر طلباً والعديد من التقارير والمؤشرات الأخرى. "},
            ],
            offerList:[
                {title:"تفعيل الخصومات تلقائيا   " , paragraph:"تفعيل الخصومات تلقائيا على عربية تسوق العميل اذا كانت تفي بالمتطلبات المحددة بالعرض الترويجي مثل الشحن المجاني أ, تخطي قيمة الطلب لمبلغ محدد. "},
                {title:"شروط العروض " , paragraph:"بكل سهولة ستتمكن من اضافة الشروط للعروض الخاصة بك مثل استهداف اطباق محددة أو للعملاء الجدد أو خلال ساعات محددة "},
                {title:" تحكم كامل   " , paragraph:"مع لوحة تحكم تمنحك السيطرة الكاملة والمتابعة الفورية لمبيعاتك, بسهولة ستتمكن من ضبط الاعدادت الخاصة بفروع مطعمك والمناطق التي تغطيها ومواعيد العمل وخيارات الدفع  والتوصيل وقوائم الطعام المختلفة بما في ذلك الصور والسعرات الحرارية  وبالتأكيد السعر بكل مرونة, واضافة الموظفين بصلاحيات مختلفة, كما ستمكنك من فهم أكثر ودقيق لزبائنك"},
                {title:" إدارة الإعلانات والإشعارات  " , paragraph:"ستتمكن من اضافة مساحة إعلانية داخل الموقع والتطبيق الخاص بك لتسليط الضوء على طبق جديد أو عرض خاص وكذلك ستتمكن من ارسال الإشعارات لعملائك عبر الموقع أو التطبيق. "},

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
                    subtitle="كن متأهبا لجميع الظروف, سواء بتفعيل خيار الاستلام من السيارة أو حجز الطاولات او قوائم الانتظار بالإضافة للتوصيل والاستلام من الفرع. ">
                </CustomersSection>

                <BranchesSection>
                </BranchesSection>

                <OffersSection bg="bg-navy"
                               list={offerList}
                               title="العروض والإعلانات والإشعارات"
                               showTwoCol={true}
                               subtitle="بكل سهولة تستطيع منح عملائك الحاليين أو الجدد الخصومات وفق عدد كبير من الخيارات وكذلك إنشاء إعلانات داخلية مميزة بخيارات متعددة ">
                </OffersSection>

                <CustomersSection
                    className='center-mode'
                    bg='bg-white feature-customers-section'
                    list={list2}
                    title=" تجربة مميزة لعملائك التسجيل والدفع السريع "
                    subtitle="بدون تعقيدات وخلال وفقط عبر رقم الجوال يستطيع زبونك  الشراء وتسجيل الدخول والدفع سريعاً دون تعقيدات.">
                </CustomersSection>

                <OffersSection bg="bg-blue"
                               list={null}
                               title=" مطعمك معك وين ما تروح "
                               showTwoCol={false}
                               subtitle="تطبيق خاص للإدارة العليا للمطعم لتبقيه دائما على اطلاع على عدد الطلبيات اليوم والأرباح وعدد العملاء والعديد من الإحصائيات المحدثه لحظياً ">
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
