
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



## 📄 Project Description

URL Shortener API is a backend service that allows users to convert long, complex URLs into shorter, more manageable links. Users can optionally provide custom short codes, and the service tracks basic analytics like the number of times a short URL is accessed. Built using NestJS and MongoDB, this project follows RESTful design principles and includes interactive API documentation via Swagger.



## 🚀 Setup & Run Instructions
🔧 Prerequisites
Node.js (v16 or higher)

npm or yarn

MongoDB (running locally or a hosted instance like MongoDB Atlas)

⚙️ Running Locally (Without Docker)
Clone the repository

git clone https://github.com/gaurav7058/Url_Shortener.git
cd url-shortner

Install dependencies
npm install

Configure Environment Variables
Create a .env file in the root directory with the following content:

PORT=3000
JWT_SECRET=some_random_jwt_secret
DB_HOST=mongodb+srv://gauravchoundiye5148:12345@cluster0.cifufts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
DB_PORT=27017

Start the application

npm run start:dev
Access the API
Visit http://localhost:3000 in your browser or API client.

## 🌐 Deployed Version (via Render)
The backend is deployed on Render and can be accessed here:

👉 Live URL: https://your-render-url.onrender.com 

## 🏅 Bonus Features Implemented
✅ Authentication & API Token Management

Implemented user authentication using JWT.

Added the following secure endpoints:

POST /auth/register – for user registration.

POST /auth/login – returns a JWT token on successful login.

Protected sensitive endpoints like:

POST /api/shorten – for creating short URLs.

GET /api/stats/:shortCode – for viewing analytics.

Token must be passed via the Authorization header as a Bearer Token.

URLs are associated with the authenticated user who created them.