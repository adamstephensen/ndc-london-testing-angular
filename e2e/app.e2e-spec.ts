import { NdcLondonTestingAngularPage } from './app.po';

describe('ndc-london-testing-angular App', function() {
  let page: NdcLondonTestingAngularPage;

  beforeEach(() => {
    page = new NdcLondonTestingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
