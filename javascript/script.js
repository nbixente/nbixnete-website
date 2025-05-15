// Bootstrap-validatie
(function () {
    'use strict'

    // Haal alle formulieren op die we willen aanpassen met aangepaste Bootstrap-validatiestijlen
    var forms = document.querySelectorAll('.needs-validation')

    // Loop eroverheen en voorkom indiening
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// toon het huidige jaar in de footer

// haal eerste het huidige jaar op
const currentYear = new Date().getFullYear();
// toon huidige jaar nadien in het element met id "year" in footer
document.getElementById("year").textContent = currentYear;

// Jaar automatisch updaten
document.getElementById('year').textContent = new Date().getFullYear();