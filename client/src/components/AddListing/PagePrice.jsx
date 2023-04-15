import React from 'react';
import { Form, Label, Input } from './AddListing';

function PagePrice(props) {
    const pricing = props.pricing;
    const setPricing = props.setPricing;

    const handlePricingChange = (event) => {
      setPricing(event.target.value);
    }

    return (
      <div>
        <Form>
          <Label htmlFor="pricing">How much would you like to charge renters on a monthly bases? A good recommendation for pricing would be to charge $1 per square foot. (in USD)</Label>
            <Input
            id="pricing"
            type="text"
            placeholder="$30"
            value={pricing || ''}
            onChange={handlePricingChange}
            />
        </Form>
      </div>
    )
  }

  export default PagePrice;