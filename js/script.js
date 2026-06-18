(function () {
  const setYear = () => {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  };

  const setMobileMenu = () => {
    const button = document.querySelector("[data-menu-button]");
    const nav = document.querySelector("[data-nav]");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  };

  const setCardInteractions = () => {
    if (!window.jQuery) return;

    const $ = window.jQuery;

    $("[data-scroll]").on("click", function (event) {
      const target = $(this).attr("href");
      if (!target || !target.startsWith("#")) return;

      const $target = $(target);
      if ($target.length) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $target.offset().top - 90 }, 450);
      }
    });

    $("[data-toggle-details]").on("click", function () {
      const $button = $(this);
      const $details = $button.next(".card-details");
      const isOpen = $button.attr("aria-expanded") === "true";

      $button.attr("aria-expanded", String(!isOpen));
      $details.stop(true, true).slideToggle(220).attr("hidden", isOpen);
      $button.text(isOpen ? "Ver detalhes" : "Ocultar detalhes");
    });
  };

  const setFormValidation = () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const message = document.getElementById("formMessage");

    const setFeedback = (text, success) => {
      if (!message) return;
      message.textContent = text;
      message.style.color = success ? "#7CFFB2" : "#ff8f8f";
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const messageText = String(data.get("message") || "").trim();
      const privacy = data.get("privacy");

      if (name.length < 3) {
        setFeedback("Informe um nome completo válido.", false);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFeedback("Informe um e-mail válido.", false);
        return;
      }

      if (!subject) {
        setFeedback("Selecione um assunto.", false);
        return;
      }

      if (messageText.length < 10) {
        setFeedback(
          "Escreva uma mensagem com pelo menos 10 caracteres.",
          false,
        );
        return;
      }

      if (!privacy) {
        setFeedback("É necessário concordar com o contato.", false);
        return;
      }

      form.reset();
      setFeedback(
        "Mensagem enviada com sucesso. A equipe retornará em breve.",
        true,
      );
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    setYear();
    setMobileMenu();
    setFormValidation();
    setCardInteractions();
  });
})();
