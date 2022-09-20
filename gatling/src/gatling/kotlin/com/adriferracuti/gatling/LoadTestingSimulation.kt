package com.adriferracuti.gatling

import io.gatling.javaapi.core.*
import io.gatling.javaapi.core.CoreDsl.*
import io.gatling.javaapi.core.Simulation
import io.gatling.javaapi.http.*
import io.gatling.javaapi.http.HttpDsl.*

class LoadTestingSimulation : Simulation() {

    val httpProtocol =
        http.baseUrl("http://localhost:8080")

    val webclient = scenario("webclient").exec(
        http("req1")
            .get("/webclient?delay=1000")
            .check(status().shouldBe(200))
    )

    init {
        setUp(
            webclient.injectOpen(rampUsers(10).during(10))
        )
    }
}
