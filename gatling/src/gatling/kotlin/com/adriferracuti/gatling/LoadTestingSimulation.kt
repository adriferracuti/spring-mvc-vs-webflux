package com.adriferracuti.gatling

import io.gatling.javaapi.core.CoreDsl.*
import io.gatling.javaapi.core.Simulation
import io.gatling.javaapi.http.HttpDsl.*

class LoadTestingSimulation : Simulation() {

    val webfluxService = http.baseUrl("http://localhost:8081")
    val webmvcService = http.baseUrl("http://localhost:8082")

    private fun delayRequest(delay: Int) = exec(
        http("")
            .get("/execute?delay=$delay")
            .check(status().shouldBe(200))
    )

    val scenario = scenario("Delay").exec(delayRequest(1))

    init {
        setUp(
            scenario.injectOpen(stressPeakUsers(10000).during(30))
                .protocols(webmvcService)
        )
    }
}
