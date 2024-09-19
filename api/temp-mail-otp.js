
// pages/api/messages.js

export default async function handler(req, res) {
  // Get the token from the query parameters
  const { token } = req.query;

  try {
    // Make a GET request using Fetch API
    const response = await fetch('https://mob2.temp-mail.org/messages', {
      method: 'GET',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
        'authorization': token,  // Add the token from the query parameter
      },
    });

    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response as JSON
    const data = await response.json();

    // Send the JSON response back to the client
    res.status(200).json(data);
  } catch (error) {
    // Handle errors and return a 500 status
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
}
