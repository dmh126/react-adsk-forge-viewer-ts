import { ToolInterface } from 'react-adsk-forge-viewer-ts';

export default class ExampleTool extends ToolInterface {
  public toolName = 'ExampleTool';

  activate() {}
  deactivate() {}
  register() {}
  deregister() {}
  handleSingleClick(event: any) {
    const hitTest = this.viewer.clientToWorld(event.canvasX, event.canvasY, true);
    console.info(hitTest);
    return true;
  }
}