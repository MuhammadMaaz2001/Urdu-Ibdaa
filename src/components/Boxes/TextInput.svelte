<!-- <script>
  import UrduKeyboard from './UrduKeyboard.svelte';

  export let userInput = '';
  export let updateUserInput;

  let showKeyboard = false;

  const handleKeyClick = (key) => {
      if (key === '\b') {
          userInput = userInput.slice(0, -1); // Handle backspace
      } else {
          userInput += key; // Append the key
      }
      updateUserInput({ target: { value: userInput } }); // Update the parent component
  };

  const toggleKeyboard = () => {
      showKeyboard = !showKeyboard;
  };
</script>

<div class="relative p-4">
  <textarea
      class="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none text-right rtl:direction-rtl"
      placeholder="پارا فریز کرنے کے لئے متن درج کریں..."
      bind:value={userInput}
      on:click={toggleKeyboard}
  ></textarea>

  {#if showKeyboard}
      <UrduKeyboard onKeyPress={handleKeyClick} />
  {/if}
</div> -->

<!-- <script>
  import { onMount } from 'svelte';
  import { MakeTextBoxUrduEnabled } from './js/urdu_keyboard_new_ahsan';

  let text = '';
  
  onMount(() => {
    // @ts-ignore
    MakeTextBoxUrduEnabled(txtBox2);
  });

  
  function handleKeyClick(key) {
    const words = text.trim().split(/\s+/);
    if (words.length < 20 || key === ' ' || key === '\b') {
      text += key;
      userInput = text;
      triggerUpdateUserInput(userInput);
    }
  }

  function handleBackspace() {
    text = text.slice(0, -1);
    userInput = text;
    triggerUpdateUserInput(userInput);
  }

  export let userInput = '';
  /**
   * @type {(arg0: { target: { value: string; }; }) => void}
   */
   export let updateUserInput; // Declare this once
  export const isLoading = false;
  let showKeyboard = false;

  const toggleKeyboard = () => {
    showKeyboard = !showKeyboard;
  };

  const updateInputWithKeyboard = (key) => {
    const words = userInput.trim().split(/\s+/);
    if (words.length < 30 || key === ' ' || key === '\b') {
      userInput += key;
      triggerUpdateUserInput(userInput);
    }
  };

  const hideKeyboard = () => {
    showKeyboard = false;
  };

  /**
   * @param {string} value
   */
  function triggerUpdateUserInput(value) {
    const words = value.trim().split(/\s+/);
    if (words.length <= 30) {
      userInput = value;
      updateUserInput({ target: { value: userInput } }); // Trigger the update in the parent
    } else {
      // Truncate the input to 20 words
      userInput = words.slice(0, 30).join(' ');
    }
  }
</script> -->

<script>
  import { onMount } from 'svelte';
  import { MakeTextBoxUrduEnabled } from './js/urdu_keyboard_new_ahsan';

  let text = '';

  onMount(() => {
    // @ts-ignore
    MakeTextBoxUrduEnabled(txtBox2);
  });

  export let userInput = '';
  export let updateUserInput = (event) => {
    userInput = event.target.value;
    sessionStorage.setItem('userInput', userInput);
    console.log('User Input:', userInput); // Debugging: Log user input
  };

  let showKeyboard = false;

  const toggleKeyboard = () => {
    showKeyboard = !showKeyboard;
  };
</script>



<div class="container flex justify-end">
  <div class="keyboard_wrapp">
    <div class="keyboard_keys">
      <div class="row">
        <!-- <div class="keys" on:click={() => handleKeyClick('`')}>`</div> -->
        <!-- Add other keys as needed -->
      </div>
    </div>
  </div>

  <textarea
    class="p-2 w-full xsm:w-screen xsm:h-[30vh] sm:w-full lg:w-full  resize-none mb-8 text-right rtl focus:outline-none focus:border-blue-500 transition duration-300 scrollbar-thin mr-24"
    placeholder="پارا فریز کرنے کے لئے متن درج کریں..."
    id="txtBox2"
    name="txtBox2"
    dir="rtl"
    cols="50"
    rows="2"
    bind:value={userInput}
    on:input={updateUserInput}
    on:click={toggleKeyboard}
    style="direction: rtl;"
  ></textarea>
</div>

