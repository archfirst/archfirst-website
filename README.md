Archfirst Website
=================

Dev Build
---------
Use Node version 10.24.1

```bash
$ yarn
$ yarn develop
```

Now point your browser to http://localhost:8000/.

Production Build
----------------
Use firebase-tools version 6.12.0:

```shell
npm install -g firebase-tools@6.12.0
```

```bash
$ yarn build
$ firebase deploy
```

This creates the build in the `public` folder and deploys it on firebase.
