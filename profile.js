document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const keyAuthApp = {
        name: "your_app_name",
        ownerId: "your_owner_id",
        secret: "your_app_secret",
        version: "1.0"
    };

    fetch('https://keyauth.win/api/1.0/userinfo/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            appname: keyAuthApp.name,
            ownerid: keyAuthApp.ownerId,
            secret: keyAuthApp.secret,
            version: keyAuthApp.version
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('ip-address').textContent = data.info.ip;
            document.getElementById('hwid').textContent = data.info.hwid;
            document.getElementById('status').textContent = data.info.banned ? 'Забанен' : 'Активен';
        } else {
            alert('Ошибка: ' + data.message);
            window.location.href = 'register.html';
        }
    })
    .catch((error) => {
        console.error('Ошибка:', error);
        alert('Ошибка загрузки информации пользователя');
        window.location.href = 'register.html';
    });

    document.getElementById('reset-hwid').addEventListener('click', function() {
        fetch('https://keyauth.win/api/1.0/resethwid/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                appname: keyAuthApp.name,
                ownerid: keyAuthApp.ownerId,
                secret: keyAuthApp.secret,
                version: keyAuthApp.version
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('HWID успешно сброшен');
            } else {
                alert('Ошибка: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert('Ошибка сброса HWID');
        });
    });
});
