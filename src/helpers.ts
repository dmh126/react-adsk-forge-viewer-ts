export const loadScripts = (version: string): Promise<any> =>
  new Promise((resolve, reject) => {
    let ready: boolean = false;
    const script: HTMLScriptElement = document.createElement('script');
    script.src = `https://developer.api.autodesk.com/modelderivative/v2/viewers/${version}/viewer3D.min.js`;
    script.async = true;
    document.body.appendChild(script);
    const style: HTMLLinkElement = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = `https://developer.api.autodesk.com/modelderivative/v2/viewers/${version}/style.min.css`;
    document.body.appendChild(style);

    script.onload = (): void => {
      if (!ready) {
        ready = true;
        resolve(script);
      }
    };
    script.onerror = (msg: any): void => {
      console.error(msg);
      reject(new Error('Error loading Forge script.'));
    };
    script.onabort = (msg: UIEvent): void => {
      console.error(msg);
      reject(new Error('Forge script loading aborted.'));
    };
  });
