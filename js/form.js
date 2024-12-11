window.addEventListener("DOMContentLoaded", function () {
    let name = document.getElementById("formName");
    let number = document.getElementById("formNumber");
    let email = document.getElementById("formEmail");
    let message = document.getElementById("formMessage");


    name.value = localStorage.getItem('formName');
    name.addEventListener("change", event => {
        localStorage.setItem('formName', name.value);
    });

    number.value = localStorage.getItem('formName');
    number.addEventListener("change", event => {
        localStorage.setItem('formNumber', number.value);
    });

    email.value = localStorage.getItem('formEmail');
    email.addEventListener("change", event => {
        localStorage.setItem('formEmail', email.value);
    });

    message.value = localStorage.getItem('formMessage');
    message.addEventListener("change", event => {
        localStorage.setItem('formMessage', message.value);
    });

    let check = document.getElementById("formCheck");
    let form = document.getElementById("popupForm");
    form.addEventListener("submit", event => {
        if (check.checked == true) {
            fetch('https://formcarry.com/s/gf9XxUK37', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    formName: name.value,
                    formNumber: number.value,
                    formEmail: email.value,
                    formMessage: message.value
                })
            })
                .then(response => console.log(response))
                .then((data) => {
                    alert("Success!");
                    localStorage.removeItem('formName');
                    localStorage.removeItem('formNumber');
                    localStorage.removeItem('formEmail');
                    localStorage.removeItem('formMessage');
                    name.value = localStorage.getItem('formName');
                    number.value = localStorage.getItem('formNumber');
                    email.value = localStorage.getItem('formEmail');
                    message.value = localStorage.getItem('formMessage');
                    check.checked = false;
                })
                .catch((error) => { alert(error.value); });
            event.preventDefault();
        }
        else {
            alert("Дайте свое согласие на отправку");
            event.preventDefault();
        }
    })
});