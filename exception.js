const UNKNOW_ERROR = 'Unknow error occoured!';

class InvalidUrlException extends Error {
    constructor() {
        super('Error decoding URL');
    }
}

class InvalidJsonException extends Error {
    constructor() {
        super('Error formatting JSON');
    }
}

export {
    UNKNOW_ERROR,
    InvalidUrlException,
    InvalidJsonException
}