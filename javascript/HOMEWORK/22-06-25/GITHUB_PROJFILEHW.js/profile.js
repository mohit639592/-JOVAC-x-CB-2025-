// document.getElementById("NAME").innerHTML="MOHIT";


// const data = fetch('https://api.github.com/users/mohit639592')
// console.log(data);                                                //the output is Promise { <pending> }

fetch('https://api.github.com/users/mohit639592')
  .then(response => response.json())
  .then(data => {
    document.getElementById("fullData").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.log("Error fetching data:", error));
