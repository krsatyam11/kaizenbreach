import { BlogPost } from "./types";

export const generalBlogs: BlogPost[] = [
  // ========================= BLOG 1 ========================= //
  {
    slug: "practical-helpdesk-notes",
    title: "Practical Helpdesk Fundamentals (TCM Security Notes)",
    date: "2026-02-10",
    category: "General",
    description: "My structured notes from TCM Security’s Practical Helpdesk course covering IT roles.",
    content: `
# Practical Helpdesk Fundamentals

These are my summarized notes from **TCM Security's Practical Helpdesk course**.  
The course focuses on IT roles, responsibilities, and real-world technical support workflows.

---

## What is IT?

**Information Technology (IT)** is a broad term used for different roles and groups of technologies.  
The main role of IT is to **manage and support technology required for an organization to function smoothly**.

---

## Core Responsibilities of IT

### 1. Technical Support
- Supporting employees with technical issues
- Training users and setting up systems

### 2. Security
- Cybersecurity and physical security
- Protecting systems, data, and infrastructure

### 3. Data Management
- Managing access to data
- Ensuring proper data handling

---

## IT Roles and Job Positions

### IT Director
- Oversees large IT projects and strategy

### IT Manager
- Manages IT staff and operations

### Network Engineer / Administrator
- Maintains routers, switches, and network infrastructure

### System Administrator
- Manages servers, upgrades, and assets

### Application Roles
- Application Manager
- Database Administrator
- Solution Architect

### Project Manager
- Planning, budgeting, documentation, resource allocation

---

## Helpdesk Role (Entry-Level IT Job)

### Responsibilities
- Troubleshooting hardware/software issues
- Password resets
- Installing and fixing hardware
- Customer communication
- Escalation to higher-level teams
- Ticket documentation

---

# How Computers Work (Basic Hardware)

## Transistors & Logic Gates
- Computers use **billions of transistors**
- Logic gates process binary (0 and 1)

---

## Number Systems
- Decimal (Base 10)
- Binary (Base 2)
- Hexadecimal (Base 16)

---

## Bits & Bytes
- Bit = 0 or 1  
- Byte = 8 bits  
- Nibble = 4 bits  

---

## ASCII Encoding
- Converts characters into binary values

---

# Virtualization & Hypervisors

## What is Virtualization?

**Virtualization is the process of creating a software-based version of hardware resources.**  
It allows multiple virtual machines (VMs) to run on a single physical machine.

### Host vs VM
- **Host Machine:** Physical hardware (CPU, RAM, Disk, Network)
- **Virtual Machine:** Software-based system running inside the host

---

## What is a Hypervisor?

A **Hypervisor** is software that splits and allocates hardware resources to virtual machines.

### Hypervisor Functions
- Allocates CPU, RAM, Disk, and Network
- Manages multiple VMs
- Isolates systems from each other

---

## Types of Hypervisors

### Type 1 Hypervisor (Bare Metal)
- Runs directly on hardware (no base OS)
- More efficient and secure
- Used in enterprises

**Examples:**
- VMware ESXi  
- Microsoft Hyper-V  
- Proxmox  

---

### Type 2 Hypervisor (Hosted)
- Runs on top of a base OS
- Used for personal and testing purposes
- Less efficient than Type 1

**Examples:**
- VMware Workstation  
- VirtualBox  

---

## Advantages of Virtualization
- Test different operating systems
- Run multiple OS on one machine
- Cost-effective server usage
- Easy backup using snapshots
- Disaster recovery support

---

# Containers

**Containers are used to virtualize a single application and its dependencies.**

### Key Points
- Lightweight compared to VMs
- Share the host OS kernel
- Used in DevOps and cloud environments

---

# Operating System (OS)

An **Operating System (OS)** manages applications, users, and hardware.

### OS Examples
- Windows  
- Linux  
- macOS  
- Android  
- iOS  

---

## OS Architecture

### Applications
- Web browser
- Video games
- Office software

### OS Kernel
- Core of the OS
- Handles memory, CPU, and hardware interaction

### Hardware
- CPU
- RAM
- Disk
- I/O devices

---

# File System & Abstraction

## File Systems
- NTFS
- FAT32
- ext4

**File systems store metadata and manage how files are stored and retrieved.**

---

## What is Abstraction?

**Abstraction means allocating and separating system resources (like memory and CPU) for multiple applications or users.**

---

## Key Takeaway
Understanding virtualization, hypervisors, OS architecture, and abstraction is essential for IT support and cybersecurity labs.
`
  },

  // ========================= BLOG 2 ========================= //
  {
    slug: "laptop-desktop-components-helpdesk",
    title: "Laptop & Desktop Components Installation and Replacement (Helpdesk Notes)",
    date: "2026-02-12",
    category: "General",
    description: "Practical helpdesk notes on replacing and installing laptop and desktop components with troubleshooting ticket examples.",
    content: `
# Laptop & Desktop Components Installation & Replacement

These notes are part of **Practical Helpdesk Fundamentals** and focus on real-world hardware handling.

---

# Electrostatic Discharge (ESD) Safety

**ESD can permanently damage computer components.**

## How to Prevent ESD
- Use an **ESD wrist strap**
- Use an **ESD mat**
- Work on **ESD-resistant surfaces**
- Touch only the **edges of components**
- Touch the **metal case** to discharge static electricity

---

# CPU Installation (Desktop)

## Steps
1. Open CPU socket lever
2. Align the triangle marker on CPU with motherboard socket
3. Place CPU gently (do not force)
4. Apply **thermal paste**
5. Install CPU cooler and connect fan cable

---

# RAM Installation

## DDR RAM Types
- DDR3
- DDR4
- DDR5  
**Always check motherboard compatibility**

## Steps
1. Open RAM slot clips
2. Align notch with slot
3. Push until clips lock

---

# Storage Devices

## Types
- HDD (Hard Disk Drive)
- SSD (Solid State Drive)
- NVMe SSD (M.2)

## SATA Connector
- Used for HDD and SATA SSD
- Requires power + data cable

---

# Power Supply Unit (PSU)

## Notes
- Higher efficiency PSU = less heat
- Always unplug PSU before opening PC
- Do NOT open PSU internally (dangerous)
- Check PSU switch position (ON/OFF)

---

# Motherboard (MOBO) Notes

- Clear CMOS to reset BIOS settings
- Identify ports and connectors
- Label cables while assembling

---

# Common Hardware Troubleshooting Ticket Example

## Ticket Example: Computer Will Not Power On

### Steps to Troubleshoot
1. Check power cable is plugged in
2. Check PSU switch is ON
3. Test wall socket or power bar
4. Check motherboard power connectors
5. Reset CMOS battery
6. Test with known working PSU
7. Replace motherboard if needed

---

# Real Helpdesk Scenario Example

**User Ticket:**  
"My desktop is not turning on. No display and no fan noise."

### Technician Action Plan:
- Verify power source and cable
- Check PSU switch and voltage selector
- Reseat RAM and power connectors
- Test with spare PSU
- Escalate if motherboard is faulty

---

## Key Takeaway

Helpdesk technicians must understand **hardware installation, ESD safety, and structured troubleshooting workflows**.  
Documenting every step in tickets is critical for IT operations.
`
  },

  // ========================= BLOG 3 (NEW) ========================= //
  {
    slug: "it-support-sysadmin-notes",
    title: "IT Support & Systems Administration Notes (Windows, Linux, Networking & Security)",
    date: "2026-02-24",
    category: "General",
    description:
      "My detailed systems administration and IT support notes covering Windows, Linux, networking fundamentals, Active Directory, and real-world troubleshooting concepts.",
    content: `
# IT Support & Systems Administration Notes

These are my **extended structured notes for IT Support and System Administration**.  
This section covers **Windows, Linux, networking fundamentals, security concepts, and enterprise IT workflows**.

---

# Windows Operating System & Virtualization

## VirtualBox Setup (Running Windows in a Lab)

**Virtualization allows me to run multiple operating systems on a single physical computer.**  
This is extremely important for IT labs, cybersecurity testing, and practice environments.

### Why Virtual Machines Are Important
- Practice without breaking the real system
- Safe malware testing environment
- Learn enterprise OS setups
- Cost-effective alternative to buying multiple computers

---

## Installing Windows in VirtualBox

### Steps
1. Download **Oracle VirtualBox**
2. Download **Windows 11 Evaluation ISO**
3. Create a new VM and attach the ISO
4. Complete Windows installation normally

---

## Guest Additions (Post-Installation Setup)

**Guest Additions are drivers for the virtual machine.**

### Why Guest Additions Matter
- Improves screen resolution
- Enables clipboard sharing
- Enables file sharing
- Makes VM feel like a real PC

### Setup Steps
- Devices → Insert Guest Additions CD Image  
- Run VBoxWindowsAdditions-amd64 as Admin  
- Enable Auto-resize Guest Display  
- Use Full Screen Mode (Host Key + F)

---

## Snapshots (Time Travel Feature)

### What is a Snapshot?
A **snapshot is a saved state of a VM that can be restored later.**

### Why Snapshots Matter
- Roll back after breaking the system
- Malware testing recovery
- Safe experimentation

### How to Use
- Machine → Take Snapshot  
- Restore by selecting snapshot and clicking Restore

---

# User Accounts in Windows

## Local Accounts
- Stored on a single computer
- Used for personal or standalone PCs

## Domain Accounts
- Stored on a **Domain Controller**
- Used in enterprises
- Allows login on any company computer

### Why Domain Accounts Exist
- Centralized control
- Easy employee onboarding/offboarding
- Security policy enforcement

---

# Administering Windows Users

## Control Panel Method
Control Panel → User Accounts → Manage another account

## Advanced Method (lusrmgr.msc)
- Users → Individual accounts
- Groups → Assign permissions in bulk

### Real Ticket Example
**Task:** Create user, give admin access, force password reset  
**Action:**  
- Create user  
- Add to Administrators group  
- Enable "User must change password at next logon"

---

# File Permissions & Security in Windows

## NTFS Permissions
- Files inherit permissions from parent folders
- Disable inheritance for custom security control

### Why File Permissions Matter
- Prevent data leaks
- Restrict confidential files
- Meet compliance requirements

---

# Windows Updates

## Patch Tuesday
- Security updates released on **second Tuesday of every month**
- Fix vulnerabilities and exploits

---

# Logs & Troubleshooting

## Event Viewer
Used to troubleshoot:
- Login failures
- Application crashes
- System errors

## Device Manager
Used to:
- Install drivers
- Update hardware drivers
- Fix missing devices

---

# Core Windows Admin Tools

## Task Manager
- Monitor CPU, RAM, Disk
- Kill frozen applications

## Windows Services
- Manage background services
- Start/Stop/Automatic/Manual

## Windows Registry
### What
A hierarchical database storing OS and application settings.

### Why
Controls Windows behavior at low level.

### How
Use regedit to modify keys (⚠ dangerous if misused).

---

# Linux Operating System Fundamentals

## What is Linux?
Linux is a **kernel**, and GNU tools make it usable.  
Different versions are called **distributions (distros)**.

### Common Distros
- Ubuntu
- Debian
- Fedora
- Kali Linux

---

# Linux Terminal Basics

## Core Commands
- pwd → show current directory
- ls → list files
- cd → change directory
- mkdir → create folder
- touch → create file
- cat → read file
- man → command documentation

---

# Linux User Privileges

## Root User
Root = superuser with full system control.

### Why NOT to Use Root Daily
- Can delete system files accidentally
- Security risk if compromised

Use **sudo** instead for admin tasks.

---

# Linux Filesystem Structure

## Key Directories Explained

- /etc → Configuration files
- /home → User directories
- /root → Root user home
- /bin → Basic commands
- /sbin → System admin commands
- /var → Logs and variable data
- /boot → Boot loader files
- /dev → Hardware devices
- /tmp → Temporary files
- /proc → Kernel process info
- /usr → Applications and utilities
- /opt → Third-party software

---

# Linux File Permissions

## Permission Format Example
\`-rw-rw-r--\`

### Meaning
- Owner → rw-
- Group → rw-
- Others → r--

### Numeric Values
- Read = 4
- Write = 2
- Execute = 1

Example: rwx = 7

---

## Changing Permissions
- chmod → change permissions
- chown → change owner
- chgrp → change group

---

# Bash Scripting Basics

## Shebang
\`#!/bin/bash\` tells system it's a bash script.

## Variables
\`date=$(date +%F)\`

## Output
\`echo "Current date: $date"\`

---

# Package Management

## Updating System
- sudo apt update → refresh package list
- sudo apt upgrade → install updates

## Installing Software
- sudo apt install appname
- sudo apt remove appname

---

# Networking Fundamentals

## Network Flow
PC → LAN → Router → ISP → Internet

---

## IP vs MAC

### MAC Address
- Physical hardware address

### IP Address
- Logical network address

---

## Private IP Ranges
- 10.0.0.0/8
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0/16

---

# OSI Model (Networking Theory)

## Why OSI Exists
- Standard troubleshooting framework
- Helps isolate network issues

## Layers (Bottom to Top)
1. Physical → cables
2. Data Link → switches, MAC
3. Network → routers, IP
4. Transport → TCP/UDP
5. Session → session control
6. Presentation → encryption, compression
7. Application → HTTP, FTP, SMTP

---

# VPN (Virtual Private Network)

## What
Creates encrypted tunnel over internet.

## Why
- Remote work
- Secure browsing
- Bypass restrictions

---

# Networking Commands

- ping → connectivity test
- ipconfig → IP info
- tracert → packet route
- netstat → open ports
- arp -a → IP to MAC mapping

---

# SSH (Secure Remote Login)

## Key-Based Authentication

### Why SSH Keys?
- More secure than passwords
- Prevent brute-force attacks

### Steps
- ssh-keygen
- Copy public key to server
- Add to authorized_keys
- Connect using ssh user@ip

---

# IT Operations & Helpdesk Workflows

## Ticketing System Workflow
1. Ticket creation
2. Assignment
3. Troubleshooting
4. Documentation
5. Resolution and closure

---

## Helpdesk Communication Tips
- Be clear and calm
- Avoid jargon
- Never skip steps
- Reproduce issue on your own system

---

# Security Fundamentals

## CIA Triad

### Confidentiality
Only authorized users access data.

### Integrity
Data remains unchanged and trustworthy.

### Availability
Systems and data are accessible when needed.

---

# Identity and Access Management (IAM)

## SSO (Single Sign-On)
Login once, access multiple services.

## MFA (Multi-Factor Authentication)
Password + device or biometric verification.

### Why MFA Matters
Passwords alone are easily compromised.

---

# Active Directory (Enterprise Core)

## What is Active Directory?
Microsoft directory service for centralized management.

## Why Organizations Use AD
- Centralized user management
- Group policies
- Computer management
- Security enforcement

## Domain Controller
Server running Active Directory database (NTDS.DIT).

---

# Key Takeaway

System administration and helpdesk roles require **Windows, Linux, networking, security, and communication skills**.  
Building lab environments and understanding enterprise tools like Active Directory is critical for cybersecurity and IT careers.
`
  }
];