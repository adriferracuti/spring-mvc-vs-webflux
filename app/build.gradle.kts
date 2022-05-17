// Intellij plugin bug: https://youtrack.jetbrains.com/issue/KTIJ-19369
@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    id("com.adriferracuti.kotlin-application-conventions")
    alias(libs.plugins.kotlin.jvm)
}

dependencies {
    implementation("org.apache.commons:commons-text")
    implementation(platform(libs.spring.boot.bom))
    implementation("org.springframework.boot:spring-boot-starter-webflux")
    implementation("io.github.microutils:kotlin-logging:2.1.21")
    implementation("javax.servlet:javax.servlet-api:4.0.1")
    implementation(libs.bundles.jackson)
}

application {
    // Define the main class for the application.
    mainClass.set("com.adriferracuti.app.AppKt")
}
