/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface KwsTemperature {
      'scale': string;
      'temperature': number;
    }
  }

  interface HTMLKwsTemperatureElement extends StencilComponents.KwsTemperature, HTMLStencilElement {}

  var HTMLKwsTemperatureElement: {
    prototype: HTMLKwsTemperatureElement;
    new (): HTMLKwsTemperatureElement;
  };
  interface HTMLElementTagNameMap {
    'kws-temperature': HTMLKwsTemperatureElement;
  }
  interface ElementTagNameMap {
    'kws-temperature': HTMLKwsTemperatureElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kws-temperature': JSXElements.KwsTemperatureAttributes;
    }
  }
  namespace JSXElements {
    export interface KwsTemperatureAttributes extends HTMLAttributes {
      'scale'?: string;
      'temperature'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface KwsUvIndex {
      'index': number;
    }
  }

  interface HTMLKwsUvIndexElement extends StencilComponents.KwsUvIndex, HTMLStencilElement {}

  var HTMLKwsUvIndexElement: {
    prototype: HTMLKwsUvIndexElement;
    new (): HTMLKwsUvIndexElement;
  };
  interface HTMLElementTagNameMap {
    'kws-uv-index': HTMLKwsUvIndexElement;
  }
  interface ElementTagNameMap {
    'kws-uv-index': HTMLKwsUvIndexElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kws-uv-index': JSXElements.KwsUvIndexAttributes;
    }
  }
  namespace JSXElements {
    export interface KwsUvIndexAttributes extends HTMLAttributes {
      'index'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
