# Status

WIP

# Description
Performance comparison of Spring MV vs Spring Webflux (reactive)

# Run

1. `./gradlew dog-service:run`
2. `./gradlew webflux-service:run` (port 8081) or `./gradlew webmvc-service:run` (port 8082)
3. Edit `LoadTestingSimulation` as needed
4. `./gradlew gatling:gatlingRun`
 
