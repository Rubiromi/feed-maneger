import { FeedManegerPage } from './app.po';

describe('feed-maneger App', function() {
  let page: FeedManegerPage;

  beforeEach(() => {
    page = new FeedManegerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
