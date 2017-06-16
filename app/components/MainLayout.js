import React, {Component} from 'react';
import Header from './Header';
import FooterComponent from './FooterComponent'

export default class MainLayout extends Component {
    render() {
        return(
            <div>
                <Header />

                <div className="container">

                    <main>
                        {this.props.children}
                    </main>

                </div>
                <FooterComponent />
            </div>
        )
    };
};

