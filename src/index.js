// write your code here

function getRamen() {
    fetch("http://localhost:3000/ramens") 
    .then(res => res.json())
    .then(ramens => ramens.forEach(renderRamen))
}

getRamen()

function renderRamen(ramen) {
    
    // const ramenMenu = document.querySelector('#ramen-menu')
    const div = document.createElement('div')
    div.className = 'ramen'

    const img = document.createElement('img')
    img.src = ramen.image
    img.className = 'ramen-img'
    img.addEventListener('click', (e) => {
        document.querySelector("#ramen-detail > img").src = ramen.image
        document.querySelector("#ramen-detail > h2").textContent = ramen.name
        document.querySelector("#ramen-detail > h3").textContent = ramen.restaurant
        document.querySelector("body > h3:nth-child(4)").textContent = ramen.rating
        document.querySelector("#comment-display").textContent = ramen.comment
    })
    
    div.appendChild(img)
    document.getElementById('ramen-menu').appendChild(div)
             
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    } 
    renderRamen(newRamen)
})


