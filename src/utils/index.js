import { merge } from "lodash";

export default {
  domain: window.location.href,
  app: fin.Application.getCurrentSync(),
  window: fin.Window.getCurrentSync(),
  launchWindow: function(fin, test, opts) {
    const finalOpts = {
      name: test.title,
      url: `${this.domain}${test.route}`,
      autoShow: true,
      saveWindowState: false
    };
    console.log(this.domain, finalOpts.url);

    merge(finalOpts, this.windowSizeM);
    merge(finalOpts, opts);

    return fin.Window.create(finalOpts);
  },
  windowSizeS: {
    defaultWidth: 266,
    defaultHeight: 138,
    defaultTop: 0,
    defaultLeft: 0
  },
  windowSizeM: {
    defaultWidth: 316,
    defaultHeight: 238,
    defaultTop: 0,
    defaultLeft: 0
  },
  windowSizeL: {
    defaultWidth: 616,
    defaultHeight: 438,
    defaultTop: 0,
    defaultLeft: 0
  },
  windowSizeXL: {
    defaultWidth: 916,
    defaultHeight: 638,
    defaultTop: 0,
    defaultLeft: 0
  }
};
