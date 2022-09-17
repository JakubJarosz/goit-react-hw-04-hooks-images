import axios from "axios";


export const fetchPictures = (inputValue, pageValue,) => {
    const response = axios.get(`https://pixabay.com/api/?q=${inputValue}&page=${pageValue}&key=28402505-f95f4c77bbfaeb79f596a5044&image_type=photo&orientation=horizontal&per_page=12`);
    return response
}

export default {
    fetchPictures,
};


