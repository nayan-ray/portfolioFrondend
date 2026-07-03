import axios from "axios";

export const getPortfolio = () => {
    return axios.get("http://localhost:3000/api/v1/portfolio/get-products/all");
};


export const getProduct = (id) => {
    return axios.get(`http://localhost:3000/api/v1/products/${id}`);
};