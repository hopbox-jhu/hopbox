import React from 'react';
import { Form, Label } from './Application';


function PageHazardCheck(props) {
    const hazardCheck = props.hazardCheck;
    const setHazardCheck = props.setHazardCheck;

    const handleHazardCheckChange = (event) => {
        setHazardCheck(event.target.value === 'true');
    };


    return (
        <div>
            <Form>
                <Label htmlFor="hazardcheck">Before providing further information about your belongings, please ensure that you select 'No' for all the items listed below. </Label>
                    <select id="type" value={hazardCheck} onChange={handleHazardCheckChange}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
            </select>
            </Form>
        </div>
    );
}

export default PageHazardCheck;
