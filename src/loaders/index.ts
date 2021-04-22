import { initializeSequelize } from './database';
import models from 'src/models';

export const loadModules = async () => {
  await initializeSequelize({
    models,
  });
};
