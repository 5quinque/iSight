import React, {Component} from 'react';

class Thumbnail extends Component {
    render() {
        const { filename } = this.props;

        return (
            <div className="col">
                <img src="https://via.placeholder.com/150" className="rounded mx-auto d-block" alt={filename}></img>
            </div>
        );
    }
}

export default Thumbnail;