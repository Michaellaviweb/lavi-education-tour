Razzle might be able to support SCSS with webpack, but has some configuration troubles.
https://gist.github.com/paramaggarwal/e459f177eba98b67c2fa7f26a202d146 & the fix is poorly documented.

Sass can be used like this


# SCSS folder
To compile style.css from SCSS:
- Install (ruby gems) sass & compass
- compile .scss files into one file style.css
- copy style.css to css
- copy investor.css to css

## Plugins folder
For overriding default css from a plugin.

## Install SCSS
https://sass-lang.com/install
https://sass-lang.com/documentation/file.SASS_REFERENCE.html

## Watch commands (live-reloading)
Whole folder (recommended) `sass --watch scss:css`
