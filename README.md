
Features
--------

* Create a microsite that displays music albums, and a detail view for each album
* Consume the iTunes API to get a list of albums to display, eg: (https://itunes.apple.com/search?term=Beatles&entity=album)
* In case you need additional API calls, have a look at the API docs at [https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
* Your layout should be responsive. Lay out items in a grid for desktop (see `itunes-desktop.png`), and in a list for smaller displays (see `itunes-mobile.png`).
* Upon clicking on an album, its details should be displayed. 
* In the details view, at least album cover, title, and track list should be included. Feel free to add additional information as you like.
* Make the list of albums sortable and filterable by title (client side).
* When you are in the details view of an album and hit "refresh" you should see the same details as before.

Prerequisites
----------------------

* Use Angular (not Angular JS) to implement the frontend.
* Use Sass/SCSS for styles.
* For the scope of this case study, it's good enough if the site displays correctly in a single, modern browser (eg. Chrome, Firefox, Edge, etc.). Please document which one you have been using during development.
* Add a `readme`-file to your project, and include these notes as well as your own.

Bonus points
------------
* unit tests, where they make sense
* transitions, animation
* web fonts


Implementation details
======================

Development server
------------------
* Use `npm install` and then `npm start` (or run `ng serve`) for a dev server.
* Navigate to `http://localhost:4200/`.


Development environment
-----------------------
* Angular Cli - version 1.7.3
* Google Chrome - version 65.0

Adaptive/Responsive layout
--------------------------
* Layout for both views (Albums list and Album details) is adaptive with 3 break-points (mobile, tablet and desktop).
* Albums list view has grid layout for tablet and desktop and vertical list layout for mobile. In mobile mode the list has sorting and filtering features.
* Album details view contains cover, album name, artist name and list of tracks. Depending on screen width the cover changes its size.


PS
=====
That is my first Angular 2+ application so thanks a lot for given opportunity to get acquainted with a framework! 
