[![Netlify Status](https://api.netlify.com/api/v1/badges/2b1ef0a4-d88f-43ad-93a3-a3fb742a5563/deploy-status)](https://app.netlify.com/sites/aesir-website/deploys)

![Build Status](https://travis-ci.org/eweilow/aesir-website.svg?branch=master)

# ÆSIR Website

This is the old website of ÆSIR - Association of Engineering Students in Rocketry.

## Requirements to run

To run this project, the following dependencies are needed:

- [node.js](https://nodejs.org/)
- [yarn](https://yarnpkg.com/)

## Development

Development is done by first installing all dependencies in the directory where the repository was cloned:

```bash
~/your-dir/aesir-website> yarn
```

Then, starting a development server is as simple as:

```bash
~/your-dir/aesir-website> yarn start
```

The console will output something similar to

```bash
~/your-dir/aesir-website> yarn start
...
=> [✓] App serving at http://localhost:3000
...
```

This is the URL where the dev server have started.

## Deployment

Deployment is done automatically with Netlify on all pull requests and on commits to `master`.
