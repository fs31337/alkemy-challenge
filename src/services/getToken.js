import axios from 'axios';
//agregar token api a .env

export function getToken(values) {
    var bodyFormData = new FormData();
    bodyFormData.append('email', `${values.email}`);
    bodyFormData.append('password', `${values.password}`);
    axios({
        method: "post",
        url: "http://challenge-react.alkemy.org",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(response => {
          localStorage.setItem('token', JSON.stringify(response.data.token))
        }
          ).catch(error => {
            return error;
          });
        }


export default getToken;