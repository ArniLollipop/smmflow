const URL = 'https://flowsmm.net/api/auth/register'
  let formData = new FormData()
  formData.append("email", 'test5@user.com')
  formData.append("password", "123123123")


  async function signUpHandle (){
    const mail = document.getElementById('loginMail').value
    const password = document.getElementById('loginPass').value

    try{
    fetch('https://flowsmm.net/api/auth/register',{
      method: 'POST',
      redirect: 'follow',
        body: JSON.stringify({
          email: mail,
          password: password
        })
      })
      .then(res => res.json())
      .then(data => {
        window.location.assign(data.url)
        document.getElementById('headerLogout').classList.remove('md:flex')
        document.getElementById('headerLogin').classList.add('md:flex')
      })
      .catch(error => {
      console.log(error)
    })  
  
    console.log('ok');
    } catch(err){
      console.log('Error', err);
    } 
  }


  function loginHandle(){
    console.log('login');
    const mail = document.getElementById('signMail').value
    const password = document.getElementById('signPass').value
    const data =  new FormData ();
    data.append ('email', mail);
    data.append ('password', password);

    fetch('https://flowsmm.net/api/auth/login', {
      method: 'POST',
      body: data,
      redirect: 'follow',
    }).then(res => res.json())
          .then(data => {
            window.location.assign(data.url)
            document.getElementById('headerLogout').classList.remove('md:flex')
            document.getElementById('headerLogin').classList.add('md:flex')
          })
          .catch(error => 
          console.log(error));
  }