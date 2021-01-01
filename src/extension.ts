/// <reference types="forge-viewer" />

export abstract class Extension {
  public static extensionName: string = '';
  protected viewer: Autodesk.Viewing.Viewer3D;
  protected extOptions: Autodesk.Viewing.ExtensionOptions;

  constructor(
    viewer: Autodesk.Viewing.Viewer3D,
    options?: Autodesk.Viewing.ExtensionOptions
  ) {
    this.viewer = viewer;
    this.extOptions = options || ({} as Autodesk.Viewing.ExtensionOptions);
  }

  public abstract load(): void;
  public abstract unload(): void;
}
