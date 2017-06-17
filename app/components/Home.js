/**
 * Created by Galina on 17.06.2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Section, Icon, Row, Col} from 'react-materialize';

export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <div id="box-logo"><Link className="logo" to="/" />
                    <img id="logo" src="img/eyes.gif" alt=""/>
                    <img id="logo2" src="img/glasses.png" alt=""/>
                </div>
                <Section>
                    <Row className='center'>
                        <Col s={1}>
                            <Icon large>insert_chart</Icon>
                        </Col>
                    </Row>
                </Section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio ducimus ea error esse exercitationem explicabo, facere harum itaque laboriosam necessitatibus, neque perferendis provident sapiente, totam veniam veritatis voluptate? Possimus.</p>
            </div>
        )
    };
};
