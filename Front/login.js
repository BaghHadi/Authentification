document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const SignUpbtn = document.getElementById("Signup-btn");
  const SignInbtn = document.getElementById("Signin-btn");
  const invalid = document.getElementById("err");
  const invalid1 = document.getElementById("err1");
  const invalid2 = document.getElementById("err2");

  function toggleForms() {
    container.classList.toggle("active");
  }

  registerBtn.addEventListener("click", toggleForms);
  loginBtn.addEventListener("click", toggleForms);

  function sendData(url, data) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erreur réseau");
      }
      return response.json();
    });
  }

  SignUpbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    console.log(validateEmail(email));

    if (!validateEmail(email)) {
      console.error("L'adresse e-mail n'est pas valide");
      invalid1.style.display = "block";
      return;
    } else {
      console.log(name, email, password);

      sendData("http://localhost:8081/signUp", {
        name: name,
        email: email,
        password: password,
      })
        .then((data) => {
          console.log(data);
          window.location.href = "inscription-reussie.html";
        })
        .catch((error) => {
          console.error("L'adresse e-mail n'est pas valide");
          invalid2.style.display = "block";
          console.error("Erreur:", error);
        });
    }
  });

  SignInbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email1").value;
    const password = document.getElementById("pass").value;
    console.log(email, password);

    sendData("http://localhost:8081/auth", { email: email, password: password })
      .then((data) => {
        console.log(data);
        if (data.result === true) {
          window.location.href = "connexion-reussie.html";
        }
        if (data.result === false) {
          invalid.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  });
});
