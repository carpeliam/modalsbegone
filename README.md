# Be Gone, Ye Modals!

Modals. You've seen 'em, you've closed 'em. Sometimes you can't even find out how to close them, or maybe they're so insideous, they're *uncloseable*. Well, until now.

Close those modals. On your own terms.

Because this modal sucks, and you don't. In fact, you probably rock, so hard that you don't have time to be closing them modals.

![modal window example](https://66.media.tumblr.com/003df5abbb6b33410abec1171d1c26c7/tumblr_pcuk4wMyZR1vp76kuo1_1280.pnj "No thanks, I don't care what my cat eats.")

## But how does it work?

Did you know it costs $5 to get a Google Developer Account, and submit an extension to the Chrome Web Store? I didn't. In the meantime, this is how you can get this modal-closing goodness in your **own** Chrome browser without having to wait for me to save me pennies:

1. Clone this repository
2. `yarn install --prod` (leave off the `--prod` if you want to run tests and the like)
3. `yarn build`; this should produce a `dist/` directory with a `manifest.json` and other such goodies
4. Go to [your extensions](chrome://extensions/)
5. Toggle "Developer mode" on the top right
6. Click on the "Load unpacked" button that just showed up
7. Navigate to and select the `dist/` directory you just built in step 3
8. This is the hard part. *Navigate to a website with a modal window.* It'll be painful, but it's gonna be ok.
9. Click that new shiny ![chrome icon](icons/icon16.png "Chrome Icon") icon in your Chrome toolbar, and watch that modal window disappear!

## ...This is not terrible. Or maybe it is.

❤️ feedback. Doesn't work on some site? Got some ideas? [Create an issue on GitHub](https://github.com/carpeliam/modalsbegone/issues), or yell at me on the internets.
