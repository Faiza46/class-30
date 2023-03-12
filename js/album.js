function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => displaySingleUser(json))
}
function displaySingleUser(user) {
    //console.log(user);
    const divContainer = document.getElementById("Album");
    for (const data of user) {
        const div = document.createElement('div');
        div.classList.add('album');
        div.innerHTML = `<h1>${data.id}</h1>
        <h3>${data.userId}</h3>
        <p>${data.title}</p>`;
        divContainer.appendChild(div);
    }

}