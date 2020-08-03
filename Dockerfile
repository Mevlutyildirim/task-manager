FROM node:alpine
WORKDIR '/app'
COPY client .
RUN yarn install 
COPY server .
RUN yarn install