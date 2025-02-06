---
title: "Reset Launchpad for MacOS"
description: "Command for resetting Launchpad to its default arrangement"
pubDate: "Feb 06 2025"
---

Found this somewhere on Reddit. Thanks u/WorkingZombie2528.

```sh
sudo find 2>/dev/null /private/var/folders/ -type d -name com.apple.dock.launchpad -exec rm -rf {} +; killall Dock
```
