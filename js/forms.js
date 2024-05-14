document.getElementById("QuestionOptions").addEventListener("change", function() {
    var selectedValue = this.value;
  
    if (selectedValue === "Other") {
      // Create a new input element
      var input = document.createElement("input");
  
      // Set the input attributes
      input.type = "text";
      input.id = "inputForOther";
      input.name = "OtherOccupation";
      input.placeholder = "Please Enter Your Occupation";
      input.classList.add("form-control");
  
      // Append the input element to the div
      document.getElementById("myAnswers").appendChild(input);
    } else {
      // Remove the input element if it exists
      var inputElement = document.getElementById("inputForOther");
      if (inputElement) {
        inputElement.parentNode.removeChild(inputElement);
      }
    }
  });
  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var occupation = document.getElementById("QuestionOptions").value;
    var OtherOccupation = document.getElementById("inputForOther")? document.getElementById("inputForOther").value : "";
    var telephoneNumber = document.getElementById("phone").value;
    var emailAddress = document.getElementById("emailaddress").value;
    var workAddress = document.getElementById("workaddress").value;
    var numberOfCopies = document.getElementById("numberOfCopies").value;
    var reasonOfInterest = document.getElementById("floatingTextarea").value;
  
    if (
      firstName === "" ||
      lastName === "" ||
      occupation === "" ||
      telephoneNumber === "" ||
      emailAddress === "" ||
      workAddress === "" ||
      numberOfCopies === "" ||
      reasonOfInterest === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (occupation === "Other" && OtherOccupation === "") {
      alert("Please enter your occupation.");
      return;
    }
  
    var formData = new FormData(document.getElementById("myForm"));
  
    fetch("https://script.google.com/macros/s/AKfycbzc3yj8GjL51VYZzRLCqYhqBTAUgj4SMUSqu0wLGQMht4ASo_mXWcVhevIh4Lhn7n55/exec", {
      method: "POST",
      body: formData
    })
   .then(response => response.text())
   .then(data => {
      if (data === "Form submitted successfully") {
        alert("Form submitted successfully.");
      } else {
        alert("Form submission failed. Please try again.");
      }
    })
   .catch(error => {
      alert("Form submission failed. Please try again.");
    });
  });