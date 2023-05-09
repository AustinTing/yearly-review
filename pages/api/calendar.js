import { google } from 'googleapis';
import key from '../../google-credential.json';

export default async function handler(req, res) {
  try {
    const authClient = await google.auth.getClient({
      credentials: key,
      scopes: 'https://www.googleapis.com/auth/calendar.readonly',
    });
    const calendar = google.calendar({ version: 'v3', auth: authClient });
    // Call the Google Calendar API to retrieve the events
    const {data} = await calendar.calendarList.list();

    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}