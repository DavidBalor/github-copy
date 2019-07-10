const UI = require('./ui'),
      Github = require('./github'),
      {client_id,client_secret} = require('./config.json')

const github = new Github (client_id,client_secret)
const userForm = document.querySelector('#userForm')
const ui = new UI()

userForm.addEventListener('submit', (e)=>{
  const name = document.querySelector('#textSearch').value
  
  github.fetchUser(name)
  .then(data => {
    if(/not found/i.test(data.userData.message)){
      ui.showMessage(data.userData.message,'alert alert-danger col-md-12 mt-2')
    } else {
      console.log(data.userData)
      ui.showProfile(data.userData)
      ui.showRepositories(data.reposData)
    }
  })
  e.preventDefault()
})

      