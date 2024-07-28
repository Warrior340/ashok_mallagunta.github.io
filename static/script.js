document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);

    // Handle form data (e.g., send it to a server or display a message)
    handleFormData(formObject);
  });

function handleFormData(data) {
  // Example function to handle form data
  console.log("Form Data:", data);
  alert("Thank you for your message!");
}
