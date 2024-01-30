// Asynchronous function to add a new div element to the body with a message
let obj1 = async () => {
  document.body.appendChild(document.createElement("div")).innerHTML = `<h3>all is well </h3>`; 

  // Promise p1 resolves to "if" after 1 second
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("if");
    }, 1000);
  });

  // Promise p2 resolves to "end is well" after 2 seconds
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("end is well");
    }, 2000);
  });

  // Create new div elements with messages
  document.body.appendChild(document.createElement("div")).innerHTML = `<h5>only</h5>`;

  // Wait for p1 and p2 to resolve
  let pro1 = await p1; // wait for p1 to resolve 
  document.body.appendChild(document.createElement("div")).innerHTML = `<h5> ${pro1}  </h5>`;
  
  document.body.appendChild(document.createElement("div")).innerHTML = `<h5>it occors that</h5>`;
  
  let pro2 = await p2; // wait for p2 to resolve; will not work if p1 is not resolved
  document.body.appendChild(document.createElement("div")).innerHTML = `<h5>${pro2}  </h5>`;
  
  // Return an array of the fulfilled values
  return [pro1, pro2]; 
}

// Asynchronous function to add a new div element to the body with a message
const obj2 = async () => {
  // Add a new div element with the message
  let pro3 = document.body.appendChild(document.createElement("div")).innerHTML = `<h5>THATS ALL FOCKS</h5>`;
  return [pro3]; 
}

// Main function
const obj = async () => {
  let a = await obj1(); // wait for obj1 to resolve
  let b = await obj2(); // wait for obj2 to resolve
  
  console.log(a); // Log the resolved value of obj1
  console.log(b); // Log the resolved value of obj2
}

// Call the main function
obj();