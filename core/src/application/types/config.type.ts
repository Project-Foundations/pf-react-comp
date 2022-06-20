import { Environment } from '../enums/environment.enum';

export interface AuthConfig {
  url: string;
  clientId?: string;
  realm?: string;
}

export interface EnvConfig {
  auth: AuthConfig;
}

type Domain = {
  [key in Environment]: string;
};

export interface AppConfig {
  domains: Domain[];
  default: EnvConfig;
  [Environment.Development]: EnvConfig;
  [Environment.Preproduction]: EnvConfig;
  [Environment.Production]: EnvConfig;
}