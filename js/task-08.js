const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;

   if (!email.value || !password.value) {
    return alert("Please fill in all the fields!");
  }
  else{
    const userData = {[email.value]: password.value};
    console.log(userData)
    email.value="";
    password.value = "";
  }
})
