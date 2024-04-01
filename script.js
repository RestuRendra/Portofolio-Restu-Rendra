document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxPG2IVTw_rd41iwyhVR_wSXXfk-oSlm6YJu7QGwIWSYonCPd_uEQl6H5bXOPoa61QT/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

function kosongkanForm() {
    var inputs = document.querySelectorAll('form input');
    inputs.forEach(function(input) {
        input.value = ''; 
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    kosongkanForm();
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulir berhasil dikirim!');
});


