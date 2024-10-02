<script context="module">
  export function hydrate() {
    const activeSection = localStorage.getItem('activeSection');
    return { activeSection: activeSection ? activeSection : 'team' };
  }
</script>

<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { afterUpdate } from 'svelte';

  import Team from './Team.svelte';
  import Description from './description.svelte';
  import Faq from './FAQ.svelte';

  let activeSection = 'team'; // Initialize the active section with 'team'

  // Function to handle section change
  const dispatch = createEventDispatcher();

  function changeSection(section) {
    activeSection = section;
    dispatch('sectionChanged', { section });

    // Update URL hash based on the selected section (client-side code)
    if (typeof window !== 'undefined') {
      window.location.hash = `#${section}`;
      // Store active section in local storage
      localStorage.setItem('activeSection', section);
    }
  }
</script>


<div class="flex justify-center mt-0 ">
  <div class="w-[70vw] xsm:w-full sm:w-full md:w-full lg:w-[70vw] xl:w-[70vw] text-white mx-auto border border-solid border-gray-300 rounded-lg neon-border">
    <!-- <h1 class="text-1xl font-bold mb-0 text-center text-white  font-semibold text-14px xsm:text-xl sm:text-xl md:text-xl">About Us</h1> -->
    <!-- Navigation Links -->
    <div class="flex justify-center ml-6 mr-6 mb-6 space-x-8 border-b-4 border-white dark:border-b-4  font-semibold py-2">
      
      <a href="#team" on:click|preventDefault={() => changeSection('team')} 
         class="{activeSection === 'team' ? 'text-white underline dark:text-white' : 'text-white hover:underline dark:text-white'} transition duration-300 ease-in-out transform hover:scale-105">
        Team
      </a>
      <a href="#description" on:click|preventDefault={() => changeSection('description')} 
         class="{activeSection === 'description' ? 'text-white underline dark:text-white' : 'text-white hover:underline dark:text-white'} transition duration-300 ease-in-out transform hover:scale-105">
        Description
      </a>
      <a href="#FAQ" on:click|preventDefault={() => changeSection('FAQ')} 
         class="{activeSection === 'FAQ' ? 'text-white underline dark:text-white ' : 'text-white hover:underline dark:text-white'} transition duration-300 ease-in-out transform hover:scale-105">
        FAQ
      </a>
    </div>

    <!-- Display Team or Description based on activeSection -->
    {#if activeSection === 'team'}
      <div id="team">
        <Team />
      </div>
    {:else if activeSection === 'description'}
      <div id="description">
        <Description />
      </div>
    {:else if activeSection === 'FAQ'}
      <div id="FAQ">
        <Faq />
      </div>
    {/if}

  </div>
</div>

<style>
  .neon-border {
    position: relative;
    padding: 20px;
    margin: 20px 0;
    box-shadow: whitesmoke;
  }

  .neon-border::before,
  .neon-border::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    box-sizing: border-box;
    box-shadow: whitesmoke;
  }

  .neon-border::before {
    top: 0;
    left: 0;
    border-top: 4px solid whitesmoke;
    border-left: 4px solid whitesmoke;
    animation: moveTopLeft 4s linear infinite;
  }

  .neon-border::after {
    bottom: 0;
    right: 0;
    border-bottom: 4px solid white;
    border-right: 4px solid white;
    animation: moveBottomRight 2s linear infinite;
  }

  @keyframes moveTopLeft {
    0% {
      width: 0;
      height: 0;
    }
    25% {
      width: 100%;
      height: 0;
    }
    50% {
      width: 100%;
      height: 100%;
    }
    75% {
      width: 0;
      height: 100%;
    }
    100% {
      width: 0;
      height: 0;
    }
  }

  @keyframes moveBottomRight {
    0% {
      width: 0;
      height: 0;
    }
    25% {
      width: 0;
      height: 100%;
    }
    50% {
      width: 100%;
      height: 100%;
    }
    75% {
      width: 100%;
      height: 0;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
</style>
