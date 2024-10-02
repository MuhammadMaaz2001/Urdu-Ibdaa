<script>
  export let isLoading = false;
  export let paraphraseText;
</script>

<button
  class="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
  on:click={paraphraseText}
  disabled={isLoading}
>
  {isLoading ? 'Paraphrasing...' : 'Paraphrase Text'}
</button>

{#if isLoading}
  <div class="text-center mt-4">
    <p>Loading...</p>
  </div>
{/if}
