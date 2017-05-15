FROM debian:8

RUN apt-get update -y
ADD api /app/api
WORKDIR /app/api
RUN ./bin/install.sh

ENTRYPOINT ["./bin/server.sh"]

