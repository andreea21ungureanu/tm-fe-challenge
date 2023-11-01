This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality

1. On the initial load, select one the seasons related to the Game of Thrones series
2. Inside a season, you can select any of the episodes to find out more details about this
3. Use the close button to return to the initial Episodes list view

### Small screens

On small devices, when the details regarding an episode are selected, the list of episodes for that season will be closed.

## Accessibility

- The application is labeled and is using semantic tags.
- Keyboard navigation can be used in order to acess episodes and their details

## Testing

To run the tests, use the command:

```bash
npm test
```

There is unit test coverage using react testing library for:

- Custom hooks
- React components

NOTE: The test coverage is not complete and should only serve as examples.
