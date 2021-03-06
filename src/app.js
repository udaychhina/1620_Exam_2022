// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

window.onload = loadContacts(contactsList)
// LOAD ALL CONTACTS

function loadContacts() {
    const allContacts = document.querySelector('#display_all_contacts')
    
    for(let i = 0; i < contactsList.length; i++) {
        let contactCard = document.createElement('div')
        contactCard.innerHTML = `
        <img src='./img/${contactsList[i].image}'>
        <p>${contactsList[i].name}</p>`
        
        allContacts.appendChild(contactCard)
    }
}


// DISPLAY A SINGLE CONTACT 

const cards = document.querySelectorAll('#display_all_contacts div')

cards.forEach(cards => cards.addEventListener('click', (e) => {
    //hide the contacts
    const allContactSpace = document.querySelector('#display_all_contacts')
    allContactSpace.style.visibility = 'hidden'

    //create new space for a single contact card
    const contactSpace = document.createElement('div')
    contactSpace.setAttribute('id', 'individual_contact')

    let contactName = cards.textContent.trim()
    let contactIndex = 0
    for(let i = 0; i < contactsList.length; i++) {
        if(contactName == contactsList[i].name) {
            break
        }
        contactIndex++
    }

    contactSpace.innerHTML = `
    <img src='./img/${contactsList[contactIndex].image}'>
    <h1>${contactsList[contactIndex].name}</h1>
    <p>${contactsList[contactIndex].phone}</p>
    <p>${contactsList[contactIndex].email}</p>
    <span class="fa-solid fa-x"></span>`

    const contactSection = document.querySelector('#display_single_contact')
    contactSection.appendChild(contactSpace)
}))

const closeButton = document.querySelector('.close')

closeButton.addEventListener('click', () => {
    const allContacts = document.querySelector('#display_all_contacts')
    const singleContact = document.querySelector('#display_single_contact')
    allContacts.style.visibility = 'visible'
    singleContact.style.visibility = 'hidden'
})


// function displaySingleContact () {

// }
