/**
 * Description - Uses jQuery to make IPS 4's default theme's navbar fixed when you scroll down past the header on the page. Using for The Modding Community!
 * Author - Christian Deacon (@gamemann)
 * Open Source - https://github.com/modcommunity/Web-Open-Source
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

var header_height;

if (header)
{
    header_height = header.height();
}

if (header_height < 1)
{
    // Header height in pixels.
    header_height = 80;
}

// Navbar max height in pixels.
navbar_maxheight = navbars.first().height();

if (navbar_maxheight < 1)
{
    navbar_maxheight = 52;
}

// Fixed transparently.
var unfixed_opacity = 0.7;
var fixed_opacity = 1.0;

// Check to see if we should just add a custom class to the navbar.
if (nav_addclass.length > 0)
{
    navbars.addClass(nav_addclass);
}
else
{
    // Set general navbar settings for fixed support.
    navbars.css('z-index', '100');
    navbars.css('width', '100%');
    navbars.css('top', '0px');
    navbars.css('left', '0px');
}

navbars.css('max-height', navbar_maxheight);

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

// Position (Y).
var pos = 0;

// Loop through the full window's scroll events.
$(window).scroll(function(e)
{
    // If the navbar is hidden, return so it doesn't impact mobile devices.
    if (navbars.first().is(":hidden"))
    {
        // If our margin (bottom) is more than 0px, this indicates a user went from desktop to mobile theme. So set back margin bottom.
        var margin = header_layout.css('margin-bottom');

        if (margin && parseInt(margin) > 0)
        {
            header_layout.css('margin-bottom', navbar_maxheight);
        }

        return;
    }

    // Retrieve current Y position.
    pos = window.scrollY;

    // Check if we're under the header or not.
    if (pos > header_height && !fixed)
    {
        if (fix_class.length < 1)
        {
            navbars.css('background', 'rgba(var(--theme-main_nav), ' + fixed_opacity + ')');
            navbars.css('position', 'fixed');
        }
        else
        {
            navbars.addClass(fix_class);
            navbars.removeClass(unfix_class);
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
            navbars.css('background', 'rgba(var(--theme-main_nav), ' + unfixed_opacity + ')');
            navbars.css('position', 'relative');
        }
        else
        {
            navbars.addClass(unfix_class);
            navbars.removeClass(fix_class);
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

$(window).resize(function()
{
    if (navbars.first().is(":visible"))
    {
        return;
    }

    // If our margin (bottom) is more than 0px, this indicates a user went from desktop to mobile theme. So set back margin bottom.
    var margin = header_layout.css('margin-bottom');

    if (margin && parseInt(margin) > 0)
    {
        header_layout.css('margin-bottom', '0px');
    }
});