exports.config = {
    
    //seleniumAddress: 'http://10.6.9.111:4444/wd/hub',
    baseUrl: 'http://10.6.9.111:3000',
    capabilities: {
        'browserName': 'firefox',
        "marionette": true,
        "acceptInsecureCerts": true,
        'moz:firefoxOptions': {
            "binary": 'C:\\Program Files\\Mozilla Firefox\\firefox.exe',
            "prefs": {
                'dom.webnotifications.enabled': false
            }
        },
        "ignoreProtectedModeSettings": true
    },
    framework: 'jasmine',
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        includeStackTrace: true,
        defaultTimeoutInterval: 1440000
        //defaultTimeoutInterval: 144000000  // *****   USE THIS TIMER WHEN RUNNING THE E2E Tests!!!!!
    },
    specs: ['sample_spec.js'],
    params:{
        url:"http://10.6.9.111:3000",
    },
    onPrepare:async() => {
        await browser.waitForAngularEnabled(false);
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmloutput'
        }));
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                // displayStacktrace: true,
                // displayDuration: true,
                // displayFailed: true,
                // displayPending: true,
                // displaySuccessful: true
            }
        }));
    },
    allScriptsTimeout: 15000,
       SELENIUM_PROMISE_MANAGER: false,

  }