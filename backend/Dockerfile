FROM node:16
WORKDIR /app
COPY package.json .
RUN yarn
COPY . /app
EXPOSE 5000
CMD ["yarn","start"]