import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import Icon from '@mdi/react';
import {mdiCheck, mdiFacebook} from '@mdi/js';
import circleBg03 from '../assets/images/circleBg03.png'
import Image from "react-bootstrap/Image";
import checkIcon from "../assets/images/checkIcon.png";
import lightsIcon from "../assets/images/lights.png";
import planIcon from "../assets/images/plan.png";
import flowerIcon from "../assets/images/flower.png";
import circleBg04 from "../assets/images/Ellipse 7 (Stroke) (5).png";
import circleBg05 from "../assets/images/Ellipse 7 (Stroke) (6).png";

const PackageTable = () => {
    return (
        <div className="package-table-box custom-width">
            <Row>
                <Col lg="4">
                    <div className="package-table">
                      <div className="header" style={{backgroundImage: `url(${circleBg03})`}}>
                          <Image src={lightsIcon} className='icon'/>
                          <p className="title">البدايه</p>
                          <p className="sub-title">قم بتجربه ميك اوردر وتعرف عليه</p>
                          <h3 className="price">مجانا</h3>
                          <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                      </div>
                    <div className="body">
                        <p className="title">مميزات الباقه</p>
                        <ul className="list-unstyled">
                            <li>
                                <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                 عدد طلبات غير محدود</li>
                            <li>
                                <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                عدد الاصناف والمنتجات غير محدود
                            </li>
                            <li>
                                <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                صفر عموله على المبيعات
                            </li>
                            <li>
                                <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                موقع خاص بالمطعم
                            </li>
                            <li>
                                <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                1 عدد الفروع
                            </li>
                            <li>
                                <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                1 عدد المستخدمين الاداريين
                            </li>
                        </ul>
                        <Button variant={"link"}>عرض كل المميزات</Button>
                    </div>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="package-table">
                        <div className="header" style={{backgroundImage: `url(${circleBg04})`}}>
                            <Image src={planIcon} className='icon'/>
                            <p className="title">الانطلاق</p>
                            <p className="sub-title">قم بتجربه ميك اوردر وتعرف عليه</p>
                            <h3 className="price">  350 ج <small className="sub-title">/ شهر</small>  </h3>
                            <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                        </div>
                        <div className="body">
                            <p className="title">مميزات الباقه</p>
                            <ul className="list-unstyled">
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد طلبات غير محدود</li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد الاصناف والمنتجات غير محدود
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    صفر عموله على المبيعات
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    موقع خاص بالمطعم
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد الفروع غير محدود
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                         عدد المستخدمين الاداريين غير محدود
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    الطلب داخل المطعم
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    نطاق خاص بالمطعم
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    اشعار الطلب عبر الواتس اب أو رساله نصيه
                                </li>
                            </ul>
                            <Button variant={"link"}>عرض كل المميزات</Button>
                        </div>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="package-table">
                        <div className="header" style={{backgroundImage: `url(${circleBg05})`}}>
                            <Image src={flowerIcon} className='icon'/>
                            <p className="title">النمو</p>
                            <p className="sub-title">قم بتجربه ميك اوردر وتعرف عليه</p>
                            <h3 className="price">  670 ج <small className="sub-title">/ شهر</small>  </h3>
                            <Button variant={"warning"} block>ابدأ الان مجانا</Button>
                        </div>
                        <div className="body">
                            <p className="title">مميزات الباقه</p>
                            <ul className="list-unstyled">
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد طلبات غير محدود</li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد الاصناف والمنتجات غير محدود
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    صفر عموله على المبيعات
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    موقع خاص بالمطعم
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد الفروع غير محدود
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    عدد المستخدمين الاداريين غير محدود
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    الطلب داخل المطعم
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    نطاق خاص بالمطعم
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    اشعار الطلب عبر الواتس اب أو رساله نصيه
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    حجز طاوله طعام
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                    قوائم الانتظار
                                </li>
                                <li>
                                    <Icon path={mdiCheck} size={0.8} className="mdi-icon"/>
                                     تطبيق خاص لمطعمك
                                </li>
                            </ul>
                            <Button variant={"link"}>عرض كل المميزات</Button>
                        </div>
                    </div>
                </Col>

            </Row>

        </div>
    );
};

export default PackageTable;