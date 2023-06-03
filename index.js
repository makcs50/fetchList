// Задача 1.1
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

// Задача 1.2
fetch('https://this-site-doesnt-exists.intocode')
  .catch(error => console.error(error));

// Задача 1.3
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log(typeof data));

// Задача 1.4
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log(data.data.length));

// Задача 1.5
fetch('https://reqres.in/api/users/1')
  .then(response => response.json())
  .then(data => console.log(data.data.email));

// Задача 2.1
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "first_name": "intocode" })
})
  .then(response => response.json())
  .then(data => console.log(data));

// Задача 2.2
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "first_name": "intocode" })
})
  .then(response => response.json())
  .then(data => console.log(data));

// Задача 2.3
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "first_name": "intocode" })
};

fetch('https://reqres.in/api/users', requestOptions)
  .then(response => response.json())
  .then(data => console.log(data));

// Задача 2.4
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "first_name": "into",
    "last_name": "code"
  })
})
  .then(response => response.json())
  .then(data => console.log("ID:", data.id, "Created at:", data.createdAt));

// Задача 2.5
fetch('https://reqres.in/api/users/5', {
  method: 'DELETE'
})
  .then(response => {
    if (response.status === 204) {
      console.log("Пользователь с id 5 успешно удален");
    }
  });

// Задача 2.6
fetch('https://reqres.in/api/users/3', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "интукод"
  })
});