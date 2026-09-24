import test from "node:test";
import assert from "node:assert/strict";

import { sendContactEmails } from "./emailService.js";

test("sendContactEmails returns immediately and keeps email delivery in the background", async () => {
  let finished = false;

  const slowSender = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        finished = true;
        resolve();
      }, 250);
    });

  const start = Date.now();
  const result = sendContactEmails(
    {
      name: "Alice",
      email: "alice@example.com",
    },
    {
      contactEmailSender: slowSender,
      confirmationSender: slowSender,
    },
  );

  assert.equal(result, true);
  assert.equal(finished, false);

  const elapsed = Date.now() - start;
  assert.ok(elapsed < 200, `expected immediate return, got ${elapsed}ms`);

  await new Promise((resolve) => setTimeout(resolve, 350));
  assert.equal(finished, true);
});
