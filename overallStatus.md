# TypeSpec 1.0 E2E scenario status

## North Star

### Zero to wow in no time

**We aim to deliver a seamless experience where TypeSpec users can effortlessly set up new projects using a simple CLI command or VSCode. With a rich diagnostic system, a developer-friendly environment, and intuitive options for common tasks, users can focus on building exceptional APIs without worrying about underlying complexities.**

### CLI

| **Extension Feature** | **Status**  | **ETA** | **Issues Link** | **Remarks**           |
| --------------------- | ----------- | ------- | --------------- | --------------------- |
| Project init          | Implemented |         |                 | Demoed and in testing |

### VSCode

| **Extension Feature**     | **Dependency**         | **Status**  | **ETA** | **Issues Link**                                                                                                                        | **Remarks**           |
| ------------------------- | ---------------------- | ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| New Project from Template | Josephine/Rodge/Arthur | Implemented |         | [design spec](https://microsoft.sharepoint.com/:w:/t/AzureDeveloperExperience/EXfInUWxaOpNpXVtcQOAt4cBoVwvu3tZe3Od__r9vdc8qQ?e=nQk7DO) | Demoed and in testing |
| Generate OpenAPI          | Josephine/Rodge/Arthur | Implemented |         | [design spec](https://microsoft.sharepoint.com/:w:/t/AzureDeveloperExperience/EXfInUWxaOpNpXVtcQOAt4cBoVwvu3tZe3Od__r9vdc8qQ?e=nQk7DO) | Demoed and in testing |
| Generate Client           | Josephine/Rodge/Arthur | Implemented |         | [design spec](https://microsoft.sharepoint.com/:w:/t/AzureDeveloperExperience/EXfInUWxaOpNpXVtcQOAt4cBoVwvu3tZe3Od__r9vdc8qQ?e=nQk7DO) | Demoed and in testing |
| Generate Server           | Josephine/Rodge/Arthur | Implemented |         | [design spec](https://microsoft.sharepoint.com/:w:/t/AzureDeveloperExperience/EXfInUWxaOpNpXVtcQOAt4cBoVwvu3tZe3Od__r9vdc8qQ?e=nQk7DO) | Demoed and in testing |
| Convert from OpenAPI      | Josephine/Rodge/Arthur |             | 2/15    | [design spec](https://microsoft.sharepoint.com/:w:/t/AzureDeveloperExperience/EXfInUWxaOpNpXVtcQOAt4cBoVwvu3tZe3Od__r9vdc8qQ?e=nQk7DO) |                       |

---

## Current work items

| **Work item**                                         | **Status** | **ETA** | **Issues Link** | **Remarks**                                   |
| ----------------------------------------------------- | ---------- | ------- | --------------- | --------------------------------------------- |
| Combine `tsp install` into `init`                     | In PR      | 1/28    |                 |                                               |
| Server codegen "intelligent" project scaffolding      | In design  | 1/31    |                 |                                               |
| Polishing TypeSpec compiler output                    | Pending    |         |                 | Working on design, need to coordinate with SH |
| Compiler/Emitter behavior consistency and improvement | Pending    |         |                 |                                               |
