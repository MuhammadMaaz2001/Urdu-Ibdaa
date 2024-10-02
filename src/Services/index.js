// import axios from 'axios';

// const BASE_URL = 'https://c567-35-245-31-167.ngrok-free.app/paraphrase/';

// // Function to get paraphrased text
// export const getParaphrasedText = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/paraphrase`);
//     return response.data.text; // Adjust based on the structure of your dummy response
//   } catch (error) {
//     throw new Error('Fetching paraphrased text failed',); // Handle errors as needed
//   }
// };





// src/services/apiServices.js

// export const paraphraseText = async (text) => {
//   try {
//     const response = await fetch('https://your-api-endpoint.com/paraphrase', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text }),
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     return data.paraphrasedText;
//   } catch (error) {
//     console.error('Error paraphrasing text:', error);
//     throw error;
//   }
// };

// Function to fetch data from a URL, concatenate with session storage value, and store in new session storage key
async function fetchAndStore(url, sessionKey, newSessionKey) {
    try {
      // Fetch response from the URL
      const response = await fetch(url);
      const data = await response.text(); // Assuming the response is text. Modify if needed (e.g., response.json() for JSON)
      
      // Get the value from session storage
      const storedValue = sessionStorage.getItem(sessionKey) || '';
      
      // Concatenate the fetched data with the stored value
      const concatenatedValue = storedValue + data;
      
      // Store the concatenated result in a new session storage key
      sessionStorage.setItem(newSessionKey, concatenatedValue);
  
      console.log(`Fetched data from ${url} and stored concatenated result in session storage under key ${newSessionKey}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Example usage
  const url = 'https://example.com/paraphrase'; // Replace with the actual URL
  const sessionKey = 'userInput'; // Replace with the actual session storage key
  const newSessionKey = 'combinedData'; // Replace with the desired new session storage key
  
fetchAndStore(url, sessionKey, newSessionKey);
  