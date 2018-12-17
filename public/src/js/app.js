var deferredPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("Service worker registered!");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

/** Faz com que o serviceWorker só controle especificas páginas
 * if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("../sw.js",{scope: '/help/'})
    .then(function() {
      console.log("Service worker está registrado!");
    });
  }
  
 */

var promisse = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject({ code: 500, message: "Um error aconteceu!" });
  }, 3000);
});

/*  promisse
  .then(
    function(text) {
      return text;
    },
    function(err) {
      console.log(err.code, err.message);
    }
  )
  .then(function(newText) {
    console.log(newText);
  }); */

promisse
  .then(function(text) {
    return text;
  })
  .then(function(newText) {
    console.log(newText);
  })
  .catch(function(err) {
    console.log(err.code, err.message + ": isso foi um erro!");
  });

console.log("Isso executou após o settimeout");
