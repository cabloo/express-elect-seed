FROM debian:8

RUN apt-get update -y
ADD . /app
WORKDIR /app
RUN ./bin/install.sh

ENTRYPOINT ["./bin/server.sh"]

