var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from 'react';
import { useDynamicScript } from '../hooks';
/**
 * Function lo load component
 *
 * @param scope
 * @param module
 * @returns
 */
function loadComponent(scope, module) {
    return () => __awaiter(this, void 0, void 0, function* () {
        // Initializes the share scope. This fills it with known provided modules from this build and all remotes
        // @ts-ignore
        yield __webpack_init_sharing__("default");
        const container = window[scope]; // or get the container somewhere else
        // Initialize the container, it may provide shared modules
        // @ts-ignore
        yield container.init(__webpack_share_scopes__.default);
        // @ts-ignore
        const factory = yield window[scope].get(module);
        const Module = factory();
        return Module;
    });
}
export const MFRemote = ({ microFrontend }) => {
    const { ready, failed } = useDynamicScript({
        url: microFrontend && microFrontend.url
    });
    if (!microFrontend) {
        return _jsx("h2", { children: "Not system specified" });
    }
    if (!ready) {
        return _jsxs("h2", { children: ["Loading dynamic script: ", microFrontend.url] });
    }
    if (failed) {
        return _jsxs("h2", { children: ["Failed to load dynamic script: ", microFrontend.url] });
    }
    const Component = lazy(loadComponent(microFrontend.scope, microFrontend.module));
    return (_jsx(Suspense, Object.assign({ fallback: "Loading System" }, { children: _jsx(Component, {}) })));
};
