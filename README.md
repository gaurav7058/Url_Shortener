<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

---

## 📄 Project Description

**URL Shortener API** is a backend service that allows users to convert long URLs into short links. Users can optionally provide custom short codes. The service tracks usage analytics (e.g., how many times a short URL is accessed).  
It is built using **NestJS** and **MongoDB** following RESTful API principles.  
Includes interactive Swagger documentation for ease of use.

---

## 🚀 Setup Instructions

### 🔧 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

---

### ⚙️ Local Development (Without Docker)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/gaurav7058/Url_Shortener.git
   cd url-shortner
2. **Install Dependencies**
    - npm install

3 **Configure Environment Variables**
  - Create a .env file in the root directory:
  - PORT=3000
  - JWT_SECRET=some_random_jwt_secret
  - DB_HOST=mongodb+srv://gauravchoundiye5148:12345@cluster0.cifufts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  - DB_PORT=27017

4 **Start the Application**
  - npm run build
  - npm run start




### 🌐 Deployed Version
- The backend is deployed on Render:
-  Live URL: https://url-shortener-1-r9s2.onrender.com/docs


### 📚 API endpoints
   - 1 - Register
     - Method : POST
     - Endpoint : /auth/register
     - Description : Register a new user
  
   - 2 - Login
     - Method : POST
     - Endpoint : /auth/login
     - Description : Log in and receive JWT token
  
   - 3 - Shorten
     - Method : POST
     - Endpoint : /api/shorten
     - Description : Shorten a long URL (optionally custom code)
     - Auth Required : Yes

   - 4 - Status
     - Method : GET
     - Endpoint : /api/stats/:code
     - Description : Get stats for a short URL
     - Auth Required : Yes

   - 5 - Get Long URl
     - Method : GET
     - Endpoint : /:shortCode
     - Description : Redirect to the original long URL
     -  Auth Required : No

## 🎥 Project Demo Video

Watch a walkthrough of the project here:  
👉 [Click to watch the video](https://drive.google.com/file/d/1EDIbj-C7bdnCKsVFcwVp-WSANtN7KrYA/view?usp=sharing)

### 🏅 Bonus Features Implemented
- ✅ Authentication & API Token Management