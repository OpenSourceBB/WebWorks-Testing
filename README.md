One of the amazing thing about WebWorks is the versatility of HTML5. You can buy an expensive WYSIWYG editor, or you can code your documents in the Windows notepad or gedit or any other notepad program. Once the code is written, you can test it in probably hundreds, if not thousands, of browsers.
The WebWorks Testing app is just one more place for you to test your app, and probably one of the final testing spots before you deploy it to your BlackBerry PlayBook or BB10 device.

UPDATE: Because RIM announced that BlackBerry 10 devices will have a screen resolution of 1280x720 (rather than the 1280x768 which the Developer Alpha has), a third version has been added which will display your apps in either 1280x720 or 720x1280. To change the resolution, simply tap the black bar which limits the screen size. Code is included to change the resolution on swipe down or when the device orientation changes, but neither seems to be supported at this time (orientation activated changes have been committed out).

Setup:
Create your testing files. Access the filesystem of your PlayBook or BB10 device, and create a folder called "Testing" in the /misc folder.
Put your html, css, js, etc. files into the Testing folder. WebWorks-Testing requires you to name the file you wish to initially test "index.html" but this can be changed by modifying the config.xml.
Compile the WebWorks Testing source into an app and sideload it. You can also sideload the precompiled .bar if you don't want to compile it.
That's it. You can test your WebWorks apps by just launching the WebWorks Testing app.

Thanks to @N_Adam_Stanley for his excellent Kitchen Sink sample, upon which the (not currently working) orientation switch code is based.

Now availalbe in BlackBerry App World at https://appworld.blackberry.com/webstore/content/103086