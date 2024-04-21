import React, { Component } from 'react';
import '../App.css';

class Content extends Component {
    state = {
        textareaData: ''
    };

    handleTextarea = (event) => {
        this.setState({ textareaData: event.target.value }); 
    };

    render() {
        return (
            <section className='bg-container'>
                <h1 className='heading'>Content</h1>
                <p className='para'>Nature is the ultimate source of our living. Both living and non-living things include nature,
                    and everyone is interdependent, which helps maintain the ecosystem. Plants, animals, and humans
                    all depend on nature for their survival.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s" alt='' />
                <p>Suggestions:</p>
                <textarea
                    rows='10'
                    cols='50'
                    value={this.state.textareaData} 
                    onChange={this.handleTextarea}
                />
                <p>{this.state.textareaData}</p>
                
               
            </section>
        );
    }
}

export default Content;