
const Title =  document.getElementById("title");
const Body =document.getElementById("body");
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(data => {
    const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
               <div class="Post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                </div>
            `
        }
        document.getElementById("post-list").innerHTML = html
})
document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = Title.value
    const postBody = Body.value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(post => {
        document.getElementById("post-list").innerHTML = `
        <div class="Post">
         <h3>${post.title}</h3>
         <p>${post.body}</p>
         </div>
         ${document.getElementById("post-list").innerHTML}
     `
     Title.value = ""
     Body.value = ""

    })
})