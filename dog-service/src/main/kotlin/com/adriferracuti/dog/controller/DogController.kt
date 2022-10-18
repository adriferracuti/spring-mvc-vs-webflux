package com.adriferracuti.dog.controller

import com.adriferracuti.dog.entity.Dog
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.time.Duration

@RestController
class DogController {

    @GetMapping("/dog")
    fun findOne(@RequestParam delay: Long): Mono<Dog> {
        return Mono.just(Dog(2, "Bobby")).delayElement(Duration.ofMillis(delay))
    }
}
