# Use an official node runtime as a parent image
FROM node:8

WORKDIR /app/frontend

# Copy code
COPY . /app/frontend

#install dependencies
RUN yarn
RUN yarn build

EXPOSE 3000

CMD yarn start --port ${PORT:3000}
