## Introduction
This is a serverless Discord bot designed to get your Discord account the "Active Developer" badge while hopefully learning a little bit about serverless technology.

Based on https://github.com/Attituding/serverless-discord-bot.

## Tutorial

### Basic Prerequisites:
 - Install Git and Node on to your machine
 - Have a Cloudflare account
 - Have a Discord account

### Preparing the project
1) Use "git clone" to clone this repository to your local machine
2) Navigate to the project's folder on your machine
3) Create a .env file at the root of this project filled with the fields from the sample.env file
4) Create an application with a memorable name at https://discord.dev and note the application Id and public key
5) Navigate to the Bot tab to create a bot user and press reset token to generate a bot token (keep this very secret)
6) Fill the .env file with the above information you just gathered
7) Run "npm i" in a terminal in that folder
8) Run "npm run deploy" and hope you see "Registered global commands" pop up

### Preparing Cloudflare
1) Install Wrangler globally with "npm i wrangler -g"
2) Login to Cloudflare through Wrangler with "npx wrangler login" and following the oauth flow
3) Replace "name" and "DISCORD_PUBLIC_KEY" in the wrangler.toml file with a cool name of you choice and your application's public key
4) Run "npm run publish" to create and deploy a Cloudflare Worker

### Preparing Discord
1) Navigate to your Cloudflare dashboard and click ont eh Workers tab
2) Click on the Worker that has the cool name you chose
3) Click on the deployments tab and note the URL under "Current deployment"
4) Set this URL in the interaction endpoint URL section in your application's General tab
5) Go to the OAuth2 tab and click "URL Generator"
6) Click on applications.commands and then copy the link generated
7) Paste the link in to your browser and invite your bot to a server you manage (an empty test server is recommended)
8) Type "/" in chat, select the ping command, and run it
9) Wait about 24 hours (or less) and check https://discord.com/developers/active-developer to claim your badge