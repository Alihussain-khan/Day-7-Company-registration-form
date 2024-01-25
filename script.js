console.log("running");

const cdata = {
  cname: "",
  cemail: "",
  cpassword: "",
  departments: ["admin"],
  cdescription: "",
};

document.getElementById("form").addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  cdata.cname = formData.get("cname");
  cdata.cemail = formData.get("cemail");
  cdata.cpassword = formData.get("cpassword");
  if (formData.get("d-1")) {
    cdata.departments.push("d-1");
  }
  if (formData.get("d-2")) {
    cdata.departments.push("d-2");
  }
  if (formData.get("d-3")) {
    cdata.departments.push("d-3");
  }
  if (formData.get("d-4")) {
    cdata.departments.push("d-4 ");
  }
  //   cdata.departments[departments...] = formData.get("d-2");
  //   cdata.cname = formData.get("d-3");
  //   cdata.cname = formData.get("d-4");
  cdata.cdescription = formData.get("description");
  console.log(cdata);
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
