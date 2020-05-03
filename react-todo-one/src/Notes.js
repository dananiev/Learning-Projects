import React from 'react'

class Notes extends React.Component {


    render() {
        return(
            <div className='note' onClick={this.props.deleteMethod}>{this.props.text}</div>
        );
    }
}

export default Notes