

document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view1 = document.getElementById("view1");
  const view3 = document.querySelector("#view3");
  view1.style.display = "none";
  view3.style.display = "flex";
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event => {
    event.preventDefault();
    console.log("submit event");
  }));
};
  
  