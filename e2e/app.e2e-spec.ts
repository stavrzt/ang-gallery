import { NgGalleryPage } from './app.po';

describe('ng-gallery App', () => {
  let page: NgGalleryPage;

  beforeEach(() => {
    page = new NgGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
