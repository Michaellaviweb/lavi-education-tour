import React from 'react';
import { withRouter } from 'react-router';
import './../styles/css/Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="jumbo" style={{backgroundColor: 'gold'}}>
            
                <h3>{this.props.formData.heading}</h3>
                <h5>{this.props.formData.subHeading}</h5>
                <br/><br/>
                
                <div className="form-container">
                <form action={this.props.formData.link} method="POST">
                    
                    <table>
                        <tbody>
                        <tr>
                            <td className="lbl">First Name*</td>
                            <td> <input placeholder="first name..."/></td>
                        </tr>
                        <tr>
                            <td className="lbl">Last Name*</td>
                            <td> <input placeholder="last name..." /></td>
                        </tr>
                        <tr>
                            <td className="lbl">Company*</td>
                            <td> <input placeholder="company..." /></td>
                        </tr>
                        <tr>
                            <td className="lbl">Email*</td>
                            <td> <input placeholder="email..." /></td>
                        </tr>
                        <tr>
                            <td className="lbl">Industry</td>
                            <td> 
                                <select>
                                    <option defaultValue="on">choose an industry</option>
                                    {this.props.formData.industryOptions !== undefined &&                                    
                                        this.props.formData.industryOptions.map((option, index) =>{
                                            return <option key={index}>{option}</option>
                                        })
                                    }                                                                      
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="lbl">Comments</td>
                            <td><textarea rows="10" placeholder="comments..."/></td>
                        </tr>
                        <tr>
                            <td className="lbl"></td>
                            <td><button type="submit" >Request a sales call </button></td>    
                        </tr> 
                        </tbody>       
                    </table>
                    
                </form>
                                
                </div>
                <p style={{fontSize: '11px'}}>
                Your privacy is important to us. By submitting this form, you agree to our <u>Privacy Policy</u> and <u>Terms and Conditions</u>
                </p>
                
            </div>
        );
    }
}
export default withRouter(Form);
