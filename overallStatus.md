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

---

## Current work items

| **Work item**                                         | **Status** | **ETA** | **Issues Link** | **Remarks**                                   |
| ----------------------------------------------------- | ---------- | ------- | --------------- | --------------------------------------------- |
| Combine `tsp install` into `init`                     | In PR      | 1/28    |                 |                                               |
| Server codegen "intelligent" project scaffolding      | In design  | 1/31    |                 |                                               |
| Polishing TypeSpec compiler output                    | Pending    |         |                 | Working on design, need to coordinate with SH |
| Compiler/Emitter behavior consistency and improvement | Pending    |         |                 |                                               |
