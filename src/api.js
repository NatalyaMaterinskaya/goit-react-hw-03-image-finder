import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

//todo
const apiKey = '38292054-24d10c6ab751dde75bf1a43b0';

export const fetchImages = async (query, page) => {
  const response = await axios.get('/', {
    params: {
      key: apiKey,
      q: query,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
    return response;
};
