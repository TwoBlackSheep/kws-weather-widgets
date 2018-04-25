import { TestWindow } from '@stencil/core/testing';
import { KwsCondition } from './kws-condition';

import { KwsConditionIconPaths } from './kws-condition-icon-paths';

describe('kws-condition', () => {
  it('should build', () => {
    expect(new KwsCondition()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLElement;
    let window: TestWindow;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [KwsCondition],
        html: '<kws-condition></kws-condition>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Unknown');
    });

    describe('image', () => {
      let paths: KwsConditionIconPaths;
      beforeEach(() => {
        paths = {
          sunny: './imgs/sunny.png',
          cloudy: './imgs/cloudy.png',
          lightRain: './imgs/rain.png',
          shower: './imgs/shower.png',
          sunnyThunderStorm: './imgs/partial-tstorm.png',
          thunderStorm: './imgs/tstorm.png',
          fog: './imgs/fog.png',
          snow: './imgs/snow.png',
          unknown: './imgs/unknown.png'
        };
      });

      it('shows thunderstorms for 200', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 200;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.thunderStorm);
      });

      it('shows thunderstorms for 229', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 229;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.thunderStorm);
      });

      it('shows sunny thunderstorms for 230', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 230;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.sunnyThunderStorm);
      });

      it('shows sunny thunderstorms for 299', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 299;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.sunnyThunderStorm);
      });

      it('shows light rain for 300', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 300;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.lightRain);
      });

      it('shows light rain for 399', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 399;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.lightRain);
      });

      it('shows showers for 500', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 500;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.shower);
      });

      it('shows showers for 599', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 599;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.shower);
      });

      it('shows snow for 600', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 600;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.snow);
      });

      it('shows snow for 699', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 699;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.snow);
      });

      it('shows snow for 903', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 903;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.snow);
      });

      it('shows fog for 701', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 701;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.fog);
      });

      it('shows fog for 771', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 771;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.fog);
      });

      it('shows sunny for 800', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 800;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.sunny);
      });

      it('shows sunny for 904', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 904;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.sunny);
      });

      it('shows cloudy for 801', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 801;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.cloudy);
      });

      it('shows cloudy for 809', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 809;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.cloudy);
      });

      it('shows unknown for 810', async () => {
        (element as any).iconPaths = paths;
        (element as any).condition = 810;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els[0].getAttribute('src')).toEqual(paths.unknown);
      });

      it('shows nothing if there is no image map', async () => {
        (element as any).condition = 810;
        await window.flush();
        let els = element.getElementsByTagName('img');
        expect(els.length).toEqual(0);
      });
    });

    describe('description', () => {
      it('shows thunderstorms for 200', async () => {
        (element as any).condition = 200;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Thunderstorms');
      });

      it('shows thunderstorms for 229', async () => {
        (element as any).condition = 229;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Thunderstorms');
      });

      it('shows scattered storms for 230', async () => {
        (element as any).condition = 230;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Scattered Storms');
      });

      it('shows scattered storms for 299', async () => {
        (element as any).condition = 299;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Scattered Storms');
      });

      it('shows rain for 300', async () => {
        (element as any).condition = 300;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Rain');
      });

      it('shows rain for 399', async () => {
        (element as any).condition = 399;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Rain');
      });

      it('shows showers for 500', async () => {
        (element as any).condition = 500;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Showers');
      });

      it('shows showers for 599', async () => {
        (element as any).condition = 599;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Showers');
      });

      it('shows snow for 600', async () => {
        (element as any).condition = 600;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Snow');
      });

      it('shows snow for 699', async () => {
        (element as any).condition = 699;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Snow');
      });

      it('shows snow for 903', async () => {
        (element as any).condition = 903;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Snow');
      });

      it('shows fog for 701', async () => {
        (element as any).condition = 701;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Fog');
      });

      it('shows fog for 771', async () => {
        (element as any).condition = 771;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Fog');
      });

      it('shows sunny for 800', async () => {
        (element as any).condition = 800;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Sunny');
      });

      it('shows sunny for 904', async () => {
        (element as any).condition = 904;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Sunny');
      });

      it('shows cloudy for 801', async () => {
        (element as any).condition = 801;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Cloudy');
      });

      it('shows cloudy for 809', async () => {
        (element as any).condition = 809;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Cloudy');
      });

      it('shows unknown for 810', async () => {
        (element as any).condition = 810;
        await window.flush();
        let els = element.getElementsByClassName('condition-label');
        expect(els[0].textContent).toEqual('Unknown');
      });
    });
  });
});