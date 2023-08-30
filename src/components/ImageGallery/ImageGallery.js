import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryItem />
    </ImageGalleryWrapper>
  );
};
