
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

      let password = "";

      function random() {
        password = "";

        for (let i = 0; i < 8; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);

          const randomCharacter = characters[randomIndex];

          password += randomCharacter;
        }

        result.innerText = password;
      }

      let result = document.getElementById("result");

      let button = document.getElementById("button");

      button.addEventListener("click", () => {
        console.log("button clicked");

        random();
      });
