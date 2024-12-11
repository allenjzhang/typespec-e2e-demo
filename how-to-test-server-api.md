# Testing Generated Code

## ASP.NET WebAPI Test Servers

`/server/aspnet` folder contains a list of test server projects that coorespond to the TypeSpec specifications under `/specifications` folder.

### Testing the server code

1. Compile any TypeSpec under `/specifications/[service]`. The configured emitter(s) specified in `tspconfig.yaml` will place generated service code in respective `/servers/[WebStack]/[service]/generated` folders

    ```sh
      npx tsp compile .
    ```

1. Change path to `/servers/[service]` and run the server.

    ```sh
      dotnet run
    ```

1. Open a browser with `http://localhost:[PORT#]/swagger/index.html` to test the server code with built-in swagger UI.

### Steps to create basic ASP.NET WebAPI projects

Each of the test server folder should have been set up so it is runnable.

However, if you would like to add or recreate the server folder from scratch, please follow these steps.

1. Create an `ASP.NET Core Web API` project with following command:

    ```sh
       dotnet new web
       dotnet add package Swashbuckle.AspNetCore
    ```

1. Replace content of `Program.cs` with code below:

    ```csharp
        var builder = WebApplication.CreateBuilder(args);
        
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        
        var app = builder.Build();
        
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        
        app.UseAuthorization();
        app.MapControllers();
        
        app.Run();
    ```

1. Please follow the `README.md` file under each of the service to create service stubs and controllers to enable full server functionality.

## Node/Express Test Servers
