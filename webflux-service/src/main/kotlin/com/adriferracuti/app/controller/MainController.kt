package com.adriferracuti.app.controller

import com.adriferracuti.app.entity.Dog
import mu.KotlinLogging
import org.springframework.http.client.reactive.ReactorClientHttpConnector
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import reactor.netty.http.client.HttpClient.*
import reactor.netty.resources.ConnectionProvider
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration.ofSeconds
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicInteger

@RestController
class MainController {

    var provider: ConnectionProvider = ConnectionProvider.builder("custom")
        .maxConnections(2000)
        .maxIdleTime(ofSeconds(20))
        .maxLifeTime(ofSeconds(60))
        .pendingAcquireTimeout(ofSeconds(60))
        .evictInBackground(ofSeconds(120))
        .build()

    private val webClient: WebClient = WebClient.builder()
        .baseUrl("http://localhost:8080")
        .clientConnector(ReactorClientHttpConnector(create(provider)))
        .build()

    private val httpClient: HttpClient = HttpClient.newBuilder()
        .executor(Executors.newSingleThreadExecutor()).build()

    private var counter: AtomicInteger = AtomicInteger()

    private val logger = KotlinLogging.logger { }

    @GetMapping("/execute")
    fun getOne(@RequestParam delay: Long): Mono<Dog> {
        val count = counter.incrementAndGet()
        logger.info { "request $count | arrived" }

        return webClient.get().uri("/dog?delay=$delay").retrieve().bodyToMono(Dog::class.java)
            .doOnSuccess { logger.info { "request $count | maybe processed" } }
    }

    @GetMapping("/execute-sync")
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
