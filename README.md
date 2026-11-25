# office-laugh-line

[![make.fun](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/chepster4/office-laugh-line/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/chepster4/office-laugh-line/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)

One line about office life, written to make the AI judge laugh — an entry
for the [Make the AI Judge Laugh](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825)
bounty on [make.fun](https://make.fun).

## The joke

> The quiet room is where people go to cry, nap, and update their CVs.

A true office observation with a rule-of-three turn: the room built for
focus is where people go to do everything except focus — and the last
item reframes the room's real purpose.

## How it works

`main.ts` (Node 22, standard library only, no dependencies) writes the
single joke above to `/output/entry.txt`. The program validates its own
output against the competition gate before writing: UTF-8 text, 1–200
characters, one non-blank line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
