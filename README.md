# Technical challenge for Satoshi's games

## How to use

1. Clone this repository
`git@github.com:RodrigoVila/satoshis-challenge.git`
or
`https://github.com/RodrigoVila/satoshis-challenge.git`

2. Go to project folder and install dependencies
 `cd satoshis-challenge`
 `npm install` or  `yarn install`

3. Then run:
`npm start`


## Requirements

1. Call the open API at https://randomuser.me/ to fetch a list of users. Display a reasonable number of users in a table / list view with a summary of the information about each user. Use your best judgement about what to display. :)

2. Have a text input that the user can type into in order to quickly filter the visible list of users by their first / last name.

3. Have a nationality selector / filter, so the user can retrieve from the server people from specific nationalities. The API supports sending multiple nationalities so your UI should allow selecting more than one as well. See the documentation at https://randomuser.me/documentation#nationalities


## Basic requirements

#### These requirements must be met for your solution to be accepted.

1. We use Typescript, and expect you to write your solution in Typescript. We also use React Hooks so you should use that as well.

2. The application must filter visible users, and fetch from the server only those with selected nationalities. By default, all nationalities are shown (and thus "selected"). You may choose a small subset of all nationalities available in the API.

3. Your code should be modular, and be well organized. 

4. Potential errors and "empty states" must be taken into account. Do not code only the happy path. ;)

5. You should provide us with a link to your code, and a working URL so we can quickly test out the app (you can use anything from CodeSandbox or Replit to free hosting solutions like Netlify or Vercel). We expect you to know how to deploy your code using any of these platforms.


## Nice to have but not required

1. Clicking on a user list item "opens" a detailed view of the user.

2. We use TailwindCSS in case you want to polish your UI.

3. Use the "state" technology you prefer. We're currently very fond of Recoil. Redux is NOT needed.

4. We're fans of React Query for data fetching, and using it is a plus. But plain old fetch is fine.

5. We like clean code and tests. Keep an eye out for code quality and, if you feel like it, provide some tests.

6. Performance is important. 
