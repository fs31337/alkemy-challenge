function authRoute(Component,Login) {
    return localStorage.getItem("token") ? Component : Login
  }

export default authRoute;