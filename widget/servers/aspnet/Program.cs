var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.DocumentTitle = "TypeSpec Generated OpenAPI Viewer";
        c.SwaggerEndpoint("/openapi.yaml", "TypeSpec Generated OpenAPI Docs");
        c.RoutePrefix = "swagger";
    });
}
app.MapGet("/openapi.yaml", async (HttpContext context) =>
{
    var externalFilePath = "../../openapi/openapi.yaml"; // Full path to the file outside the project
    if (!File.Exists(externalFilePath))
    {
        context.Response.StatusCode = StatusCodes.Status404NotFound;
        await context.Response.WriteAsync("OpenAPI spec not found.");
        return;
    }
    context.Response.ContentType = "application/json";
    await context.Response.SendFileAsync(externalFilePath);
});

app.UseAuthorization();

app.MapControllers();

app.Run();
