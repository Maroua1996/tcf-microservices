
const app = require('./app');


app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running on port " + process.env.PORT);
});

// setInterval(() => {
//   InventoryController.removeExpired();
// }, 5 * 1000);
