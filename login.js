console.log("running");

const cdata = {
  cemail: "",
  cpassword: "",
};

document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.cemail = formData.get("cemail");
  cdata.cpassword = formData.get("cpassword");
  console.log(cdata);
  window.location.href = "employ.html";
  event.preventDefault();

  //   //api call
  //   const apiUrl = "https://api.example.com/data";
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cdata),
  //   };

  //   fetch(apiUrl, requestOptions)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       outputElement.textContent = JSON.stringify(data, null, 2);
  //     })
  //     .catch((error) => {
  //       console.error;
  //     });
});
