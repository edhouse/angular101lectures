import { FormappPage } from './app.po';

describe('formapp App', () => {
  let page: FormappPage;

  beforeEach(() => {
    page = new FormappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
