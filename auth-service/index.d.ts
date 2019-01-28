import { AuthService } from './src/AuthService';
import { AwsAuthService } from './src/AwsAuthService';

declare module "auth-service" {
  export interface AuthService { }
  export class AwsAuthService { }
}
