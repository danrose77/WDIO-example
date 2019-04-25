import Page from './Page'

class Environment extends Page {
  openBaseURL() {
    // const yaml = require('js-yaml');
    // const fs   = require('fs');
    // const environmentFile = yaml.load(fs.readFileSync('./src/data/environment.yml', 'utf8'));
    // const environment = environmentFile.environmentURL;
    browser.url('/');
  }
}

export default new Environment();
