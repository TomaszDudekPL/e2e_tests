# End to End Testing
## Project of testing BBlog

### Main idea:

The main goal of this project is focus on testing user interface and cover main operations: create, read, update, delete (CRUD).

**Strategy:**

Performance of the most common actions on the user interface.
Generally as ***method of isolation*** in tests should be use creation new user account before all use cases and deletion this account after testing.
For this project is prepared only one user account for all tests:  
login: **tdkontakt@gmail.com**  
password: **test1234**

"**Articles**" is functionality I have chosen to covered by automated tests.

### Technical description:
Tests are based on version 6 of WebdriverIO (js framework) and need NodeJS in version minimum 12 to work.
Full documentation of WebdriverIO v6 is [here](https://v6.webdriver.io/).

## How to start tests
### Requirements
I. Installed globally on a local computer:
1. NodeJS v12 (is recommended to use Node Version Manager to switch between versions)
2. Chrome browser.

Next:

II. Clone repository: https://github.com/TomaszDudekPL/e2e_tests.git

III. Install dependencies: ```npm install```

IV. Run all tests using command: ```npm start```

## Tests result report generating

After each run of tests the history of results is collected and stored. It can be visualised as html Allure Raport with full video documentary.
It is placed in ```allure-report``` directory and can be used by outer service to observe results in a timeline. 


## Use cases for current project (all: for manual and automated testing):

#### ARTICLES (covered by automated tests):
```
Suite 1:
Scenario (positive): CRUD

uc01: Create a new article.
        BEFORE: User should be able to create new article.
        STEP 1: Log-in as user A.
        STEP 2: Create new post.
        ASSERT: Article is created: title is correct.
        ASSERT: Article is created: main content is correct.
        STEP 3: Get url to article.
        STEP 4: Go to global feed.
        ASSERT: First article in feed has proper title.
        ASSERT: First article in feed has proper "About" description.
        ASSERT: First article in feed has proper "Author" description.     
        END: User is able to create and publish new article.

uc02: Get created article (use url to article).
        BEFORE: User should be able to open created in previous step article.
        STEP 1: Log-in as user A.
        STEP 2: Use link to previously created article.
        ASSERT: Article is open: title is correct.
        ASSERT: Article is open: main content is correct.
        END: User is able to get previously created article.

uc03: Update created article (use url to article).
        BEFORE: User should be able to change article`s content (update).
        STEP 1: Log-in as user A.
        STEP 2: Use link to previously created article.
        STEP 3: Edit article content: main content and title.
        ASSERT: Article is edited: title is correct.
        ASSERT: Article is edited: main content is correct.
        STEP 4: Go to global feed.
        ASSERT: First article in feed has proper title: changed.
        ASSERT: First article in feed has proper "About" description (not changed).
        ASSERT: First article in feed has proper "Author" name (not changed).
        END: User is be able to change article`s content (update it).

uc04: Delete created article (use url to article).
        BEFORE: User should be able to delete his article.
        STEP 1: Log-in as user A.
        STEP 2: Use link to previously created article.
        STEP 3: Delete article.
        ASSERT: Article preview body is not available after deletion.
        STEP 4: Use link to user`s profile to section MY ARTICLES.
        ASSERT: Article preview body is not present in MY ARTICLES section.
        END: User is able to delete his article.
```

```
Suite 2: (not covered by automated tests)
Scenario (negative): CDR

uc01: Create a new article (get url to article).
uc02: Delete created article (use url to article).
uc03: Try to get (read) deleted article (use url to article).

```

```
Suite 3: (not covered by automated tests)
Scenario (positive): CRR

uc01: Create a new article (get url to article).
uc02: Get created article (use url to article).
uc03: Get an again previously created article (use url to article).
```

#### COMMENTS:

```
Suite 1:
Scenario (positive): CRD

uc01: Create comment on article (get url to article's comment).
uc02: Get created comment (use url to article's comment).
uc03: Delete created comment (get url to article's comment).

```

```
Suite 2:
Scenario (negative): CDR

uc01: Create comment on article (get url to article's comment).
uc02: Delete created comment (use url to article's comment).
uc03: Get comment which was previously deleted (use url to article's comment).

```

#### PAGINATED LISTS OF ARTICLES:

```
Suite 1:
Scenario (positve):

uc01: Get first list of articles (get url to first page of articles).
uc02: Get second list of articles (get url to second page of articles).
uc03: Get next list of articles.
uc04: Get previous list of articles.
uc05: Get last list of articles.
uc06: Get start list (first page) of articles.
uc07: Get second list of articles (use url to second page of articles).
uc08: Get first list of articles (use url to first page of articles).

```

#### FAVORITES ARTICLES:

```
Suite 1:
Scenario (positve):

uc01: Add random three articles to favorites.
uc02: Get favorites articles.
uc03: Delete one article from list of favorites.
uc04: Add next two random articles to favorites.
uc05: Get upadted list of favorites articles.
uc06: Delete all favorites articles.

```

#### FOLLOW OTHER USERS:

```
Suite 1:
Scenario (positive):

uc01: Follow random three users.
uc02: Get list of followed users.
uc03: Remove one user from the list of followed.
uc04: Delete whole list of followed users.

```
