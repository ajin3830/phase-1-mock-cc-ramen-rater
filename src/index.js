// write your code here

// See all ramen images in the div with the id of ramen-menu. 
// When the page loads, request the data from the server to get all the ramen objects. 
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

fetch("http://localhost:3000/ramens") 
.then(res => res.json())
.then(data => renderRamens(data))

function renderRamens(ramens) {
    ramens.forEach((ramen) => {
        const ramenMenu = document.querySelector('#ramen-menu')

        const img = document.createElement('img')
        img.src = ramen.img

        document.getElementById('ramen-menu').appendChild(img)
        
        document.querySelector('img').addEventListener('click', (e) => {console.log(hehe)})
})
}

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed 
// inside the #ramen-detail div and where it says insert comment here and insert rating here.