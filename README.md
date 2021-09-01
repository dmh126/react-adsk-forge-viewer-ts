# react-adsk-forge-viewer-ts

  

React Typescript Autodesk Forge Viewer.

  

[![NPM](https://img.shields.io/npm/v/@contecht/react-adsk-forge-viewer.svg)](https://www.npmjs.com/package/@contecht/react-adsk-forge-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

  

## Install

  

```bash

npm install @contecht/react-adsk-forge-viewer

```

  

## Basic Usage

  

```tsx

import  React  from  'react';

import { ForgeViewer } from  '@contecht/react-adsk-forge-viewer';

  

const  token = "dXtgfg433432e4445..."; // Forge token 2 or 3 legged

const  urn = "dJggddssvc_ggddd..."; // base64 encoded model urn

  
  

const  Container = () => {

	return <ForgeViewer  {...{token, urn}}/>

}

```

## Props

- local (optional) {boolean} - specifies environment, by default `derivativeV2`, when `true` turns to `Local` and allows to load a model from SVF file, default `false`
- token (local:false) {string} - 2 or 3 legged access_token retrieved from Forge Authentication API endpoints
- urn (local:false) {string} - base64 encoded item urn
- path (local:true) {string} - path to SVF file
- version (optional) {string} - Forge Viewer script version, default: `7.*`
- headless (optional) {boolean} - if true mounts a headless viewer without toolbars and other widgets, default: `true`
- initializerOptions (optional) {Autodesk.Viewing.InitializerOptions} - viewer initializer options, see: [docs](https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/#initializer-options-callback), default: `{env: 'AutodeskProduction', api: 'derivativeV2'}`
- viewerOptions (optional) {object} -3D viewer options, see: [docs](https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#new-viewer3d-container-config), default: `{}`
- onDocumentLoadSuccess (optional) {(d: Autodesk.Viewing.Document) => Autodesk.Viewing.BubbleNode} - callback triggered on successful document load, pass a new one to select different viewables, must return a viewable to display, default: `(viewerDocument) => viewerDocument.getRoot().getDefaultGeometry();`
- onDocumentLoadError (optional) {(code?: number, msg?: string, msgs?: any[]) => void} - error handling callback, default: `(args) => console.error(args)`
- viewableOptions - (optional) {object} - viewable options see: [docs](https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D/#loaddocumentnode-avdocument-manifestnode-options), default: `{}`
- onInit (optional) {(o: any) => void} - function to trigger after successful viewer initialization, default: `undefined`
- extensions (optional) {ForgeExtension[]} - array of extensions to load on viewer start, more about extensions in the section below, default: `undefined`
- style (optional) {object} - React inline style to be applied to viewer container div
- disableLoader (optional) {boolean} - remove Forge spinner while initializing the viewer, default: `false`

## Local files

Forge Viewer can display models without calling the API, using SVF files downloaded from Model Derivatives API. This method doesn't require any access token. File must be loaded via http.

```tsx
import  React  from  'react';

import { ForgeViewer } from  '@contecht/react-adsk-forge-viewer';

const svf = '../assets/model/file.svf';  

const  Container = () => {

  return <ForgeViewer  
    local={true}
    path={svf}
  />

}
```

## Extensions

Viewer Extensions contain functionality extending viewer capabilities, can be loaded using property `extensions`, example:

```tsx
import { ForgeExtension } from  '@contecht/react-adsk-forge-viewer';

declare  var  THREE: any;

declare  var  Autodesk: any;

export  default  class  ExampleExtension  extends ForgeExtension {

	extensionName = 'ExampleExtension';

	load(): boolean {

		// change selection color to red

		const  red = new  THREE.Color(1,0,0);

		this.viewer.setSelectionColor(red, Autodesk.Viewing.SelectionType.MIXED);

		return  true;
	}

	unload(): boolean {

		return  true;
	}

  activate() {}

  deactivate() {}

}
```

## Advanced Usage

```tsx

import  React  from  'react';
import { ForgeViewer } from  '@contecht/react-adsk-forge-viewer';
import ExampleExtension from './extensions/exmple-extension';
const  token = "dXtgfg433432e4445..."; // Forge token 2 or 3 legged
const  urn = "dJggddssvc_ggddd..."; // base64 encoded model urn

const initializerOptions = {
	language: 'de'
}
const viewerOptions = {
	theme: 'light'
}
const onDocumentLoadSuccess = (viewerDocument) => {
	 const viewables = viewerDocument.getRoot().search({'type':'geometry'});
	 return viewables.find(v => v.is2D());
}
const viewableOptions = {
	globalOffset: {x:0,y:0,z:25}
}

const  ViewerContainer = () => {

	return(
		<ForgeViewer
			token={token}
			urn={urn}
			version="7.2" // loads the specified version
			headless={true} // removes toolbars and all the widgets
			initializerOptions={initializerOptions} // changes the language to german
			viewerOptions={viewerOptions} // changes theme to light
			onDocumentLoadSuccess={onDocumentLoadSuccess} // selects a 2D viewable instead of the default one
			viewableOptions={viewableOptions} // sets an offset Z axis to 25
			extensions=[ExampleExtension] // loads an example extension imported from file
		/>
	)

}
```

## Author
```
Damian Harasymczuk <harasymczuk@contecht.eu>
```

## License

  

MIT ©