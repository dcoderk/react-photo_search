import React from 'react';

class SearchBar extends React.Component {
    // Initialize the state
    state = { term: '' };

    // Event Handlert to prevent reloading of page
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            placeholder="Search..." 
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>    
            </div>
        );
    }
}

export default SearchBar;