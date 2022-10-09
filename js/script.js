var posts = [];

var myRequest = new XMLHttpRequest();

myRequest.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=15d80c60d775ae122a430da3b2eb6733");

myRequest.send();

// myRequest.readyState (request Kolo) == 0 => lesa , 1 => wasl , 2 => talab , 3 => be7aml , 4 => gahza
// myRequest.status (5asa b url) 404 => not found  403 => forbidden  200 => ok 
myRequest.addEventListener("readystatechange", function () {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        posts = JSON.parse(myRequest.response).results;
        display();

    }
})

function display() {
    var post = ` `;

    for (var i = 0; i < posts.length; i++) {
        post += `
        <div class="col-md-3">
            <div class="post">
                <img class="w-100 mt-5" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}" >
                <img class="w-100 mt-5" src="https://image.tmdb.org/t/p/w500/${posts[i].backdrop_path}" >
                <h4>${posts[i].title}</h4>
                <p class="text-danger">${posts[i].overview}</p>
            </div>
        </div>`
    }
    document.getElementById("row").innerHTML = post;
}