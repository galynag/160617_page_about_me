/**
 * Created by Galina on 17.06.2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import {Col, Row, Input, Button, Preloader} from 'react-materialize';
import FaBeer from 'react-icons/lib/fa/beer';

export default class BookList extends Component {
    state = {
        search: 'react',
        books: [],
        loading: true,
        error: null
    };
    valueInput = (e) => {
        this.setState({search: e.target.value})
    };
    componentDidMount () {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyA7gjbadpyT8hPDfVfPUpbZFkhKwfi_C0A`)
            .then(res => {
                this.setState({
                    books: res.data.items,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }
    renderLoading() {
        return (
            <Row>
                <Col s={4}>
                    <Preloader flashing/>
                </Col>
            </Row>
        );
    }
    renderError() {
        return(
            <div>Something went wrong {this.state.error.message}</div>
        );
    }
    renderPosts() {
        const { error, books } = this.state;
        let booksNewArray = books.filter(item =>{
            let input2 = this.state.search.toLowerCase();
            let item2=item.volumeInfo.title.toLowerCase();
            if(item2.indexOf(input2) >= 0) {
                return true
            }
        });

        if(error) {
            return this.renderError;
        }

        return (

            <div>
                {booksNewArray.map(item =>
                    <div key={item.id} className="listApi">
                        <Col l={3} m={6} s={12}>
                            <img className="w100of-box" src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}/>
                            <a href={item.volumeInfo.infoLink} target="_blank"><span className="bold">Title: </span>{item.volumeInfo.title}</a>
                            <p><span className="bold">Authors: </span>{item.volumeInfo.authors}</p>
                            <p><span className="bold">Language: </span>{item.volumeInfo.language}</p>
                            <Button className="btn-more #757575 grey darken-1" waves='light'>More...</Button>
                            <p className="full-description">{item.volumeInfo.description}</p>
                        </Col>
                    </div>
                )}
            </div>
        );

    }
    render() {
        const {loading} = this.state;

        return (
            <div>
                <Row>
                    <Col s={12}>
                    <h1>Book List</h1>
                        <Row>
                            <Input m="6" s={12}
                                   className="searchInput"
                                    type="text"
                                    label="Enter text for filter. Now books filtered by word 'react'"
                                    value={this.state.search}
                                    onChange={this.valueInput}
                            />
                            <Button m="6" s={12} className="#757575 grey darken-1" waves='light'>Search</Button>
                        </Row>

                            { loading ? this.renderLoading() : this.renderPosts()}

                    </Col>
                </Row>
            </div>
        );
    }
}
