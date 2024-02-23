document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", function () {
    container.classList.add("active");
  });
  loginBtn.addEventListener("click", function () {
    container.classList.remove("active");
  });

  function sendData(url, data) {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("Erreur réseau");
      }
      return response.json();
    });
  }
  document
    .getElementById("signUpForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche la soumission par défaut du formulaire
      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const password = this.querySelector('input[name="password"]').value;

      sendData("http://example.com/register", {
        name: name,
        email: email,
        password: password,
      })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Erreur:", error);
        });
    });

  document
    .getElementById("signInForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche la soumission par défaut du formulaire
      const email = this.querySelector('input[name="email"]').value;
      const password = this.querySelector('input[name="password"]').value;

      sendData("http://example.com/login", { email: email, password: password })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Erreur:", error);
        });
    });
});
