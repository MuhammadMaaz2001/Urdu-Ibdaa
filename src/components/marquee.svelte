<style>
  @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia:wght@700&display=swap');

  .marquee-container {
    background-color: var(--banner-bg);
    padding: 0; /* Remove padding to reduce the gap */
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0; /* Remove margin to eliminate vertical gap */
  }

  .marquee-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; /* Adjust gap between boxes if needed */
    font-family: 'UnifrakturMaguntia', cursive;
    font-weight: bold;
    color: white;
  }

  .marquee-text {
    display: inline-block;
    white-space: nowrap;
    padding: 0.3rem 0.6rem; /* Smaller padding inside the box */
    border: 1px solid white; /* Thinner border */
    border-radius: 4px; /* Smaller border radius */
    margin-right: 0.5rem; /* Smaller margin between sentences */
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  }

  marquee {
    scrollamount: 5; /* Adjust scroll amount for smoother animation */
  }
</style>

<div class="dark:bg-gray">
  <div class="marquee-container w-screen">
    <marquee behavior="scroll" direction="left" scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();" class="marquee-content">
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        " اردو ہے جس کا نام ہمیں جانتے ہیں 'داغ۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        " وہ بولتا ہے نگاہوں سے اس قدر اردو۔ "
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "بچپن نے ہمیں دی ہے یہ شیرینیِ گفتار۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "زبانِ اردو، روایتی، دل کو چھو لینے والی۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "صلیقے سے ہواوں میں جو خوشبو گھول سکتے ہیں۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "وہ کرے بات تو ہر لفظ سے خوشبو آئے۔"
      </div>
    </marquee>
  </div>
  <div class="marquee-container">
    <marquee behavior="scroll" direction="left" scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();" class="marquee-content">
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "سارے جہاں میں دھوم ہماری زبان کی ہے۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        " خاموش رہ کے بھی اہلِ زبان سا لگتا ہے۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "اردو نہیں ہم ماں کی زبان بول رہے ہیں۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "ہر حرف، ایک قصہ، ایک راز، ایک روشنی۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "ابھی کچھ لوگ باقی ہیں جو اردو بول سکتے ہیں۔"
      </div>
      <div class="marquee-text xsm:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        "ایسی بولی وہی بولے جسے اردو آئے۔"
      </div>
    </marquee>
  </div>
</div>
