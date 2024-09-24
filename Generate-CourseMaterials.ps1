if (!(Test-Path .\.materials)) {
    mkdir .\.materials
}

$CommonPaths = @(
    # Add additional shared paths for each module
    ".\LICENSE",
    ".\README.md"
    ".\demo"
)

# Example: Module 1
Compress-Archive -DestinationPath .\.materials\m1.zip -Update -Path ($CommonPaths + @(
    ".\module-1"
))
