
var postsAPi='https://jsonplaceholder.typicode.com/posts'

fetch(postsAPi)
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(posts){
        var htmls=posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        })

        var html=htmls.join('');

        document.getElementById('posts-block').innerHTML=html;
    })

// fake api - mock api
fetch('http://localhost:3000/courses')
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(courses){
        console.log(courses);
    })