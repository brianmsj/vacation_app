# Virtual Vacay 

An App that allows you take a <a href='https://calm-shore-18628.herokuapp.com/'>virtual vacation</a> wherever you are.

## Overview

<a href='https://calm-shore-18628.herokuapp.com/'>Virtual Vacay</a> will allow the user to search for a location of their choosing and view a high definition
video along with a Soundcloud embedded track. The user also has the option to add their own vacation with a YouTube 
video of their choice and a SoundCloud embedded track. 

Disclaimer: This project is mainly built for learning purposes and not intended for production use.

## Installation
```
>   git clone https://github.com/brianmsj/vacation_app.git
>   cd vacation_app
>   npm install
```
### Launching
```
>   npm run dev
```
Then open [`localhost:8000`](http://localhost:8000) in a browser.
### Testing
```
>   npm run test
```
Note on compatibility: The API relies on NodeJS v6.3.1.  All other dependencies are listed in the _package.json_ file. Although the API might run on alternative versions, it has not been tested.

## About
Today, Americans and people around the world are working more hours for less pay. People in 2017 are taking about 30% less vacation time than people did back in 1980. In fact, a recent articles from <a href=http://www.npr.org/sections/health-shots/2016/07/12/485606970/overworked-americans-arent-taking-the-vacation-theyve-earned>NPR</a> said less vacation is equalling less happiness overall in peoples lives. In the past, workers have used a variety of techniques to escape the day such as medidation or yoga. But, what if you do not have enough time during your busy day for one of these techniques? Wouldn't you want to take an instant vacation right on your computer monitor while in the office? With Virtual Vacay now you can take a variety of quick, easy, instant virtual vacations and be back for the 2PM Ops meeting in no time.

## How it Works
Users are requested to login. You are able to login as a guest or using a simple google sign in which will take some small bits of data from google such as name and e-mail. Once logged in, you will be prompted to enter a search for a country or location of your choosing. You will then be taken to the location of your choice via Video and hear sounds of that location with our embedded SoundCloud feature. Although the video is embedded from YouTube and the audio is embedded from SoundCloud, the files were handpicked and carefully edited to provide the user with a seamless experience. If you are unable to find a particular video or song in our database, feel free to click on the "All Vacations" button at the top left of the screen. From there, you will link to a page that list all of the vacations in our database. On the left navigation bar, you will see a button where you can add your own personal vacation using easy to embed YouTube and SoundCloud links.

### Caveat
Due to the experimental design of the application and the inability of mobile devices to autoload video and audio media, we recommend you view this technology on a larger viewport with a fast connection that can fully immerse you in the virtual vacation experience.

## Technology
* HTML5
* CSS3
* JavaScript
* React
* Redux
* React-Router
* <a href="https://mochajs.org/">Mocha</a> + <a href="http://chaijs.com/">Chai</a> (testing)


### API
* YouTube
* SoundCloud
