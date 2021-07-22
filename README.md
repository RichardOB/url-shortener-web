# url-shortener-web

A React web application that can be used to shorten URLs and retrieve statistics on short URL usages. The url-shortener-api is used to generate and store url and url hashes, as well as query usage statistics.

# Environment Setup

In order to run the URL Shortener Web project you will need to install node and npm.

After installing the above you will need to insatll all project dependencies using npm:

`npm install`

# Running the project using npm

Simply run the following to launch the React app:

`npm start`

The development server will start and the app will be accessile at http://localhost:3000/

# Useful links

- Home page to generate a new short url (using the amazingly styled form): http://localhost:3000/
- Make use of a short url e.g. http://localhost:3000/l/9dJp
- View the statistics of a short url e.g. http://localhost:3000/statistics/9dJp

# Project Concerns / Considerations to address

1. Add navigation menu to more easily navigate to the statistics page

2. Move All API calls to a API Service to neaten up code and introduce more separation of concerns. This would also enable the API domain to be configured so that it is not hard coded to http://localhost:500

3. Styling! Sorry, I would have LOVED to actually style the web to make it look like a production ready tool.

4. Convert Last Visited Date to a better formatted date with the local timezone (not just GMT)

5. Better error handling and error messages

6. A URL Statistics search bar where you can query your actual short url to see the statistics (This will be a much etter user experience).
