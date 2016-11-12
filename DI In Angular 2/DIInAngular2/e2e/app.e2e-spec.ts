import { DIInAngular2Page } from './app.po';

describe('diin-angular2 App', function() {
  let page: DIInAngular2Page;

  beforeEach(() => {
    page = new DIInAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
