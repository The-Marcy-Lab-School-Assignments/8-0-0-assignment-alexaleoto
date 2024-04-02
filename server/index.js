const express = require('express');
const app = express();
const port = 8080; 

const songs = [
  { id: 1, title: 'I Talk to the Wind', artist: 'King Crimson', year: 1969 },
  { id: 2, title: 'Chameleon', artist: 'Herbie Hancock', year: 1973 },
  { id: 3, title: 'My Name is Mud', artist: 'Primus', year: 1993 }
];


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/about', (req, res) => {
    res.send('<h1>About the Express Server</h1><p>Discovering the power of Express.js for serving HTML and data.</p>');
  });
  
  app.get('/api/songs', (req, res) => {
    res.json(songs);
  });
  
  app.get('/api/song', (req, res) => {
    const songId = req.query.id;
    const song = songs.find(s => s.id.toString() === songId);
    if (song) {
      res.json(song);
    } else {
      res.status(404).send('Song not found');
    }
  });
  
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });