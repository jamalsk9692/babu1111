// pages/api/temp-mail.js

export default async function handler(req, res) {
  try {
    // Use the Fetch API to make the request
    const response = await fetch('https://mob2.temp-mail.org/mailbox', {
      method: 'POST',
      headers: {
        'User-Agent': '3.48',
        'Accept': 'application/json',
      },
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response to JSON
    const data = await response.json();

    // Send the response back as JSON
    res.status(200).json(data);
  } catch (error) {
    // Handle errors and send an error message as the response
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
}

