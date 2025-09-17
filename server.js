const path = require('path');
require('dotenv').config({ 
  path: path.resolve(__dirname, '.env') 
});

const app = require('./backend/src/app');
const connectDB = require('./backend/src/db/db');
connectDB();


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
