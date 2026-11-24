import { test } from "node:test";
import assert from "node:assert/strict";
import { optionalInt } from "../src/content/schema.ts";

test("optionalInt accepts an integer", () => {
  assert.equal(optionalInt().parse(3), 3);
});

test("optionalInt treats absent and null (what the editor saves for an empty field) as unset", () => {
  assert.equal(optionalInt().parse(undefined), undefined);
  assert.equal(optionalInt().parse(null), undefined);
});

test("optionalInt still rejects non-integers and out-of-range values", () => {
  assert.throws(() => optionalInt().parse(1.5));
  assert.throws(() => optionalInt().parse("2"));
  assert.throws(() => optionalInt((n) => n.min(1).max(5)).parse(6));
});
