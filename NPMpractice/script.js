import axios from 'axios'
  
  
  axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(function (response) {
    console.log(response.data);
  })
