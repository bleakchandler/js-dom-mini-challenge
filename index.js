/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log("Here's your header:", header)

//changed //"<script src="data.js"></script>" to "<script src="data.js" defer></script>"

// ^this is telling the browser "wait until you render all the HTML before you excecute the code in the. You could also move the script tag to the bottom of the body. You don't need it for data.js beacuse it doesn't contain any code that's trying to access the DOM.

//also changed const header = document.querySelector("header") to const header = document.querySelector("h1#header")



/***** Deliverable 2 *****/
//console.dir(header)


header.style.color = 'blue'


/***** Deliverable 3 *****/

console.log('This is what the traveler object looks like: ', traveler)

// 1. Find the element that we're interested in
const profile = document.querySelector('div#profile')
// ^ gives it a starting point of div when using the querySelector.
const img = profile.querySelector('img')
// 2. Actually update the property/ies of that element
console.log(img)
img.src = traveler.photo
img.alt = traveler.name

const h2 = profile.querySelector('h2')
console.log(h2)
h2.textContent = traveler.name
// ^ looking for an element that's an h2

const em = profile.querySelector('em')
em.textContent = traveler.nickname
//innertext will consider css where as text content won't. Better to use text content since it won't consider css - so there's less work that will need to be done, more efficient.
console.log(em)

/***** Deliverable 4 *****/


const ul = document.querySelector('ul#animals')

//1. We need to be able to iterate through the array. Foreach is a good choice so we can get used to callback functions.
traveler.animalSightings.forEach(function (animalSightingObject) {
    // console.log(animalSightingObject)

    const li = document.createElement('li')
    //for the combo approach we need to establish an outer element
    li.dataset.id = animalSightingObject.id //this id will allow us to distinguish one animal sighting from another animal sighting
    
    li.innerHTML = `<p>${animalSightingObject.description}</p>
    <img src="${animalSightingObject.photo}" alt="${animalSightingObject.species}"/>
    <a href="${animalSightingObject.link}" target="_blank">Here's a video about the ${animalSightingObject.species} species!</a>`

    console.log(li)
    ul.append(li)
})

// ^ console log for each of the animal sightings


/***** Deliverable 5 *****/
// 1. Find the element that you're interested in deleting
const liToRemove = document.querySelector('[data-id="3"]')
// ^copy the attribute and value, paste it into the query selector section, and wrap it in brackets.
console.log(liToRemove)

// 2. Actually remove it
liToRemove.remove()