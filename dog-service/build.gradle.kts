// Intellij plugin bug: https://youtrack.jetbrains.com/issue/KTIJ-19369
@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    id("com.adriferracuti.kotlin-application-conventions")
}

dependencies {
    implementation("org.apache.commons:commons-text")
    implementation(platform(libs.spring.boot.bom))
    implementation("org.springframework.boot:spring-boot-starter-webflux")
    implementation(libs.kotlin.logging)
    implementation(libs.bundles.jackson)
}

application {
    // Define the main class for the application.
    mainClass.set("com.adriferracuti.dog.AppKt")
}
