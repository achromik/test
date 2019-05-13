FROM node:latest

ENV BACKEND_PATH /backend
WORKDIR ${BACKEND_PATH}

EXPOSE 5000

COPY package.json yarn.lock ./
RUN yarn

COPY . .
CMD yarn start

