document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  //fontion pour boutons lpgon signup
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });
  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  // Fonction pour envoyer les données au serveur
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

  // Soumission du formulaire d'inscription
  registerBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = signUpForm.querySelector('input[name="name"]').value;
    const email = signUpForm.querySelector('input[name="email"]').value;
    const password = signUpForm.querySelector('input[name="password"]').value;

    sendData("http://example.com/register", {
      name: name,
      email: email,
      password: password,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  });

  // Soumission du formulaire de connexion
  loginBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = signInForm.querySelector('input[name="email"]').value;
    const password = signInForm.querySelector('input[name="password"]').value;

    sendData("http://example.com/login", { email: email, password: password })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  });
});
