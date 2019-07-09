const ui = require('./ui'),
      Github = require('./github'),
      {client_id,client_secret} = require('./config.json')

const github = new Github (client_id,client_secret)
const userForm = document.querySelector('#userForm')

userForm.addEventListener('submit', (e)=>{
  const name = document.querySelector('#textSearch').value
  
  github.fetchUser(name)
  .then(data => console.log(data))
  e.preventDefault()
})

      