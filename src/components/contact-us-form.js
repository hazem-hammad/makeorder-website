import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Icon from "@mdi/react";
import {mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter, mdiYoutube} from "@mdi/js";



const ContactUsForm = () => {
    return (
        <div className="contact-us-form">
            <Container>
               <div className="box">
                   <Row className="justify-content-md-between">
                       <Col lg="6">
                           <Form>
                               <Form.Group controlId="formBasicName">
                                   <Form.Label>الاسم</Form.Label>
                                   <Form.Control type="text" placeholder="الاسم" />
                               </Form.Group>
                               <Form.Group controlId="formBasicPhone">
                                   <Form.Label>رقم الموبايل</Form.Label>
                                   <Form.Control type="number" placeholder="رقم الجوال " />
                               </Form.Group>
                               <Form.Group controlId="formBasicName">
                                   <Form.Label> الدوله</Form.Label>
                                   <Form.Control as="select">
                                       <option>مصر</option>
                                       <option>السعوديه</option>
                                   </Form.Control>
                               </Form.Group>
                               <Form.Group controlId="formBasicName">
                                   <Form.Label>  سبب التواصل</Form.Label>
                                   <Form.Control as="select">
                                       <option>استفسار عام</option>
                                       <option>دعم فني</option>
                                   </Form.Control>
                               </Form.Group>
                               <Form.Group controlId="formBasicPhone">
                                   <Form.Label> الرساله</Form.Label>
                                   <Form.Control as="textarea" rows={3} placeholder="اكتب الرساله هنا"/>
                               </Form.Group>
                               <Button variant="warning" size="lg" block className="mt-4"> اتصل بنا</Button>
                           </Form>
                       </Col>
                       <Col lg="5">
                           <div className="mb-5 mt-4">
                               <p className="title">كما يمكنك التواصل معنا عبر   </p>
                               <p className="subtitle">   مكاتبنا </p>
                               <p className="mb-0">
                                   <strong>المملكة العربية السعودية : </strong>
                                   حى الحمرا شارع انس بن مالك الرياض
                               </p>
                               <p>
                                   <strong>جمهورية مصر العربية : </strong>
                                   القاهره , المهندسين
                               </p>
                               <p className="subtitle"> رقم الهاتف</p>
                               <p className="mb-0">
                                   <strong>مصر : </strong>
                                    ١٢٣٤٥٦٧٨٩٠ ٢٠+
                               </p>
                               <p>(من 9ص حتى 5 مساءا)</p>
                           </div>
                           <div>
                               <p className="title">  أو حسابات التواصل الاجتماعي</p>
                               <ul className="list-unstyled list-inline list-social">
                                   <li><a href="https://www.facebook.com/GetMakeOrder/" target="_blank">
                                       <Icon path={mdiFacebook} size={1} className="mdi-icon"/>
                                   </a></li>
                                   <li><a href="https://twitter.com/getmakeorder" target="_blank">
                                       <Icon path={mdiTwitter} size={1} className="mdi-icon"/>
                                   </a></li>
                                   <li><a href="https://www.youtube.com/channel/UCiIhexgFAhHYjMK_hoBM44A" target="_blank">
                                       <Icon path={mdiYoutube} size={1} className="mdi-icon"/>
                                   </a></li>
                                   <li><a href="https://www.instagram.com/getmakeorder/" target="_blank">
                                       <Icon path={mdiInstagram} size={1} className="mdi-icon"/>
                                   </a></li>
                               </ul>
                           </div>
                       </Col>
                   </Row>
               </div>
            </Container>
        </div>
    );
};

export default ContactUsForm;
