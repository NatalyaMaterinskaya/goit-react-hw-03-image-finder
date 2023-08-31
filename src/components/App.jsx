import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true })
        const images = await fetchImages();
        console.log(images);
        this. setState({images, loading: false })
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  onSubmit = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
        <Button />
        <GlobalStyle />
      </div>
    );
  }
}
