import { Component, ReactNode } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { AuthClientInitOptions, AuthClientEvent, AuthClientError } from '@react-keycloak/core';
import Keycloak from "keycloak-js";
import { AuthConfig } from '../../application';

type AuthProviderProps = {
  children: ReactNode;
  config: AuthConfig;
}

type AuthProviderState = {
  oidc: Keycloak;
}

export class AuthProvider extends Component<AuthProviderProps, AuthProviderState> {

  initOptions: AuthClientInitOptions = {
    onLoad: "login-required"
  };

  constructor(props: AuthProviderProps) {
    super(props);
    this._configure(this.props.config);
  }

  authHandle = (eventType: AuthClientEvent, error?: AuthClientError): void => {
    console.log('ERROR', error);
    switch (eventType) {
      case "onReady":
        console.log('Ready');
        break;
    }
  }

  private _configure(config: AuthConfig): void {
    this.state = {
      oidc: new Keycloak({
        url: config.url,
        realm: config.realm as string,
        clientId: config.clientId as string
      })
    }
  }

  render() {
    console.log('Render');
      return (
        <ReactKeycloakProvider
          authClient={this.state.oidc}
          initOptions={this.initOptions}
          onEvent={this.authHandle}
        >
          { this.props.children }
        </ReactKeycloakProvider>
      );
  }
}