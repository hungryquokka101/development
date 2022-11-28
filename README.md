# Development

### Link to Deployed Website
`https://hungryquokka101.github.io/development/`

### Goal and Value of the Application
The application provides a platform for plushie lovers to shop for cute Japanese and Korean plushies! It contains plushies of different characters and sizes. 

### Usability Principles Considered
For better shopping experience, the user can filter the plushies by character, size and availability. They can also sort the plushies by their popularity or price. Both sorting mechanisms are ascending. The layout of
the website is intuitive, with the filters and sorting on the left, the images of the items in the middle, and
the cart on the right. This allows the users to view the items as they perform other operations. Visual hierarchy through bolded and larger titles. The user can also easily add and remove items to the cart. When the count of an item in the cart becomes 0, it disappears from the cart and the user can no longer remove it.

### Organization of Components
There are three main components in this program: 1. App.js; 2. Cart.js; 3. PlushieItem.js. App.js is the main
component that ties everything together. It contains the PlushieItem.js component and the Cart.js component. It renders a list of PlushieItem's and one cart. The PlushieItem.js component represents an actual plushie item and the Cart.js component represents the actual cart. 

### How Data is Passed Down Through Components
Data is passed down through components with props. When App.js renders PlushieItem's, it passes an item, a
addToCart and a removeFromCart functions to PlushieItem.js. PlushieItem.js uses the props arguments to render
the item card and implement the buttons. When App.js renders Cart.js, it passes a cart (a list that is updated throughout the program) and a total price. These two variables are updated in App.js and are passed down to Cart.js to construct the cart. 

### How the User Triggers State Changes
The user triggers state changes with state variables and useState. Some examples include the selected filter value for each filter type, the selected sort type and the total price. When the user makes some changes on the website, such as clicking a button or selecting a radio button, the corresponding state variable gets updated through setState and the change becomes reflected visually upon re-rendering. 