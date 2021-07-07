declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string; rel?: string }
  >;
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}
