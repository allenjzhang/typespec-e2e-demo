Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..' '..' '..'))

# Make sure everything is up-to-date
npm ci

# Generate
Remove-Item ./petstore/clients/dotnet/src/Generated -Recurse -Force
Push-Location ./petstore/spec
npx --no-install tsp compile . --emit "@typespec/http-client-csharp"
Pop-Location

Remove-Item ./todoApp/clients/dotnet/src/Generated -Recurse -Force
Push-Location ./todoApp/spec
npx --no-install tsp compile . --emit "@typespec/http-client-csharp"
Pop-Location

# Build and install SDK
Push-Location ./petstore/clients/dotnet
dotnet build
Pop-Location

Push-Location ./todoApp/clients/dotnet
dotnet build
Pop-Location

# Build samples
Push-Location ./petstore/samples/dotnet
dotnet build
Pop-Location

Push-Location ./todoApp/samples/dotnet
dotnet build
Pop-Location
