# Run Generate.ps1 to make sure latest SDK is built and installed

Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..' '..' '..'))

$proc = Start-Process -FilePath "dotnet" -ArgumentList "run", "--project", "petstore/servers/aspnet/petstore.csproj" -PassThru
try {
    # Wait for dotnet run
    Start-Sleep -Seconds 10
    mvn clean package exec:java -f petstore/samples/java/pom.xml
} finally {
    $proc.Kill()
}

$proc = Start-Process -FilePath "dotnet" -ArgumentList "run", "--project", "todoApp/servers/aspnet/Todo.csproj" -PassThru
try {
    # Wait for dotnet run
    Start-Sleep -Seconds 10
    mvn clean package exec:java -f todoApp/samples/java/pom.xml
} finally {
    $proc.Kill()
}
