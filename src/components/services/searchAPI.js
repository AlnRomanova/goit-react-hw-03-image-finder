import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '31209256-0b3a6934894cd0b0ba6ec9540';

axios.defaults.baseURL = BASE_URL;

export const fetchPhotos = (searchQuery) => {

    return axios(BASE_URL, { params:
      { key: KEY,
        q: searchQuery,
        page: 1,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
    }
   });
  };

