import "./payment.css";
import React, { useState } from 'react';


function Payment() {

  const [cardNumber, setCardNumber] = useState('');

  // Function to format credit card number as user types
  const formatCreditCardNumber = (event) => {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    input = input.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
    setCardNumber(input);
  
    };


    const [expiryDate, setExpiryDate] = useState('');

    // Function to format expiry date as user types
    const formatExpiryDate = (event) => {
      let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
      input = input.replace(/(\d{2})(?=\d)/g, '$1/'); // Add "/" after every 2 digits
      setExpiryDate(input);
    };


    



    return(
    
       
        <div class="visa-card">
        <div class="logoContainer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="23"
            height="23"
            viewBox="0 0 48 48"
            class="svgLogo"
          >
            <path
              fill="#ff9800"
              d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
            ></path>
            <path
              fill="#d50000"
              d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
            ></path>
            <path
              fill="#ff3d00"
              d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
            ></path>
          </svg>
        </div>
        <div class="number-container">
          <label class="input-label" for="cardNumber">CARD NUMBER</label>
          
          <input
      className="inputstyle"
      id="cardNumber"
      placeholder="XXXX XXXX XXXX XXXX"
      name="cardNumber"
      type="text"
      value={cardNumber}
      maxLength="19" // Increased maxLength to accommodate spaces
      pattern="\d{4} \d{4} \d{4} \d{4}" // Updated pattern to match digits with spaces
      title="Please enter a valid credit card number"
      onChange={formatCreditCardNumber} // Call formatCreditCardNumber function on input change
    />


    

        </div>
      
        <div class="name-date-cvv-container">
          <div class="name-wrapper">
            <label class="input-label" for="holderName">CARD HOLDER</label>
            <input
              class="inputstyle"
              id="holderName"
              placeholder="NAME"
              type="text"
            />
          </div>
      
          <div class="expiry-wrapper">
            <label class="input-label" for="expiry">VALID THRU</label>
            <input
      className="inputstyle"
      id="expiry"
      placeholder="MM/YY"
      name="expiryDate"
      type="text"
      value={expiryDate}
      maxLength="5" // Maximum length of "MM/YY" format
      pattern="\d{2}/\d{2}" // Pattern to match "MM/YY" format
      title="Please enter a valid expiry date (MM/YY)"
      onChange={formatExpiryDate} // Call formatExpiryDate function on input change
    />
          </div>
          <div class="cvv-wrapper">
            <label class="input-label" for="cvv">CVV</label>
            <input
              class="inputstyle"
              placeholder="***"
              maxlength="3"
              id="cvv"
              type="password"
            />
          </div>
        </div>
      </div>
      
    );
}

export default Payment;