import React, {Component} from "react";
import {Container,Tabs,Tab , Image , Form,Button} from "react-bootstrap";
import PackageTable from './package-table'
import wafarIcon from "../assets/images/wafar.png";

export default class PackagesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'yearly',
            prices: {value1: null , value2:null, value3:null},

        }
    }
    handleChange= (event) => {
        this.setState({value: event.target.value});
        setTimeout(()=>{
            this.setPrices();
        },300)
    }
    setPrices= () => {
        this.setState(prevState => {
            let prices = Object.assign({}, prevState.prices);
            if(this.state.value === 'yearly'){
                prices.value1 = 'مجانا';
                prices.value2 = '049 ج';
                prices.value3 = '333 ج';
            }else {
                prices.value1 = '770 ج';
                prices.value2 = '555 ج';
                prices.value3 = '77 ج';
            }

            return { prices };
        })

       setTimeout(()=>{ this.props.onSelectLanguage(this.state.prices);},300)

    }

        componentDidMount() {
        this.setPrices();
    }

    render() {
        const { prices, value } = this.state;

        return(
            <div className="packages-section">
                <div className="center-mode">
                    <h2 className="main-title"> باقات مرنة تناسب حجم مطعمك  وتطلعاتك </h2>
                    <p className="main-paragraph">
                        أفضل قيمة وبدون أية عمولات .
                        <br/>
                        أختر الباقة , سجل مجاناً  فى 10 ثوان, قم بالترقية أو الإلغاء فى أي وقت
                    </p>
                </div>
                <div>

                </div>
                <Container className="relative">
                    <div className="tabs-width">
                        <Image src={wafarIcon} className='wafarIcon'/>
                    </div>
                    <div key={`default-radio`} className="pricing-tabs">
                        <div className={`buttons ${value === 'yearly'? 'active':''}`}>
                            <Form.Check
                                className={'radio-button'}
                                type='radio'
                                id={`yearly`}
                                label={`سنويا`}
                                name={'radioButton'}
                                value='yearly'
                                onClick={this.handleChange}
                            />
                            <span>سنوى</span>
                        </div>
                        <div className={`buttons ${value === 'monthly'? 'active':''}`}>
                            <Form.Check
                                className={'radio-button'}
                                type='radio'
                                label={`شهريا `}
                                id={`monthly`}
                                name={'radioButton'}
                                value='monthly'
                                onClick={this.handleChange}
                            />
                            <span>شهرى</span>

                        </div>
                        <Form.Group className={"buttons"} controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" onChange={this.handleChange}>
                                <option>مصر</option>
                                <option>السعوديه</option>
                            </Form.Control>
                        </Form.Group>

                    </div>

                    <PackageTable prices={prices}>
                    </PackageTable>
                </Container>
            </div>

        )
    }
}
