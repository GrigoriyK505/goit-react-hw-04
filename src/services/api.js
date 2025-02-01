import axios from "axios";

const ACCESS_KEY = "Cy60DZ_kpQ40CAK8Q4llK7DHMqVh0M3xoO9j97QXuJQ";

axios.defaults.headers.common = {
    Authorization: `Client-ID ${ACCESS_KEY}`,
};

const fetchRequest = async (query, page) => {
    const response = await axios.get(
        `https://api.unsplash.com/photos/?query=${query}&page=${page}`
    );
    return response.data;
};
export default fetchRequest;