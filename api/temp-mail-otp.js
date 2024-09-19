// pages/api/temp-mail-otp.js

export default async function handler(req, res) {
  // Get the token from the query string
  const { token } = req.query;

  // Check if the token is provided
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    console.log(`Received token: ${token}`);

    // Make a GET request to the third-party API
    const response = await fetch('https://mob2.temp-mail.org/messages', {
      method: 'GET',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
        'authorization': token,  // Use the token from the query string
      },
    });

    console.log(`Status Code: ${response.status}`);

    // Check if the response is OK
    if (!response.ok) {
      console.log(`Response not OK: ${response.statusText}`);
      throw new Error('Failed to fetch data from the external API');
    }

    // Parse the response as JSON
    const data = await response.json();

    // Send the JSON data back to the client
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error.message);

    // Return the error message in the response
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
}
