const app = require('./backend/src/app');
const connectDB = require('./backend/src/db/db');
connectDB();
require('dotenv').config();


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
