if (!(Test-Path .\.materials)) {
    mkdir .\.materials
}

$CommonPaths = @(
    # Add additional shared paths for each module
    ".\LICENSE",
    ".\README.md"
    ".\demo-initial"
)

# Example: Module 1
Compress-Archive -DestinationPath .\.materials\m1.zip -Update -Path ($CommonPaths + @(
    ".\demo-m1",
    ".\demo-m1-next-intl"
))
