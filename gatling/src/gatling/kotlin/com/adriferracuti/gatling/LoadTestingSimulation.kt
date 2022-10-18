package com.adriferracuti.gatling

import io.gatling.javaapi.core.CoreDsl.*
import io.gatling.javaapi.core.Simulation
import io.gatling.javaapi.http.HttpDsl.*

class LoadTestingSimulation : Simulation() {

    val webfluxService = http.baseUrl("http://localhost:8081")
    val webmvcService = http.baseUrl("http://localhost:8082")

    val delay1000 = delayRequest(1000)

    private fun delayRequest(delay: Int) = exec(
        http("")
            .get("/execute?delay=$delay")
            .check(status().shouldBe(200))
    )

    val scenario = scenario("Delay").exec(delay1000)

    init {
        setUp(
            scenario.injectOpen(atOnceUsers(1000))
                .protocols(webfluxService)
        )
    }
}
