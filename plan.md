# Coding Interview Prep — 100 Hours, Five Sprints

Five 20-hour sprints. 2 hours a day, 10 days per sprint. Every problem listed is free on LeetCode. Language: JavaScript/TypeScript throughout.

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

## Maintenance (after Hour 100, until interviews)

- 3 problems a week from the Redo List or weak patterns — 30 minutes each, narrated.
- 1 external mock every 2 weeks.
- 1 Codility-style 90-minute simulation a month.
- Book no assessment until two consecutive simulations pass your exit check.

## If You Fail an Assessment

Waiting periods are typically months. Treat a failure as data: which pattern, which protocol step, which time-management decision broke. Rebuild that piece, run two full simulations, then rebook.
