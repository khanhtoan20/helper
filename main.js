import useState from './state.js';

/**
 * Setting
 */
const [liveMode, setLiveMode] = useState(document.getElementById('live'));
const [darkMode, setDarkMode] = useState(document.getElementById('dark'));

/**
 * DOM
 */
const [body, setBody] = useState(document.body);
const [url, setUrl] = useState(document.getElementById('inputUrl'));
const [urlOutput, setUrlOutput] = useState(document.getElementById('decodedUrlOutput'));
const [urlAction, setUrlAction] = useState(document.getElementById('actionUrl'));

const [string, setString] = useState(document.getElementById('inputString'));
const [stringOutput, setStringOutput] = useState(document.getElementById('stringLengthOutput'));
const [stringAction, setStringAction] = useState(document.getElementById('actionString'));

const [json, setJson] = useState(document.getElementById('inputJson'));
const [jsonOutput, setJsonOutput] = useState(document.getElementById('formattedJsonOutput'));
const [jsonAction, setJsonAction] = useState(document.getElementById('actionJson'));

/**
 * Function Declaration
 */

const decodedUrl = function () {
    const inputUrl = url().value;
    try {
        const decodedUrl = decodeURIComponent(inputUrl);
        urlOutput().value = decodedUrl;
    } catch (error) {
        urlOutput().value = 'Error decoding URL';
    }
}

const getStringLength = function () {
    const inputString = string().value;
    const stringLength = inputString.length;
    stringOutput().value = stringLength;
}

const formatJSON = function () {
    const inputJson = json().value;
    try {
        const formattedJson = JSON.stringify(JSON.parse(inputJson), null, 4);
        jsonOutput().value = formattedJson;
    } catch (error) {
        jsonOutput().value = 'Error formatting JSON';
    }
}

const switchLiveMode = function (status) {
    if (status) {
        url().addEventListener('input', decodeURL);
        string().addEventListener('input', getStringLength);
        json().addEventListener('input', formatJSON);
        localStorage.setItem('live-mode', liveMode().checked);
    } else {
        url().removeEventListener('input', decodeURL);
        string().removeEventListener('input', getStringLength);
        json().removeEventListener('input', formatJSON);
        localStorage.setItem('live-mode', liveMode().checked);
    }
}

const switchDarkMode = function (status) {
    if (status) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', true);
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', false);
    }
}

/**
 * Event Handler
 */
liveMode().addEventListener('change', ({ target }) => {
    switchLiveMode(target.checked);
});

darkMode().addEventListener('change', ({ target }) => {
    switchDarkMode(target.checked);
})

urlAction().addEventListener('click', decodeURL);
jsonAction().addEventListener('click', formatJSON);
stringAction().addEventListener('click', getStringLength);

document.addEventListener('DOMContentLoaded', (event) => {
    console.warn('collecting... ', localStorage)
    if (localStorage.getItem('dark-mode') === 'true') {
        body().classList.add('dark-mode');
        darkMode().checked = true;
        switchDarkMode(true)
    }

    if (localStorage.getItem('live-mode') === 'true') {
        liveMode().checked = true;
        switchLiveMode(true);
    }

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('env') === 'dev') {
        body().classList.add('lord-mode');
    }
});