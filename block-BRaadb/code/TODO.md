## Run this app

To ren this app you need to do the following

- Clone the app in this folder: https://github.com/AltCampus/react-hoc
- Run `npm install`
- To run this app use `npm start`

## DEMO

[https://q5on1.csb.app/](https://q5on1.csb.app/)

## Refact to use Higher Order Component

- In this app there are three pages `Articles`, `People` and `Books`
- All three pages contains list of articles, people and books along with a search functionality
- If you look closely you will understand the behaviour of search function is same in all three pages
- Taking the help form of Higher Order Component refactor the app to have a HOC that will add the function of search to nay page
- Create a HOC named `withSearch` using which we can add the search function to all three pages
- After refactoring make sure to check if all the functionalities are working properly
