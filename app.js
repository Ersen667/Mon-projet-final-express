// // const express = require('express');
// // const app = express();
// // const port = 3000;

// // app.get('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// // app.listen(port, () => {
// //   console.log(`Serveur démarré sur http://localhost:${port}`);
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());

// // Importer routes
// const userRoutes = require('./routes/user.routes');
// app.use('/api/users', userRoutes);

// // Connexion MongoDB
// mongoose.connect('mongodb://localhost:27017/MaBoutique', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ Connecté à MongoDB"))
// .catch((err) => console.error("❌ Erreur MongoDB :", err));

// // Démarrer le serveur
// app.listen(PORT, () => {
//   console.log(`🚀 Serveur lancé : http://localhost:${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
const app = express();
connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
 console.log(`Serveur tournant sur le port ${PORT}`));
 app.get('/', (req, res) => {
   res.send('Hello World!');
 });