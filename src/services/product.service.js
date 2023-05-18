import api from "./api";
export const get = async () => {
    try {
        const url = "products?limit=20";
        const rs = await api.get(url);
        return rs.data.products;
    } catch (err) {
        return [];
    }
}

export const get4p = async () => {
    try {
        const url = "products?limit=4";
        const rs = await api.get(url);
        return rs.data.products;
    } catch (err) {
        return [];
    }
}

export const find = async (id)=>{
    try {
        const url = "products/"+id;
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const post = async (prompt) => {

}