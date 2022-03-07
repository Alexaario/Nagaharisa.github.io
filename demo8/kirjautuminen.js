document.addEventListener("DOMContentLoaded", onkoKirjautunut)

function onkoKirjautunut() {
    let kirjautunut = localStorage.getItem("kirjautunut");
    if (kirjautunut) {
        document.getElementById("tervetuloTeksti").textContent += ` ${localStorage.getItem("nimi")}`
        document.getElementById("kirjautumisLomake").style.display = "none"
        document.getElementById("kirjauduUlos").style.display = "block"
        document.getElementById("tervetuloTeksti").style.display = "block"
    }
}

function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value)
    localStorage.setItem("kirjautunut", true)
}

function kirjauduUlos() {
    localStorage.setItem("nimi", "")
    localStorage.setItem("kirjautunut", "")
    window.location.reload();
}