console.log("running");
//main data object
const cdata = {
  employeeName: "",
  email: "",
  companyName: "",
  password: "",
  departmentName: "",
};
//getting data from inputs
document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.employeeName = formData.get("cname");
  cdata.email = formData.get("cemail");
  cdata.companyName = formData.get("companyname");
  cdata.password = formData.get("cpassword");
  cdata.departmentName = formData.get("departments");

  console.log(cdata);
  event.preventDefault();

  fetch("https://2c21-182-176-157-31.ngrok-free.app/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cdata),
  })
    .then((response) => response.json())
    .then((data) => {
      // let message = data.message;
      // if (message.endsWith("registered!")) {
      //   console.log("next page");
      //   window.location.href = "index.html";
      // } else {
      //   alert(message);
      // }
      console.log(data);
    })
    .catch((error) => {
      console.error("Error during company registration:", error);
    });
});
