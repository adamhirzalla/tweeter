# Tweeter Project

Tweeter is a simple, SPA Twitter clone. This project was built using HTML, CSS, JS, JQuery and AJAX. The goal was to practice and polish my front-end skills. 

This project also uses Node and Express on the back-end side, which was used as a public pre-existing template.

## Features

- Clean, simple, minimalistic design for a SPA
- Rensponsive Design that's compatible with different screen sizes (Fluid Layout Shifter!)
- Patched against XSS injections to assure safe-use
- Header showing User's Name and Avatar
- Navigation bar and a scroll-to-top button to quickly navigate through the page
- A few nice animations to appreciate
- Toggle the Compose-tweet box with a simple slide animation
- Utilize the power of SPAs by firing AJAX requests to avoid page refreshing on new Tweets
- A chronologically sorted Tweets content
- A visible live character count to keep you aware of limit by changing colors (Black-Yellow-Red)
- Clean error message prompt on invalid Tweet entries

## Final Product

- Demo 1 - Tablet Mode:
!["Demo 1 (Tablet Mode)"](https://i.imgur.com/DRpbxPq.gif)

- Demo 2 - Desktop Mode:
!["Demo 2 (Desktop Mode)"](https://i.imgur.com/RnrKRDy.gif)

- Tablet View:
!["Tablet View"](https://i.imgur.com/RnrKRDy.gif)

- Desktop View:
!["Desktop View"](https://i.imgur.com/RnrKRDy.gif)

- Hover effects on Tweets:
!["Hover effects on Tweets"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/empty_urls.png)

- Counter - ApproachingcCharacter limit on Tweet:
!["Counter-yellow"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/urls_page.png)

- Counter - Exceeding limit w/ Error message:
!["Counter-error"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/edit_page.png)

- Error example:
!["Error example"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/edit_page_2.png)

- Scroll-to-top button at bottom-right:
!["Scroll-to-top"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/create_page.png)

- Error page - example 1:
!["Error page - example 1"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/error_page_example.png)

- Error page - example 2:
!["Error page - example 2"](https://github.com/adamhirzalla/tinyapp/blob/master/docs/error_page_example_2.png)

## Dependencies

- Body-Parser
- Chance
- Express
- MD5

## Getting Started

- Install all dependencies (using the `npm i` command).
- Run the development web server using the `npm start` command.
- Navigate to http://localhost:8080/ to get started and start Tweeting!