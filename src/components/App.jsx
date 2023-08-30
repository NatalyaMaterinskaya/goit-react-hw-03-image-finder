import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component  {

  state = {
    query: '',
    images: [],
    page: 1,
  };

  onSubmit = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  }
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
  };
};
