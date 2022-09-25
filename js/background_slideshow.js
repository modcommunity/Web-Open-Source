/**
 * Description - Background slideshow used by The Modding Community (ModdingCommunity.com!).
 * Author - Christian Deacon (@gamemann)
 * Note - A lot of this code is old and from another project I made, Browser.TF.
 * 
 * 
 * The Modding Community
 * Taking Modding To The Next Level!
 * ModdingCommunity.com 
**/

/* Global variables. */
var g_bRotateInProgress = false;
var g_iLastRotateNumber = -1;
var g_bFirstRotateTime = true;

/* Configurable variables. */
var g_iFadeOutTime = 1.2;	/* Seconds. */
var g_iFadeInTime = 1.2;	/* Seconds. */
var g_iTimer = 30.0			/* Seconds. */

// Fill with array of images.
const g_sImages = [];

/**
 *	Name: rotateBackground();
*	Description: Rotates the background.
*	Sub-functions: callback_FirstFade(), callback_secondFade().
**/
function rotateBackground()
{
    /* A rotation is in progress, set this variable to true! */
    g_bRotateInProgress = true;

    /* First, fade out the background. */
    $('#bgimg').fadeTo((g_bFirstRotateTime) ? 0 : g_iFadeOutTime * 1000, 0.0, callback_FirstFade);
}

/**
 *	Name: callback_FirstFade();
*	Description: Called when the first FadeTo is complete.
*	@return null
**/
function callback_FirstFade()
{
    /* Get a random number between 0 and max range. */
    var i = Math.floor(Math.random() * g_sImages.length);

    /* Ensure the last number isn't the same as the new number. */
    var iAttempts = 0;

    while (g_iLastRotateNumber == i)
    {
        i = Math.floor(Math.random() * g_sImages.length);

        iAttempts++;

        if (iAttempts > 5)
            break;
    }

    /* Copy the global rotation number. */
    g_iLastRotateNumber = i;

    /* Set the background image. */
    $('#bgimg').css('background', "url(" + g_sImages[i] + ")  no-repeat center center fixed");
    $('#bgimg').css('background-size', "cover");

    /* Fade back in. */
    $('#bgimg').fadeTo(g_iFadeInTime * 1000, 1.0, callback_SecondFade);
}

/**
 *	Name: callback_SecondFade();
*	Description: Called when the last FadeTo is complete.
*	@return null
**/
function callback_SecondFade()
{
    if (g_bFirstRotateTime)
    {
        g_bFirstRotateTime = false;
    }

    /* Rotation is no longer in progress. Set the variable back to false. */
    g_bRotateInProgress = false;
}

/* Call the first rotate background. */
$(document).ready(function()
{
    if (!g_bRotateInProgress)
    {
        rotateBackground();
    }
});

/* Set timer to rotate between background images. */
setInterval(rotateBackground, g_iTimer * 1000);