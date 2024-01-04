import useState from './state.js';

/**
 * Setting
 */
const [liveMode, setLiveMode] = useState(document.getElementById('live'));
const [darkMode, setDarkMode] = useState(document.getElementById('dark'));

/**
 * DOM
 */
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

function decodeURL() {
    const inputUrl = url().value;
    try {
        const decodedUrl = decodeURIComponent(inputUrl);
        urlOutput().value = decodedUrl;
    } catch (error) {
        urlOutput().value = 'Error decoding URL';
    }
}

function getStringLength() {
    const inputString = string().value;
    const stringLength = inputString.length;
    stringOutput().value = stringLength;
}

function formatJSON() {
    const inputJson = json().value;
    try {
        const formattedJson = JSON.stringify(JSON.parse(inputJson), null, 4);
        jsonOutput().value = formattedJson;
    } catch (error) {
        jsonOutput().value = 'Error formatting JSON';
    }
}

/**
 * Event Handler
 */
liveMode().addEventListener('change', () => {
    if (liveMode().checked) {
        url().addEventListener('input', decodeURL);
        string().addEventListener('input', getStringLength);
        json().addEventListener('input', formatJSON);
    } else {
        url().removeEventListener('input', decodeURL);
        string().removeEventListener('input', getStringLength);
        json().removeEventListener('input', formatJSON);
    }
});

darkMode().addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
})

urlAction().addEventListener('click', decodeURL);
jsonAction().addEventListener('click', formatJSON);
stringAction().addEventListener('click', getStringLength);

