A serverless Discord Bot designed to get your Discord account the "Active Developer" badge while learning a bit about serverless technology.

Based on https://github.com/Attituding/serverless-discord-bot.

THIS PART IS IN PROGRESS:
1) Run "npm i"
2) Install Wrangler globally with "npm i wrangler -g"
3) Set environment variables locally (see sample.env file)
4) Run "npm run generate"
5) Create a Cloudflare Worker and set its name in the wrangler.toml file
6) Create an application at https://discord.dev
7) Create a Prisma Proxy at https://cloud.prisma.io
8) Set environment variables/secrets in both the Worker dashboard and the wrangler.toml file
9) Run "npm run dev" for local testing (use ngrok or similar to route localhost)
10) Run "npm run publish" to deploy to Cloudflare Workers
11) Set your Worker's link in the interaction endpoint URL of your Discord application