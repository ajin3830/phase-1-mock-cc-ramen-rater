// write your code here

function getRamen() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => renderRamen(data))
}

const ramenMenu = document.querySelector('#ramen-menu')

function renderRamen(ramens) {
    ramens.forEach(ramen => {
        const img = document.createElement('img')
        img.src = ramen.image
        ramenMenu.appendChild(img)
        
        img.addEventListener("click", () => {     
            document.querySelector("#ramen-detail > img").src = ramen.image
            document.querySelector("#ramen-detail > h2").textContent = ramen.name
            document.querySelector("#ramen-detail > h3").textContent= ramen.restaurant
            document.querySelector("body > h3:nth-child(4)").textContent= ramen.rating
            document.querySelector("#comment-display").textContent= ramen.comment
        })
    
    })
}

getRamen()

// new submit event to post new ramen
// add to #ramen-menu div  document.querySelector("#ramen-menu")
// preventDefault optioal

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
    renderRamen([newRamen])
})


// SOLUTION ONE
// function getRamen() {
//     fetch('http://localhost:3000/ramens')
//     .then(res => res.json())
//     .then(data => renderRamens(data))
//   }
  
//   getRamen()
  
//   const ramenMenu = document.querySelector('#ramen-menu')

//   const ramenImage = document.createElement('img')
//   const ramenName = document.querySelector("#ramen-detail > h2")
//   const ramenRes = document.querySelector("#ramen-detail > h3")
//   const ramenRating = document.querySelector("#rating-display")
//   const ramenComment = document.querySelector("#comment-display")
    
//   function renderRamens(ramens) {

//     ramens.forEach(ramen => {
//       const menuImg = document.createElement('img')
//       menuImg.src = ramen.image
//       ramenMenu.append(menuImg)

//       menuImg.addEventListener('click', ()=>{
//         ramenName.textContent = ramen.name
//         ramenRes.textContent = ramen.restaurant
//         ramenImage.src = ramen.image
//         ramenRating.textContent = ramen.rating
//         ramenComment.textContent = ramen.comment
//       })
  
//     })
//   }
  
  
//   function postRam() {
//     const ramenForm = document.querySelector('#new-ramen')
//     ramenForm.addEventListener('submit', (e)=> {
//       e.preventDefault()
//       let ramenObj = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         image: e.target.image.value,
//         rating: parseInt(e.target.rating.value),
//         comment: e.target['new-comment'].value
//       }
//       renderRamens([ramenObj])
//     })
//   }
  
//   postRam()
  










