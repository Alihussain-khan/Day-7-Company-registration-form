console.log("running");

const cdata = {
  cname: "",
  cemail: "",

  department: "",
};

document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.cname = formData.get("cname");
  cdata.cemail = formData.get("cemail");
  cdata.cpassword = formData.get("cpassword");
  cdata.department = formData.get("departments");

  console.log(cdata);
  event.preventDefault();

  document.getElementById(
    "table"
  ).innerHTML = `<td>${cdata.cname}</td> <td>${cdata.cemail}</td> <td>${cdata.department}</td>`;
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
