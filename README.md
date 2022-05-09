

# CoreComponents

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Repo structure

The repo contains the following:  
* apps/core-components-app: An Angular consumer application
* libs/core-components: A Stencil component library
* libs/core-components-angular: Generated Angular-wrappers (derived from the Stencil library)

## (Terminal 1) Build the Stencil library

Run `nx build core-components --watch` to build and watch for changes to the stencil library. The library is configured to output angular wrappers for the angular consumer application.

## (Terminal 2) Serve the consuming Angular application

Run `nx serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
