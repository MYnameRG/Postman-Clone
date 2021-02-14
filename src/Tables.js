import React, { Fragment } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, InputGroup, Tabs, Tab, Table } from 'react-bootstrap';
import search from './icons8-search-16.png';

export default function Tables() {
    return (
        <Fragment>
            <Form>
                <InputGroup className="sm mt-2 mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text><img src={search} alt="" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Find" />
                </InputGroup>
            </Form>

            <Tabs defaultActiveKey="history" id="uncontrolled-tab-example" style={{ color: 'black' }}>
                <Tab eventKey="history" title="History">
                    <Table>
                        <tr>1. Multimedia</tr>
                        <tr>2. Brainstorm</tr>
                    </Table>
                </Tab>
                <Tab eventKey="collection" title="Collection">
                    Add new Collection
                </Tab>
                <Tab eventKey="apis" title="APIs">
                    Add new APIs
                </Tab>
            </Tabs>
        </Fragment>
    );
}