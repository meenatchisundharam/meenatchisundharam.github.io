document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.navbar');

    window.addEventListener("scroll", function () {
        var top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    });
});
function validateForm() {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const message = document.querySelector('#message').value.trim();
    const contactMeButton = document.querySelector('#contactMeButton');

    if (name.length > 0 && email.length > 0 && subject.length > 0 && message.length > 0) {
        // Enable the button if all required fields are filled
        contactMeButton.disabled = false;
    } else {
        // Disable the button if any required fields are empty
        contactMeButton.disabled = true;
    }
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sundharmadhim@gmail.com",
        Password: "74B41D3A06829DDDCF3045314100F0743E05",
        To: 'sundharmadhim@gmail.com',
        From: 'sundharmadhim@gmail.com',
        Subject: subject,
        Body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }).then(
        message => {
            alert('Email sent successfully');
            // Optionally, clear the form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            window.location.reload();
             window.location.href = '/thankyou.html';
        },
        error => {
            alert('Email could not be sent: ' + error);
        }
    );
}
