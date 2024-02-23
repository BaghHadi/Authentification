document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const hadiBtn = document.getElementById("hadi");

  // const btndeouuf = document.querySelector(".sign-up form button ");
  // const signUpForm = document.querySelector(".sign-up form");
  // const signInForm = document.querySelector(".sign-in form");

  // const registerBtn = document.getElementById("register");
  function toggleForms() {
    container.classList.toggle("active");
  }

  registerBtn.addEventListener("click", toggleForms);
  loginBtn.addEventListener("click", toggleForms);

  hadiBtn.addEventListener("click", (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    e.preventDefault();
    console.log(name, email, password);
  });

  // function sendData(url, data) {
  //   return fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Erreur réseau");
  //     }
  //     return response.json();
  //   });
  // }

  // btndeouuf.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   const name1 = document.getElementById("name").value;
  //   const name = signUpForm.querySelector('input[name="name"]').value;
  //   const email = signUpForm.querySelector('input[name="email"]').value;
  //   const password = signUpForm.querySelector('input[name="password"]').value;
  //   console.log(name1, name, email, password);

  //   // sendData("http://example.com/register", {
  //   //   name: name,
  //   //   email: email,
  //   //   password: password,
  //   // })
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Erreur:", error);
  //   //   });
  // });

  // signInForm.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const email = this.querySelector('input[name="email"]').value;
  //   const password = this.querySelector('input[name="password"]').value;
  //   console.log(email, password);

  //   sendData("http://example.com/login", { email, password })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur:", error);
  //     });
  // });
});
