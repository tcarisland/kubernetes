#!/bin/bash

./mvnv build
docker build --build-arg JAR_FILE=target/api-0.0.1-SNAPSHOT.jar -t tcarisland/tcapi .