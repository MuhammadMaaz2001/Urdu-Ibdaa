<script>
    import { createEventDispatcher } from 'svelte';
    import TextInput from './Boxes/TextInput.svelte';

    const dispatch = createEventDispatcher();
    let isLoading = false; // Loader state
    let fetchedData = '';
    let hasError = false; // Error state

    function isUrduText(text) {
        // Regular expression to match Urdu characters
        const urduPattern = /^[\u0600-\u06FF\s]+$/;
        return urduPattern.test(text);
    }

    async function fetchAndStore(url, sessionKey, newSessionKey) {
        dispatch('fetchstore');
        const userInput = sessionStorage.getItem(sessionKey) || '';

        // Check if the text is in Urdu
        if (!isUrduText(userInput)) {
            fetchedData = 'براہ کرم اپنا متن اردو میں لکھیں۔';
            return;
        }

        const fullUrl = `${url}/${userInput}`.replace(/([^:]\/)\/+/g, "$1");

        try {
            console.log('Fetching from:', fullUrl); // Debugging: Log API URL

            const response = await fetch(fullUrl, {
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data); // Debugging: Log API response

            const formattedData = `
                <strong></strong> ${data.paraphrased_response}
            `;
            sessionStorage.setItem(newSessionKey, formattedData);
            console.log(`Fetched data from ${fullUrl} and stored result in session storage under key ${newSessionKey}`);
        } catch (error) {
            console.error('Error fetching data:', error);
            hasError = true;
        }
    }

    const handleButtonClick = async () => {
        const url = 'https://4468-34-23-132-220.ngrok-free.app/paraphrase/';
        const sessionKey = 'userInput';
        const newSessionKey = 'fetchedData';

        const userInput = sessionStorage.getItem(sessionKey) || '';

        if (userInput.trim() === '') {
            fetchedData = 'آپ نے کوئی متن داخل نہیں کیا ہے۔';
        } else if (!isUrduText(userInput)) {
            // Display error message if text is not in Urdu
            fetchedData = 'براہ کرم اپنا متن اردو میں لکھیں۔';
        } else {
            const wordCount = userInput.trim().split(/\s+/).length;

            if (wordCount > 30) {
                fetchedData = 'آپ کا جملہ 30 الفاظ سے زیادہ لمبا ہے، براہ کرم ایسا جملہ درج کریں جس کی لمبائی 30 الفاظ یا اس سے کم ہو۔';
            } else {
                isLoading = true; // Show loader
                hasError = false; // Reset error state
                await fetchAndStore(url, sessionKey, newSessionKey);
                isLoading = false; // Hide loader

                if (!hasError) {
                    fetchedData = sessionStorage.getItem(newSessionKey) || '';
                } else {
                    fetchedData = 'An error occurred while fetching data. Please try again.';
                }
            }
        }
    };

    const resetFetchedData = () => {
        fetchedData = '';
        sessionStorage.removeItem('fetchedData');
        sessionStorage.removeItem('userInput');
        dispatch('resetinput');
    };
</script>

<div class="max-w-3xl mx-auto xsm:w-full">
    <div class="flex justify-between w-full">
        <div class="flex flex-col w-full gap-3">
            <div class="flex justify-end xsm:px-12 sm:px-12 lg:px-0">
                <button class="relative flex items-center justify-center text-white w-30 xsm:text-xs xsm:font-semibold md:text-base md:font-semibold lg:text-base lg:font-semibold bg-BtnColor dark:bg-darkborder hover:text-gray-800 dark:text-white rounded-full px-4 py-2 sm:py-3 md:py-3 xsm:py-2" on:click={handleButtonClick} disabled={isLoading}>
                  {#if isLoading}
                    <span class="absolute inset-0 flex items-center justify-center">
                      <svg class="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Loading...
                    </span>
                  {/if}
                  <span class={isLoading ? 'invisible' : ''}>Paraphrase Now!</span>
                </button>
              </div>

            {#if fetchedData && !isLoading}
                <div class="py-2 px-8 text-white flex flex-col items-end space-y-4 rounded-lg shadow-lg">
                    <div class="w-full text-right bg-gray-900 p-4 mr-2 rounded-lg shadow flex flex-col justify-end border urdu-text overflow-y-auto max-h-64">
                        {@html fetchedData}
                    </div>
                    <button class="text-white bg-BtnColor dark:bg-darkborder xsm:text-xs xsm:font-semibold md:text-base md:font-semibold lg:text-base lg:font-semibold hover:text-gray-800 dark:text-white rounded-full xsm:mr-6 px-6 py-2" on:click={resetFetchedData}>
                        Reset
                    </button>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .urdu-text {
        font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Urdu Typesetting', serif;
        direction: rtl;
        text-align: right;
    }

    .loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
