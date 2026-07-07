import axios from "axios";

export const getPortfolio = () => {
    return axios.get("https://portfolio-backend-g05w.onrender.com/api/v1/portfolio/get-products/all");
};


export const getProduct = (id) => {
    return axios.get(`https://portfolio-backend-g05w.onrender.com/api/v1/portfolio/get-details/product/${id}`);
};