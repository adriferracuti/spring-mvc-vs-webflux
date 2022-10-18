package com.adriferracuti.app.controller

import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicInteger

@RestController
class MainController {
    private val httpClient: HttpClient = HttpClient.newBuilder()
        .executor(Executors.newSingleThreadExecutor()).build()

    private var counter: AtomicInteger = AtomicInteger()

    private val logger = KotlinLogging.logger { }

    @GetMapping("/execute")
    fun getOneBlocking(@RequestParam delay: Long): String {
        val count = counter.incrementAndGet()
        logger.info { "request $count | arrived" }
        val request = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:8080/dog?delay=$delay"))
            .GET()
            .build()

        return httpClient.send(request, HttpResponse.BodyHandlers.ofString()).body()
    }
}
