import Fastify from "fastify";
import crypto from "node:crypto";

const fastify = Fastify();

fastify.post("/register", (request, reply) => {
  const { password } = request.body;

  if (!password) {
    return reply.status(400).send({ error: "Password is required" });
  }

  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("hex");

  reply.send({ salt, hashedPassword });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
