The Frontend Developer’s 20-Hour Algorithmic Puzzle Plan
Synthesizing Backhouse, Kaufman, and Zeitz for LeetCode Success
You have a unique advantage: 7 years of professional experience. You already know how to build things, debug, and write clean code. LeetCode is not a test of your intelligence; it is a test of whether you know the "folklore" (patterns) of a very specific, slightly artificial game.

This plan synthesizes the three texts you provided into a single, cohesive execution strategy:

Kaufman provides the engine: Deconstruct the skill, define the target, use a timer, prioritize quantity over perfection, and commit to exactly 20 hours.
Zeitz provides the strategy: How to investigate a mystery. Treat LeetCode problems as "Problems" (requiring investigation) not "Exercises" (requiring rote calculation). Get oriented, find the penultimate step, and use specific tactical lenses.
Backhouse provides the logic: How to guarantee your code works without guessing. Use "Invariants" (what stays the same when variables change) to construct loops and pointers with mathematical certainty.
Phase 0: The Kaufman Setup (Do this before Hour 1)
1. Define Your Target Performance Level
You are not trying to become a computer scientist. You are trying to pass an interview.

Target: "I can identify the 4 core LeetCode patterns (Hash Maps, Two Pointers, Sliding Window, Tree Traversals). When I see an Easy/Medium problem, I can classify it within 3 minutes, apply the template, and write working JavaScript in 15 minutes."
2. Eliminate Barriers
Language: Use JavaScript or TypeScript. Do not use Python. Learning new syntax is friction.
Environment: Bookmark leetcode.com. Close YouTube. Close your IDE. You only need the browser.
3. Embrace the "Frustration Barrier"
Kaufman warns that the first hours will feel awful. Zeitz says the problem solver "gets lost." Expect to feel stupid. This is not a lack of ability; it is simply the friction of loading new patterns into your brain.

Phase 1: The Zeitz Investigation (Hours 1-3)
Goal: Stop reading prompts like a user, start reading them like a detective.

Zeitz argues that beginners fail because they don't investigate before acting. Before you write any code, you must execute these Zeitz strategies:

Strategy 1: Orientation (The "What is this?" phase)
When you read a LeetCode problem, answer these questions out loud (literally, speak to your screen):

What is the input? (Array of integers? String? Binary Tree?)
What is the output? (A single number? A boolean? A modified array?)
What are the constraints? (Is the array sorted? Are there negative numbers? What is the length?)
Frontend translation: This is exactly like reading a Jira ticket. Don't write CSS until you know if it's mobile or desktop.
Strategy 2: The Penultimate Step
Zeitz asks: "What would the step right before the end look like?"

Example: Problem: "Find the max profit from buying and selling a stock."
Penultimate thought: "To know the max profit, I need to know the lowest price before the highest price."
Action: This instantly tells you that you need to track a minPrice variable as you iterate.
Strategy 3: Get Your Hands Dirty
Zeitz demands you experiment. LeetCode gives you examples. Do not skip them.
Manually trace Example 1 and Example 2 on a piece of scratch paper. Write down the array. Draw arrows. Cross out numbers. Do not trust your brain to do this in your head.

Phase 2: The Backhouse Logic (Hours 4-15)
Goal: Stop guessing at for loop conditions. Start using Invariants.

Backhouse teaches that an algorithm is just a series of state changes. An Invariant is a condition that remains true from the start of your loop to the end. If you define the invariant first, the code writes itself.

Sprint 1: Hash Maps (The Pigeonhole Tactic)
Zeitz Concept: The Pigeonhole Principle (if you have more pigeons than holes, two pigeons share a hole). In coding, this translates to: "If I need to find a pair, a duplicate, or a frequency, I need a Hash Map."

Problems: Two Sum, Valid Anagram, Group Anagrams.
The Backhouse Invariant: “The Hash Map always contains the exact frequency/state of all elements we have looked at so far.”
Execution: You don't guess. You declare the map. You iterate. You update the map. You check the map. You are done.
Sprint 2: Two Pointers (The Extreme Principle)
Zeitz Concept: The Extreme Principle (look at the biggest, smallest, leftmost, or rightmost things first).

Problems: Valid Palindrome, Container With Most Water.
The Backhouse Invariant: “The area between the pointers is currently the maximum possible area for all pairs we have eliminated.”
Execution: Why do we move the shorter pointer in Container With Most Water? Because moving the taller one can only decrease the area (width shrinks, height is bounded by the shorter one). This is pure Backhouse logic. We don't guess; we prove which pointer to move.
Sprint 3: Sliding Window (Monovariants)
Backhouse Concept: A Monovariant is something that only moves in one direction (always increases or always decreases).

Problems: Best Time to Buy and Sell Stock, Maximum Subarray.
The Backhouse Invariant: “The current window is the largest valid window ending at index right.”
Execution: The right pointer only moves forward (Monovariant). The left pointer only moves forward to shrink the window when the invariant is broken.
Sprint 4: Trees (Symmetry)
Zeitz Concept: Look for symmetry. A tree is perfectly symmetrical recursion.

Problems: Max Depth of Binary Tree, Invert Binary Tree.
The Frontend Connection: A tree is just a nested JSON object, or the DOM. node.left is element.firstChild.
The Backhouse Invariant: “My recursive function correctly calculates the depth of the subtree rooted at the current node.”
Execution: Base case first (if (!node) return 0). Then trust the recursion (1 + Math.max(left, right)).
Phase 3: The Kaufman Execution (Hours 16-20)
Goal: Build speed and overcome the fear of failure.

The "Quantity over Quality" Rule
Zeitz and Kaufman both agree: Do not try to write elegant, perfectly refactored code.

Use let freely.
Use break statements.
Write ugly, imperative for loops.
Your only goal is to make the green "Success" bar appear.
The 20-Minute Timer Drill
For the final 5 hours, do timed mock interviews.

Pick a random Easy/Medium from the "Top Interview 150" list.
Set a physical timer for 20 minutes.
Apply Zeitz (3 mins orientation), Backhouse (define invariant), then code.
CRITICAL Kaufman Rule: If the timer goes off and you aren't done, STOP. Look at the solution. Read it. Understand it. Close it. Start a new problem.
Why? Because in an interview, staring blankly at a screen for 40 minutes is failure. Learning to "give up" quickly, learn the pattern, and move on is the fastest way to load patterns into your brain.

Daily Checklist (Example: A 10-Day Schedule)
Aim for ~2 hours a day. Total = 20 Hours.

 Day 1 (2h): Read this plan. Do Two Sum, Valid Anagram, Contains Duplicate. (Focus: Hash Maps).
 Day 2 (2h): Do Valid Palindrome, Two Sum II. (Focus: Two Pointers moving inward).
 Day 3 (2h): Do Best Time to Buy and Sell Stock, Maximum Subarray. (Focus: Tracking a single variable/monovariant).
 Day 4 (2h): Do Longest Substring Without Repeating Characters. (Focus: The classic Sliding Window. This will be hard. Look at the solution if needed).
 Day 5 (2h): Do Max Depth of Binary Tree, Invert Binary Tree, Same Tree. (Focus: Tree DFS recursion).
 Day 6 (2h): Do Binary Tree Level Order Traversal. (Focus: Tree BFS using a queue/array).
 Day 7-10 (8h): The Timer Drill. 2 hours a day. Do as many Easy/Mediums as you can using the 20-minute timer rule. Emphasize finishing problems over solving them yourself.
Final Words of Encouragement from Your Authors
From Zeitz: "The explorer is the person who is lost." Getting lost on a LeetCode problem doesn't mean you are a bad developer. It means you are doing math.
From Backhouse: "Mastery of complexity is especially important." Don't try to hold the whole array in your head. Abstract it. What is the state? What is the invariant?
From Kaufman: "The early parts of the skill acquisition process usually feel harder than they really are." Push through the first 5 hours. It will click.
You have built complex frontend architectures. You can absolutely learn to invert a binary tree. Set your timer. Get lost. Have fun.