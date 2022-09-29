/// <reference types="forge-viewer" />
export interface ToolInterface {
  handleSingleClick?(event: any, button: number): boolean;
  handleDoubleClick?(event: any, button: number): boolean;
  handleSingleTap?(event: any): boolean;
  handleDoubleTap?(event: any): boolean;
  handleKeyDown?(event: any, keyCode: number): boolean;
  handleKeyUp?(event: any, keyCode: number): boolean;
  handleWheelInput?(delta: number): boolean;
  handleButtonDown?(event: any, button: number): boolean;
  handleButtonUp?(event: any, button: number): boolean;
  handleMouseMove?(event: any): boolean;
  handleGesture?(event: any): boolean;
  handleBlur?(event: any): boolean;
  handleResize?(): void;
}

export abstract class ToolInterface {
  public abstract toolName: string;
  protected viewer: Autodesk.Viewing.Viewer3D;
  protected extOptions: any;

  constructor(viewer: Autodesk.Viewing.Viewer3D, options?: any) {
    this.viewer = viewer;
    this.extOptions = options || {};
  }

  public abstract register(): void;
  public abstract deregister(): void;
  public abstract activate(): void;
  public abstract deactivate(): void;

  getName(): string {
    return this.toolName;
  }

  getNames(): string[] {
    return [this.toolName];
  }
}
