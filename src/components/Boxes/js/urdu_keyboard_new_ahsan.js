// Set up event handlers for text input to support Urdu input
/**
 * @param {{ [x: string]: (arg0: string, arg1: (evt: any) => void) => void; }} txtObj2
 */
export function MakeTextBoxUrduEnabled(txtObj2) {
    // @ts-ignore
    const handler = window.attachEvent ? 'attachEvent' : 'addEventListener';
    // @ts-ignore
    const event = window.attachEvent ? 'onkeypress' : 'keypress';
    txtObj2[handler](event, ahsan_ahmed_khan_urdubar_eventCaptured);
}

// Capture and handle keypress events
// @ts-ignore
export function ahsan_ahmed_khan_urdubar_eventCaptured(evt) {
    const target = evt.target || evt.srcElement; // Compatibility for IE
    ahsan_ahmed_khan_KeyPress(target, evt);
}

// Unicode mappings for Urdu characters and symbols
const UnicodeMap = {
    ALIF: 0x0627, ALMAD: 0x0622, BAY: 0x0628, PAY: 0x067E, TAY: 0x062A, TTAY: 0x0679,
    SAY: 0x062B, JEEM: 0x062C, CHAY: 0x0686, HAY: 0x062D, KHAY: 0x062E, DAL: 0x062F,
    DDAL: 0x0688, ZAL: 0x0630, RAY: 0x0631, RRAY: 0x0691, ZAY: 0x0632, XAY: 0x0698,
    SEEN: 0x0633, SHEEN: 0x0634, SAAD: 0x0635, ZAAD: 0x0636, TOAY: 0x0637, ZOAY: 0x0638,
    AIN: 0x0639, GHAIN: 0x063A, FAY: 0x0641, QAAF: 0x0642, KAAF: 0x06A9, GAAF: 0x06AF,
    LAAM: 0x0644, MEEM: 0x0645, NOON: 0x0646, NOONG: 0x06BA, WAO: 0x0648, WAOHAMZ: 0x0624,
    HAA: 0x06C1, HAMZA: 0x0621, HAMCY: 0x0626, CHOTIYA: 0x06CC, BARRIYA: 0x06D2, DCHASHMI: 0x06BE,
    ZERO: 0x6F0, ONE: 0x6F1, TWO: 0x6F2, THREE: 0x6F3, FOUR: 0x6F4, FIVE: 0x6F5,
    SIX: 0x6F6, SEVEN: 0x6F7, EIGHT: 0x6F8, NINE: 0x6F9, PLUS: 0x002B, MINUS: 0x002D,
    MUL: 0x00D7, DIV: 0x00F7, PERC: 0x066A, LPREN: 0x0028, RPREN: 0x0029, PAISH: 0x064F,
    ZAIR: 0x0650, ZABAR: 0x064E, DOPAISH: 0x064C, DOZAIR: 0x064D, DOZABAR: 0x064B, GAZM: 0x0652,
    MAD: 0x06E4, SHAD: 0x0651, SHADZAIR: 0xFC62, SHADPAISH: 0xFC61, HIHAMZA: 0x0674, KHARIZAB: 0x0670,
    RSQOTMRK: 0x2019, LSQOTMRK: 0x2018, RDQOTMRK: 0x201D, LDQOTMRK: 0x201C, DECSEP: 0x0201A, FULSTOP: 0x06D4,
    AQMARK: 0x061F, ASEMICOL: 0x061B, ACOMA: 0x060C, NOT: 0x0021, QUOT: 0x0022, COLON: 0x003A, SEMICOL: 0x003B,
};

// Ascii keys mappings
const AsciiMap = {
    a: 'ALIF', A: 'ALMAD', b: 'BAY', p: 'PAY', t: 'TAY', T: 'TTAY', C: 'SAY', j: 'JEEM', c: 'CHAY',
    H: 'HAY', K: 'KHAY', d: 'DAL', D: 'DDAL', Z: 'ZAL', r: 'RAY', R: 'RRAY', z: 'ZAY', X: 'XAY',
    s: 'SEEN', x: 'SHEEN', S: 'SAAD', J: 'ZAAD', v: 'TOAY', V: 'ZOAY', e: 'AIN', G: 'GHAIN', f: 'FAY',
    q: 'QAAF', k: 'KAAF', g: 'GAAF', l: 'LAAM', m: 'MEEM', n: 'NOON', N: 'NOONG', w: 'WAO', o: 'HAA',
    h: 'DCHASHMI', u: 'HAMZA', i: 'CHOTIYA', y: 'BARRIYA', U: 'HAMZAYA', '0': 'ZERO', '1': 'ONE', '2': 'TWO',
    '3': 'THREE', '4': 'FOUR', '5': 'FIVE', '6': 'SIX', '7': 'SEVEN', '8': 'EIGHT', '9': 'NINE',
    '+': 'PLUS', '-': 'MINUS', '*': 'MUL', '/': 'DIV', '%': 'PERC', '(': 'LPREN', ')': 'RPREN',
    '=': 'EQ', '\'': 'SQOTMRK', '"': 'DQOTMRK', '.': 'FULSTOP', '?': 'QMARK', ';': 'SEMICOL', ',': 'COMA',
    '!': 'NOT', ':': 'COLON', ' ': 'SPACE', '\r': 'ENTER', '\n': 'NLINE', '\t': 'TAB'
};

// Set Unicode characters based on keypress
// @ts-ignore
function ahsan_ahmed_khan_PhoneticUnicodes(temp) {
    // @ts-ignore
    return UnicodeMap[AsciiMap[temp]] || '';
}

// Handle keypress event and update text input
// @ts-ignore
function ahsan_ahmed_khan_KeyPress(target, evt) {
    const char = String.fromCharCode(evt.which || evt.keyCode);
    const unicodeChar = ahsan_ahmed_khan_PhoneticUnicodes(char);
    if (unicodeChar) {
        evt.preventDefault();
        insertAtCaret(target, String.fromCharCode(unicodeChar));
    }
}

// Helper function to insert text at caret position
// @ts-ignore
function insertAtCaret(target, text) {
    // @ts-ignore
    if (document.selection) {
        target.focus();
        // @ts-ignore
        const sel = document.selection.createRange();
        sel.text = text;
    } else if (target.selectionStart || target.selectionStart === 0) {
        const startPos = target.selectionStart;
        const endPos = target.selectionEnd;
        target.value = target.value.substring(0, startPos) + text + target.value.substring(endPos, target.value.length);
        target.selectionStart = startPos + text.length;
        target.selectionEnd = startPos + text.length;
    } else {
        target.value += text;
    }
}
