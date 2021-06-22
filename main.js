(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                $('#output').empty();
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

$('#sqlForm').ajaxForm({
    url: 'http://localhost:3000/api/mssql', // or whatever
    dataType: 'json',
    success: function (response) {
        if (response.length > 0) {
            response.forEach((data, i) => {
                $('#output').append(`<div id="regStr${i}" class="regStr"></div>`);
                $(`#regStr${i}`).jsonViewer(data);
            });
        } else {
            $('#output').append(`<div id="errorMessage">There were no records retrieved.</div>`); 
        }
    },
    error: function (error) {
        $('#output').append(`<div id="errorMessage">${error.statusText}: ${error.responseJSON.originalError.message || error.responseJSON.originalError.info.message}</div>`);
    }
});

function clearField() {
    $('input').val('');
    $('textarea').val('');
    $('#output').empty();
    $('#sqlForm').removeClass('was-validated');
}