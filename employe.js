console.log("running");
//main data object
const cdata = {
  cname: "",
  cemail: "",
  department: "",
};
//getting data from inputs
document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.cname = formData.get("cname");
  cdata.cemail = formData.get("cemail");
  cdata.department = formData.get("departments");

  console.log(cdata);
  event.preventDefault();

  document.getElementById(
    "table"
  ).innerHTML = `<td>${cdata.cname}</td> <td>${cdata.cemail}</td> <td>${cdata.department}</td>`;
  //   //api call
  // const apiUrl = "https://676d-72-255-39-45.ngrok-free.app/register-company";
  // const requestOptions = {
  //   method: "POST",
  //   body: JSON.stringify(cdata),
  // };

  // fetch(apiUrl, requestOptions)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(JSON.stringify(data));
  //   })
  //   .catch((error) => {
  //     console.error;
  //   });
});
