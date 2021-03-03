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

export default class ComparePackagesSection extends Component {
    state = { isActive: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };
    render (){
        let {prices} = this.props;
        const isActive = this.state.isActive;
        let buttonText;
        if(this.state.isActive){
             buttonText = ' اخفاء المقارنه '
        }else{
             buttonText = ' عرض المقارنه كامله'
        }
        return(
        <div className={`packages-section compare-packages-section`}>
            <div className="center-mode">
                <h2 className="main-title">قارن بين جميع المميزات</h2>
                <p className="main-paragraph">
                    تعرف على الفرق بين جميع الباقات بالتفاصيل واختار الانسب لك ولمطعمك
                </p>
            </div>
            <Container className="relative">
                <div className={`custom-width custom-table-height ${isActive? 'heightActive' : ''}`}>
                    <Table bordered responsive  className="mt-5">
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
                                        <h3 className="price">  {prices['value2']}  <small className="sub-title">/ شهر</small>  </h3>
                                        <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="package-table">
                                    <div className="header" style={{backgroundImage: `url(${circleBg05})`}}>
                                        <Image src={flowerIcon} className='icon'/>
                                        <p className="title">النمو</p>
                                        <h3 className="price">  {prices['value3']} <small className="sub-title">/ شهر</small>  </h3>
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
                            <td>عدد الطلبيات </td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                        </tr>
                        <tr>
                            <td>عدد الاصناف </td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                        </tr>
                        <tr>
                            <td>عدد الفروع </td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                        </tr>
                        <tr>
                            <td>عموله على المبيعات </td>
                            <td>صفر</td>
                            <td>صفر</td>
                            <td>صفر</td>
                        </tr>
                        <tr className="table-title">
                            <td>انواع الطلبات </td>
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
                            <td>الاستلام من السياره </td>
                            <td></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td> الطلب داخل المطعم  </td>
                            <td></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  حجز طاوله طعام  </td>
                            <td></td>
                            <td></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td> قوائم الانتظار  </td>
                            <td></td>
                            <td></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr className="table-title">
                            <td> الطلب من خلال </td>
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
                            <td>  نطاق خاص لمطعمك</td>
                            <td></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  تطبيق خاص لمطعمك</td>
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
                            <td> خصائص الاداره </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td> اداره الفروع </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td> اداره صلاحيات فريق الاعمال </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  عدد المستخدمين الاداريين </td>
                            <td> 1</td>
                            <td>لا محدود</td>
                            <td>لا محدود</td>
                        </tr>
                        <tr>
                            <td>    التحكم الكامل بالمطعم </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  اداره العملاء </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  اداره التغطيه الجغرافيه </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr className="table-title">
                            <td>  خصائص التسويق و الاعلان</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>  اداره الخصومات والكوبونات </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  اداره الاعلانات  الاشعارات </td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                            <td><Icon path={mdiCheck} size={0.8} className="mdi-icon"/></td>
                        </tr>
                        <tr>
                            <td>  اشعار اتمام الطلب عبر واتساب أو رساله نصيه  </td>
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

