import '../css/styles.css';
import useState from './state.js';
import githubIco from '../ico/github.svg'

document.head.innerHTML += `
    <link rel="icon" type="image/svg+xml" href="${githubIco}" />
`;

document.querySelector('#app').innerHTML = `
<div class="setting">
        <div class="checkbox-wrapper-35">
            <input value="private" name="switch" id="live" type="checkbox" class="switch">
            <label for="live">
                <span class="switch-x-text">live_mode:</span>
                <span class="switch-x-toggletext">
                    <span class="switch-x-unchecked"><span class="switch-x-hiddenlabel">Unchecked: </span>Off</span>
                    <span class="switch-x-checked"><span class="switch-x-hiddenlabel">Checked: </span>On</span>
                </span>
            </label>
        </div>
        <div class="checkbox-wrapper-35">
            <input value="private" name="switch" id="dark" type="checkbox" class="switch">
            <label for="dark">
                <span class="switch-x-text">dark_mode:</span>
                <span class="switch-x-toggletext">
                    <span class="switch-x-unchecked"><span class="switch-x-hiddenlabel">Unchecked: </span>Off</span>
                    <span class="switch-x-checked"><span class="switch-x-hiddenlabel">Checked: </span>On</span>
                </span>
            </label>
        </div>
    </div>
    <div class="wrapper">
        <div class="interface">
            <div class="function shadowed">
                <label class="func-name" for="inputJson">parseJSON</label>
                <textarea class="func-input" id="inputJson" rows="5" placeholder='{ "key": "value" }'></textarea>
                <button class="func-action" id="actionJson"></button>
                <textarea class="func-output" id="formattedJsonOutput" rows="5" readonly></textarea>
            </div>
            <div class="function shadowed">
                <label class="func-name" for="inputUrl">decodeURL</label>
                <textarea class="func-input" id="inputUrl" rows="1" placeholder="https://example.com"></textarea>
                <button class="func-action" id="actionUrl"></button>
                <textarea class="func-output" id="decodedUrlOutput" rows="1" readonly></textarea>
            </div>
            <div class="function shadowed">
                <label class="func-name" for="inputString">string.length</label>
                <textarea class="func-input" id="inputString" rows="1" placeholder="Enter your string"></textarea>
                <button class="func-action" id="actionString"></button>
                <textarea class="func-output" id="stringLengthOutput" rows="1" readonly></textarea>
            </div>
        </div>
    </div>
`;

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
        url().addEventListener('input', decodedUrl);
        string().addEventListener('input', getStringLength);
        json().addEventListener('input', formatJSON);
        localStorage.setItem('live-mode', liveMode().checked);
    } else {
        url().removeEventListener('input', decodedUrl);
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

urlAction().addEventListener('click', decodedUrl);
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