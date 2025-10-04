FROM node:18
WORKDIR /app
COPY . .
# 🛠 Install netcat for wait-for-db.sh
RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install
RUN npm run build
COPY wait-for-db.sh .
RUN chmod +x wait-for-db.sh
CMD ["./wait-for-db.sh"]
