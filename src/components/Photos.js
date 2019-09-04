import React from 'react';
import ImageCard from './ImageCard'

const Photos = props => {
    const displayPhotos = props.photos.map((photo) => {
        return <ImageCard key={photo.id} photo={photo} />
    });

    return <div className="image-list">{displayPhotos}</div>
};

export default Photos;