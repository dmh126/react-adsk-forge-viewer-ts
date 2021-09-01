import { ForgeExtension } from 'react-adsk-forge-viewer-ts';

declare var THREE: any;
declare var Autodesk: any;

export default class ExampleExtension extends ForgeExtension {
  public static extensionName = 'ChangedName';

  load(): boolean {
    // change selection color to red
    const red = new THREE.Color(1,0,0);
    this.viewer.setSelectionColor(red, Autodesk.Viewing.SelectionType.MIXED);
    return true;
  }

  unload(): boolean {
    return true;
  }

  activate() {}
  deactivate() {}

}