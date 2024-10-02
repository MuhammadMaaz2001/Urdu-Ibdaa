<!-- <script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let onKeyPress: (key: string) => void;

    const keyMap: { [key: string]: string } = {
        'a': 'ا',
        'A': 'آ',
        'b': 'ب',
        'p': 'پ',
        't': 'ت',
        'T': 'ٹ',
        'C': 'ث',
        'j': 'ج',
        'c': 'چ',
        'H': 'ح',
        'K': 'خ',
        'd': 'د',
        'D': 'ڈ',
        'Z': 'ذ',
        'r': 'ر',
        'R': 'ڑ',
        'z': 'ز',
        'X': 'ژ',
        's': 'س',
        'x': 'ش',
        'S': 'ص',
        'J': 'ض',
        'v': 'ط',
        'V': 'ظ',
        'e': 'ع',
        'G': 'غ',
        'f': 'ف',
        'q': 'ق',
        'k': 'ک',
        'g': 'گ',
        'l': 'ل',
        'm': 'م',
        'n': 'ن',
        'N': 'ں',
        'w': 'و',
        'o': 'ہ',
        'h': 'ھ',
        'u': 'ء',
        'i': 'ی',
        'y': 'ے',
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        ',': '،',
        '.': '۔',
        '?': '؟'
    };

    const handleClick = (key: string) => {
        if (onKeyPress) onKeyPress(key);
    };

    const handleKeyboardEvent = (event: KeyboardEvent) => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'x' || event.key === 'v')) {
            // Allow default behavior for copy, cut, paste
            return;
        }

        const mappedKey = keyMap[event.key];
        if (event.key === ' ') {
            event.preventDefault();
            handleClick(' '); // Space
        } else if (event.key === 'Backspace') {
            event.preventDefault();
            handleClick('\b'); // Backspace
        } else if (mappedKey) {
            event.preventDefault();
            handleClick(mappedKey);
        }
    };

    onMount(() => {
        document.addEventListener('keydown', handleKeyboardEvent);
    });

    onDestroy(() => {
        document.removeEventListener('keydown', handleKeyboardEvent);
    });
</script> -->
