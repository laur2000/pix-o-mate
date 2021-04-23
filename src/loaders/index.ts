import { initializeSequelize } from './database';
import {models, triggers} from 'src/models';

export const loadModules = async () => {
  await initializeSequelize({
    models,
    triggers
  });
};
