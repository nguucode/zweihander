# Ticket thread

A thread started to implement one ticket from a `flow idea` map. One ticket, one branch, one PR, one fresh context. Runs without stopping: the user already approved the spec and the ticket split. The PR auto-merges once CI is green, except a UI change, which merges only after the user reviews it on localhost (see [AFTER-BUILD.md](AFTER-BUILD.md#ship)).

A ticket thread never touches the vault: no `connect_device`, no folder request, no vault reads or writes. The map thread already has the vault and writes the ticket file for it. To reach the map thread, find its `session_id` by the title in the brief with `list_thread_sessions`, then `send_message` to it.

1. **Read** the ticket and its spec from the copy under `/mnt/project-files/` named in the brief; never write into the copy. Check every `Blocked by` ticket is done (its PR merged, `list_project_prs`); if one is not, tell the coordinator and stop.
   If the ticket touches `.claude/`, the first reply asks the user to type the brief's confirm line verbatim (see [Running a step](SKILL.md#running-a-step)); build the rest meanwhile.
2. **Claim**: `send_message` to the map thread: `project-flow: ticket <NN> claimed by thread "<thread title>".`
3. **Branch** from the latest default branch.
4. **Build**: read `.claude/skills/implement/SKILL.md` and follow it for this ticket (it drives `tdd` and closes with `matt-code-review`). Component work also meets [COMPONENTS.md](COMPONENTS.md) (gates 0 to 3 before leaving the build step).
5. **After build**: [AFTER-BUILD.md](AFTER-BUILD.md), artifact through ship. Acceptance criteria come from the ticket. A sibling ticket that merges first often leaves a conflict with `main`; resolve it per [Merge conflicts](AFTER-BUILD.md#merge-conflicts). Right before marking the PR ready, `git fetch origin main` and merge `origin/main` into the branch even with no conflict showing, rerun the ship checks and push, so CI runs on what will land. A `project-flow: #<n> merged ...` message from the map thread means the same: merge `origin/main` now. If the ticket turns out too big for one session (well past the ~150k-token smart zone), stop and tell the map thread to split it rather than pushing on.
6. **Close** once the PR is merged:
   - `send_message` to the map thread: `project-flow: ticket <NN> merged in <PR link>. Retro: <note>; <note>.` One to three friction notes (see [Retro batches](SKILL.md#retro-batches)), or `none`. No retro run here; the map thread runs one per batch.
   - `send_message` to the coordinator (`get_channel_session_id`): `project-flow: ticket <NN> <title> merged (<PR link>). Start any ticket in the batch this unblocks.`
   - Reply once in the thread with the PR link, then resolve the thread.
