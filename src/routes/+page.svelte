<script>
    import TextInput from '../components/Boxes/TextInput.svelte';
    import FetchStore from "../components/FetchStore.svelte";
    import Model from '../components/Modal/index.svelte';

    let userInput = '';
    let paraphrasedText = '';
    let showResult = false;

    if (typeof window !== 'undefined') {
        userInput = decodeURIComponent(sessionStorage.getItem('userInput') || '');
        paraphrasedText = decodeURIComponent(sessionStorage.getItem('paraphrasedText') || '');
        showResult = !!paraphrasedText;
    }

    const updateInput = (/** @type {{ detail: { value: string; }; }} */ event) => {
        userInput = event.detail.value;
        sessionStorage.setItem('userInput', userInput); 
    };

    const handleFetchStore = () => {
        // Simulate pressing Enter and Backspace keys
        sessionStorage.setItem('userInput', userInput); 
    };

    const resetParaphrase = () => {
        paraphrasedText = '';
        sessionStorage.removeItem('paraphrasedText');
        showResult = false;
        userInput = '';
        sessionStorage.removeItem('userInput');
    };

    // const simulateEnterBackspace = () => {
    //     const inputBox = document.getElementById('txtBox2');
    //     const event = new Event('input', {
    //         bubbles: true,
    //         cancelable: true,
    //     });

    //     inputBox.value += ' ';
    //     inputBox.dispatchEvent(event);

    //     inputBox.value = inputBox.value.trim();
    //     inputBox.dispatchEvent(event);
    // };
</script>

<div class="max-w-3xl mx-auto mt-4 w-full ">
    <div class="flex justify-end py-6 px-4 ">
        <Model />
    </div>
    <div class="flex justify-between w-full">
        <div class="flex flex-col w-full gap-6">
            <div class="p-6 rounded-lg shadow-lg dark:bg-black ">
                <div class="grid gap-4">
                    <TextInput bind:userInput={userInput} {updateInput} />
                    <FetchStore on:fetchstore={handleFetchStore} on:resetinput={resetParaphrase} />
                </div>
            </div>
        </div>
    </div>
</div>
