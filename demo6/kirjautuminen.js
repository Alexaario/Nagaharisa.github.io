document.addEventListener("DOMContentLoaded", onkoKirjautunut)

function onkoKirjautunut() {
    let kirjautunut = true;
    if (kirjautunut) {
        document.getElementById("tervetuloTeksti").textContent += " Tsapul!"
    }
}