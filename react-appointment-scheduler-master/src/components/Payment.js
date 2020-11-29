import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Spacer from 'react-add-space';



class Payment extends React.Component {
    render() {
		return (
            <div className="schoolpayment">
				<center><p></p>	
                   <h3><b><i>Choose your preferred Payment option</i></b></h3> 
               </center>
               
                 <br></br>
                 <br></br>
                 <br></br>  
                 <br></br> 
               <p>
                    <Spacer amount={40} />
               <img src={require('./images/applepay.jpg')} width="130" height="60" />
               <Spacer amount={45} />
               <img src={require('./images/paypal.jpg')} width="130" height="57" />
                <tr></tr>
                  <Spacer amount={43} />
                 <b><Link to="/schoolapplepay">Apple Pay</Link></b>
               <Spacer amount={58} />
                        <b><Link to="/schoolpay">PayPal</Link></b>
					</p>
                    
                    <br></br>
                    <p> 
                        <Spacer amount={40} />
                        <img src={require('./images/amazonpay.jpg')} width="130" height="58" />
                        <Spacer amount={45} />
                        <img src={require('./images/americanexpress.jpg')} width="130" height="58" />
                        <tr></tr>
                        <Spacer amount={43} />
                        <b><Link to="/schoolamazonpay">Amazon Pay</Link></b>
                        <Spacer amount={45} />
                        <b><Link to="/schoolamericanexp">American Express</Link></b>
                        </p>
						
                        
                        </div>
        );
        }
    }

    export default Payment;