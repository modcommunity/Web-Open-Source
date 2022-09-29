# Open-Source Web Files
## Description
All open-source web files [The Modding Community](https://moddingcommunity.com) is able to provide.

Want to become a part of something awesome? Help us take modding to the next level @ [ModdingCommunity.com](https://moddingcommunity.com)!

## Showcase
### September 28th, 2022
<a href="https://moddingcommunity.com/" target="_blank"><img src="images/tmc-web-9-28.gif" data-canonical-src="images/tmc-web-9-28.gif" /></a>

## Files
### Fixed Navbar
**Files** - `js/fixed_navbar.js` and `css/fixsed_navbar.css`.  
**Credits** - Christian Deacon ([@gamemann](https://github.com/gamemann))

Written in JavaScript utilizing jQuery. When the user scrolls down and past the header, it makes the navbar fixed with a non-transparent background. The defaults in this application assume you're using IPS 4, but could easily be modified to do it anywhere.

### Background Slideshow
**Files** - `js/background_slideshow.js`.  
**Credits** - Christian Deacon ([@gamemann](https://github.com/gamemann))

Written in JavaScript and partially utilizing jQuery. Code was used from Christian's older project, [Browser.TF](https://Browser.TF/). Basically applies a random background image to a divider with the ID `#bgimg`. You should have `<div id="bgimg"></div>` and/or `<div id="bgol"></div>` (if you want to add transparently). The CSS code could look something like the following.

```css
#bgol 
{
    top:0;
    left:0;
    width:100%;
    height:100%;
    position:fixed;
    z-index:-100;
    background:rgb(0 24 24/85%);
}

#bgimg 
{
    background-size:cover;
    top:0;
    left:0;
    z-index:-200;
    width:100%;
    height:100%;
    position:fixed;
}
```