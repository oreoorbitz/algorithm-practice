# Coding Interview Prep — 100 Hours, Five Sprints

Five 20-hour sprints. 2 hours a day, 10 days per sprint. Every problem listed is free on LeetCode. Language: JavaScript/TypeScript throughout.

A parallel **JS Performance Specialization Track** runs underneath — Modules 1–3 alongside Sprints 1–3, Modules 4–5 as post-application master's study — turning the algorithm training into engine-level frontend performance expertise plus low-level fluency, with five portfolio artifacts. It's at the bottom of this file.

## The Rules (apply to every sprint, every day)

**The Protocol — run it on every problem, in order:**
1. Read the problem twice. Say the input, output, and constraints out loud.
2. Restate it: "Given X, return Y."
3. Write three test cases: empty/minimal, normal, corner case.
4. Trace both given examples by hand before typing.
5. Write the brute-force solution first.
6. State its time and space complexity out loud.
7. Find the bottleneck line. Optimize it.
8. State the new complexity.
9. Explain your final solution out loud and answer: "Why does this work? What input breaks it?"

**The Redo Loop:**
- Keep a Redo List of every problem you fail, time out on, or solve shakily.
- Re-solve each one from memory after 2–5 days, then again after 1–2 weeks. No peeking.
- A problem only leaves the list when you solve it cold.

**After every solved problem, write one sentence:**
_"Next time I see \_\_\_, I will try \_\_\_."_ If you can't fill the blanks, the problem goes on the Redo List.

**Daily structure (2 hours):**
- Learning days: 30 min concept input → 90 min problems using the Protocol, narrated out loud.
- Drill days: timed problems → redo session → one-sentence skill notes.

**JavaScript traps — memorize before Hour 1:**
1. `sort()` compares as strings. Always write `.sort((a, b) => a - b)`. It mutates in place.
2. No built-in heap. Either implement a minimal one once and keep it in your notes, or say "assume a PriorityQueue class."
3. `shift()` / `unshift()` / `splice()` are O(n). In loops they make your solution quadratic. Use index pointers: `queue[i++]` instead of `queue.shift()`.

**Before every submit, test these inputs:** empty, single element, all-equal, zeros, negatives, maximum N.

---

## Sprint 1 — Core Patterns (Hours 1–20)

Goal: recognize and apply the six highest-frequency patterns.

### Day 1 — Hash Maps
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Two Sum | 1 | Store the complement as you iterate — pairs find themselves |
| 2 | Contains Duplicate | 217 | Set size vs array length; early-exit thinking |
| 3 | Valid Anagram | 242 | Frequency counting with a Map |
| 4 | Group Anagrams | 49 | Canonical key (sorted string) as map key → group by equivalence class |
| 5 | Top K Frequent Elements | 347 | Bucket sort by frequency — bounded integer keys beat heaps |

### Day 2 — Two Pointers
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Valid Palindrome | 125 | Converging pointers with input filtering |
| 2 | Two Sum II | 167 | Sorted input → pointers replace the hash map (O(1) space) |
| 3 | 3Sum | 15 | Sort + fix one + two pointers inside; skip duplicates |
| 4 | Container With Most Water | 11 | Prove which pointer to move (moving the taller one can't help) |
| 5 | Remove Duplicates from Sorted Array | 26 | Slow writer / fast reader — in-place compaction |

### Day 3 — Sliding Window
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Best Time to Buy and Sell Stock | 121 | Track a running minimum as you scan |
| 2 | Maximum Subarray | 53 | Reset the running sum when it goes negative (Kadane's) |
| 3 | Longest Substring Without Repeating Characters | 3 | Expand right, shrink left only when the window is invalid |
| 4 | Minimum Size Subarray Sum | 209 | Shrink while valid — the opposite regime (works because inputs are positive) |
| 5 | Longest Repeating Character Replacement | 424 | Only `windowLen − maxFreq ≤ k` matters; stale max is fine |

### Day 4 — Binary Search
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Binary Search | 704 | Write it from the invariant "answer is in [lo, hi]" — never from memory |
| 2 | Search a 2D Matrix | 74 | Treat the matrix as one virtual sorted array (`mid → [mid/n][mid%n]`) |
| 3 | Search in Rotated Sorted Array | 33 | One half is always sorted — check which, check if target is inside |
| 4 | Find Minimum in Rotated Sorted Array | 153 | `hi = mid` when mid itself might be the answer |
| 5 | Koko Eating Bananas | 875 | Binary search over the *answer space* + a feasibility function |

### Day 5 — Trees (DFS)
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Maximum Depth of Binary Tree | 104 | Base case first, then trust the recursion |
| 2 | Invert Binary Tree | 226 | Pre/post/in-order differ only in when you act |
| 3 | Same Tree | 100 | Dual simultaneous recursion |
| 4 | Diameter of Binary Tree | 543 | Return one thing up (depth), compute another en route (diameter) |
| 5 | Balanced Binary Tree | 110 | Fail-fast sentinel: bubble up `-1` to stop early |
| 6 | Lowest Common Ancestor of a BST | 235 | Use the BST ordering guarantee — walk toward the split |

### Day 6 — BFS + Backtracking
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Binary Tree Level Order Traversal | 102 | Snapshot `queue.length` before the loop to mark level boundaries |
| 2 | Subsets | 78 | Base template: record at every node |
| 3 | Permutations | 46 | Same template + `used[]` tracking |
| 4 | Combination Sum | 39 | Same template + start index + reuse rule |
| 5 | Letter Combinations of a Phone Number | 17 | Same template over nested choices — one template, four problems |

### Days 7–10 — Drills
- Day 7: Redo session (Days 1–3 failures) + 2 timed Easys (15 min each).
- Day 8: 3 timed problems (20 min each), full protocol, narrated.
- Day 9: Redo session (Days 4–6 failures) + 2 timed problems.
- Day 10: Mock with another person or an AI mock tool. Have them interrupt you with "why?" and "what breaks this?"

**Sprint 1 exit check:** solve any problem from Days 1–6 again, cold, in under 20 minutes, narrating the whole time.

---

## Sprint 2 — Data Structures in Depth (Hours 21–40)

Goal: stacks, linked lists, intervals, heaps, and the start of dynamic programming.

### Day 1 — Stacks
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Valid Parentheses | 20 | Map closer→opener, pop and compare |
| 2 | Min Stack | 155 | Auxiliary stack tracking aggregate state |
| 3 | Daily Temperatures | 739 | Monotonic stack storing indices — unlocks the entire "next greater element" family |
| 4 | Evaluate Reverse Polish Notation | 150 | Stack as expression evaluator |
| 5 | Car Fleet | 853 | Sort by position, process in order, track fleets with a stack |

### Day 2 — Linked Lists
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Reverse Linked List | 206 | Three-pointer manipulation (prev/curr/next) |
| 2 | Merge Two Sorted Lists | 21 | Dummy head node — kills the edge-case branching |
| 3 | Linked List Cycle | 141 | Floyd's fast/slow pointers |
| 4 | Reorder List | 143 | Combine three skills: find middle (fast/slow), reverse, merge |
| 5 | Remove Nth Node From End | 19 | Fast pointer n-steps ahead, dummy node |

### Day 3 — Intervals & Greedy
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Merge Intervals | 56 | Sort by start — overlaps become adjacent |
| 2 | Insert Interval | 57 | Three passes: before, overlapping, after |
| 3 | Non-overlapping Intervals | 435 | Earliest-end greedy — keep what ends soonest |
| 4 | Jump Game | 55 | Track the furthest reachable index |
| 5 | Gas Station | 134 | If total gas ≥ total cost, a solution exists; restart when the tank goes negative |

### Day 4 — Heaps
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Kth Largest Element in an Array | 215 | Min-heap of size k (or quickselect) |
| 2 | Last Stone Weight | 1046 | Max-heap simulation |
| 3 | K Closest Points to Origin | 973 | Heap with a custom key (distance) |
| 4 | Task Scheduler | 621 | Greedy by frequency + cooldown math |
| 5 | Find Median from Data Stream | 295 | Two heaps — max-heap for lower half, min-heap for upper |

### Day 5 — 1D Dynamic Programming
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Climbing Stairs | 70 | dp[i] = dp[i−1] + dp[i−2] — recognize Fibonacci in disguise |
| 2 | House Robber | 198 | Skip-or-take: at each step, max(skip, take + best two back) |
| 3 | House Robber II | 213 | Circular array → run the linear solution twice |
| 4 | Maximum Product Subarray | 152 | Track max AND min — sign flips turn min into max |
| 5 | Longest Palindromic Substring | 5 | Expand around each center — O(n²) but elegant and interview-favorite |
| 6 | Coin Change | 322 | Bottom-up: dp[amount] = 1 + min(dp[amount − coin]) |

### Day 6 — Array Techniques
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Product of Array Except Self | 238 | Prefix × suffix products in the output array, no division |
| 2 | Maximum Product Subarray redo + Longest Increasing Subsequence | 300 | dp[i] = longest subsequence ending at i; patience-sort variant is O(n log n) |
| 3 | Rotate Array | 189 | Three reversals rotate the whole array |
| 4 | Majority Element | 169 | Boyer-Moore voting — cancel pairs, the majority survives |
| 5 | Missing Number | 268 | XOR or sum-difference |

### Days 7–10 — Drills
Same structure as Sprint 1: redo sessions on odd days, timed 20-minute problems on even days, one external mock on Day 10. Pull drill problems from the days you found hardest.

**Sprint 2 exit check:** explain out loud — without notes — the monotonic stack, the dummy node, earliest-end greedy, the two-heap median trick, and skip-or-take DP. Each in under 2 minutes.

---

## Sprint 3 — Graphs, Advanced Search, and 2D DP (Hours 41–60)

Goal: the patterns that separate Medium from Hard.

### Day 1 — Graph DFS/BFS
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Number of Islands | 200 | Flood fill — count connected components by sinking visited cells |
| 2 | Max Area of Island | 695 | Flood fill that returns a value |
| 3 | Number of Provinces | 547 | Same problem on an adjacency matrix |
| 4 | Rotting Oranges | 994 | Multi-source BFS — start from all sources at once |
| 5 | Pacific Atlantic Water Flow | 417 | Reverse the search — flood from the borders inward |

### Day 2 — Graph Algorithms
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Course Schedule | 207 | Cycle detection via indegree counting (Kahn's) — building and checking are one pass |
| 2 | Course Schedule II | 210 | Same + record the topological order |
| 3 | Clone Graph | 133 | DFS/BFS with a visited map old→copy |
| 4 | Surrounded Regions | 130 | Mark border-connected cells first, then flip the rest |
| 5 | Word Ladder | 127 | BFS for shortest path in an unweighted graph of strings |

### Day 3 — Tries & Advanced Trees
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Implement Trie | 208 | Build it once by hand — every prefix problem gets easy after |
| 2 | Design Add and Search Words | 211 | Trie + wildcard DFS |
| 3 | Kth Smallest Element in a BST | 230 | Inorder traversal visits a BST in sorted order |
| 4 | Validate Binary Search Tree | 98 | Pass min/max bounds down the recursion |
| 5 | Binary Tree Right Side View | 199 | BFS, take the last node of each level |
| 6 | Serialize and Deserialize Binary Tree | 297 | Preorder string encoding with null markers |

### Day 4 — Boundary Search & Search Variants
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Find First and Last Position in Sorted Array | 34 | Two binary searches: lower bound + upper bound. Write both from the invariant |
| 2 | Search Insert Position | 35 | Lower bound by another name |
| 3 | First Bad Version | 278 | Classic `hi = mid` shrink |
| 4 | Capacity To Ship Packages Within D Days | 1011 | Answer-space search with a feasibility check (same shape as Koko) |
| 5 | Median of Two Sorted Arrays | 4 | Partition-based binary search — the Hard worth doing once |

### Day 5 — 2D Dynamic Programming
| Order | Problem | # | Skill it teaches |
|-------|---------|---|------------------|
| 1 | Unique Paths | 62 | dp[r][c] = dp[r−1][c] + dp[r][c−1] — the grid DP template |
| 2 | Longest Common Subsequence | 1143 | 2D DP over two strings — the parent of all string DP |
| 3 | Edit Distance | 72 | Insert/delete/replace as three transitions |
| 4 | Target Sum | 494 | Convert to subset-sum counting |
| 5 | Palindromic Substrings | 647 | Same expand-around-center as Day 5 Sprint 2, now counting |

### Day 6 — Mixed Weakness Day
Redo every Sprint 2–3 problem still on your Redo List. If the list is empty, take the two hardest problems from this sprint and re-derive them from the invariant, out loud.

### Days 7–10 — Drills
- Day 7: Redo session + 2 timed Mediums.
- Day 8: 3 timed Mediums (25 min each), full protocol.
- Day 9: Redo session + 2 timed Mediums.
- Day 10: External mock — Mediums only. Ask for follow-up questions.

**Sprint 3 exit check:** solve an unseen Medium in 25 minutes, narrated, stating complexity unprompted.

---

## Sprint 4 — Interview Simulation (Hours 61–80)

Goal: perform under interview conditions, on the platforms interviews actually use.

### Day 1–2 — Timed Medium Sets
3 Mediums per day, 25 minutes each, chosen at random from the patterns of Sprints 1–3. Full protocol, narrated. Every failure goes on the Redo List with a note on *which step* broke (understanding, pattern choice, implementation, edge cases).

### Day 3 — Company-Tagged Practice
If you have target companies: one month of LeetCode Premium, sort by your company, solve the top 5 frequency-tagged Easy/Mediums. If no targets: the most-frequent problems across all companies.

### Day 4 — Codility Simulation A
90 minutes, one sitting, no pause: 1 Easy + 1 Medium + 1 Hard from the free lessons at app.codility.com/programmers/lessons (Lessons 1–5 pool first). Time budget: 20/30/40 minutes. Before each submit: does your complexity match the one printed in the task? Test empty, minimal, all-equal, negatives, max-N with custom runs.

### Day 5 — Review Simulation A
Grade yourself per task. Re-solve anything under full marks. Note whether time management, edge cases, or performance (wrong complexity) cost you points.

### Day 6 — Frontend Interview Skills
60 minutes: implement debounce, throttle, and `Promise.all` from scratch. 60 minutes: build one UI component live (autocomplete or modal), narrating, with empty/loading/error states.

### Day 7 — Codility Simulation B
Same format, different tasks (include one greedy and one prefix-sums task). Apply every fix from Day 5.

### Day 8 — Spoken Delivery Day
3 Mediums, but the point is narration quality: restate the problem, announce your plan before coding, state complexity unprompted, think out loud during stuck moments, announce short thinking pauses instead of going silent. Record yourself if alone. Review the recording once.

### Day 9 — Redo + Gaps
Clear the Redo List. Then one problem from whichever pattern your drill notes show as weakest.

### Day 10 — Full Mock
One 45–60 minute mock with a human: 2 Mediums, interviewer pushes back, asks "why," asks "what breaks this." Treat it as dress rehearsal: camera on if remote, shared editor, no notes.

**Sprint 4 exit check:** two consecutive Codility-style simulations at ≥ 80% total score with the stated complexity met on Easy and Medium.

---

## Sprint 5 — Consolidation and Targeting (Hours 81–100)

Goal: convert skill into reliability, aim at real targets.

### Days 1–3 — Weak-Pattern Repair
From your drill notes, rank your six weakest patterns. One day per the three weakest: 2 review problems + 1 unseen problem each day. Rebuild the template in your notes from scratch.

### Day 4 — Hard Exposure
2 Hards, time-boxed at 40 minutes each, chosen from patterns you know (e.g., Trapping Rain Water 42 — monotonic stack or two pointers; Merge K Sorted Lists 23 — heap or divide-and-conquer). The goal is not mastery; it's proving Hards decompose into patterns you have.

### Day 5 — Codility Simulation C
Full 90-minute simulation. This one should feel routine.

### Day 6 — Frontend Deep Day
60 minutes: memoize, deep clone, `Array.prototype.flat` polyfill. 60 minutes: live-build a tabs or data-table component with keyboard navigation.

### Days 7–8 — Final Company Pass
Target-company frequency list (or most-frequent overall): 4 problems per day, timed, narrated. Review recent interview reports for your targets and note format quirks (which assessment platform, how many rounds, AI policy).

### Day 9 — Redo List Zero
Every remaining Redo List item, from memory. Anything still failing gets a scheduled redo in 3 days — even if that's after Hour 100.

### Day 10 — Final Full Mock
The strictest mock you can arrange. Afterward, write your own debrief: strongest pattern, weakest pattern, narration quality, time management. That debrief is your maintenance plan for the weeks between prep and interviews.

---

## JS Performance Specialization Track (parallel, ~45 min twice a week)

You already own the prioritization layer (what loads when). This track takes you one level down: how engines execute your code, so every module is as fast as it can be. **Modules 1–3 run alongside Sprints 1–3** (45 min twice a week) and each ends with a portfolio artifact. **Modules 4–5 are the master's study — start them after you're comfortable with algorithms and have begun applying for jobs.** Those artifacts (public benchmark case studies) are how you stand out: almost nobody in frontend can argue from engine internals *and* show measurements.

**The full performance model — four axes, not two:**
1. **Code size** → cold-load cost (parse, compile, network).
2. **Time complexity** → how work scales with input size.
3. **Memory & allocation** → GC pauses. You pay for survivors and allocation *rate*, not short-lived objects. This is the axis most frontend devs ignore, and it's often what eats the 16ms frame budget.
4. **Engine constant factors** → how V8/JavaScriptCore actually execute your code. A O(n) loop can be 50× slower than another O(n) loop depending on shapes, array kinds, and deopts. This module is about seeing that layer.

### Module 1 (during Sprint 1) — Read Code the Way the Engine Does

Concepts:
- V8 tiers code up as it runs: interpreter → baseline JIT → optimizing JIT. JavaScriptCore has its own tier ladder with different thresholds and heuristics. Your "same" code runs differently across browsers because the optimizers speculate differently.
- Optimizers speculate on **stability**: objects with a consistent shape ("hidden class") get fast property access; arrays with consistent element types get fast indexed access. Break stability and the engine throws away its optimized code (deopt).
- The megamorphic cliff: a function that sees 1 shape is fastest; 2–4 shapes slower; 5+ shapes falls off the cliff. Hot functions that touch many object shapes stay slow forever.
- Killers: `delete` on objects (forces dictionary mode), adding properties conditionally after creation, inconsistent property order in constructors, mixed-type or holey arrays.

Exercises:
- Run Node with `--trace-deopt` on a demo: write a constructor that adds a property conditionally, call it in a hot loop, watch the deopt fire. Then initialize all properties in the constructor and watch it disappear.
- Write a hot function called with 5 differently-shaped objects. Then split it into per-shape call sites. Compare with `performance.now()` after warmup.
- Repeat one experiment in Safari. Note where results diverge — that's the cross-engine instinct you're building.

Artifact 1: a short writeup — "I made a hot function N× faster by changing nothing but object shape" — with traces.

### Module 2 (during Sprint 2) — Data Structure Choice as Engineering Decision

Concepts (rules that survive benchmarking):
- Membership checks: `array.includes` is O(n); `Set.has` is ~O(1). But building the Set costs O(n) — so a Set wins for *repeated* lookups on a *growing* collection, not for one lookup. Small arrays are deceptively fast (constant factors, cache locality) — measure before converting.
- `Map` beats plain objects on insertion, iteration, and `delete`; objects win for fixed-shape records with string keys known at write time.
- `push`/`pop` are O(1); `shift`/`unshift` are O(n). Even push+reverse beats unshift. (You already know why from Sprint 1 — now you've measured it.)
- `delete obj.prop` poisons the object's shape → dictionary mode. Set to `undefined` instead, or use a Map.
- String building: modern engines made `+=` as fast as array-join. The old "always join" rule is dead folklore — this is why you re-verify received wisdom.
- TypedArrays: the win is guaranteed layout and no shape speculation, not raw speed over a well-behaved array.

Exercises:
- Build a **benchmark harness you trust**: warmup iterations, return values consumed (or dead-code elimination eats your measurement), varied input data (uniform data lets the JIT specialize unrealistically), multiple runs, median not mean. This harness is the foundation of every future artifact.
- Benchmark: Set vs Array membership at n = 10, 100, 10k, 1M — find where the crossover *actually* is on your machine, in both V8 and JSC.
- Benchmark: `delete` vs `undefined` vs Map deletion in a hot loop.

Artifact 2: "Set vs Array: the crossover isn't where the folklore says" — with your harness published.

### Module 3 (during Sprint 3) — The DOM Is a Data Structure

Concepts:
- `getElementById`/`getElementsBy*` are 2–10× faster than `querySelectorAll`: they're hash lookups or lazy **live** collections; qSA parses a selector and builds a static NodeList eagerly.
- The live-collection footgun: `HTMLCollection.length` re-queries on every access, and mutating matching classes mid-loop can blow up iteration cost massively. If you use live collections, hoist `length` — or better, snapshot.
- `TreeWalker` is native and fast for full-descendant walks, with early exit and subtree pruning (`FILTER_REJECT`) and no array materialization. Hand-written JS recursion wins when your match logic isn't expressible as a selector or you need custom state while walking. Choose by *logic shape*, not by assumed speed.
- The real DOM complexity problem isn't selection — it's **layout**: one forced synchronous layout on a large DOM costs more than thousands of selector calls. Interleaving layout reads (`offsetHeight`, `getBoundingClientRect`) with writes is O(n) layouts = O(n²) behavior. Batch reads, then writes. This is time-complexity thinking applied to rendering — your interview training paying off directly.
- Cache query results you'll reuse; attach per-node metadata with `WeakMap` (not expandos or `Map`) to avoid detached-DOM memory leaks.

Exercises:
- Build a 10k-node DOM. Benchmark qSA vs getElementsBy* vs TreeWalker vs manual recursion for (a) collect-all, (b) find-first-with-early-exit, (c) non-selector matching. You'll find the answer is "it depends on the operation shape" — that's the expertise.
- Deliberately create layout thrashing in a loop; measure it; fix it by batching; measure again. Compare the delta to every selector micro-benchmark you just ran. Feel the two orders of magnitude.

Artifact 3: "Your selector API doesn't matter (and when it does)" — the thrashing-vs-selector comparison is a genuinely counterintuitive, shareable result.

---

# Master's Study (post-application)

Start these once you're comfortable with algorithms and applying for jobs. Modules 1–3 taught you to *see* the engine layer; Modules 4–5 make you dangerous in it. Slow, steady pace — this is background study alongside a job hunt, not a sprint.

### Module 4 (master's study) — Low-Level Fluency: When JS Isn't Enough, and What to Do About It

There's no point judging when JS is enough if you can't act on the answer. This module fuses the decision framework with the ability to execute it: learn a low-level language that imports into JS, then use the framework to decide when to bother.

**The learning path (in order):**

1. **AssemblyScript — the warm-up (2–3 weekends).** TypeScript-flavored syntax that compiles to WebAssembly. The language is nearly free for you; the point is learning the hard *concepts* — linear memory, the JS↔WASM boundary, why marshaling dominates, which data shapes cross well — without learning new syntax at the same time. Know its limits: it's not real TypeScript, the ecosystem is small, and its performance ceiling sits below Rust/Zig-compiled WASM. Flight school, not the destination.
2. **Rust via napi-rs — the main course (real months, not weeks).** The borrow checker is a genuinely different mental model; budget for it. It's worth it because the performance-critical corner of your own ecosystem already lives here: SWC, Biome, Rspack, LightningCSS are Rust with JS bindings, reporting 17–100× on compiler workloads (no GC, safe parallelism, memory control). "Rust for JS tooling" is a resume keyword; AssemblyScript and Zig are not.
3. **Zig — only if you discover you love low-level work.** The easiest *real* systems language: small, fully explicit, tiny WASM binaries, best-in-class C interop, powers Bun. Pre-1.0 with thin docs. Optional side quest, not on the critical path.
4. **Skip C/C++** unless a specific job demands it — Zig covers the same mental model with fewer footguns.

**The decision framework (now backed by ability):**
- The boundary is the cost: a JS↔native call is nanoseconds, but **data marshaling is not** — chatty crossings with big payloads can make native slower than staying in JS. Rule: one big call, zero-copy data (Buffers/TypedArrays), never back-and-forth.
- WASM: portable and sandboxed (the only option in browsers/isolates), roughly 2–4× over JS for compute, loses on data-copy-heavy workloads.
- `worker_threads`: for CPU-bound pure JS, a pool of long-lived workers (~10MB + ~5ms startup each) often beats going native — cores before languages.
- **Go-native triggers (all must hold):** the JS implementation is ≥10× slower than the achievable native floor AND the task is ≥1–10ms of compute per crossing AND you expect ≥5–10× end-to-end gain to repay the maintenance tax. **The tax:** prebuilt binaries per platform, build-pipeline complexity, a second language your team must review, harder on-call debugging.
- Porting guarantees nothing: published rewrites of the same algorithm in Rust range from 1.15× to 115× depending on how well the native version exploits parallelism and memory layout.

Exercises (staged with the learning path):
- **Stage 1 (AssemblyScript):** port one numeric hot function (e.g., a string-similarity or image-scoring kernel) to AssemblyScript/WASM. Measure the crossing cost with tiny vs big payloads until you *feel* the marshaling cliff.
- **Stage 2 (Rust):** take the CPU-heavy JS task you benchmarked earlier and port it with napi-rs, one big zero-copy call. Compare three implementations honestly: pure JS, worker-thread pool, Rust addon. Publish the numbers.
- **Stage 3 (synthesis):** write the go/no-go analysis for a *second* task you chose NOT to port, using the trigger rules and the maintenance tax. Deciding not to port, with numbers, is the senior-engineer move.

Artifact 4: "I ported the same hot function to WASM and Rust so you don't have to guess" — three implementations, one cost model, measured. Compiler/toolchain teams and performance roles both read this as hire-ready.

### Module 5 (master's study) — Micro vs Macro: The Judgment Layer

Concepts:
- **Measure field data, not vibes.** Core Web Vitals are measured at p75 of real users (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1). Lab tools are for diagnosis and CI, not verdicts. Percentiles over averages: p95 is the user you're accidentally breaking.
- Perception thresholds: 16ms frame budget, ~100ms feels instant, ~50ms input budget per task. An optimization users can't perceive is a cost (code complexity) with no benefit — unless it saves infrastructure money.
- Microbenchmarks lie by default: dead-code elimination, missing warmup, uniform test data. Verify in-app or don't trust the number.
- The money bridge: published retail studies tie 0.1s improvements to meaningful conversion lifts — directionally, treat as correlational, but learn to make the argument. Frame your work in revenue or infra dollars and you stop being "the performance person" and become "the person who makes money."
- Hall of shame (optimizations that measured as useless or harmful): string-building via array-join, blanket object pooling (engines improved; Netflix removed theirs), micro-tuning cold code, engine "benchmark special" tricks that gamed synthetic benchmarks while real code got slower. Every one of these was someone confident without a measurement.

Exercises:
- Take one real page. Collect RUM-style data (PerformanceObserver, long tasks, INP events). Rank every performance issue by estimated user impact at p75/p95. Fix only #1. Measure the delta. Write down what you *didn't* fix and why — that list is the skill.
- Apply the four-axis model to your existing prioritization work: for each resource you lazy-load or preload, note which axis it optimizes. Gaps you find are your next blog posts.

Artifact 5: the capstone — a full case study from your client work: baseline → prioritization layer → engine-level module optimization → measured p75/p95 impact → revenue framing. This is the standing-out artifact. Senior frontend roles and frontier-lab tooling teams both read this as "measures first, optimizes second, communicates in business terms."

### Module 6 (master's thesis) — A Purpose-Built QuickJS Runtime for a Templating Language

The capstone of the master's study. Constraint you set for yourself: **built entirely by hand — no AI assistance, documentation and search engines only.** If you're at this module without a job yet, this project is the proof you don't need one to do elite work.

**Thesis statement:** templating engines that let users supply logic (Liquid, Nunjucks, shortcode systems, theme platforms) face a permanent tension — user expressions must be *executed* (they're code) but can't be *trusted* with the host process. The standard answers are crippled expression languages (safe, weak) or heavy sandboxing (strong, expensive). The unexplored middle: a small, embeddable JS engine — QuickJS — stripped and dedicated to one templating language, with a JS bridge library that lets developers pass real JS syntax into the sandbox to extend the template language itself. Safe by construction (memory and instruction limits at the engine level), fast by specialization (no general-purpose runtime overhead), expressive by design (extensions are actual JS, not a parallel mini-language).

**Why this thesis specifically:**
- It exercises everything the master's study built: engine internals (Module 1), data-structure and marshaling judgment (Modules 2, 4), native integration in Rust or C (Module 4's napi-rs path is the natural bridge), and the measurement discipline to prove it (Module 5).
- It sits exactly on your specialty's frontier: theme/templating platforms (e-commerce included) all hit this sandbox-vs-expressiveness wall, and almost no frontend engineers can work at the engine-embedding layer.
- Hand-coding it without AI is itself the credential — verifiable in the commit history, and a story that lands in any interview.

**High-level milestones (no implementation details — you'll write those yourself):**
1. Embed QuickJS and prove you can execute JS in a constrained sandbox with memory and instruction caps.
2. Design the minimal templating language: syntax, compilation target into the sandbox, error surfaces.
3. Build the JS bridge library: the public API by which developers pass JS syntax into the runtime to register extensions — safe, typed, documented.
4. Harden the sandbox: what escapes, what leaks, what a malicious extension can do — enumerate and close.
5. Benchmark against the honest baselines (existing sandboxed and non-sandboxed approaches) across your four axes: cold load, runtime complexity, memory behavior, boundary cost.
6. Write it up as the thesis: design rationale, tradeoffs, measurements, and what you'd do differently.

**Exit criteria:** a working runtime + bridge library with real benchmarks, one demo templating integration (a small theme or static site using it), and the thesis writeup.

Artifact 6: the thesis and the repo. Five case studies got you interviews; this gets you remembered.

---

### Track rules
- **Never optimize without a before/after measurement.** The harness from Module 2 is sacred.
- **Verify folklore personally.** Half of what you "know" about JS performance is engine-version-dependent and expires. Your edge is that you check.
- **Every module ships an artifact.** Five public case studies > any certification.

---

## Maintenance (after Hour 100, until interviews)



- 3 problems a week from the Redo List or weak patterns — 30 minutes each, narrated.
- 1 external mock every 2 weeks.
- 1 Codility-style 90-minute simulation a month.
- Book no assessment until two consecutive simulations pass your exit check.

## If You Fail an Assessment

Waiting periods are typically months. Treat a failure as data: which pattern, which protocol step, which time-management decision broke. Rebuild that piece, run two full simulations, then rebook.
