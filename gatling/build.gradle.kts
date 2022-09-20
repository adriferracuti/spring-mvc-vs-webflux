// Intellij plugin bug: https://youtrack.jetbrains.com/issue/KTIJ-19369
@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    id("com.adriferracuti.kotlin-application-conventions")

    alias(libs.plugins.kotlin.jvm)
    alias(libs.plugins.gatling)
}

dependencies {
}
