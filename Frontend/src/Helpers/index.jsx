import API_URL from '../Config'
export const useFetch = async(Méthode,EndPoint,Data=null) => {
    const myInit = { method: Méthode};
    const res = await fetch(`${API_URL+EndPoint}`,myInit);
    return await res.json();
}