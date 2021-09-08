export function checkToken() {
    return localStorage.getItem("token") ? true : false
}

export default checkToken;