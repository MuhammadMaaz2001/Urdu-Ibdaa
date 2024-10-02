<script>
  export let paraphrasedText = '';
  export let updateParaphrasedText;
  export let transition = false;

  console.log(">>",paraphrasedText)

  $: {
    if (updateParaphrasedText) {
      paraphrasedText = updateParaphrasedText;
      transition = true;
    } else {
      transition = false;
    }
  }
  
</script>

<style>
  .result {
    transition: transform 0.3s ease-out;
  }
</style>

{#if paraphrasedText}
  <div class="result  xsm:w-full md:w-full lg:w-full  text-white" style="{transition ? 'transform: translateY(0);' : 'transform: translateY(-20px); opacity: 0;'}">
    <div class="border border-gray-300 rounded-md p-2 break-all flex justify-end ">{paraphrasedText}</div>
  </div>
{/if}
