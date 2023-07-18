import React from 'react';
import { Form, Label } from './Application';
import { List } from '@mantine/core';
import { ListItem } from '@material-ui/core';


function PageHazardCheck(props) {
    const hazardCheck = props.hazardCheck;
    const setHazardCheck = props.setHazardCheck;

    const handleHazardCheckChange = (event) => {
        setHazardCheck(event.target.value === 'true');
    };


    return (
        <div>
            <Form>
                <Label htmlFor="hazardcheck">Before providing further information about your belongings, will you be storing any of the items listed below? Please ensure that you select 'No' for all the items listed below. </Label>
                <List>
                    <ListItem>Guns</ListItem>
                    <ListItem>Explosives</ListItem>
                    <ListItem>Uncontained sharps/knives</ListItem>
                    <ListItem>Pets and live animals</ListItem>
                    <ListItem>Combustibles or flammables</ListItem>
                    <ListItem>Uncontained toxic chemicals</ListItem>
                    <ListItem>Alcohol</ListItem>
                    <ListItem>Any item or substance prohibited by law</ListItem>
                </List>
                <select id="type" value={hazardCheck} onChange={handleHazardCheckChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </Form>
        </div>
    );
}

export default PageHazardCheck;
