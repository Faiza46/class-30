
const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

const displayUsers = data => {
    const ul = document.getElementById("users");
    for (const user of data) {
        //console.log(user);

        const li = document.createElement('li');
        li.innerText = `${user.name}===${user.email}=== ${user.username}=== ${user.address.city}`;
        ul.appendChild(li);
    }
}


