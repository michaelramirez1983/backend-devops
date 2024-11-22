FROM node:22

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci --only=dev

COPY . .

RUN npm run build

#COPY node_modules ./node_modules
#COPY dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]