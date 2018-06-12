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

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  ConditionIconPaths,
} from './models/condition-icon-paths';
import {
  Forecast,
} from './models/forecast';

declare global {

  namespace StencilComponents {
    interface KwsCondition {
      'condition': number;
      'iconPaths': ConditionIconPaths;
    }
  }

  interface HTMLKwsConditionElement extends StencilComponents.KwsCondition, HTMLStencilElement {}

  var HTMLKwsConditionElement: {
    prototype: HTMLKwsConditionElement;
    new (): HTMLKwsConditionElement;
  };
  interface HTMLElementTagNameMap {
    'kws-condition': HTMLKwsConditionElement;
  }
  interface ElementTagNameMap {
    'kws-condition': HTMLKwsConditionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kws-condition': JSXElements.KwsConditionAttributes;
    }
  }
  namespace JSXElements {
    export interface KwsConditionAttributes extends HTMLAttributes {
      'condition'?: number;
      'iconPaths'?: ConditionIconPaths;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface KwsDailyForecast {
      'forecasts': Array<Forecast>;
      'iconPaths': ConditionIconPaths;
      'scale': string;
    }
  }

  interface HTMLKwsDailyForecastElement extends StencilComponents.KwsDailyForecast, HTMLStencilElement {}

  var HTMLKwsDailyForecastElement: {
    prototype: HTMLKwsDailyForecastElement;
    new (): HTMLKwsDailyForecastElement;
  };
  interface HTMLElementTagNameMap {
    'kws-daily-forecast': HTMLKwsDailyForecastElement;
  }
  interface ElementTagNameMap {
    'kws-daily-forecast': HTMLKwsDailyForecastElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'kws-daily-forecast': JSXElements.KwsDailyForecastAttributes;
    }
  }
  namespace JSXElements {
    export interface KwsDailyForecastAttributes extends HTMLAttributes {
      'forecasts'?: Array<Forecast>;
      'iconPaths'?: ConditionIconPaths;
      'scale'?: string;
    }
  }
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
      'uvIndex': number;
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
      'uvIndex'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;