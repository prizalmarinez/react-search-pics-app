import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

class SearchBar extends Component {
    state = {
        searchValue: ''
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ searchValue: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchValue(this.state.searchValue)
        this.setState({ searchValue: '' })
    }

    render() {
        return (
            <div className="mt-50">
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Search Images</label>
                        <Input icon='search' placeholder='Search...' value={this.state.searchValue} onChange={this.onChange} />
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default SearchBar;