FROM node:20-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /app

COPY ./backend/package*.json ./
RUN npm ci

COPY --chown=node:node ./core /app/core

COPY --chown=node:node ./backend /app/backend

RUN cd backend && \
    npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/backend/package*.json ./
COPY --from=builder --chown=node:node /app/backend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/backend/dist/ ./dist/
COPY --from=builder --chown=node:node /app/backend/prisma/ ./prisma/


CMD ["node", "dist/backend/src/main.js"]