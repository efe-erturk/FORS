#Latest version as of 26.11.25
#Hopefully nothing to do with SHA1-HULUD
FROM node:iron-trixie-slim AS base
WORKDIR /app
#First copy dependency file. Faster for docker.
COPY package*.json ./
#Install dependencies
RUN npm install

FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

