This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

Copy the env file and create `env.development` for your dev env. Add your etherscan api key as the `API_KEY` and localhost URL as the `NEXT_PUBLIC_APP_URL` into the file.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Structure

The app is structured as follows:

- `app/`: Contains the main app code.
  - `components/`: Contains the app components.
  - `pages/`: Contains the app pages.
  - `services/`: Contains the app services.
  - - `local`: Contains the local services.
  - - `remote`: Contains the remote services.
  - `utils/`: Contains the app utilities.

In all component folders, there is a `index.tsx` file that exports the component. This is to make it easier to import the component in other files. 
Also, there are `ComponentName.types.ts` files that contain the types for the component and `ComponentName.test.tsx` files that contain the tests for the component.
