import React from 'react';
import { Form, Label, Input } from './Application';
import CreditCardInput from 'react-credit-card-input';
import { Checkbox, Anchor } from '@mantine/core';

function PageCreditCard(props) {
    const creditCard = props.creditCard;
    const setCreditCard = props.setCreditCard;
    const agreement = props.agreement;
    const setAgreement = props.setAgreement;
  
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setCreditCard((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };

    const handleCheckboxChange = (event) => {
        setAgreement(event.currentTarget.checked);
    };

    return (
      <div>
        <Form>
        <Label htmlFor="creditcard">Credit Card Information</Label>
            <Input
              id="name"
              type="text"
              placeholder="Name on Card"
              value={creditCard.name}
              onChange={handleInputChange}
            />
            <Input
              id="address"
              type="text"
              placeholder="Address"
              value={creditCard.address}
              onChange={handleInputChange}
            />
            <div style={{ marginBottom: '50px' }}>
            <CreditCardInput
              cardNumberInputProps={{
                value: creditCard.cardNumber,
                onChange: handleInputChange,
                id: "cardNumber",
              }}
              cardExpiryInputProps={{
                value: creditCard.expiry,
                onChange: handleInputChange,
                id: "expiry",
              }}
              cardCVCInputProps={{
                value: creditCard.cvc,
                onChange: handleInputChange,
                id: "cvc",
              }}
              fieldClassName="input"
            />
            </div>
            <Checkbox checked={agreement} onChange={handleCheckboxChange} label = {<>
                I accept{' '}
                <Anchor href="https://mantine.dev" target="_blank">
                terms and conditions
                </Anchor>
                </>}
            />
        </Form>
      </div>
    );
  }
  
  export default PageCreditCard;