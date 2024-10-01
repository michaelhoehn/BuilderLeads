// Get elements
const modal = document.getElementById("modal");
const connectBtn = document.getElementById("connect-btn");
const closeBtn = document.getElementById("close-btn");
const modalContent = document.querySelector(".modal-content");
const form = document.getElementById("fs-frm");
const successMessage = document.getElementById("success-message");

// Open modal on button click
connectBtn.addEventListener("click", function () {
  modal.classList.add("active"); // Show the modal background
  setTimeout(() => {
    modalContent.classList.add("active"); // Show and animate the modal content
  }, 100); // Delay to ensure smooth background transition
});

// Close modal on close button click
closeBtn.addEventListener("click", function () {
  modalContent.classList.remove("active"); // Hide modal content first
  setTimeout(() => {
    modal.classList.remove("active"); // Then hide the modal background
  }, 300); // Delay to match the content hide transition
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modalContent.classList.remove("active"); // Hide modal content first
    setTimeout(() => {
      modal.classList.remove("active"); // Then hide the modal background
    }, 300); // Delay to match the content hide transition
  }
});

// Handle form submission with a success message
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Send form data using Formspree or other method
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset(); // Clear the form
        form.style.display = "none"; // Hide the form
        successMessage.classList.remove("hidden"); // Show the success message
      } else {
        alert("There was a problem submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      alert("There was a problem submitting the form. Please try again.");
    });
});
