<style>
  /* Style for scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #FFFFFF;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #001449;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #012677;
  }

  /* Custom style for RTL text alignment */
  .rtl {
    direction: rtl;
  }
</style>

<script>
    function toggleAccordion(id) {
      const collapseBody = document.getElementById(id);
      if (collapseBody) {
        collapseBody.classList.toggle('hidden');
      }
    }
  </script>
  
  <div class="space-y-4  " style="height: 400px; overflow-y: scroll; dark:border-darkborder">
    <div class="px-6 xsm:px-1 xsm:text-xs xsm:w-70 sm:px-1 sm:text-xm sm:w-70 md:px-3 md:text-base md:w-70 lg:px-6 sm:text-lg   ">
      <button type="button" class="border-b-4 dark:text-white dark:bg-darkmode  dark:border-darkborder border-indigo-500 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" aria-expanded="false" aria-controls="accordion-collapse-body-1" on:click={() => toggleAccordion('accordion-collapse-body-1')}>
        <span>What is Urdu paraphrasing?
        </span>
        <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
  
      <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div class="p-4 font-times-new-roman dark:bg-darkborder xsm:bg-marquee sm:bg-marquee md:bg-marquee ">
          <p class="mb-2 text-white  dark:text-white">Urdu paraphrasing involves rephrasing a given text in Urdu while retaining its .</p>
          <p class="text-white  dark:text-white">original meaning. It helps in expressing ideas or information in a different way..</p>
        </div>
      </div>
    </div>
  
    
    <!-- Other FAQs... -->
  
    <div class="px-6 xsm:px-1 xsm:text-xs xsm:w-70 sm:px-1 sm:text-xm sm:w-70 md:px-3 md:text-base md:w-70 lg:px-6 sm:text-lg ">
      <button type="button" class="border-b-4 dark:text-white dark:bg-darkmode  dark:border-darkborder border-indigo-500 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" aria-expanded="false" aria-controls="accordion-collapse-body-2" on:click={() => toggleAccordion('accordion-collapse-body-2')}>
        <span>Why is Urdu paraphrasing important?</span>
        <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
  
      <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
        <div class="p-4  dark:bg-darkborder font-times-new-roman xsm:bg-marquee sm:bg-marquee md:bg-marquee ">
          <p class="mb-2 text-white  dark:text-white">Urdu paraphrasing is important for avoiding plagiarism, improving language fluency, and expressing ideas in a more concise or clear manner. It also helps in ...</p>
          <p class="text-white  dark:text-white">understanding and internalizing the content.</p>
        </div>
      </div>
    </div>

    <div class="px-6 xsm:px-1 xsm:text-xs xsm:w-70 sm:px-1 sm:text-xm sm:w-70 md:px-3 md:text-base md:w-70 lg:px-6 sm:text-lg ">
        <button type="button" class="border-b-4 dark:text-white dark:bg-darkmode  dark:border-darkborder border-indigo-500 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" aria-expanded="false" aria-controls="accordion-collapse-body-3" on:click={() => toggleAccordion('accordion-collapse-body-3')}>
          <span>How can I paraphrase effectively in Urdu?</span>
          <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
    
        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-4  dark:bg-darkborder font-times-new-roman xsm:bg-marquee sm:bg-marquee md:bg-marquee ">
            <p class="mb-2 text-white dark:text-gray-400 dark:text-white">Effective paraphrasing in Urdu involves understanding the original text thoroughly, restructuring sentences, and using synonyms</p>
            <p class="text-white dark:text-gray-400 dark:text-white">to convey the same meaning. It's crucial to maintain clarity and coherence.   </p>
          </div>
        </div>
      </div>
      <div class="px-6 xsm:px-1 xsm:text-xs xsm:w-70 sm:px-1 sm:text-xm sm:w-70 md:px-3 md:text-base md:w-70 lg:px-6 sm:text-lg ">
        <button type="button" class="border-b-4 dark:text-white dark:bg-darkmode  dark:border-darkborder border-indigo-500 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" aria-expanded="false" aria-controls="accordion-collapse-body-4" on:click={() => toggleAccordion('accordion-collapse-body-4')}>
          <span>Can I paraphrase Urdu poetry or literary works?</span>
          <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
    
        <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-4  dark:bg-darkborder font-times-new-roman xsm:bg-marquee sm:bg-marquee md:bg-marquee ">
            <p class="mb-2 text-white dark:text-gray-400 dark:text-white">Yes, you can paraphrase Urdu poetry or literary works, but it requires a deep understanding of the cultural and artistic nuances</p>
            <p class="text-white dark:text-gray-400 dark:text-white"> to preserve the essence of the original piece.</p>
          </div>
        </div>
      </div>
      <div class="px-6 xsm:px-1 xsm:text-xs xsm:w-70 sm:px-1 sm:text-xm sm:w-70 md:px-3 md:text-base md:w-70 lg:px-6 sm:text-lg ">
        <button type="button" class="border-b-4 dark:text-white dark:bg-darkmode  dark:border-darkborder border-indigo-500 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" aria-expanded="false" aria-controls="accordion-collapse-body-5" on:click={() => toggleAccordion('accordion-collapse-body-5')}>
          <span>Are there any common mistakes to avoid in Urdu paraphrasing?</span>
          <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
    
        <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-4  dark:bg-darkborder font-times-new-roman xsm:bg-marquee sm:bg-marquee md:bg-marquee">
            <p class="mb-2 text-white dark:text-gray-400 dark:text-white">Common mistakes include changing the original meaning, using inappropriate </p>
            <p class="text-white dark:text-gray-400 dark:text-white">synonyms, and not maintaining the tone or style of the original text.</p>
          </div>
        </div>
      </div>
      <!-- <div class="px-6 xsm:px-1 xsm:text-xs xsm:w-70 sm:px-1 sm:text-xm sm:w-70 md:px-3 md:text-base md:w-70 lg:px-6 sm:text-lg xsm:bg-marquee sm:bg-marquee md:bg-marquee lg:bg-banner-bg">
        <button type="button" class="border-b-4 border-indigo-500 dark:text-white dark:bg-darkmode dark:border-darkborder flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" aria-expanded="false" aria-controls="accordion-collapse-body-6" on:click={() => toggleAccordion('accordion-collapse-body-6')}>
          <span>How can I improve my Urdu paraphrasing skills?</span>
          <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
    
        <div id="accordion-collapse-body-6" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-600 dark:bg-black ">
            <p class="mb-2 text-white dark:text-gray-400 dark:text-white">Practice regularly, read diverse Urdu texts, and seek feedback from proficient speakers. Understanding the context and cultural nuances</p>
            <p class="text-white dark:text-gray-400 dark:text-white">will also enhance your paraphrasing skills over time.</p>
          </div>
        </div>
      </div> -->
  </div>
  <br>
