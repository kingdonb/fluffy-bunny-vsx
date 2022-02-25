import type { State, Configuration } from './types';

declare const PACKAGE_JSON: string;
export const pkg: any = PACKAGE_JSON;
export const defaultConfigurations = pkg.contributes.configuration[0].properties;

export const DEFAULT_STATE: State = {
  globalScope: false
};

export const DEFAULT_CONFIGURATION: Configuration = {
  background: defaultConfigurations['marquee.configuration.background'].default,
  name: defaultConfigurations['marquee.configuration.name'].default
};