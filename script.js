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
      const h1 = document.querySelector("h1");
      h1.innerHTML = `Form submitted: ${text}`;
    }, 2000);
  }
};
