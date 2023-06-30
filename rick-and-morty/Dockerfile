FROM node
WORKDIR /app
COPY . ./
RUN npm install
#EXPOSE 3000
#ENV PORT 3000
EXPOSE ${PORT}
CMD ["npm", "start"]