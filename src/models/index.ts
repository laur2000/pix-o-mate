import Companies, { check_cif_validity_trigger } from './Companies';

export const models = [Companies];

export const commands = [...check_cif_validity_trigger];
