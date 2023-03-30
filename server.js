// Load express
const express = require("express");
const app = express();

// Set up the view engine
app.set('view engine', 'ejs');

// Define your routes
app.get('/', (req, res) => {
  res.send('Welcome to my website!');
});

// Route 2: About page
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route 3: Contact page
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@mywebsite.com');
});

// Route 4: Products page
app.get('/products', (req, res) => {
  res.send('Check out our products!');
});

// Route 5: Services page
app.get('/services', (req, res) => {
  res.send('We offer a wide range of services.');
});

// Route 6: Blog page
app.get('/blog', (req, res) => {
  res.send('Read our latest blog posts.');
});

// Route 7: Portfolio page
app.get('/portfolio', (req, res) => {
  res.send('View our portfolio.');
});

// Route 8: Login page
app.get('/login', (req, res) => {
  res.send('Please login to access your account.');
});

// Route 9: Signup page
app.get('/signup', (req, res) => {
  res.send('Create a new account.');
});

// Route 10: Logout page
app.get('/logout', (req, res) => {
  res.send('You have been logged out.');
});


// app.get("/",( req, res) => {
//   console.log("Here")
//   res.send("Love")
// })

// app.get("/",( req, res) => {
//   console.log("Here")
//   res.send("Hate")
// })

// const TopCars = [
//   {
//     name: "McLaren",
//     color: "red",
//   },
//   {
//     name: "Ferrari ",
//     color: "green",
//   },
//   {
//     name: "Maserati",
//     color: "yellow",
//   },

//   {
//     name: "Porsche ",
//     color: "yellow",
//   },
//   {
//     name: "Lamborghini",
//     color: "yellow",
//   },
//   {
//     name: "Ford GT",
//     color: "yellow",
//   },
//   {
//     name: "Corvette",
//     color: "yellow",
//   },
//   {
//     name: "Aston Martin",
//     color: "yellow",
//   },
//   {
//     name: "Ferrari",
//     color: "yellow",
//   },
// ];

// app.get('/TopCars/', (req, res) => {
//   res.send(TopCars); 
// })
// app.get('/TopCars/:indexOfTopCarsArray', (req, res) => {
//   res.send(TopCars[req.params.indexOfTopCarsArray]);
// });

app.listen(3000);


// "McLaren",
//   "Ferrari ",
//   "Maserati",
//   "Porsche ",
//   "Lamborghini",
//   "Ford",
//   "Corvette",
//   "Aston Martin",
//   "Ferrari";
