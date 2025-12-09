// Lors du clic sur "Créer un compte"
document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let prenom = document.getElementById("prenom").value;
    let nom = document.getElementById("nom").value;

    document.getElementById("welcome-title").textContent =
        "Bienvenue, " + prenom + " " + nom + " !";

    // Cacher le formulaire et afficher la page bienvenue
    document.getElementById("form-container").classList.add("hidden");
    document.getElementById("welcome-container").classList.remove("hidden");
});

function retour() {
    document.getElementById("welcome-container").classList.add("hidden");
    document.getElementById("form-container").classList.remove("hidden");
}
