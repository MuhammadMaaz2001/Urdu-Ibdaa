<style>
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  .animated {
    animation: bounce 1.5s infinite;
    transform-origin: center;
    text-shadow: 2px 2px 4px darkblue;
  }

  .footer-container {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .footer-heading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .footer-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .collaboration-line {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  .bottom-section {
    margin-top: 1rem;
    font-size: 0.75rem;
    padding: 10px 0;
  }

  .bottom-section p {
    display: flex;
    justify-content: center;
  }

  .neon-border {
    position: relative;
    padding: 20px;
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    background: inherit; /* Inherit the gradient background */
  }

  .neon-border::before,
  .neon-border::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    box-sizing: border-box;
  }

  .neon-border::before {
    top: 0;
    left: 0;
    border-top: 4px solid #FFFFFF;
    border-left: 4px solid #FFFFFF;
    animation: moveTopLeft 4s linear infinite;
  }

  .neon-border::after {
    bottom: 0;
    right: 0;
    border-bottom: 4px solid #FFFFFF;
    border-right: 4px solid #FFFFFF;
    animation: moveBottomRight 4s linear infinite;
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
      width: 100%;
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



<footer class="bg-gradient-to-l from-BtnColor via-marquee/50 to-primaryColor/30 dark:bg-gradient-to-r from-black via-gray/50 to-darkborder text-white py-2 px-4 sm:py-4 sm:px-6 lg:py-6 lg:px-8 neon-border">
  <div class="footer-container">
    <h2 class="footer-heading font-agency xsm:text-xs sm:text-sm md:text-base lg:text-lg">Urdu Ibdaa</h2>
    <p class="footer-description xsm:text-xs sm:text-sm md:text-base lg:text-base font-times-new-roman">Your go-to platform for seamless paraphrasing</p>

    <p class="collaboration-line xsm:text-xs sm:text-sm md:text-base lg:text-base font-times-new-roman">
      This is done with the collaborations of these members:
      <span class="animated font-bold font-mono xsm:text-xs sm:text-sm md:text-base lg:text-base">Muhammad Maaz</span>,
      <span class="animated font-bold font-mono xsm:text-xs sm:text-sm md:text-base lg:text-base">Ahsan Ahmed Khan</span>,
      <span class="animated font-bold font-mono xsm:text-xs sm:text-sm md:text-base lg:text-base">Muhammad Haris</span> &
      <span class="animated font-bold font-mono xsm:text-xs sm:text-sm md:text-base lg:text-base">Muhammad Ahmed Khan</span>.
      <br>
      <span class="animated font-times-new-roman xsm:text-xs sm:text-sm md:text-base lg:text-base"> All the work is done under the supervision of </span>
      <span class='font-bold xsm:text-xs sm:text-sm md:text-base lg:text-base font-mono'> ""Miss Zainab Zakir"".</span>
    </p>
  </div>
  <span class="bottom-section font-goudy-agency xsm:text-xs sm:text-sm md:text-base lg:text-base">
    <p>🌐 Crafted with ❤ and care by SSUET SED</p>
  </span>
</footer>



