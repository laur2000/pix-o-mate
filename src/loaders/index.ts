import { initializeSequelize } from './database';
import { models, commands } from 'src/models';

export const loadModules = async () => {
  await initializeSequelize({
    models,
    commands,
  });
};
