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