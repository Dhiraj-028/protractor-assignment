/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    baseUrl: 'https://www.anz.com.au/',
  
    capabilities: {
        browserName:'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--disable-gpu', '--start-maximized'],
            useAutomationExtension: false
        }
    },
  
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
      './src/feature/calculator.feature',
      './src/feature/startover.feature',
      './src/feature/errorvalidation.feature'
           // Specs here are the cucumber feature files
    ],
  
    // cucumber command line options
    cucumberOpts: {
      require: ['./src/step_definition/common.step.ts'],  // require step definition files before executing features
      strict: true,                  
      format: [],            
      'dry-run': false,              
      compiler: 'ts:ts-node/register'               
    },
  
   onPrepare: function () {
    browser.waitForAngularEnabled(false);
     require('ts-node').register({
       project: 'e2e/tsconfig.e2e.json'
     });

     browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };