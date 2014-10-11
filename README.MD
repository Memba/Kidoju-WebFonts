# Kidoju Web Fonts

>  Some icons we needed for the Kidoju platform.

## Why Kidoju Web Fonts?

- Because of high density (retina) displays, we have decided to use font icons for all small monochrome icons displayed in menus and buttons (we use SVG otherwise);
- At some point we were loading [bootstrap glyphicons](http://getbootstrap.com/components/#glyphicons) and [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
to only display a few icons, which is far from optimal.
- We wanted our font icons to match the style of our SVG polychrome icons so we have licensed [IconExperience.com O-Collection](http://www.iconexperience.com/o_collection/).

## Tools to convert SVG files into Web Fonts

There are [online and offline tools](http://www.queness.com/post/14873/19-most-useful-font-face-generators-for-converting-fonts-to-web-safe-fonts).
Amongst the online tools, the most comprehensive seems to be [Icomoon](https://icomoon.io/). They also have a browser app. Although there are [scripts](http://fontcustom.com/),
often based on [Fontforge](http://fontforge.org/), we have turned to grunt tasks and we have evaluated:

- [grunt-fontsmith](https://github.com/twolfson/grunt-fontsmith) which uses icomoon.io;
- [grunt-webfont](https://github.com/sapegin/grunt-webfont) which is uses fontforge on OSX and a custom node engine on windows.

We have settled on [grunt-webfont](https://github.com/sapegin/grunt-webfont) for its architecture, developer commitment, reviews and much richer options.

## Preparing SVG icons for processing with grunt-webfont

The conversion of the O-Collection SVG icons [initially failed](https://github.com/sapegin/grunt-webfont/issues/191) with all platforms cited above.
It seems these tools do not like the width and height of 1024px with a viewBox of 0 0 10240 10240.

All files have to be opened in Adobe Illustrator and **saved as** to be fixed. In the SVG Options dialog,
click **More Options** and uncheck **Responsive** as described [here](https://forums.adobe.com/message/6092196).

![Adobe Illustrator SVG Options](https://forums.adobe.com/servlet/JiveServlet/downloadImage/2-6092196-546222/450-577/Screen+Shot+2014-01-16+at+5.27.49+AM.png)

Some files like add.svg, alarm_clock.svg, find-again.svg, home.svg, question.svg, ... miss cutout details when converted as fonts.
These details are displayed in browsers but not displayed in Adobe Illustrator either. To reveal these details:

1. Open the SVG file in Adobe Illustrator CC 2014 and show the **Pathfinder** window: menu Window -> Pathfinder or Shift+Ctrl+F9
2. Select one such detail in Adobe Illustrator
3. In the contextual menu select **Release Compound Path**
4. Click the outer shape (black) and shift click the detail (inner shape, also black)
5. In the Pathfinder window, click the **exclude** icon (the inner shape is now white)
6. The detail is revealed (inner shape cut out from black outer shape).

In some instances, the artboard needs to be resized (1024px x 1024px) which can be achiveed through **Document Setup** then press **Esc** to exit the artboard. 
Then the icon needs to be aligned (horizontally and vertically) to the artboard. To achieve that, the align window (menu Window --> Align or Shift+F7)
has an align tool at the bottom right corner which offers the option to **Align to artboard**. Toggle the double-arrow button on the Align tab to display teh Align tool.

### Use of generated web fonts

- http://www.fontspring.com/blog/smoother-rendering-in-chrome-update
- http://www.fontspring.com/blog/fixing-ie9-font-face-problems
- http://www.fontspring.com/blog/further-hardening-of-the-bulletproof-syntax
- http://www.fontspring.com/support/installing_webfonts/font-face-bugs

## Origin of icons and licensing

All icons except social sharing icons are licensed from [Incors](http://www.iconexperience.com/o_collection/license/).
Social sharing icons are licensed from [@iconmonstr](http://iconmonstr.com/license/)

Copyright (c) 2014-2015 Memba Sarl. All rights reserved.