import React from "react";
// import { Link } from "gatsby";
import {Container} from "react-bootstrap";



const ContactUsHeader = () => {
    return (
        <div className="contact-us-header">
            <Container>
                <div className="center-mode">
                    <h2 className="main-title"> تواصل مع ميك اوردر </h2>
                    <p className="main-paragraph">
                        شكراً لاهتمامك بالتواصل معنا, ويسعدنا دائماً ان نجيب على استفساراتك بأسرع وقت ممكن.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default ContactUsHeader;
