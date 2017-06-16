import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <div id="box-logo"><Link className="logo" to="/" />
                    <img id="logo" src="img/eyes.gif" alt=""/>
                    <img id="logo2" src="img/glasses.png" alt=""/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio ducimus ea error esse exercitationem explicabo, facere harum itaque laboriosam necessitatibus, neque perferendis provident sapiente, totam veniam veritatis voluptate? Possimus.</p>
            </div>
        )
    };
};
