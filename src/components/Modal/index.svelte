<script>
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

<div>
  <button class="text-white bg-BtnColor xsm:text-xs xsm:font-semibold sm:text-sm md:text-base lg:text-lg xl:text-xl dark:bg-darkborder hover:text-gray-800 dark:text-white rounded-full xsm:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-2" on:click={openModal}>
    استعمال کرنے کا طریقہ
  </button>

  <!-- Modal -->
  {#if showModal}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 dark:text-white xsm:overflow-auto">
    <div class="bg-styleColor p-6 rounded-lg shadow-lg dark:bg-darkmode xsm:w-10/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 xsm:mr-4">
      
      {#each steps as step}
      <div class="rounded-lg shadow-lg p-4 mb-4 bg-gray-200 dark:bg-darkborder/80 xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
        <h2 class="xsm:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-2">
          {step.title}
        </h2>
        <p class="xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          {step.description}
        </p>
      </div>
      {/each}
      
      <button class="bg-BtnColor dark:bg-darkborder text-white px-4 py-2 rounded mt-4" on:click={closeModal}>
        OK
      </button>
    </div>
  </div>
  {/if}
</div>
