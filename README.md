# textEditorPWA
[![License: MIT](https://img.shields.io/apm/l/vim-mode?color=orange&style=for-the-badge.svg)](https://opensource.org/licenses/MIT)

## Table of contents
- [Description](#description)
- [License](#license)
- [UserStory](#userstory)
- [Usage](#usage)
- [Model](#model)


## Description
# What is the app for?
A text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline. 

Packages included are: `idb`

- Deployed to Heroku: 

## License
This project is available under the MIT license. Visit [License: MIT](https://opensource.org/licenses/MIT) for full license text


## UserStory
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```
| When | Then | 
| ------------- |:-------------:| 
|<del> WHEN I open my application in my editor </del> |<del> THEN I should see a client server folder structure  </del>|
|<del> WHEN I run `npm run start` from the root directory </del>|<del> THEN I find that my application should start up the backend and serve the client</del> |
|<del> WHEN I run the text editor application from my terminal</del> |<del> THEN I find that my JavaScript files have been bundled using webpack </del>|
|<del> WHEN I run my webpack plugins </del> | <del> THEN I find that I have a generated HTML file, service worker, and a manifest file </del> |
|<del> WHEN I use next-gen JavaScript in my application </del>|<del> THEN I find that the text editor still functions in the browser without errors</del> |
|WHEN I open the text editor |THEN I find that IndexedDB has immediately created a database storage |
| WHEN I enter content and subsequently click off of the DOM window |THEN I find that the content in the text editor has been saved with IndexedDB |
|WHEN I reopen the text editor after closing it |THEN I find that the content in the text editor has been retrieved from our IndexedDB |
|<del> WHEN I click on the Install button </del> |<del> THEN I download my web application as an icon on my desktop </del> |
|<del> WHEN I load my web application </del> |<del> THEN I should have a registered service worker using workbox </del> |
|WHEN I register a service worker|THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets |
|WHEN I deploy to Heroku |THEN I should have proper build scripts for a webpack application |

