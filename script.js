const form = document.querySelector(".main-form");

form.onsubmit = (e) => {
  e.preventDefault();
  const input = e.target.example;
  const text = input.value;
  const btn = e.submitter;
  input.blur();
  if (!btn.classList.contains("btn-disabled")) {
    console.log(text);
    btn.classList.add("btn-loading");
    setTimeout(() => {
      btn.classList.remove("btn-loading");
      btn.classList.add("btn-disabled");

      //   display submission
      const section = document.querySelector("section");
      const element = document.createElement("div");
      element.innerHTML = `<h3 class="mt-50 wgt-500 fnt-16 c-g-9">Form submitted: ${text}</h3>`;
      section.appendChild(element);
    }, 2000);
  }
};
