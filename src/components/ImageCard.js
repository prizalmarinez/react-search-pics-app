import React, { Component } from 'react';

class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = {
            span: 0
        }
    }

    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        const height = this.imgRef.current.clientHeight,
            span = Math.ceil(height / 10);
        this.setState({ span });
    }

    render() {
        const { description, urls } = this.props.photo;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                <img ref={this.imgRef} alt={description} src={urls.small} />
            </div>
        );
    }
}

export default ImageCard;