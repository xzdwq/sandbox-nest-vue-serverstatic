declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.json' {
  const value: Record<string, any>;
  export default value;
}

declare module '*.yaml' {
  const value: Record<string, any>;
  export default value;
}
