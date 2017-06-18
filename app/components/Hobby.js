/**
 * Created by Galina on 17.06.2017.
 */
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

export default class Hobby extends Component {
              handleImageLoad(e) {
            console.log('Image loaded ', e.target)
        };

        render() {

            const images = [
                {
                    original: 'http://lorempixel.com/1000/600/nature/1/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/2/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
                },
                {
                    original: 'http://lorempixel.com/1000/600/nature/3/',
                    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
                }
            ];

            return (
                <div>
                <ImageGallery
                    items={images}
                    slideInterval={2000}
                    onImageLoad={this.handleImageLoad}
                />
                </div>
            );
        }


}