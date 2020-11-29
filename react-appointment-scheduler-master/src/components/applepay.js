import React from 'react';
import { Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

class Pay extends React.Component {
	constructor() {
		super();

		this.state = {
			creditcard: "",
            securepin: "",
            expdate:"",
            address:""
		}
	}
    
    valid()
	{
		if(!this.state.creditcard || !this.state.securepin || !this.state.expdate || !this.state.address)
		{
			alert("Please fill all the fields")
        }
       
		else
		{
			return true;
		}
	}

    submit = () => {
        if(this.valid())
        {
            alert("Payment Successfully!!!!!")
        }
      }      
            
    
       

	render() {
		return (
		<div className="schoolapplepay">

			
					<center>	<h1><b>Welcome</b></h1>
					<img src={require('./images/applepay.jpg')} width="130" height="60" /></center>
					<p></p>
					<p></p>
				<center>	
					<label><b>CreditCard :</b></label><NumberFormat format="#### #### #### ####"  name="creditcard" placeholder="Enter Credit Card Number..."
							onChange={(event) => { this.setState({ creditcard: event.target.value }) }}
						/><br />
						 
						<p></p>
						
						<label><b>Security Pin :</b></label><NumberFormat format="####"  name="securepin" placeholder="Enter PIN ..." 
                             onChange={(event) => {this.setState({ securepin: event.target.value }) }}
						/><br />
                         
						<p></p>
 						
						 <label><b>Expiry Date :</b></label>
						 <NumberFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}  name="expdate"
    					onChange={(event) => { this.setState({ expdate: event.target.value }) }}
    					/>
 
   
						<br />
                        <p></p>
						
						<label><b>Address :</b></label><input type="text" name="address"
							placeholder="Enter the Address ..." 
							onChange={(event) => {this.setState({ address: event.target.value }) }}
						/><br /></center>
						<p></p>
               
			    <center><h4><b>Note:Account Name must match with billing name</b></h4></center>

				
					<center>	<b>	<Button onClick={()=>this.submit()}>Proceed to Pay</Button></b>
                    </center><p></p>
					
					
				

				</div>
			
		);
	}
}

export default Pay;

