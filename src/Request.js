import React, { Fragment } from 'react';
import { Nav, Navbar, Form, FormControl, Button, Container, Row, Col, Tabs, Tab, Dropdown } from 'react-bootstrap';

export default function Request() {
    return (
        <Fragment>
            <Tabs defaultActiveKey="tab" id="uncontrolled-tab-example">
                <Tab eventKey="tab" title={"New Tab"} >
                    <Form inline>
                        <Dropdown className="sm mt-2 mb-2">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                GET
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <FormControl type="text" placeholder="Enter your request URL" className="mr-sm-2" style={{ width: '70%' }} />
                        <Button variant="info" style={{marginLeft: '10px'}}>Send</Button>
                    </Form>

                    <Tabs defaultActiveKey="params" id="uncontrolled-tab-example">
                        <Tab eventKey="params" title="Params"></Tab>
                        <Tab eventKey="authorization" title="Authorization"></Tab>
                        <Tab eventKey="headers" title="Headers"></Tab>
                        <Tab eventKey="body" title="Body"></Tab>
                        <Tab eventKey="preq" title="Pre-request script"></Tab>
                        <Tab eventKey="test" title="Test"></Tab>
                        <Tab eventKey="setting" title="Settings"></Tab>
                    </Tabs>
                </Tab>
                <Tab eventKey="new" title={"+"}></Tab>
            </Tabs>
        </Fragment>
    );
}