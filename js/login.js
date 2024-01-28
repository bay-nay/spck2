const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const registerForm = document.getElementById("register-form")


function handleLogin(e) {
    e.preventDefault();
    if (emailElm.value === "") {
        alert("Bạn chưa điền tên")
        return;
    }
    if (passwordElm.value === "") {
        alert("Bạn chưa điền mật khẩu")
        return;
    }
    const email = emailElm.value;
    const password = passwordElm.value;
    const usersLocal = localStorage.getItem('users');
    const users = JSON.parse(usersLocal);
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.email === email && element.password === password) {
            alert("Đăng nhập thành công")
            window.location="./index.html"
            return;
        }
        
    }
    alert("SAI")
}


registerForm.addEventListener('click', handleLogin)