// app.get('/hello', function(req, res){
//   res.send('hello world');
// });
// app.use(express.static('public'))
// app.listen(3000);

const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
//http://127.0.0.1:3000/images/hello.png


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

