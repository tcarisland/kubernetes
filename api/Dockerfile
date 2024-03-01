FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/api-*.jar /app.jar
ENTRYPOINT ["java","-Dspring.data.mongodb.uri=mongodb://mongodb:27017","-jar", "/app.jar"]