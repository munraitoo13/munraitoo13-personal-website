<h3 align="center">🌜 Welcome to munraitoo13.dev 🌛</h3>
<p align="center">My open-source personal website and blog!</p>
<div align="center">
  <img
    src="https://i.imgur.com/qbWyu9U.png"
    alt="Website Preview 1"
  />
</div>

---

### 🛠️ Built With

<img
  src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue"
  alt="Framer"
/>
<img
  src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
  alt="Next JS"
/>
<img
  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
  alt="React"
/>
<img
  src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
  alt="TailwindCSS"
/>
<img
  src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
  alt="JWT"
/>
<img
  src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
  alt="NodeJS"
/>
<img
  src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
  alt="Prisma"
/>
<img
  src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
  alt="Postgres"
/>
<img
  src="https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black"
  alt="Prettier"
/>
<img
  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
  alt="TypeScript"
/>
<img
  src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
  alt="Vercel"
/>

---

### ☝️ Special Features

- 🌐 **Multilingual Support**: Supports English, German, French, and Portuguese.
- 📝 **Blog System**: MDX-based for rich content.
- 🎨 **Modern Design**: Tailwind CSS + Framer Motion animations.
- 🌙 **Dark Mode**: Switch between light and dark themes effortlessly.
- 📊 **GitHub Projects Integration**: Directly showcase your work.
- 📫 **Contact Form**: reCAPTCHA-enabled for security.
- 🔒 **Admin Panel**: Manage your content with ease.
- 🗄️ **Database**: Powered by Prisma + PostgreSQL.
- 📱 **Responsive Design**: Looks great on any device.

---

### 💅 Installation Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/munraitoo13/munraitoo13-personal-website
   cd munraitoo13-personal-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root and copy values from `.env.example`. Update with your own keys where necessary.

4. **Set up the database**

- Generate the Prisma client:

  ```bash
  npx prisma generate
  ```

- Apply database migrations:

  ```bash
  npx prisma migrate dev
  ```

5. **Configure Vercel (optional for deployment)**

- Install the Vercel CLI:

  ```bash
  npm i -g vercel
  ```

- Link the project to Vercel:

  ```bash
  vercel
  ```

  Ensure all environment variables are set in the Vercel dashboard.

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Access the application**

   Open your browser at: [http://localhost:3000](http://localhost:3000)

---

### 📂 Project Structure

```
src/
├── actions/       # Server actions
├── animations/    # Framer Motion animations
├── app/           # Next.js app router pages
├── components/    # Reusable React components
├── constants/     # Constants and configuration files
├── hooks/         # Custom React hooks
├── i18n/          # Translation configuration files
├── lib/           # Shared libraries and utilities
└── utils/         # Utility functions
```

---

### 📚 Key Technologies

- Next.js and TypeScript as framework and language
- Tailwind CSS, Framer Motion and Tabler Icons for the beauty
- MDX for posts and pages
- PostgreSQL and Prisma as database and ORM
- JWT and Bcrypt for auth
- Zod for form validation
- Vercel for deployment

---

### 🤝 Contributing

Contributions are what make the open source community an amazing place to learn and create. Any contributions will be greatly appreciated.

- Fork the repository
- Submit pull requests
- Open issues for suggestions or bugs

---

### 🤙 Contact

Augusto Mendes  
**@munraitoo13** on all socials.

Consider giving this project a star and thanks for your attention. Cheers!
