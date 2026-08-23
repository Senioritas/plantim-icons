# syntax=docker/dockerfile:1.7

FROM node:22.18.0-bookworm-slim

WORKDIR /workspace
ENV CI=true \
    NPM_CONFIG_AUDIT=false \
    NPM_CONFIG_FUND=false \
    NPM_CONFIG_LOGLEVEL=error

# npm 11.12.1 is the repository's declared package-manager version and keeps
# local Docker validation aligned with the release workflow.
RUN npm install --global npm@11.12.1

# Copy manifests first so dependency installation remains cacheable.
COPY package.json package-lock.json ./
COPY design-tokens/package.json design-tokens/package.json
COPY packages/plantim-icons/package.json packages/plantim-icons/package.json
RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts

COPY . .

# Fail the image build if generated adapters, registry metadata, package API,
# or galleries are stale. The same command is also the container entrypoint.
RUN npm run icons:validate:node && npm run gallery:build

CMD ["npm", "run", "icons:validate:node"]
