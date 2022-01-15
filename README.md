# Holding

![GitHub last commit](https://img.shields.io/github/last-commit/PixelsMatter/holding?color=%23560bad)
![GitHub repo size](https://img.shields.io/github/repo-size/PixelsMatter/holding?color=%23560bad)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/PixelsMatter/holding/Lighthouse%20CI?color=%23560bad)

Holding pages for [pixelsmatter.io](https://pixelsmatter.io) which use the [PixelsMatter Gatsby Starter](https://github.com/PixelsMatter/gatsby-starter).


**Project Status:** Active

**Deployment:** [Netlify CI/CD](https://app.netlify.com/sites/pixelsmatter-holding/overview)

## Requirements

* [Node v14.17.4](https://nodejs.org/en)
* [Gatsby CLI v3.12.0](https://www.npmjs.com/package/gatsby-cli)

## Installation

Run the following from the project root directory:

 1. `npm i`
 2. `gatsby develop` (Local) or `gatsby build && gatsby serve` (Production)
 7. Visit relevant URL specified in the Environments section

## Scripts

| Command   | Description                                  |
| --------  | -------------------------------------------- |
| `build`   | Builds the site for production               |
| `develop` | Starts the local development server          |
| `start`   | Starts the local development server          |
| `format ` | Formats code using Prettier                  |
| `serve`   | Serves the production build                  |
| `clean`   | Clears the `.cache` and `public` directories |

## Environments

|Name|URL|
|--|--|
| Local | [http://localhost:8000](http://localhost:8000) |
| Staging | N/A |
| Production (Netlify) | [https://pixelsmatter.io](https://pixelsmatter.io) |
