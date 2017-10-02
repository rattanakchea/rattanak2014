import { RattanakCheaNg4Page } from './app.po';

describe('rattanak-chea-ng4 App', function() {
  let page: RattanakCheaNg4Page;

  beforeEach(() => {
    page = new RattanakCheaNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
