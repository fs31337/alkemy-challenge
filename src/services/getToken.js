import axios from 'axios';
//agregar token api a .env

export function getToken(values) {
    var bodyFormData = new FormData();
    console.log(values)
    bodyFormData.append('email', `${values.email}`);
    bodyFormData.append('password', `${values.password}`);
    axios({
        method: "post",
        url: "http://challenge-react.alkemy.org",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
            localStorage.setItem('token', JSON.stringify(response.data.token))
            return 200;
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
}

export default getToken;