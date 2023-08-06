# Next Blog - A Blogging Platform built with Next.js, TypeScript, and Tailwind CSS

Next Blog is a full-fledged blogging platform that allows users to create, read, update, and delete blog posts. It includes an integrated text editor system for creating rich content and authenticates users using Google OAuth. The frontend is developed with Next.js and TypeScript, and the styling is done using Tailwind CSS.

## Features

- Create, Read, Update, and Delete blog posts
- Rich text editor system for creating engaging content
- User authentication with Google OAuth
- Beautiful and responsive design using Tailwind CSS
- Developed with Next.js and TypeScript for better code quality and type safety

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm or Yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/imen-lakrib/next-blog.git
cd next-blog
```

2. Install dependencies:

If you use npm:

```bash
npm install
```

If you use Yarn:

```bash
yarn install
```

3. Set up environment variables:

You need to create a `.env.local` file in the root directory and provide the required environment variables:

```plaintext
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI
NEXTAUTH_URL
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET
```

Replace `your_google_client_id` and `your_google_client_secret` with your actual Google OAuth client ID and secret.

4. Run the development server:

If you use npm:

```bash
npm run dev
```

If you use Yarn:

```bash
yarn dev
```

The application should now be running on `http://localhost:3000`.

## Project Structure

```
├── pages/           # Next.js pages and routing
├── components/      # Reusable components
├── lib/             # Utility functions and client-side libraries
├── styles/          # Global and component-specific styles using Tailwind CSS
├── public/          # Static assets
├── types/           # TypeScript type definitions
├── .env.local       # Environment variables (not included in the repository)
├── next.config.js   # Next.js configuration
├── tsconfig.json    # TypeScript configuration
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation (you are reading it!)
```

## Contributing

Contributions to Next Blog are welcome! If you find any issues or want to add new features, feel free to open a pull request. Please make sure to follow the code style and commit guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Next Blog was built with the support of various open-source libraries and tools. Special thanks to the developers of Next.js, TypeScript, Tailwind CSS, and the Google OAuth system.

## Contact

For any inquiries or questions, please reach out to [lakribimen@gmail.com](mailto:lakribimen@gmail.com).

Happy Blogging! 🚀