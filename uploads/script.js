// Функция для получения IP-адреса
async function getIpAddress() {
    try {
        let response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        document.getElementById('ip-address').innerText = data.ip;
    } catch (error) {
        document.getElementById('ip-address').innerText = 'Не удалось определить IP-адрес';
    }
}

// Функция для получения размера экрана и окна
function getScreenAndWindowSize() {
    let screenSize = `${window.screen.width} x ${window.screen.height}`;
    let windowSize = `${window.innerWidth} x ${window.innerHeight}`;
    
    document.getElementById('screen-size').innerText = screenSize;
    document.getElementById('window-size').innerText = windowSize;
}

// Вызов функций при загрузке страницы
window.onload = function() {
    getIpAddress();
    getScreenAndWindowSize();
}

// Обновление размеров окна при изменении размера окна браузера
window.onresize = function() {
    getScreenAndWindowSize();
}
