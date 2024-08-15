FROM node:20.16

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY prisma ./prisma
RUN pnpx prisma generate

COPY . .

EXPOSE 4001
CMD [ "pnpm", "start" ]