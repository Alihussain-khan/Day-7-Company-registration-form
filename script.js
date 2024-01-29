console.log("running");
var obj;
const cdata = {
  company_name: "",
  employee_name: "",
  email: "",
  password: "",
  company_description: "",
};

const call = () => {
  //   //api call
  // fetch("https://676d-72-255-39-45.ngrok-free.app/companies", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.text())
  //   .then((json) => console.log(json));
  // api call 2
  // const apiUrl = "https://2c21-182-176-157-31.ngrok-free.app/company";
  // fetch(apiUrl)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log("API Response:", data);
  //   });
  // api call 3
  // var responseClone;
  // fetch("https://2c21-182-176-157-31.ngrok-free.app/company")
  //   .then(function (response) {
  //     responseClone = response.clone(); // 2
  //     return response.json();
  //   })
  //   .then(
  //     function (data) {},
  //     function (rejectionReason) {
  //       // 3
  //       console.log(
  //         "Error parsing JSON from response:",
  //         rejectionReason,
  //         responseClone
  //       ); // 4
  //       responseClone
  //         .text() // 5
  //         .then(function (bodyText) {
  //           console.log(
  //             "Received the following instead of valid JSON:",
  //             bodyText
  //           ); // 6
  //         });
  //     }
  //   );
  //api call
};

document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.companyName = formData.get("companyname");
  cdata.companyDescription = formData.get("cdescription");
  cdata.employeeName = formData.get("cname");
  cdata.email = formData.get("cemail");
  cdata.password = formData.get("cpassword");

  console.log(cdata);
  console.log(JSON.stringify(cdata));

  //api call
  fetch("https://2c21-182-176-157-31.ngrok-free.app/company/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cdata),
  })
    .then((response) => response.json())
    .then((data) => {
      let message = data.message;
      if (message.endsWith("registered!")) {
        console.log("next page");
        window.location.href = "index.html";
      } else {
        alert(message);
      }
      console.log(data);
    })
    .catch((error) => {
      console.error("Error during company registration:", error);
    });

  event.preventDefault();
});

// call();
