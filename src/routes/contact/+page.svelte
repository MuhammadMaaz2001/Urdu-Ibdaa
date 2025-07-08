<script>
  let firstname = '';
  let lastName = '';
  let email = '';
  let subject = '';
  let message = '';
  let successMessage = '';
  let errorMessage = '';
  let isLoading = false;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Reset previous messages
    successMessage = '';
    errorMessage = '';

    // Check if any field is empty
    if (!firstname || !lastName || !email || !subject || !message) {
      errorMessage = 'Please fill in all the fields.';
      setTimeout(() => {
        errorMessage = '';
      }, 2000);
      return;
    }

    // Start loading state
    isLoading = true;

    const formData = new FormData();
    formData.append('name', `${firstname} ${lastName}`);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('access_key', 'key here'); // Replace with your actual access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        successMessage = 'Form submitted successfully!';
        setTimeout(() => {
          successMessage = '';
        }, 2000);
        // Clear form fields
        firstname = '';
        lastName = '';
        email = '';
        subject = '';
        message = '';
      } else {
        errorMessage = data.message || 'Error submitting the form. Please try again.';
        setTimeout(() => {
          errorMessage = '';
        }, 2000);
      }
    } catch (error) {
      errorMessage = 'Error submitting the form. Please try again.';
      console.error('API request failed:', error);
      setTimeout(() => {
        errorMessage = '';
      }, 2000);
    } finally {
      isLoading = false;
    }
  };
</script>

<br>
<h2 class="text-3xl font-semibold py-6 text-center text-white">Contact Us</h2>

<div class="max-w-3xl mx-auto shadow-md p-6 dark:bg-black">

  <!-- Success Message -->
  {#if successMessage}
    <div class="bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-2 mb-6 rounded">
      <p>{successMessage}</p>
    </div>
  {/if}

  <!-- Error Message -->
  {#if errorMessage}
    <div class=" border border-white text-white px-4 py-2 rounded mb-6">
      <p>{errorMessage}</p>
    </div>
  {/if}

  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- First Name -->
      <div class="mb-4">
        <div class="bg-white border border-solid border-gray-300 rounded-lg p-3 focus-within:outline-none">
          <input type="text" id="firstname" class="input-style w-full focus:outline-none" placeholder="First Name" bind:value={firstname} />
        </div>
      </div>
      <!-- Last Name -->
      <div class="mb-4">
        <div class="bg-white border border-solid border-gray-300 rounded-lg p-3 focus-within:outline-none">
          <input type="text" id="lastName" class="input-style w-full focus:outline-none" placeholder="Last Name" bind:value={lastName} />
        </div>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <div class="bg-white border border-solid border-gray-300 rounded-lg p-3 focus-within:outline-none">
          <input type="email" id="email" class="input-style w-full focus:outline-none" placeholder="Your Email" bind:value={email} />
        </div>
      </div>
      <!-- Subject -->
      <div class="mb-4">
        <div class="bg-white border border-solid border-gray-300 rounded-lg p-3 focus-within:outline-none">
          <input type="text" id="subject" class="input-style w-full focus:outline-none" placeholder="Subject" bind:value={subject} />
        </div>
      </div>
    </div>

    <!-- Message -->
    <div class="mb-4">
      <div class="bg-white border border-solid border-gray-300 rounded-lg p-3 focus-within:outline-none">
        <textarea id="message" class="textarea-style w-full xsm:h-30 resize-none focus:outline-none" placeholder="Your Message" bind:value={message}></textarea>
      </div>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="btn-style xsm:py-2 flex justify-center items-center bg-BtnColor dark:bg-darkborder text-white rounded-full py-2 px-6 border border-darkmode hover:bg-blue-600 transition-all duration-300" disabled={isLoading}>
      {isLoading ? 'Submitting...' : 'Submit'}
    </button>
   
  </form>
</div>
