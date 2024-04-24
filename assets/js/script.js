/*cuando se hace clic en el botón de enviar), se ejecuta la función que sigue al function(event) { ... } */
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var nameInput = document.getElementById("nombre");
  var emailInput = document.getElementById("correo");
  var messageInput = document.getElementById("mensaje");
  var submitButton = document.getElementById("btn-enviar");
  /* evita que el formulario se envíe automáticamente, n
permitiendo realizar nuestra propia lógica de validación y envío.*/
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Verifica si los campos están vacíos
    if (
      nameInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      messageInput.value.trim() === ""
    ) {
      alert(
        "Por favor, complete todos los campos antes de enviar el formulario."
      );
      return;
    }
    // Si todos los campos están completos, envía el formulario
    enviarFormulario();
    //alert('El formulario ha sido enviado con éxito.');
  });

  function enviarFormulario() {
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("El formulario ha sido enviado con éxito.");
    // Aquí puedes enviar el formulario mediante AJAX u otra técnica
  }
});

/* Disminuir velocidad de desplazamiento al elegir opción del navbar */

document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los enlaces de navegación
  var links = document.querySelectorAll("a.nav-link");

  // Iterar sobre cada enlace
  links.forEach(function (link) {
    // Agregar un event listener para el evento 'click' en cada enlace
    link.addEventListener("click", function (event) {
      // Prevenir el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtener el ID del destino del enlace (sin el símbolo '#')
      var targetId = this.getAttribute("href").substring(1);

      // Obtener el elemento de destino usando el ID
      var targetElement = document.getElementById(targetId);

      // Verificar si el elemento de destino existe
      if (targetElement) {
        // Calcular la posición del elemento de destino en la página
        var targetOffset = targetElement.offsetTop;

        // Desplazar suavemente la página hasta la posición del elemento de destino
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth", // Esto hace que el desplazamiento sea suave
        });
      }
    });
  });
});

/*  Nuevamente nos aseguramos que el código dentro de la función se ejecute
 una vez que el DOM (Documento del Objeto del Modelo) esté completamente cargado*/
document.addEventListener("DOMContentLoaded", function () {
  /*Esta línea selecciona todos los elementos del DOM que tienen la clase 'nav-link' 
    y están dentro de un elemento con la clase 'navbar-nav' */
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  /*document.querySelectorAll() para seleccionar múltiples elementos que coincidan 
    con el selector especificado. */

  /* Este método devuelve una NodeList que contiene todos los elementos que 
    coinciden con el selector y los almacena en la variable "navLinks" */
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Remover la clase 'selected' de todos los enlaces
      navLinks.forEach(function (link) {
        link.classList.remove("selected");
      });

      // Agregar la clase 'selected' al enlace clickeado
      this.classList.add("selected");
    });
  });
});
