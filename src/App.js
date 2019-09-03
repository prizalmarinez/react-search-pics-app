import React, { Component } from 'react';
import './App.css';
import { Container, Grid } from 'semantic-ui-react'

// components
import SearchBar from './components/SearchBar'

class App extends Component {

  searchPics = value => {
    console.log(value);
  }

  render() {
    return (
      <Container>
        <Grid centered columns={3}>
          <Grid.Row>
            <Grid.Column>
              <SearchBar searchValue={this.searchPics} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;