const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

require('./routes/htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});