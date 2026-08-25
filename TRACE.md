# 3.2 in-file comment trace

Open this PR in Revset (split view, not GitHub). Sign-off for `openspec/changes/in-file-comment-performance` task 3.2.

## What this PR is for

- `src/pipeline.ts` is a **modified** file (~3k lines). Revset renders modifications as **split**. This is the file to expand.
- `src/tokens.ts` and `src/render.ts` are also modified so you can keep several files expanded and scroll one off-screen.
- `src/diagnostics.ts` is **added** (unified) — extra row, not the split case.
- Two review threads are seeded on `src/pipeline.ts` (`transformChunk12`, `summarizeChunk15`) so “click another thread” does not require leaving a comment first. A third is on `src/tokens.ts`.

## Setup

1. Run the portal that has the in-file-comment-performance work (`pnpm dev` locally, or staging if that commit is deployed).
2. Open this PR in the org that has `chrisrevset/staging-only-don-t-connect-to-prod`.
3. Chrome. WorkOS will block an automated session — this is a logged-in, hands-on trace.
4. Files column: expand `src/pipeline.ts`, `src/tokens.ts`, and `src/render.ts`. Leave them expanded. Confirm `pipeline.ts` is split (two columns).

## A. Crash (the original bug)

1. Hover a **code** line in `pipeline.ts` that does **not** already have a thread (not the seeded ones).
2. Click the plus. The in-file composer opens; the textarea is focused.
3. Click, in order, every part of that composer that is **not** the textarea: the header, the card chrome, **Cancel**, then open it again and click **Comment** / **Save draft** without submitting if you want those too.
4. Open the plus again. Click a seeded thread on a nearby line. Click the comments pane.

**Pass:** the tab never shows Chrome “Aw, Snap! Error code: 5”. The composer stays on screen until you Cancel.

## B. Grow then scroll

1. Plus on a split line. Type until the text wraps (hold a key, or paste a paragraph).
2. Keep going until the field stops growing.

**Pass:** the field grows with wraps up to 12rem (`max-h-48`), then the extra text scrolls **inside** the field. The diff columns do not keep getting taller after the cap.

## C. Virtualized grid (Performance + Elements)

DevTools → **Performance**. Screenshots on. No CPU throttle.

1. Start recording.
2. Type a few wrapping sentences in the in-file field, then a few characters that do not wrap.
3. Click composer chrome (header / Cancel) as in A.
4. Scroll the files list through `pipeline.ts` (fast flick, then slow).
5. Stop recording.

**Pass on the profile**

- No renderer crash.
- Keystrokes that do not wrap should not show a large Layout of the whole file. Wrap keystrokes may Layout the annotation row; they must not look like “style/layout the entire 3k-line grid”.
- Recalculate Style / Layout for a wrap should stay on the order of milliseconds, not hundreds.

**Pass in Elements** (this is the “lines well outside the viewport are not in the rendered grid” check)

1. Select the `pipeline.ts` row. Pierce into `diffs-container` (shadow root).
2. Console, with that file’s `diffs-container` selected:

```js
$0.shadowRoot.querySelectorAll("[data-line][data-line-index]").length
```

3. `pipeline.ts` is ~3k lines. The count must be **much smaller** than that (viewport + Pierre’s ~1000px overscan, typically low hundreds, not 3000).
4. Optional: `window.__INSTANCE.getWindowSpecs()` is Pierre’s virtualizer window (`top` / `bottom` in px of the files scrollport).
5. Scroll `pipeline.ts` until `tokens.ts` or `render.ts` is well off screen. That off-screen FileDiff must not keep a full highlighted grid (placeholder height is fine).

## Sign-off

If A, B, and C pass, check task 3.2. If Chrome error 5 comes back, the profile from C (or a crash dump) is the artifact — not another CSS tweak.
