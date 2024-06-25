async function getIpAddress() {
    try {
        let response = await fetch('https://api.ipify.org?format=json');
        let data = await response.json();
        document.getElementById('ip-address').innerText = data.ip;
    } catch (error) {
        document.getElementById('ip-address').innerText = 'Не удалось определить IP-адрес';
    }
}

function getScreenAndWindowSize() {
    let screenSize = `${window.screen.width} x ${window.screen.height}`;
    let windowSize = `${window.innerWidth} x ${window.innerHeight}`;
    
    document.getElementById('screen-size').innerText = screenSize;
    document.getElementById('window-size').innerText = windowSize;
}

window.onload = function() {
    getIpAddress();
    getScreenAndWindowSize();
}

window.onresize = function() {
    getScreenAndWindowSize();
}
