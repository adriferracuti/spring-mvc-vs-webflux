package com.adriferracuti.app.controller

import com.adriferracuti.app.entity.Dog
import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.time.Duration

@RestController
class DogController {

    private val logger = KotlinLogging.logger { }

    @GetMapping("/dog")
    fun findOne(@RequestParam delay: Long): Mono<Dog> {
        logger.info { "request arrived" }
        return Mono.just(Dog(2, "Bobby")).delayElement(Duration.ofMillis(delay))
    }
}
