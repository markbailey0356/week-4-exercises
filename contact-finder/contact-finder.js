var contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975"
];
var paragraph = document.querySelector("p");
var input = document.querySelector("input");
var button = document.querySelector("button");

button.addEventListener("click", function() {
  var searchName = input.value;
  input.value = "";
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    var splitContact = contacts[i].split(":");
    if(splitContact[0] == searchName) {
      paragraph.textContent = searchName + "'s number is " + splitContact[1] + ".";
      break;
    } else {
      paragraph.textContent = "Contact not found";
    }
  }
});