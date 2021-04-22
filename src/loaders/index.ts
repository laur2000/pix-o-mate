import { initializeSequelize } from './database';

export const loadModules = async () => {
  await initializeSequelize();
};
