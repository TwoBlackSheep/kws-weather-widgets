import { flush, render, TestWindow } from '@stencil/core/testing';
import { KwsTemperature } from './kws-temperature';

describe('my-component', () => {
  it('should build', () => {
    expect(new KwsTemperature()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [KwsTemperature],
        html: '<kws-temperature></kws-temperature>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('℉');
    });

    describe('using a scale of C', () => {
      beforeEach(() => (element.scale = 'C'));

      it('shows degrees Celcius', async () => {
        await window.flush();
        expect(element.textContent.trim()).toEqual('℃');
      });

      it('converts negative temps properly', async () => {
        element.temperature = 254.55;
        await window.flush();
        expect(element.textContent.trim()).toEqual('-19 ℃');
      });

      it('converts freezing properly', async () => {
        element.temperature = 273.15;
        await window.flush();
        expect(element.textContent.trim()).toEqual('0 ℃');
      });

      it('converts normal tempurature properly', async () => {
        element.temperature = 300.9;
        await window.flush();
        expect(element.textContent.trim()).toEqual('28 ℃');
      });

      it('converts boiling properly', async () => {
        element.temperature = 373.15;
        await window.flush();
        expect(element.textContent.trim()).toEqual('100 ℃');
      });
    });

    describe('using a scale of F', () => {
      beforeEach(() => (element.scale = 'F'));

      it('shows degrees Fahrenheit', async () => {
        await window.flush();
        expect(element.textContent.trim()).toEqual('℉');
      });

      it('converts negative temps properly', async () => {
        element.temperature = 254.55;
        await window.flush();
        expect(element.textContent.trim()).toEqual('-1 ℉');
      });

      it('converts freezing properly', async () => {
        element.temperature = 273.15;
        await window.flush();
        expect(element.textContent.trim()).toEqual('32 ℉');
      });

      it('converts normal tempurature properly', async () => {
        element.temperature = 300.9;
        await window.flush();
        expect(element.textContent.trim()).toEqual('82 ℉');
      });

      it('converts boiling properly', async () => {
        element.temperature = 373.15;
        await window.flush();
        expect(element.textContent.trim()).toEqual('212 ℉');
      });
    });
  });
});
