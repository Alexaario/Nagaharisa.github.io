document.addEventListener("DOMContentLoaded", onkoKirjautunut)

function onkoKirjautunut() {
    let kirjautunut = true;
    if (kirjautunut) {
        document.getElementById("tervetuloTeksti").textContent += ` ${localStorage.getItem("nimi")}`
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value)
}