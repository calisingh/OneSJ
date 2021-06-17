import axios from "axios";

// Define any constants that might be needed throughout the app

// Services API Link
export const servicesapiLink = process.env.REACT_APP_SERVICES_API_LINK;

// Categories API Link
export const categoriesapiLink = process.env.REACT_APP_CATEGORIES_API_LINK;

// Google API Key taken from Environment variable
// Make sure to switch to localhost version of api key if working on the code
// The production API key is used before releasing changes to the domain
// If making a production build remember to remove the Localhost API key from the .env file as it can get leaked
export const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY_PRODUCTION;

const { Translate } = require("@google-cloud/translate").v2;

const client = new Translate({
  key: GoogleAPIKey,
});

// Translates texts using Google Translate API
export async function translateTexts(texts, language) {
  const translations = await client.translate(texts, language);
  return translations[0];
}

// Fetches the data and categories
export async function getDataAndCategories() {
  // Grabbing both the data and categories from the corresponding apis
  const data = await axios.all([
    axios.get(servicesapiLink),
    axios.get(categoriesapiLink),
  ]);
  return [data[0].data.rows, data[1].data.rows];
}
