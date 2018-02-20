[&copy;  2018 Dan Lindsey](https://mdlindsey.com)
[Fork this project on GitHub](https://github.com/sisyn/react-portfolio-template)

# React Portfolio Template
## Based on a design by [Xiaoying Riley](http://themes.3rdwavemedia.com/)

###Step 1
Install [`create-react-app`](https://github.com/facebookincubator/create-react-app) with [`npm`](https://www.npmjs.com/) with the following command.
```
npm install create-react-app
```
###Step 2
Unzip the contents to a destination folder of your choice. Once unzipped, run the following commands in the terminal. Note that `npm install` will take a bit as it installs quite a few packages.
```
cd /path/to/your/unzipped/dir
npm install
npm start
```

This will initiate a development server on port 3000 by default. It will usually spawn a browser window to this address upon boot, but if it doesnt, visit [localhost:3000](http://localhost:3000).

###Step 3
After you're finished saving your changes and you're ready to use this template on your server, exit the `npm start` module by using `Ctrl + C` and issue the following command.
```
npm run build
```

This will take around one minute in most cases and you will notice a `build` folder in your unzipped directory location. Take the contents of this folder and upload them to your server.

That's it! Your React app is now running with a single minified HTML file.