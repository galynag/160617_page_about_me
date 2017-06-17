/**
 * Created by Galina on 17.06.2017.
 */

import React, {Component} from 'react';

export default class SearchLayout extends Component {
    render() {
        return(
            <div>
                <header>Search by API in Google Books</header>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    };
};

