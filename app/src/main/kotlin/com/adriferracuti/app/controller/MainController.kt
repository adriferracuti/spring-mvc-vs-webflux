package com.adriferracuti.app.controller

import com.adriferracuti.app.entity.Dog
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import java.net.http.HttpClient
import java.util.concurrent.Executors

@RestController
class MainController {
    private val webClient: WebClient = WebClient.builder().baseUrl("http://localhost:8080").build()
    private val httpClient: HttpClient = HttpClient.newBuilder()
        .executor(Executors.newSingleThreadExecutor()).build()

    @GetMapping("/webclient")
    fun getOne(@RequestParam delay: Long): Mono<Dog> =
        webClient.get().uri("/dog?delay=$delay").retrieve().bodyToMono(Dog::class.java)
}
