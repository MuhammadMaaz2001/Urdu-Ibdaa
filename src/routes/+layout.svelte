<script>
// @ts-nocheck

  import '../App.css';
  import Marquee from '../components/marquee.svelte';
  import Logo from '../components/imag/logo.png';
  import Footer from '../components/Footer/index.svelte';
  import { onMount } from 'svelte';

  let darkMode = false;
  let isLoading = false;

  // Function to toggle theme
  function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', darkMode);
  }

  // On mount, check the saved theme
  onMount(() => {
    const savedTheme = localStorage.getItem('color-theme');
    darkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark', darkMode);
  });

  // Handle navigation without full page reload
  function handleNavigation(url) {
    isLoading = true;
    // Simulate navigation
    setTimeout(() => {
      window.history.pushState({}, '', url); // Update URL without reloading
      isLoading = false;
    }, 1000); // Adjust delay as needed
  }
</script>

<div class='bg-gradient-to-br from-blue-500 via-blue-700 to-styleColor xsm:w-full sm:w-full lg:w-full xl:w-full'>
  {#if isLoading}
    <div class="loading-overlay {darkMode ? 'dark-mode' : 'light-mode'}">
      <div class="loader"></div>
    </div>
  {/if}
  <div class="flex dark:bg-black ">
    <div class="flex-1">
      <nav class="bg-gradient-to-r from-gray via-marquee/50 to-primaryColor/30 shadow-lg dark:bg-black text-white xsm:w-full sm:w-full md:w-full lg:w-full">
        <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" on:click={() => handleNavigation('/')}>
            <img src={Logo} class="h-16 w-15 rounded-full xsm:h-10 xsm:w-10" alt="Logo" />
            <span class="text-2xl font-semibold whitespace-nowrap dark:text-white xsm:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
              Urdu Ibdaa
            </span>
          </a>

          <div class="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked={darkMode} on:change={toggleTheme} />
              <div class="toggle-container peer-focus:outline-none peer-focus:ring-4 bg-blue-300 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-colors duration-300"></div>
            </label>

            <button on:click={() => { document.getElementById('navbar-cta').classList.toggle('hidden') }} type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 transition-colors duration-300" aria-controls="navbar-cta" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 md:border-0 md:bg-transparent md:flex-row md:space-x-8">
              <li>
                <a href="/" class="nav-link relative text-lg font-semibold font-mono text-white hover:text-gray-300 transition-colors duration-300" on:click={() => handleNavigation('/')}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" class="nav-link relative text-lg font-semibold font-mono text-white hover:text-gray-300 transition-colors duration-300" on:click={() => handleNavigation('/about')}>
                  About
                </a>
              </li>
              <li>
                <a href="/contact" class="nav-link relative text-lg font-semibold font-mono text-white hover:text-gray-300 transition-colors duration-300" on:click={() => handleNavigation('/contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
<br>
      <div class="h-screen">
        <main class="container mx-auto">
          <div class="flex items-center justify-center w-full">
            <Marquee />
          </div>
          <slot />
        </main>
      </div>
<br>
      <div class=" mt-16 dark:border-gray-400">
        <Footer />
      </div>
    </div>
  </div>
</div>

<style>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-overlay.light-mode {
    background-color: #2F66B7;
  }

  .loading-overlay.dark-mode {
    background-color: black;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .nav-link {
    position: relative;
    display: inline-block;
    padding: 0.5em 1em;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid transparent;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid white;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  }

  /* Updated CSS for larger toggle button with blue border */
  .toggle-container {
    position: relative;
    width: 60px;
    height: 34px;
    background-color: rgb(47 102 183 / var(--tw-bg-opacity));
    border-radius: 34px;
    transition: background-color 0.3s;
  }

  .toggle-container::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 30px;
    background-color: white;
    border: 2px solid blue;
    border-radius: 50%;
    transition: left 0.3s, border-color 0.3s;
  }

  input[type="checkbox"]:checked + .toggle-container {
    background-color: blue;
  }

  input[type="checkbox"]:checked + .toggle-container::before {
    left: calc(100% - 32px);
    border-color: blue;
  }

  .dark-mode .toggle-container {
    background-color: gray;
  }

  .dark-mode .toggle-container::before {
    border-color: blue;
  }

  input[type="checkbox"]:checked + .dark-mode .toggle-container {
    background-color: blue;
  }

  input[type="checkbox"]:checked + .dark-mode .toggle-container::before {
    border-color: blue;
  }
</style>