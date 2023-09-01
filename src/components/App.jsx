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

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      this.cutQuery(prevState.query) !== this.cutQuery(query) ||
      prevState.page !== page
    ) {
      try {
        this.setState({ loading: true });
        const images = await fetchImages();
        this.setState({ images });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  cutQuery = query => query.slice(query.indexOf('/') + 1, query.length);

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
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && <ImageGallery />}
        {this.state.page!==1 && <Button onClick={this.handleLoadMore} />}
        <GlobalStyle />
      </div>
    );
  }
}
