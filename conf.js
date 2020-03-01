exports.config = {
    framework: 'jasmine',
    directConnect: true,

    onPrepare: () => {
        browser.manage().window().maximize();
        browser.get('https://angularjs.org/');
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['./Specs/*.js'],

    jasmineNodeOpts: {
        showColors: true
    },
  }