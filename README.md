![alt text](https://res.cloudinary.com/trellox/image/upload/v1657728129/github%20-%20readme/xxx_xjxbt3.jpg)

## Router
In the current (and only) route, there is the Home View component.

In the Home View component there are 2 component, and a router view. It allows to alter between Market Analysis component
and the Competitive Analysis component.

It'll be easy to add new pages to the application like login and register page.

## Store
I chose to add Vuex - state management to the application.

Flow of getting data to the component:
store => main component => small component
E.g the Market Analysis component contacts the store, and sends MarketList component the "marketData" from the store.
Then the MarketList component sends data to the MarketPreview component.

Flow after user interaction
user interaction => small component => main component => action in the store => service => request to the backend
E.g in the search component on every change of the search input an emit is sent to the MarketAnalysis component, that dispatch to the store with the new changes.
The action calls the marketDataService, and sends a request to the backend, and updates the store with the new values.

## Styling
I chose to work with SCSS and BEM — Block Element Modifier is a methodology that helps you to create reusable code.

## Installation

Install with npm

```bash
  git clone https://github.com/shaniKupiec/Home-Assignment.git
  cd Home-Assignment
  npm i
  npm run serve
```
