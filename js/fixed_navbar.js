/**
 * Description - Uses jQuery to make IPS 4's default theme's navbar fixed when you scroll down past the header on the page. Using for The Modding Community!
 * Author - Christian Deacon (@gamemann)
 * 
 * 
 * The Modding Community
 * Taking Modding To The Next Level!
 * ModdingCommunity.com 
**/

/* Configuration */
// If you've made a CSS class, insert it here. Otherwise, the code will manually apply what is needed each time which may slow down browser performance by a small margin.
fix_class = "";
unfix_class = "";
nav_addclass = "";

// Navbar(s) selection.
var navbar_sel = "#ipsLayout_header nav";

// Retrieve elements we need to change for The Modding Community's website.
var navbars = $(navbar_sel);

// Always do error checks :)
if (!navbars)
{
    throw new Error("[TMC Fixed Navbar] Could not find IPS 4 navbars.");
}

// Header selection.
var header_sel = "#ipsLayout_header header";

// Icon image, class, or ID selector.
var icon_sel = "#nav-icon-fixed";

// IPS 4 header layout.
var header_layout = $("#ipsLayout_header");

// If an icon image exist, enablethat.
var icon = $(icon_sel);

// For header height calculation.
var header = $(header_sel);

// Header height in pixels.
header_height = header.height();

// Navbar max height in pixels.
navbar_maxheight = navbars.first().height();

// Check to see if we should just add a custom class to the navbar.
if (nav_addclass.length > 0)
{
    navbars.addClass(nav_addclass);
}
else
{
    // Set general navbar settings for fixed support.
    navbars.css('max-height', navbar_maxheight);
    navbars.css('z-index', '100');
    navbars.css('width', '100%');
    navbars.css('top', '0px');
    navbars.css('left', '0px');
}

// Leaving commented function just because it was somewhat neat.
/*
navbars.each(function(i)
{
    if ($(this).prop("data-controller") != "core.front.core.navBar")
    {
        return;
    }

    navbars.remove($(this));
});
*/

// Fixed toggle variable.
fixed = false;

// Loop through the full window's scroll events.
$(window).scroll(function(e)
{
    // Retrieve current Y position.
    pos = window.scrollY;

    // Check if we're under the header or not.
    if (pos > header_height && !fixed)
    {
        if (fix_class.length < 1)
        {
            navbars.css('position', 'fixed');
            //navbars.css('margin-bottom', '80px');
        }
        else
        {
            navbars.addClass(fix_class);
        }

        if (icon)
        {
            icon.css('visibility', 'visible');
        }

        if (header_layout)
        {
            header_layout.css('margin-bottom', navbar_maxheight * 2); // We times it by two to include the second navbar.
        }

        fixed = true;
    } else if (pos <= header_height && fixed)
    {
        // Revert back to non-fixed navbar.
        if (unfix_class.length < 1)
        {
            navbars.css('position', 'relative');
        }
        else
        {
            navbars.addClass(unfix_class);
        }

        if (icon)
        {
            icon.css('visibility', 'hidden');
        }

        if (header_layout)
        {
            header_layout.css('margin-bottom', '0px');
        }

        fixed = false;
    }
});