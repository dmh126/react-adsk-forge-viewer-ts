export const DEFAULT_VERSION: string = '7.*';
export const DEFAULT_INITIALIZER_OPTIONS: object = {
  env: 'AutodeskProduction',
  api: 'derivativeV2'
};
export const DEFAULT_VIEWER_OPTIONS: object = {};
export const DEFAULT_VIEWABLE_OPTIONS: object = {};
export const DEFAULT_DOCUMENT_LOAD_SUCCESS = (
  viewerDocument: Autodesk.Viewing.Document
): Autodesk.Viewing.BubbleNode => viewerDocument.getRoot().getDefaultGeometry();
export const DEFAULT_DOCUMENT_LOAD_ERROR = (
  errorCode?: Autodesk.Viewing.ErrorCodes,
  errorMsg?: string,
  messages?: any[]
): void => {
  console.error(errorCode, errorMsg, messages);
};
