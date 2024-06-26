const KeyAuthApp = {
    name: "12", // Application Name
    ownerid: "n8shnhqmPc", // Owner ID
    secret: "975f8d25e4084b42adae80cdb330bba9ea6d0340c40e60311577447ed352f5af", // Application Secret
    version: "1.0" // Application Version /*
};

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Форма отправлена');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const licenseKey = document.getElementById('license-key').value;

    console.log('username:', username);
    console.log('password:', password);
    console.log('licenseKey:', licenseKey);

    fetch('https://keyauth.win/api/1.0/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            key: licenseKey,
            hwid: "none",
            appname: KeyAuthApp.name,
            ownerid: KeyAuthApp.ownerId,
            secret: KeyAuthApp.secret,
            version: KeyAuthApp.version
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Ответ сервера:', data);
        if (data.success) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.href = 'profile.html';
        } else {
            alert('Ошибка: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Ошибка:', error);
        alert('Ошибка регистрации');
    });
});
