const buttonMakeLink = document.querySelector("#copy");
const lihatHasil = document.querySelector("#submit");
const urlCopy = document.querySelector("#url-copy");

buttonMakeLink.addEventListener("click", () => {
    const r = document.querySelector("#r").value;
    const m = document.querySelector("#m").value;
    const s = document.querySelector("#s").value;

    const URL = makeURL(r, m, s);
    urlCopy.value = URL;
});

lihatHasil.addEventListener("click", () => {
    const r = document.querySelector("#r").value;
    const m = document.querySelector("#m").value;
    const s = document.querySelector("#s").value;

    const URL = makeURL(r, m, s);
    window.location.href = URL; // sampai sini
});

function makeURL(r, m, s) {
    const URL = `https://laulooo.github.io/valenCard/xatemp.html?r=${r}&m=${m}&s=${s}`; // ganti manual klok udh di github, jangan lupa
    return URL;
}
