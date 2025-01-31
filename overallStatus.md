# TypeSpec 1.0 E2E scenario status

## North Star

### Zero to wow in no time

**We aim to deliver a seamless experience where TypeSpec users can effortlessly set up new projects using a simple CLI command or VSCode. With a rich diagnostic system, a developer-friendly environment, and intuitive options for common tasks, users can focus on building exceptional APIs without worrying about underlying complexities.**

### CLI

| **Extension Feature** | **Status**  | **ETA** | **Issues Link** | **Remarks**                                    |
| --------------------- | ----------- | ------- | --------------- | ---------------------------------------------- |
| Project init          | Implemented |         |                 | [Ready for testing](./doc/user-journey.md#cli) |

### VSCode

| **Extension Feature**     | **Status**  | **ETA** | **Remarks**                                                                             |
| ------------------------- | ----------- | ------- | --------------------------------------------------------------------------------------- |
| New Project from Template | Implemented |         | [Ready for testing](./doc/user-journey.md#project-scaffolding)                          |
| Generate OpenAPI          | Implemented |         | [Ready for testing](./doc/user-journey.md#generate-the-openapi-document)                |
| Generate Client           | Implemented |         | [Ready for testing](./doc/user-journey.md#generate-the-client-code-and-the-server-stub) |
| Generate Server           | Implemented |         | [Ready for testing](./doc/user-journey.md#generate-the-client-code-and-the-server-stub) |
| Convert from OpenAPI      | Pending     | 2/15    |                                                                                         |

### Language & Spec Readiness

| **Language** | **Pet Store**                          | **ToDo App**                          | **Remark**                            |
| ------------ | -------------------------------------- | ------------------------------------- | ------------------------------------- |
| TypeSpec     | [Yes](./petstore/spec/)                | [Yes](./todoApp/spec/)                |                                       |
| OpenAPI      | [Yes](./petstore/openapi/openapi.yaml) | [Yes](./todoApp/openapi/openapi.yaml) |                                       |
| Client C#    | [Yes](./petstore/clients/dotnet/)      | [Yes](./todoApp/clients/dotnet/)      |                                       |
| Java         | [Yes](./petstore/clients/java/)        | [Yes](./todoApp/clients/java/)        |                                       |
| Javascript   | [Yes](./petstore/clients/javascript/)  | [Yes](./todoApp/clients/javascript/)  |                                       |
| Python       | [Yes](./petstore/clients/python/)      | [Yes](./todoApp/clients/python/)      |                                       |
| ASP.NET C#   | [Yes](./petstore/servers/aspnet/)      | [Yes](./todoApp/servers/aspnet/)      |                                       |
| Node Server  | [Yes](./petstore/servers/node/)        | [Yes](./todoApp/servers/node/)        | Project scaffolding under development |

---

## Current work items

| **Work item**                                         | **Status** | **ETA** | **Issues Link** | **Remarks**                                   |
| ----------------------------------------------------- | ---------- | ------- | --------------- | --------------------------------------------- |
| Combine `tsp install` into `init`                     | In PR      | 1/31    |                 |                                               |
| Server codegen "intelligent" project scaffolding      | In design  |         |                 |                                               |
| Polishing TypeSpec compiler output                    | Pending    |         |                 | Working on design, need to coordinate with SH |
| Compiler/Emitter behavior consistency and improvement | Pending    |         |                 |                                               |
