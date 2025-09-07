const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on port ${PORT}`);
});


