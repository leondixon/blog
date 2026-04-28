---
title: Agents as collaborators, not autocomplete
description: The mental shift that changed how I work with Claude Code.
date: 2026-04-22
tags: [ai, workflow, claude-code]
---

For about a year I treated coding agents like a fancier autocomplete —
type a comment, get a function, glance at it, accept. It was fine. It
wasn't transformative.

The shift came when I stopped writing prompts *at* the agent and
started writing prompts *to* it.

## What changed

Three small things:

- **Brief like a colleague.** Why does this matter, what have I tried,
  what am I worried about. Terse imperatives produce shallow work.
- **Hand over context, not instructions.** A good prompt proves I
  understood the problem. The agent fills in the work, not the thinking.
- **Trust, then verify the diff.** "Done" from the agent means
  "intended to do" — never "actually did."

## A small example

I had a flaky test in a Go service. Old me would have written:

```
Fix the flaky test in payments_test.go
```

Now I'd write something like:

```
Fix the flake in TestRefundIdempotency. Context: it's racy on the
ledger write — two goroutines compete for the same row and the
test asserts a specific ordering. I want the test to assert
the invariant (one row exists with the final state), not the
ordering. Fix the test, not the production code.
```

The second version doesn't take longer to write. It just front-loads
the thinking that I'd otherwise do *after* reading the agent's first
attempt.

## The trade

Briefer prompts feel faster, but you pay later — re-reading bad output,
re-prompting, undoing. Investing 30 seconds in the prompt saves 5
minutes of cleanup. Compounds across a day.
