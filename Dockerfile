FROM node:18.17.1
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node . .
RUN yarn install && yarn build && yarn cache clean
EXPOSE 8080
CMD ["node", "dist/src/main"]
