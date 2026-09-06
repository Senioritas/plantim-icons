# Docker validation

The package registry, generated adapters, release governance, package API, and
web gallery can be validated reproducibly in Linux Docker:

```sh
npm run ci:docker:build
npm run ci:docker
```

The image installs the repository's exact npm toolchain (`npm@11.12.1`) and
runs `icons:validate:node` during both image construction and container startup.
GitHub Actions runs the same image on changes to the package repository.

Swift validation remains a separate macOS job because SwiftPM and Xcode are not
available in the Linux image.
