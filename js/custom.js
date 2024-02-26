const bpPage = document.querySelector(".bp_cardWrapper.bp_grpah_wrapper");

      bpPage.addEventListener("click", () => {
        window.location.href = "../pages/bloodPressure.html";
      });
const glucosePage = document.querySelector("bp_cardWrapper.sugar_cardWrapper");

glucosePage.addEventListener("click", () => {
        window.location.href = "../pages/bloodSugar.html";
      });

const physicalPage = document.querySelector("bp_cardWrapper.sugar_cardWrapper.physical_cardWrapper");

physicalPage.addEventListener("click", () => {
        window.location.href = "../pages/physicalMental.html";
      });