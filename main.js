// FORMULARIO

const form = document.querySelector(".presupuesto-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const error = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  clearMessages();
  let errorFlag = false;

  if (name.value.length < 1) {
    error[0].innerText = "El nombre no puede estar en blanco";
    name.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    error[1].innerText = "Correo inválido";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (!numberIsValid(number.value)) {
    error[2].innerText = "Número inválido";
    number.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    error[3].innerText = "Introduzca un mensaje";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    let correoForm = {
      from_name: name.value,
      to_name: "RLconstrucciones",
      from_number: number.value,
      message: message.value,
      from_email: email.value,
    };
    sendEmail(correoForm);
  }
};

clearMessages = () => {
  for (let i = 0; i < error.length; i++) {
    error[i].innerText = "";
  }
  success.innerText = "";
  name.classList.remove("error-border");
  number.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
};

emailIsValid = (email) => {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
};

numberIsValid = (num) => {
  let pattern =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
  return pattern.test(num);
};

sendEmail = ({ from_name, to_name, from_number, message, from_email }) => {
  let correoForm = {
    from_name: from_name,
    to_name: to_name,
    from_number: from_number,
    message: message,
    from_email: from_email,
  };

  emailjs
    .send("service_o1v8n0b", "template_v014zdo", correoForm)
    .then((res) => {
      console.log(res, res.status);
      if (res.text === "OK") {
        success.innerText = "¡Enviado exitosamente!";
      }
    });
};
