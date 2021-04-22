import { env } from 'src/config/env';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(env.PORT, () => {
  console.log(`
__________________________________________
    
    Server listening on port: ${env.PORT}
__________________________________________
    `);
});
