# PR Review Rules

## What to check

### Correctness

- Logic errors or off-by-one mistakes
- Unreachable code or dead branches
- Incorrect async/await usage (missing `await`, unhandled promises)
- Wrong dependency array in `useEffect` / `useCallback` / `useMemo`

### Security

- Secrets or tokens committed to code
- User input rendered without sanitization (XSS risk)
- Direct SQL / query construction from untrusted input
- Supabase RLS policies not enforced on the client — verify server-side checks exist
- Exposed environment variables that should remain server-only (`NEXT_PUBLIC_` prefix on sensitive keys)

### Performance

- Large data fetched but only a small part used — add `.select()` columns or pagination
- N+1 query patterns inside loops
- Missing `loading` / `error` states that would cause layout shift
- Images missing `width` / `height` or `priority` on above-the-fold assets

### Code quality

- Component doing more than one thing — suggest splitting
- Prop drilling more than two levels deep — suggest context or a small store
- Magic strings or numbers without a named constant
- Duplicated logic that already exists elsewhere in the codebase
- Type `any` used where a proper type is possible

### Styles & conventions

- Tailwind classes not sorted (Prettier plugin handles this — flag if bypassed)
- Class names that encode state instead of using conditional logic (`isActive ? 'bg-blue' : 'bg-gray'`)
- `console.log` left in production code

---

## Severity levels

| Level      | Emoji | Meaning                                                                   |
| ---------- | ----- | ------------------------------------------------------------------------- |
| Critical   | 🔴    | Must be fixed before merge — bug, security issue, or broken functionality |
| Warning    | 🟡    | Should be fixed — code smell, performance issue, or unclear logic         |
| Suggestion | 🟢    | Optional improvement — style, naming, or minor refactor                   |

---

## Merge policy

### Green light — merge allowed

- No comments, or all existing comments are resolved
- All 🔴 Critical issues are fixed
- 🟡 Warning issues are either fixed or explicitly acknowledged with a brief explanation in the PR description

### Hold — do not merge

- Any unresolved 🔴 Critical comment
- A 🟡 Warning left without a response from the author
- Failing CI (lint, build, type check)

### How to resolve a comment

1. Fix the code and push — the thread is then resolved by the reviewer
2. If you disagree: reply in the thread with your reasoning; the reviewer resolves or escalates
3. Do not resolve threads yourself as the author unless it was a typo or a misunderstanding you can confirm in the reply

### Stale comments

If a comment is more than **7 days** old and the PR has since been updated, the reviewer should re-check and either resolve or re-affirm the issue. A comment that no longer applies to the current diff should be resolved.

---

## What the agent does not flag

- Formatting — Prettier handles it automatically
- Import order — handled by `eslint-plugin-simple-import-sort`
- Unused imports — handled by `eslint-plugin-unused-imports`
- Config files (next.config, tailwind.config, etc.)
- Type declaration files (\*.d.ts)
- Formatting — Prettier handles it
- Import order — eslint handles it

Run `npm run lint:fix && npm run format` locally before opening a PR to avoid noise.
