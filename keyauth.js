document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const keyAuthApp = {
        name: "your_app_name",
        ownerId: "your_owner_id",
        secret: "your_app_secret",
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
