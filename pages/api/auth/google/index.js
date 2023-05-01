import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import { OAuth2Client } from 'google-auth-library';

const auth = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

const scopes = ['https://www.googleapis.com/auth/calendar.readonly'];

export default async function handler(req, res) {
  try {
    const url = auth.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      state: req.query.next || '/',
    });

    res.redirect(url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
