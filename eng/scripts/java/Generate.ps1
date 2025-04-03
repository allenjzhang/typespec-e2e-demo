Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..' '..' '..'))

# Make sure everything is up-to-date
npm ci

# Generate
Remove-Item ./petstore/clients/java/src/main -Recurse -Force
Push-Location ./petstore/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Pop-Location

Remove-Item ./todoApp/clients/java/src/main -Recurse -Force
Push-Location ./todoApp/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Pop-Location

Remove-Item ./widget/clients/java/src/main -Recurse -Force
Push-Location ./widget/spec
npx --no-install tsp compile . --emit "@typespec/http-client-java"
Pop-Location

# Build and install SDK
Push-Location ./petstore/clients/java
mvn --no-transfer-progress clean spotless:apply install -DskipTests
Pop-Location

Push-Location ./todoApp/clients/java
mvn --no-transfer-progress clean spotless:apply install -DskipTests
Pop-Location

Push-Location ./widget/clients/java
mvn --no-transfer-progress clean install -DskipTests
Pop-Location

# Build samples
Push-Location ./petstore/samples/java
mvn --no-transfer-progress clean spotless:apply package
Pop-Location

Push-Location ./todoApp/samples/java
mvn --no-transfer-progress clean spotless:apply package
Pop-Location
