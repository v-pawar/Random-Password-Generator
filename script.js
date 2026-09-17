const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const result = document.getElementById("result");
const button = document.getElementById("button");

function generatePassword() {
  let password = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    const randomCharacter = characters[randomIndex];

    password += randomCharacter;
  }

  result.innerText = password;
}

button.addEventListener("click", () => {
  generatePassword();
});
