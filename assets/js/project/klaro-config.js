// @link https://github.com/kiprotect/klaro/blob/master/dist/config.js
var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  //styling: {
  //    theme: ['light', 'top', 'wide'],
  //},
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  //cookieDomain: '.github.com',
  //cookiePath: '/',
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  //disablePoweredBy: true,
  //additionalClass: 'my-klaro',
  //lang: 'en',
  translations: {
    en: {
    cloudflare: {
        description: 'Protection against DDoS attacks',
    },
    googleFonts: {
        description: 'Web fonts hosted by Google.',
      },
      googleAnalytics: {
        description: 'Collecting anonymous usage data to improve the content served on this website.',
    },
    }
    },
  // This is a list of third-party services that Klaro will manage for you.
  services: [
    {
      name: 'googleFonts',
      title: 'Google Fonts',
      purposes: ['styling'],
    },
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      optOut: false,
      onlyOnce: true,
    },
    //{
    //  name: 'cloudflare',
    //  title: 'Cloudflare',
    //  purposes: ['security'],
    //  required: true,
    //  default: true,
    //},

],
};

// TODO: See how Embedded YouTube works @link https://www.fabian-keller.de/blog/integrate-klaro-consent-management/
