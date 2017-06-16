import React, {Component} from 'react';
import {Link} from 'react-router';
import {Navbar, NavItem, Icon} from 'react-materialize'



export default class Header extends Component {

    render() {

        return(

        <Navbar brand="Galina Gavrina" className="#000000 black">
            <div className="container">


                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem><Link activeClassName="active-button" to="/">Home</Link></NavItem>
                <NavItem><Link activeClassName="active-button" to="/cv">CV</Link></NavItem>
                <NavItem><Link activeClassName="active-button" to="/books">Books</Link></NavItem>

                <NavItem><Link activeClassName="active-button" to="/projects">Projects</Link></NavItem>
                <NavItem><Link activeClassName="active-button" to="/hobby">Hobby</Link></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            </div>
        </Navbar>



        );
    };
}