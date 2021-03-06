import React, { Component } from 'react';
import './App.css';
import { Container, Grid } from 'semantic-ui-react';
// components
import SearchBar from './components/SearchBar'
import Photos from './components/Photos'
import Navbar from './components/Navbar'
// Api
import unsplash from './api/unsplash'


class App extends Component {
  state = {
    photos: [],
    loading: false
  }

  searchPics = async value => {
    this.setState({ loading: true });
    await unsplash.get('/search/photos', {
      params: {
        query: value,
        per_page: 30
      }
    })
      .then(res => this.setState({ photos: res.data.results, loading: false }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.photos);
    return (
      <div>
        <Navbar />
        <Container>
          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column>
                <SearchBar searchValue={this.searchPics} loading={this.state.loading} />
                <p>Found {this.state.photos.length} photos.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* <div className="ui three column doubling stackable masonry grid"> */}

          {/* </div> */}
          {/* <div>
          <Photos photos={this.state.photos} />
        </div> */}
          <div className="mt-50">
            <Photos photos={this.state.photos} />
          </div>
        </Container>
        {/* <div className="ui container">
          <div className="ui three column doubling stackable masonry grid">
            <Photos photos={this.state.photos} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;