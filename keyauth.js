document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const keyAuthApp = {
        name: "12",
        ownerId: "n8shnhqmPc",
        secret: "975f8d25e4084b42adae80cdb330bba9ea6d0340c40e60311577447ed352f5af",
        version: "1.0"
    };

    fetch('https://keyauth.win/api/1.0/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            key: "your_license_key", // Замените на нужный ключ
            hwid: "none",
            appname: keyAuthApp.name,
            ownerid: keyAuthApp.ownerId,
            secret: keyAuthApp.secret,
            version: keyAuthApp.version
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Регистрация успешна!');
        } else {
            alert('Ошибка: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Ошибка:', error);
        alert('Ошибка регистрации');
    });
});
