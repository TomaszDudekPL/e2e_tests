import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('Articles.', () => {

  const details = {
    userLogin: 'tdkontakt@gmail.com',
    userPassword: 'test1234',
    postTitle: 'Article title',
    editedPostTitle: 'Article title is changed!',
    postMainContent: 'First article is created',
    editedPostMainContent: 'First article content is changed!',
    postAbout: 'About article',
    postHashtag: 'myhashtag',
    postAuthor: 'tomasz'

  }

  let urlToCreatedArticle = '';

  beforeEach(() => {
    LoginPage.open('#/login');
  })

  afterEach( () => {
    browser.reloadSession();
  })

    it('Create new article.', () => {

      // BEFORE: User should be able to create new article.

      // STEP 1: Log-in as user A.
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
      // ASSERT: First article in feed has proper "Author" name.
      expect(HomePage.article_preview_first_in_feed_author).toHaveTextContaining(details.postAuthor);

      // END: User is able to create and publish new article.

    });

    it('Get created article.', () => {

      // BEFORE: User should be able to open created in previous step article.

      // STEP 1: Log-in as user A.
      LoginPage.login(details.userLogin, details.userPassword);

      // STEP 2: Use link to previously created article.
      browser.url(urlToCreatedArticle);

      // ASSERT: Article is open: title is correct.
      expect(HomePage.article_page_view_title).toHaveTextContaining(details.postTitle);
      // ASSERT: Article is open: main content is correct.
      expect(HomePage.article_page_view_main_content).toHaveTextContaining(details.postMainContent);

      // END: User is able to get previously created article.
    })

     it('Update created article.', () => {

       // BEFORE: User should be able to change article`s content (update).

       // STEP 1: Log-in as user A.
       LoginPage.login(details.userLogin, details.userPassword);

       // STEP 2: Use link to previously created article.
       browser.url(urlToCreatedArticle);

       // STEP 3: Edit article content: main content and title.
       HomePage.editArticle(details);

       // ASSERT: Article is edited: title is correct.
       expect(HomePage.article_page_view_title).toHaveTextContaining(details.editedPostTitle);
       // ASSERT: Article is edited: main content is correct.
       expect(HomePage.article_page_view_main_content).toHaveTextContaining(details.editedPostMainContent);

       // STEP 4: Go to global feed.
       HomePage.navigateToHomeView();
       HomePage.getGlobalFeed();

       // ASSERT: First article in feed has proper title: changed.
       expect(HomePage.article_preview_first_in_feed_title).toHaveTextContaining(details.editedPostTitle);
       // ASSERT: First article in feed has proper "About" description (not changed).
       expect(HomePage.article_preview_first_in_feed_description).toHaveTextContaining(details.postAbout);
       // ASSERT: First article in feed has proper "Author" name (not changed).
       expect(HomePage.article_preview_first_in_feed_author).toHaveTextContaining(details.postAuthor);

       // END: User is be able to change article`s content (update it).

     });

});


