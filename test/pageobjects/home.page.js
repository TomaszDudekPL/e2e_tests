import Page from './page';

class HomePage extends Page {

    get new_post_btn () { return $('ul a[href="#/editor"]') }
    get editor_page () { return $('.editor-page') }
    get title_input () { return $('form input[placeholder="Article Title"]') }
    get about_input () { return $('form input[placeholder="What\'s this article about?"]') }
    get article_text_input () { return $('form textarea') }
    get article_tags_input () { return $('form input[placeholder="Enter Tags"]') }
    get publish_article_btn () { return $('button') }
    get article_page_view () { return $('.article-page') }

    get article_page_view_title () { return $('.article-page .banner h1') }
    get article_page_view_main_content () { return $('.article-page .page .article-content p') }

    get home_nav_link () { return $('ul a[href="#/"]') }
    get homePage () { return $('.home-page') }
    get global_feed_btn () { return $$('.page .nav li')[1] }
    get your_feed_btn () { return $('.page .nav li:nth-child(1)') }

    get article_preview () { return $('div .article-preview') }
    get article_preview_first_in_feed_author () { return $('div .article-preview .author') }
    get article_preview_first_in_feed_title () { return $('div .article-preview h1') }
    get article_preview_first_in_feed_description () { return $('div .article-preview p') }

    get edit_article_btn () { return $('.banner span a') }
    get delete_article_btn () { return $('.banner span button') }


    createNewPost ({ postTitle, postMainContent, postAbout, postHashtag }) {
      logFuncName('cyan');

      this.new_post_btn.click();
      this.editor_page.waitForDisplayed();

      this.title_input.setValue(postTitle);
      this.about_input.setValue(postAbout);
      this.article_text_input.setValue(postMainContent);
      this.article_tags_input.setValue(postHashtag);

      this.publish_article_btn.click();
      this.article_page_view.waitForDisplayed();
      browser.pause(1000);

    }

    navigateToHomeView () {
      logFuncName('cyan');
      this.home_nav_link.click();
      this.homePage.waitForDisplayed();
    }

    getGlobalFeed () {
      logFuncName('cyan');
      this.global_feed_btn.click();
    }

    editArticle ({editedPostTitle, editedPostMainContent}) {
      logFuncName('cyan');
      this.article_page_view.waitForDisplayed();
      this.edit_article_btn.click();
      this.editor_page.waitForDisplayed();

      this.title_input.setValue(editedPostTitle);
      this.article_text_input.setValue(editedPostMainContent);
      this.publish_article_btn.click();
      this.article_page_view.waitForDisplayed();
      browser.pause(1000);

    }

    deleteArticle() {
      logFuncName('cyan');
      this.article_page_view.waitForDisplayed();
      this.delete_article_btn.click();
    }

}

export default new HomePage();
