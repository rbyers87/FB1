# PWA Converter

    This project converts a Safari-compatible website into a Progressive Web Application (PWA).

    ## Features

    -   Dark mode support based on system preferences.
    -   Offline capabilities via service worker.
    -   Manifest file for PWA installation.
    -   Pure HTML, CSS, and JavaScript for GitHub Pages compatibility.

    ## Setup

    1.  Clone this repository to your local machine.
    2.  Open the `index.html` file in your browser to test the PWA locally.

    ## Hosting on GitHub Pages

    1.  Create a new repository on GitHub.
    2.  Push the contents of this project to the repository.
    3.  Go to your repository settings, navigate to the "Pages" section.
    4.  Under "Source," select the `main` branch (or the branch you pushed to) and the `/root` folder.
    5.  Click "Save."
    6.  Your PWA will be available at `https://<your-username>.github.io/<your-repo-name>`.

    ## Enabling Dark Mode Support

    -   Dark mode is automatically enabled when the user's system is set to dark mode.
    -   No additional configuration is needed.

    ## Icons

    -   Place your icons in the root directory with the names `icon-192x192.png` and `icon-512x512.png`.
    -   Update the `manifest.json` file with the correct paths if needed.

    ## Service Worker

    -   The service worker is located in `service-worker.js`.
    -   It caches the necessary files for offline use.

    ## Comments

    -   The code includes comments to guide you through the deployment process.
