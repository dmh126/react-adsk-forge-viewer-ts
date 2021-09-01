import * as React from 'react';
import { useHooks } from './hooks';

interface LocalProps {
  local?: true;
  path: string;
}

interface ApiProps {
  local?: false;
  token: string;
  urn: string;
  onDocumentLoadSuccess?: (
    d: Autodesk.Viewing.Document
  ) => Autodesk.Viewing.BubbleNode;
  onDocumentLoadError?: (
    errorCode?: Autodesk.Viewing.ErrorCodes,
    errorMsg?: string,
    messages?: any[]
  ) => void;
}

interface DefaultProps {
  version?: string;
  initializerOptions?: Autodesk.Viewing.InitializerOptions;
  viewerOptions?: Autodesk.Viewing.Viewer3DConfig;
  headless?: boolean;
  viewableOptions?: Autodesk.Viewing.LoadModelOptions;
  onInit?: (v?: any) => void;
  extensions?: any[];
  style?: any;
  disableLoader?: boolean;
}

type Props = (ApiProps | LocalProps) & DefaultProps;

export const ForgeViewer = (props: Props): React.ReactElement => {
  const { refs, style } = useHooks(props);
  return <div id='forgeViewer' ref={refs.viewer} style={style} />;
};

export { Extension as ForgeExtension } from './extension';
