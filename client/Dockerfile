# --- 1. Build stage ---
FROM node:18 AS build

# Munkakönyvtár létrehozása
WORKDIR /app

# Package.json és package-lock.json másolása
COPY package*.json ./

# Függőségek telepítése
RUN npm install

# Az összes fájl másolása a konténerbe
COPY . .

# React app build
RUN npm run build

# --- 2. Production stage ---
FROM nginx:alpine

# A buildelt fájlok átmásolása az Nginx szerverbe
COPY --from=build /app/dist /usr/share/nginx/html

# Port 80 expose
EXPOSE 80

# Nginx indítása
CMD ["nginx", "-g", "daemon off;"]
