// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import type { IRuntimeConfig as Plugin0 } from '/Users/chenchao/prj_local/prj_nodejs/poker-ui/src/.umi-production/plugin-initialState/runtimeConfig.d'
import type { IRuntimeConfig as Plugin1 } from '/Users/chenchao/prj_local/prj_nodejs/poker-ui/src/.umi-production/plugin-layout/runtimeConfig.d'
import type { IRuntimeConfig as Plugin2 } from '/Users/chenchao/prj_local/prj_nodejs/poker-ui/src/.umi-production/plugin-request/runtimeConfig.d'
interface IDefaultRuntimeConfig {
  onRouteChange?: (props: { routes: any, clientRoutes: any, location: any, action:any }) => void;
  patchRoutes?: (props: { routes: any }) => void;
  patchClientRoutes?: (props: { routes: any }) => void;
  render?: (oldRender: () => void) => void;
  rootContainer?: (lastRootContainer: JSX.Element, args?: any) => void;
  [key: string]: any;
}
export type RuntimeConfig = IDefaultRuntimeConfig & Plugin0 & Plugin1 & Plugin2

export function defineApp(config: RuntimeConfig): RuntimeConfig {
  return config;
}
