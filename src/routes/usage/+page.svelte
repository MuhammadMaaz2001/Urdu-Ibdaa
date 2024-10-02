<!-- <script>
  import Modal from '../../components/Modal/index.svelte'
  import Input from '../../components/Boxes/TextInput.svelte';
  import Result from '../../components/Boxes/Result.svelte';

  let userInput = '';
  let paraphrasedText = '';
  let showResult = false;

  const updateInput = (event) => {
    userInput = event.target.value;
  };

  const paraphraseText = () => {
    paraphrasedText = userInput.toUpperCase(); // Replace this with your actual paraphrasing logic
    showResult = true;
  };

  let steps = [
    {
      title: 'Step 1: Enter Text',
      description: 'Paste or type the text you want to paraphrase into the input field.',
    },
    {
      title: 'Step 2: Choose Settings',
      description: 'Select the desired settings such as the level of paraphrasing, language, etc.',
    },
    {
      title: 'Step 3: Get Paraphrased Text',
      description: 'Click the "Paraphrase" button to generate the paraphrased text.',
    },
    {
      title: 'Step 4: Review and Edit',
      description: 'Review the paraphrased text and make any necessary edits if required.',
    },
  ];

  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>




<div class="max-w-5xl mx-auto mt-8 border border-solid border-gray-300 rounded-lg">
  <div class="flex justify-between bg-red-500">
    <div class="p-6 rounded-lg shadow-lg">
      <div class="grid gap-4">
        <Input userInput={userInput} updateUserInput={updateInput} />
        <button class="bg-green-500 text-white px-4 py-2 rounded" on:click={paraphraseText}>
          Paraphrase Text
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={openModal}>
          Open Modal
        </button>
        <Modal {steps} {showModal} onClose={closeModal} />
      </div>
    </div>

    <div class="p-6 rounded-lg shadow-lg">
      <Result {paraphrasedText} />
    </div>
  </div>
</div> -->
