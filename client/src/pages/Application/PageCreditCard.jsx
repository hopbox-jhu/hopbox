import React from 'react';
import { Form, Label, Input } from './Application';
import CreditCardInput from 'react-credit-card-input';
import { Checkbox, Anchor } from '@mantine/core';
import { PricingBox } from "../ListingPage/ListingPage";

function PageCreditCard(props) {
    const creditCard = props.creditCard;
    const setCreditCard = props.setCreditCard;
    const agreement = props.agreement;
    const setAgreement = props.setAgreement;
    const dateRange = props.dateRange;
    const pricing = props.pricing;
  
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
        <PricingBox>
                    <div className="subtotal">Subtotal</div>
                    <div className="price-per-month">${(pricing / 30 * ((dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24) + 1)).toFixed(2)}</div>
                    <div className="service-fee">Service Fee (20%)</div>
                    <div className="service-fee-amount">${((pricing / 30 * ((dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24) + 1)) * 0.2).toFixed(2)}</div>
                    <div className="total">Total</div>
                    <div className="total-amount">${((pricing /30 * ((dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24) + 1)) * 1.2).toFixed(2)}</div>
        </PricingBox>
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
                style: { marginTop: '40px' },
              }}
              cardExpiryInputProps={{
                value: creditCard.expiry,
                onChange: handleInputChange,
                id: "expiry",
                style: { marginTop: '40px' },
              }}
              cardCVCInputProps={{
                value: creditCard.cvc,
                onChange: handleInputChange,
                id: "cvc",
                style: { marginTop: '40px' },
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