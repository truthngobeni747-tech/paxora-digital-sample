
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

// Open and close the mobile navigation.
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  // Close the menu after a visitor selects a section.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Demonstration form: no backend or data storage.
const enquiryForm = document.querySelector("#enquiry-form");
const feedback = document.querySelector("#form-feedback");

if (enquiryForm && feedback) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    feedback.textContent =
      "Thank you! This is a demo form and is not connected to an inbox yet.";

    enquiryForm.reset();
  });
}
