export function authComponent(Component,Login) {
    console.log(localStorage)
    return Object.keys(localStorage).join().search('/\btoken\b/') > 1 ? Component : Login
}

export default authComponent;