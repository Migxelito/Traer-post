async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error al obtener los posts');
        }
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function displayPosts(posts) {
    const postDataContainer = document.getElementById('post-data');
    postDataContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los nuevos posts

    const ulElement = document.createElement('ul'); // Crear elemento <ul> para los posts

    posts.forEach(post => {
        const liElement = document.createElement('li'); // Crear elemento <li> para cada post
        liElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        ulElement.appendChild(liElement); // Agregar cada <li> a la lista <ul>
    });

    postDataContainer.appendChild(ulElement); // Agregar la lista <ul> al contenedor de datos de los posts
}