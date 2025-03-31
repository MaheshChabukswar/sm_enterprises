// Registration form Pop-up making using Modal concept

let rg_btn = document.querySelector(".registration-btn");

let close_btn = document.querySelector(".close-btn");

let form_box = document.querySelector(".modal");

rg_btn.addEventListener("click", function () {
  form_box.classList.toggle("hide");
  form_box.classList.toggle("modal-overlay");
});

close_btn.addEventListener("click", function () {
  form_box.classList.toggle("hide");
  form_box.classList.toggle("modal-overlay");
});

// Dynamic service box

let service_box = document.querySelector("#service-box");

let innerHTML = "";

services.forEach((item) => {
  let link = `src/Pages/service_pages/${item.id}.html`;

  innerHTML += `<div>
    <a href="${link}" class="flex flex-col service-modal">
        <img src="${item.image}" alt="${item.service_name}">
        <p class="text-3xl font-bold">${item.service_name}</p>
    </a>
</div>`;
});

service_box.innerHTML = innerHTML;
