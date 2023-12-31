'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  console.log("filterFunc called with:", selectedValue);

  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
      console.log("selectedValue:", selectedValue);
    } else if (selectedValue === filterItems[i].dataset.category) {
      console.log("selectedValue:", selectedValue);
      filterItems[i].classList.add("active");
    } else {
      console.log("selectedValue:", selectedValue);
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('.details-toggle').forEach(button => {
//     const details = button.nextElementSibling;
    
//     // Set the initial state
//     details.style.display = 'none'; // Hide details initially
//     button.textContent = 'More'; // Set button text to 'More'

//     // Event listener for clicks
//     button.addEventListener('click', () => {
//       // Toggle display of details
//       if (details.style.display === 'none') {
//         details.style.display = 'block';
//         button.textContent = 'Less';
//       } else {
//         details.style.display = 'none';
//         button.textContent = 'More';
//       }
//     });
//   });
// });

// Immediately invoked function to set initial state
(function initialSetup() {
  const detailSections = document.querySelectorAll('.timeline-details');
  detailSections.forEach(section => {
    section.style.display = 'none'; // Ensures all details are hidden on load
  });
})();

// Event listener for the More/Less toggle
document.querySelectorAll('.details-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isDisplayed = details.style.display === 'block';
    details.style.display = isDisplayed ? 'none' : 'block';
    button.textContent = isDisplayed ? 'More' : 'Less';
  });
});






// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Newly Added
const serviceItems = document.querySelectorAll(".service-item-title");
serviceItems.forEach(item => {
  item.addEventListener("click", function () {
    const serviceCategory = this.getAttribute("data-service");
    filterPortfolio(serviceCategory);
  });
});

function filterPortfolio(category) {
  console.log("Filtering portfolio for category:", category);
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  filterBtns.forEach(btn => {
    if (btn.innerText.toLowerCase() === category.toLowerCase()) {
      btn.click(); // Trigger the filter
    }
  });

  // Switch to the portfolio page
  changeActivePageTo('portfolio');
}


function changeActivePageTo(pageName) {
  navigationLinks.forEach(link => {
    if (link.innerText.toLowerCase() === pageName) {
      link.click();
    }
  });

  // Optionally scroll to the portfolio section
  document.querySelector('[data-page="' + pageName + '"]').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.project-item').forEach(item => {
  const img = item.querySelector('img');
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-hover-src');

  item.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  item.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});

function showProjectModal(projectName, url) {
  var modal = document.getElementById("projectConfirmationModal");
  var modalText = document.getElementById("projectModalText");
  var confirmBtn = document.getElementById("projectConfirmButton");
  var closeBtn = document.getElementsByClassName("project-modal-close")[0];
  var cancelBtn = document.getElementById("projectCancelButton");

  modalText.textContent = "The current project (" + projectName + ") is still ongoing and does not have a completed git repo yet. Are you sure you want to continue?";
  modal.style.display = "block";

  closeBtn.onclick = function() {
      modal.style.display = "none";
  }

  cancelBtn.onclick = function() {
      modal.style.display = "none";
  }

  confirmBtn.onclick = function() {
      window.open(url, '_blank').focus();
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}


