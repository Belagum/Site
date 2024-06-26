document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const licenseKey = document.getElementById('license-key').value;

    const KeyAuthApp = new KeyAuth(
    "12", // Application Name
    "n8shnhqmPc", // Owner ID
    "975f8d25e4084b42adae80cdb330bba9ea6d0340c40e60311577447ed352f5af", // Application Secret
    "1.0", // Application Version
    );

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
            appname: keyAuthApp.name,
            ownerid: keyAuthApp.ownerId,
            secret: keyAuthApp.secret,
            version: keyAuthApp.version
        }),
    })
    .then(response => response.json())
    .then(data => {
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
