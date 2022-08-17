function openToggle() {
    document.getElementById("div-toggle-mb").style.display = "block";
    document.getElementById("top-mb").style.display = "none";
    document.getElementById("nav-mb").style.display = "none";
}

function closeToggle() {
    document.getElementById("div-toggle-mb").style.display = "none";
    document.getElementById("top-mb").style.display = "block";
    document.getElementById("nav-mb").style.display = "block";
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
function openSearchmb() {
    document.getElementById("toggle-search").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
function closeSearchmb() {
    document.getElementById("toggle-search").style.display = "none";
}