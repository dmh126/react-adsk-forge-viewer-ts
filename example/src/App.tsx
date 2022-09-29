import React from 'react';
import { ForgeViewer } from 'react-adsk-forge-viewer-ts';
import ExampleExtension from './ExampleExtension';
import ExampleTool from './ExampleTool';
//const token = 'eyJhbGciOi...'
//const urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLm5aUnFBSVZsUmtLWFdIeXYyZlpIR3c_dmVyc2lvbj0x'
const extensions = [ExampleExtension]

const App = () => {
  return <ForgeViewer 
    local={true}
    path={'http://localhost:3000/shaver/0.svf'}
    //urn={urn}
    //testing={true}
    //token={token}
    extensions={extensions}
    activeTool={ExampleTool}
  />
}

export default App
