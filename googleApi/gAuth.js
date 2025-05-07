import fs from 'fs/promises';
import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import path from 'path';
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

export class GoogleAuth {
  constructor(scopes) {
    if (!scopes) {
      throw new Error('Scopes are required');
    }

    if (!Array.isArray(scopes)) {
      this.scopes = [scopes];
    } else {
      this.scopes = scopes;
    }
  }

  async loadSavedCredentialsIfExist() {
    try {
      const content = await fs.readFile(TOKEN_PATH);
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
  }

  async saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: keys.installed?.client_id || keys.web?.client_id,
      client_secret: keys.installed?.client_secret || keys.web?.client_secret,
      refresh_token: client.credentials.access_token,
      expiry_date: client.credentials.expiry_date,
    });
    await fs.writeFile(TOKEN_PATH, payload);
  }

  async getAuth() {
    let auth = await this.loadSavedCredentialsIfExist();
    
    if (!auth) {
      auth = await authenticate({
        keyfilePath: CREDENTIALS_PATH,
        scopes: this.scopes,
      });
      if (auth.credentials) {
        await this.saveCredentials(auth);
      }
    }
  
    return auth;
  }
  
};
