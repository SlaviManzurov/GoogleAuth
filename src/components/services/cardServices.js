const url = `https://fakestoreapi.com/products?limit=16`

export const getAll = () => {
    return fetch(url)
        .then(res => {
            if (res) {
               return res.json()
            }
            return {}
        })
}