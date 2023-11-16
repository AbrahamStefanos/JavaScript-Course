const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "Abraham",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name);
  }
};



localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const storelength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storelength);
  