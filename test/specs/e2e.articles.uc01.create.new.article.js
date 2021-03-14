import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('Articles.', () => {

  const details = {
    userLogin: 'tdkontakt@gmail.com',
    userPassword: 'test1234',
    postTitle: 'Article title',
    postMainContent: 'First article is created',
    postAbout: 'About article',
    postHashtag: 'myhashtag',
    postAuthor: 'tomasz'

  }

  let urlToCreatedArticle = '';

    it('Create new article.', () => {

      // BEFORE: User should be able to create new article.

      // STEP 1: Log-in as user A.
      LoginPage.open('#/login');
      LoginPage.login(details.userLogin, details.userPassword);

      // STEP 2: Create new post.
      HomePage.createNewPost(details);

      // ASSERT: Article is created: title is correct.
      expect(HomePage.article_page_view_title).toHaveTextContaining(details.postTitle);
      // ASSERT: Article is created: main content is correct.
      expect(HomePage.article_page_view_main_content).toHaveTextContaining(details.postMainContent);

      // STEP 3: Get url to article.
      urlToCreatedArticle = browser.getUrl();

      // STEP 4: Go to global feed.
      HomePage.navigateToHomeView();
      HomePage.getGlobalFeed();

      // ASSERT: First article in feed has proper title.
      expect(HomePage.article_preview_first_in_feed_title).toHaveTextContaining(details.postTitle);
      // ASSERT: First article in feed has proper "About" description.
      expect(HomePage.article_preview_first_in_feed_description).toHaveTextContaining(details.postAbout);
      // ASSERT: First article in feed has proper "Author" description.
      expect(HomePage.article_preview_first_in_feed_author).toHaveTextContaining(details.postAuthor);

      // END: User is able to create and publish new article.

    });
});


