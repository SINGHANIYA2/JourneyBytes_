import express from 'express';
const app = express();

// Enable JSON parsing
app.use(express.json());

// Dummy trips data
let trips = [
  { id: 1, name: 'Athirappilly Waterfalls', location: 'Kerala' },
  { id: 2, name: 'Tirthan Valley', location: 'Himachal Pradesh' }
];

// Dummy users data
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Root route – show trips and users
app.get('/', (req, res) => {
  let html = '<h1>Trips</h1><ul>';
  trips.forEach(trip => {
    html += `<li>${trip.id}: ${trip.name} - ${trip.location}</li>`;
  });
  html += '</ul>';

  html += '<h1>Users</h1><ul>';
  users.forEach(user => {
    html += `<li>${user.id}: ${user.name} - ${user.email}</li>`;
  });
  html += '</ul>';

  res.send(html);
});

// CRUD routes for trips
app.get('/api/trips', (req, res) => res.json(trips));

app.post('/api/trips', (req, res) => {
  const newTrip = req.body;
  newTrip.id = trips.length + 1;
  trips.push(newTrip);
  res.json(newTrip);
});

// CRUD routes for users
app.get('/api/users', (req, res) => res.json(users));

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  users.splice(index, 1);
  res.json({ message: 'User deleted successfully' });
});

// Start server on free port
const server = app.listen(0, () => {
  const port = server.address().port;
  console.log('Server is running! Open the following links:');
  console.log(`Root page: http://localhost:${port}/`);
  console.log(`Trips API: http://localhost:${port}/api/trips`);
  console.log(`Users API: http://localhost:${port}/api/users`);
});
