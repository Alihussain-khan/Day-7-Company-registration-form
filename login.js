console.log("running");

const cdata = {
  email: "",
  password: "",
};

document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.email = formData.get("cemail");
  cdata.password = formData.get("cpassword");
  console.log(cdata);

  event.preventDefault();

  //api call
  fetch("https://2c21-182-176-157-31.ngrok-free.app/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cdata),
  })
    .then((response) => response.json())
    .then((data) => {
      let message = data.message;
      if (message.endsWith("in!")) {
        console.log("next page");
        window.location.href = "employ.html";
      } else {
        alert("wrong password or email");
      }
      console.log(data.message);
    })
    .catch((error) => {
      console.error("Error during login:", error);
    });
});
