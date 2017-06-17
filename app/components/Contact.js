/**
 * Created by Galina on 17.06.2017.
 */
import React, {Component} from 'react';
import {Row,Col,Icon,Input} from 'react-materialize';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaGithub from 'react-icons/lib/fa/github';

export default class Contact extends Component {
    render() {
        return(
            <div className="container">
                <Row>
                    <Col className="contact-form" m={6} s={12}>
                        <Input label="Your Name" validate><Icon>account_circle</Icon></Input>
                        <Input label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                        <Input label="Email" validate type='email'><Icon>mail</Icon></Input>
                        <Icon className="material-icons-content large">brightness_low</Icon>
                        <Icon className="material-icons-content large">bug_report</Icon>
                    </Col>

                </Row>
            </div>
        )
    }
}