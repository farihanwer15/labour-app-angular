const express = require('express');
const path = require('path');

const app = express();
app.use(requireHTTPS);


// Serve only the static files form the dist directory
app.use(express.static(dist + '/dist/<labour-app.json>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(index.html+'/dist/<labour-app.json>'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);