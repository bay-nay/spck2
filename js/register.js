const emailElm = document.getElementById("email")
const passwordElm = document.getElementById("password")
const submitBtn = document.getElementById("submit-btn")
const formRegister = document.getElementById("register-form")

function Registerlocal(s) {
  s.preventDefault();
  const user ={
    email : emailElm.value,
    password : passwordElm.value,
  }
  const usersStorage = localStorage.getItem("users")
  if (usersStorage === null) {
    const users = [user]
    localStorage.setItem('users', JSON.stringify(users))
  }else{
    const users =JSON.parse(usersStorage);
      for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.email === user.email) {
          alert('Trùng');
          return;
        }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      }
      
  }
  alert('Thành công')

      window.location = ("./login.html")
}
formRegister.addEventListener('submit',Registerlocal);