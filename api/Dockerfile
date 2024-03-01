FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/api-*.jar /app.jar
ENTRYPOINT ["java","-D${SPRING_DATA_MONGODB_URI}","-jar", "/app.jar"]
