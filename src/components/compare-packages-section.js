import React, {Component} from "react";
import {Button, Container, Table, Image, Col} from "react-bootstrap";
import PackageTable from './package-table'
import wafarIcon from "../assets/images/wafar.png";
import lightsIcon from "../assets/images/lights.png";
import circleBg03 from "../assets/images/circleBg03.png";
import circleBg04 from "../assets/images/Ellipse 7 (Stroke) (5).png";
import planIcon from "../assets/images/plan.png";
import circleBg05 from "../assets/images/Ellipse 7 (Stroke) (6).png";
import flowerIcon from "../assets/images/flower.png";
import Icon from "@mdi/react";
import {mdiCheck} from "@mdi/js";

import logo01
    from '../assets/images/apps/5f32f299cbf7b2e4572ccae2_5ead02cfb41a9440deb0931c_Color logo - no background 1.png'
import logo02 from '../assets/images/apps/16112550_250714788696443_7740741807703274989_o-removebg-preview 1.png'
import logo03 from '../assets/images/apps/mEHEYNyY_400x400-removebg-preview 1.png'
import logo04 from '../assets/images/apps/pasted-svg-1155608x450 1.png'
import logo05 from '../assets/images/apps/Wssel-Work-By-YaStudio-Logo-01-removebg-preview 1.png'
import logo06 from "../assets/images/apps/باي-بال-Paypal 1.png";
import logo07 from "../assets/images/apps/logo 1.png";
import logo08 from "../assets/images/apps/Amazon_Pay-Logo 1.png";
import logo09 from "../assets/images/apps/Screen_Shot_2021-02-13_at_4.56 1.png";
import logo10 from "../assets/images/apps/unnamed (2) 1.png";
import logo11 from "../assets/images/apps/Stripe_Logo,_revised_2016 1.png";
import logo12 from "../assets/images/apps/download (13) 1 (1).png";

import logo18 from '../assets/images/logos/476px-Facebook_Messenger_logo 1.png'
import logo19 from '../assets/images/logos/1024px-Facebook_Logo__2019_-removebg-preview 1.png'
import logo20 from '../assets/images/logos/7256989 1.png'
import logo21 from '../assets/images/logos/cib-intercom 1.png'
import logo22 from '../assets/images/logos/Logo-_Foodics-Gray-2048x424 1.png'
import logo23 from '../assets/images/logos/Mailchimp-logo 1.png'
import logo24 from '../assets/images/logos/qb_thumb 1.png'
import logo25 from '../assets/images/logos/qb_thumb 1 (1).png'
import logo26 from '../assets/images/logos/unnamed__1_-removebg-preview 1.png'
import logo27 from '../assets/images/logos/qb_thumb 1 (2).png'
import logo28 from '../assets/images/logos/qb_thumb 1 (3).png'
import logo29 from '../assets/images/logos/qb_thumb 1 (4).png'
import logo13 from '../assets/images/logos/qb_thumb 1 (5).png'
import logo14 from '../assets/images/logos/download (13) 1.png'
import logo15 from '../assets/images/logos/597px-WhatsApp 1.png'
import logo16 from '../assets/images/logos/1200px-Instagram_logo_2016 1.png'
import logo17 from '../assets/images/logos/Botme-Egypt-39970-1553547465 1.png'

export default class ComparePackagesSection extends Component {
    state = {isActive: false};

    handleToggle = () => {
        this.setState({isActive: !this.state.isActive});
    };

    render() {
        let {prices} = this.props;
        const isActive = this.state.isActive;
        let buttonText;
        if (this.state.isActive) {
            buttonText = ' اخفاء المقارنه '
        } else {
            buttonText = ' عرض المقارنه كامله'
        }
        return (
            <div className={`packages-section compare-packages-section`}>
                <div className="center-mode">
                    <h2 className="main-title">قارن بين جميع المميزات</h2>
                    <p className="main-paragraph">
                        تعرف على الفرق بين جميع الباقات بالتفاصيل واختار الانسب لك ولمطعمك
                    </p>
                </div>
                <Container className="relative">
                    <div className={`custom-width custom-table-height ${isActive ? 'heightActive' : ''}`}>
                        <Table bordered responsive className="mt-5">
                            <thead>
                            <tr>
                                <th>المميزات</th>
                                <th>
                                    <div className="package-table">
                                        <div className="header" style={{backgroundImage: `url(${circleBg03})`}}>
                                            <Image src={lightsIcon} className='icon'/>
                                            <p className="title">البدايه</p>
                                            <h3 className="price">{prices['value1']}</h3>
                                            <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="package-table">
                                        <div className="header" style={{backgroundImage: `url(${circleBg04})`}}>
                                            <Image src={planIcon} className='icon'/>
                                            <p className="title">الانطلاق</p>
                                            <h3 className="price">  {prices['value2']} <small className="sub-title">/
                                                شهر</small></h3>
                                            <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="package-table">
                                        <div className="header" style={{backgroundImage: `url(${circleBg05})`}}>
                                            <Image src={flowerIcon} className='icon'/>
                                            <p className="title">النمو</p>
                                            <h3 className="price">  {prices['value3']} <small className="sub-title">/
                                                شهر</small></h3>
                                            <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="table-title">
                                <td>المساحه والوصول</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>عدد الطلبيات</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                            </tr>
                            <tr>
                                <td>عدد الاصناف</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                            </tr>
                            <tr>
                                <td>عدد الفروع</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                            </tr>
                            <tr>
                                <td>عموله على المبيعات</td>
                                <td>صفر</td>
                                <td>صفر</td>
                                <td>صفر</td>
                            </tr>
                            <tr className="table-title">
                                <td>انواع الطلبات</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>الاستلام من الفرع</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td>التوصيل</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td>الاستلام من السياره</td>
                                <td></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> الطلب داخل المطعم</td>
                                <td></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> حجز طاوله طعام</td>
                                <td></td>
                                <td></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> قوائم الانتظار</td>
                                <td></td>
                                <td></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr className="table-title">
                                <td> الطلب من خلال</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>رابط خاص بك</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> نطاق خاص لمطعمك</td>
                                <td></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> تطبيق خاص لمطعمك</td>
                                <td></td>
                                <td></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td>الواتساب - الفيس بوك- قوقل أعمال</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr className="table-title">
                                <td> خصائص الاداره</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> اداره الفروع</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> اداره صلاحيات فريق الاعمال</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> عدد المستخدمين الاداريين</td>
                                <td> 1</td>
                                <td>لا محدود</td>
                                <td>لا محدود</td>
                            </tr>
                            <tr>
                                <td> التحكم الكامل بالمطعم</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> اداره العملاء</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> اداره التغطيه الجغرافيه</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr className="table-title">
                                <td> خصائص التسويق و الاعلان</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> اداره الخصومات والكوبونات</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> اداره الاعلانات الاشعارات</td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                                <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            </tr>
                            <tr>
                                <td> اشعار اتمام الطلب عبر واتساب أو رساله نصيه</td>
                                <td></td>
                                <td>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    <br/>
                                    <span>تكلفه اضافيه للرساله</span>
                                </td>
                                <td>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    <br/>
                                    <span>تكلفه اضافيه للرساله</span>
                                </td>
                            </tr>
                            <tr className="table-title">
                                <td> التكامل</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    تطبيقات التوصيل
                                </td>
                                <td colSpan="3">
                                <span className="integration-slider">
                                    <div className='app-logos'>
                                <div>
                                    <span><Image src={logo01} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo02} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo03} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo04} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo05} className="image-preview"/></span>
                                </div>
                            </div>


                                </span>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    خيارات الدفع
                                </td>
                                <td colSpan="3">
                                <span className="integration-slider">
                                    <div className='app-logos '>
                                        <div>
                                            <span><Image src={logo06} className="image-preview"/></span>
                                        </div>

                                        <div>
                                            <span><Image src={logo07} className="image-preview"/></span>
                                        </div>

                                        <div>
                                            <span><Image src={logo08} className="image-preview"/></span>
                                        </div>

                                        <div>
                                            <span><Image src={logo09} className="image-preview"/></span>
                                        </div>

                                        <div>
                                            <span><Image src={logo10} className="image-preview"/></span>
                                        </div>
                                        <div>
                                            <span><Image src={logo11} className="image-preview"/></span>
                                        </div>
                                        <div>
                                            <span><Image src={logo12} className="image-preview"/></span>
                                        </div>
                                    </div>

                                </span>

                                </td>
                            </tr>
                            <tr>
                                <td>والمزيد</td>
                                <td colSpan="3">
                                                                <span className="integration-slider">
                                                                                                        <div className='app-logos social'>


                                <div>
                                    <span><Image src={logo18} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo19} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo20} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo21} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo22} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo23} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo24} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo25} className="image-preview"/></span>
                                </div>

                                <div>
                                    <span><Image src={logo26} className="image-preview"/></span>
                                </div>
                                                                                                             <div>
                                    <span><Image src={logo27} className="image-preview"/></span>
                                </div>
                                                                                                             <div>
                                    <span><Image src={logo28} className="image-preview"/></span>
                                </div>

                                                                 <div>
                                    <span><Image src={logo29} className="image-preview"/></span>
                                </div>
 <div>
                                    <span><Image src={logo13} className="image-preview"/></span>
                                </div>
                                                                                                             <div>
                                    <span><Image src={logo14} className="image-preview"/></span>
                                </div>
                                                                                                             <div>
                                    <span><Image src={logo15} className="image-preview"/></span>
                                </div>
                                                                                                             <div>
                                    <span><Image src={logo16} className="image-preview"/></span>
                                </div>
                                                                                                             <div>
                                    <span><Image src={logo17} className="image-preview"/></span>
                                </div>




                                        </div>
                                  </span>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="text-center mb-5">
                        <Button variant="outline-warning" onClick={this.handleToggle}>
                            {buttonText}
                        </Button>
                    </div>
                </Container>
            </div>
        )
    }
}

