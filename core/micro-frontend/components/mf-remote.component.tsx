import { FC, Suspense, lazy } from 'react';

import { MicroFrontend } from '../types';
import { useDynamicScript } from '../hooks';

/**
 * Function lo load component
 * 
 * @param scope 
 * @param module 
 * @returns 
 */
function loadComponent(scope: any, module: string) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // @ts-ignore
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

type MFRemoteProps = {
  microFrontend: MicroFrontend;
}

export const MFRemote: FC<MFRemoteProps> = ({ microFrontend }): JSX.Element => {
  const { ready, failed } = useDynamicScript({
    url: microFrontend && microFrontend.url
  });

  if (!microFrontend) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {microFrontend.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {microFrontend.url}</h2>;
  }

  const Component = lazy(
    loadComponent(microFrontend.scope, microFrontend.module)
  );

  return (
    <Suspense fallback="Loading System">
      <Component />
    </Suspense>
  );
}
