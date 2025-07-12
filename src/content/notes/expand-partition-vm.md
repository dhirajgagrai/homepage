---
title: "Expand Ubuntu partition inside VM"
description: "Commands to allocate unpartitioned disk space"
pubDate: "Feb 11 2025"
---

Increasing the size of disk from VM will create unpartitioned space.
We need to manually allocate the space within the OS to fully utilize the storage.
<br><br>
Show disk device:

```sh
lsblk
```

Note the device name. Example is `nvme0n1` given below.

```
NAME                      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sr0                        11:0    1 1024M  0 rom
nvme0n1                   259:0    0   60G  0 disk
├─nvme0n1p1               259:1    0  953M  0 part /boot/efi
├─nvme0n1p2               259:2    0  1.8G  0 part /boot
└─nvme0n1p3               259:3    0 XX.XG  0 part
  └─ubuntu--vg-ubuntu--lv 252:0    0 XX.XG  0 lvm  /
```

Show partition number:

```sh
sudo parted /dev/nvme0n1 print free
```

Note the partition number at the end.

```
Number  Start   End     Size    File system  Name  Flags
        17.4kB  1049kB  1031kB  Free Space
 1      1049kB  1000MB  999MB   fat32              boot, esp
 2      1000MB  2879MB  1879MB  ext4
 3      2879MB  XX.XGB  XX.XGB
```

Use the `growpart` to expand the logical space:

```sh
sudo growpart /dev/nvme0n1 3
```

Finally use the `lvextend` and `resize2fs` utility on `ubuntu--vg-ubuntu--lv` disk:

```sh
sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```
