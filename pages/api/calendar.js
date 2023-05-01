import { google } from 'googleapis';

// Initialize the Google API client
const auth = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

const calendar = google.calendar({ version: 'v3', auth });

export default async function handler(req, res) {
  try {
    // Make tokens string into an object
    const tokens = JSON.parse(req.cookies.tokens);
    if (!tokens) {
      return res
        .status(401)
        .json({ error: 'Unauthorized: Missing tokens' });
    }

    auth.setCredentials(tokens);

    // Call the Google Calendar API to retrieve the events
    const { data } = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}