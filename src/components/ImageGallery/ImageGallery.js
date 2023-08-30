import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryItem />
      <Button/>
    </ImageGalleryWrapper>
  );
};
