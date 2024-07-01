# Registration Application

A registration application with password hashing for security.

**Tutorial**: [Profiling Node.js Applications](https://betterstack.com/community/guides/scaling-nodejs/profiling-nodejs-applications/)

## 🟢 Prerequisites

Ensure you have Node.js and npm installed on your machine.

## 📦 Getting started

- Clone this repository to your machine:

```bash
git clone https://github.com/betterstack-community/nodejs-profiler-demo
```

- `cd` into the project folder and run `npm install` to download dependencies.
- Execute the command below to start the development server:

```bash
node index.js
```

Try out the registration using the following command:

```command
curl -X POST -H "Content-Type: application/json" -d '{"password":"userPassword123"}' http://localhost:3000/register
```

## ⚖ License

The code used in this project and in the linked tutorial are licensed under the [Apache License, Version 2.0](LICENSE).
