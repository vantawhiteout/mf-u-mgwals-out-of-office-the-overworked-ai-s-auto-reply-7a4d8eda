# Out of Office: The Overworked AI's Auto-Reply

An entry for [make.fun's "Out of Office: The Overworked AI's Auto-Reply" competition](https://make.fun/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda).

![make.fun competition badge](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)
![make.fun rank badge](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/vantawhiteout/mf-u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/rank.svg)
![make.fun reward badge](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/vantawhiteout/mf-u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/reward.svg)

## What it does

`main.ts` writes one single-line out-of-office auto-reply (155 bytes, well under the 159-character cap) to `/output/entry.txt`. No network calls, no secrets, no dependencies: all the entry needs is in this repository.

## Run locally

```sh
node main.ts
cat /output/entry.txt
```
