import { env } from 'src/config/env';
import express from 'express';
import { loadModules } from './loaders';

(async () => {
  const server = express();
  
  await loadModules();

  server.listen(env.PORT, () => {
    console.log(`
__________________________________________
    
    Server listening on port: ${env.PORT}
__________________________________________
    `);
  });
})();
