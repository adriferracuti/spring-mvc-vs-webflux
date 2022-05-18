package com.adriferracuti.app.controller

import com.adriferracuti.app.entity.Dog
import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import java.net.http.HttpClient
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicInteger
@RestController
class MainController {
    private val webClient: WebClient = WebClient.builder().baseUrl("http://localhost:8080").build()
    private val httpClient: HttpClient = HttpClient.newBuilder()
        .executor(Executors.newSingleThreadExecutor()).build()

    private var counter: AtomicInteger = AtomicInteger()

    private val logger = KotlinLogging.logger { }


    @GetMapping("/webclient")
    fun getOne(@RequestParam delay: Long): Mono<Dog>  {
        val count = counter.incrementAndGet()
        logger.info { "request $count | arrived" }

        return webClient.get().uri("/dog?delay=$delay").retrieve().bodyToMono(Dog::class.java).doOnSuccess { logger.info { "request $count | maybe processed"} }
    }
}

