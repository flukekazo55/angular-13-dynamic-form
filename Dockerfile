FROM nginx:alpine
COPY ./dist/simple-form ./usr/share/nginx/html
