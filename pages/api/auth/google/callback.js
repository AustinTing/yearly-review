import { OAuth2Client } from 'google-auth-library';

const auth = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

export default async function handler(req, res) {
  try {
    const { code } = req.query;
    const { tokens } = await auth.getToken(code);
    console.log(tokens);
    console.log(req.cookies);
    res.setHeader('Set-Cookie', `tokens=${JSON.stringify(tokens)}; Path=/; Domain=${process.env.COOKIE_DOMAIN}; HttpOnly`);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
