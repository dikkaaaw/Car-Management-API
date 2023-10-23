# Car-Management-API

To submit challenge chapter 05 from Binar Academy

# Installation
1. Clone the project
```bash
git clone https://github.com/dikkaaaw/Car-Management-API.git
```
2. Go to your directory
```bash
cd 
```
3. Install dependencies
```bash
npm install
```
4. Set .env
```bash
PORT = YOUR_PORT

# Config for Imagekit
PUBLIC_KEY = IMAGEKIT_PUBLICKEY
PRIVATE_KEY = IMAGEKIT_PRIVATEKEY
URL_ENDPOINT = YOUR_URL_ENDPOINT

JWT_SECRET = YOUR_JWT_SECRET

# Config for Database
DB_USERNAME = YOUR_DATABASE_USERNAME
DB_NAME = YOUR_DATABASE_NAME
DB_PASS = YOUR_POSTGRES_PASS
```
5. Dont forget to running migration and seeder
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
6. If you don't have database, create first and running migration in no.5
```bash
npx sequelize-cli db:create
```
7. Run the server
```bash
npm run dev
```

# Superadmin email & Password
```bash
email: superadmin@mail.com
password: superadmin@mail.com
```

# openAPI Documentation
```bash
http://localhost:3000/api-docs/
```

# ERD for this project!
![erd](https://github.com/dikkaaaw/Car-Management-API/assets/142596631/70467faf-b4f8-4deb-862e-d47df7dfee1f)
