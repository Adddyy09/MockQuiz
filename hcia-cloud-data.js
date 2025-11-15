export const quizData = [
    // Part 1: Single-Answer Multiple Choice (Questions 1-24)
    {
        id: 1,
        type: 'mc',
        question: "On a FusionAccess system with 2,000 users, how many vAGs need to be deployed?",
        options: ["A. 2", "B. 3", "C. 4", "D. 5"],
        answer: "D. 5",
        explanation: "A common deployment recommendation for high availability and load balancing is to deploy N+1 vAGs, where N is the number of required active gateways. For 2,000 users, a conservative design might use 4 active vAGs (500 users each) plus 1 for standby, totaling 5."
    },
    {
        id: 2,
        type: 'mc',
        question: "Which of the following components on FusionAccess does not have backup data?",
        options: ["A. ITA", "B. HDC", "C. VAG", "D. VLB"],
        answer: "D. VLB",
        explanation: "The vLB (Virtual Load Balancer) component's configuration is derived from other components like the HDC. It is considered stateless because its configuration can be regenerated and does not contain unique data that requires its own backup."
    },
    {
        id: 3,
        type: 'mc',
        question: "On FusionAccess, if the CPU resources of a desktop are insufficient, which of the following operations is recommended?",
        options: ["A. Delete the desktop and provision a desktop that meets the user's requirements", "B. Upgrade the desktop to a VIP desktop", "C. Modify the desktop specifications to meet the user's requirements", "D. Migrate the desktop to another cluster"],
        answer: "C. Modify the desktop specifications to meet the user's requirements",
        explanation: "FusionAccess allows for the online modification of virtual desktop specifications (like CPU and memory) to adjust resources according to user needs without having to delete and recreate the desktop."
    },
    {
        id: 4,
        type: 'mc',
        question: "On FusionAccess, which of the following methods is recommended to disable the recording and playback of music and games at important meetings?",
        options: ["A. Disabling device redirection", "B. Disabling audio redirection", "C. Disabling clipboard redirection", "D. Disabling SC/TC playback devices"],
        answer: "B. Disabling audio redirection",
        explanation: "Disabling the audio redirection policy prevents audio data from being transmitted between the client terminal and the virtual desktop, effectively disabling all audio."
    },
    {
        id: 5,
        type: 'mc',
        question: "When configuring a virtual environment during FusionAccess initial configuration, which of the following IP addresses is 'FusionCompute IP'?",
        options: ["A. VRM floating IP address", "B. IP address of the CNA host where the VRM is located", "C. IP address of the active VRM", "D. IP address of the CNA host where the active VRM is located"],
        answer: "A. VRM floating IP address",
        explanation: "The 'FusionCompute IP' is the management IP of the virtualization platform. In a high-availability deployment, this is the floating IP of the VRM cluster to ensure continuous management access."
    },
    {
        id: 6,
        type: 'mc',
        question: "Which of the following FusionAccess components runs on virtual desktops?",
        options: ["A. HDC", "B. HDA", "C. WI", "D. ITA"],
        answer: "B. HDA",
        explanation: "The HDA (Huawei Desktop Agent) is a software agent installed inside each virtual desktop's operating system to communicate with the HDC."
    },
    {
        id: 7,
        type: 'mc',
        question: "On FusionAccess, when the Backup Server does not have enough space, which of the following operations will be performed by the system?",
        options: ["A. Automatically delete all backup data", "B. Delete the backup data generated 10 days ago", "C. Delete the backup data over the past 10 days", "D. Delete the earliest backup data"],
        answer: "D. Delete the earliest backup data",
        explanation: "The backup system employs a first-in, first-out (FIFO) policy, deleting the oldest backup files to make room for new ones."
    },
    {
        id: 8,
        type: 'mc',
        question: "On FusionCompute, which of the following is not a function of VM Tools?",
        options: ["A. Provides virus isolation for VMs", "B. Collecting CPU usage of a VM", "C. Provides high-performance disk I/O for VMs", "D. Online adjustment of VM CPU specifications"],
        answer: "A. Provides virus isolation for VMs",
        explanation: "VM Tools provides drivers and management enhancements but does not include antivirus or security isolation features."
    },
    {
        id: 9,
        type: 'mc',
        question: "In Huawei virtualization suite, which of the following is used to provide disaster recovery (DR) services?",
        options: ["A. eBackup", "B. VRM", "C. UltraVR", "D. KRM"],
        answer: "C. UltraVR",
        explanation: "UltraVR is Huawei's disaster recovery management software that integrates with FusionCompute to provide DR solutions."
    },
    {
        id: 10,
        type: 'mc',
        question: "On Linux, which of the following is an absolute path representing a file storage location?",
        options: ["A. /home/test", "B. ../test", "C. ../../test", "D. home/test"],
        answer: "A. /home/test",
        explanation: "An absolute path in Linux always starts from the root directory, which is represented by a forward slash (`/`)."
    },
    {
        id: 11,
        type: 'mc',
        question: "Which of the following is the default file system on openEuler?",
        options: ["A. ext4", "B. xfs", "C. NTFS", "D. FAT32"],
        answer: "A. ext4",
        explanation: "ext4 (fourth extended filesystem) is the default file system for the openEuler distribution."
    },
    {
        id: 12,
        type: 'mc',
        question: "Which of the following options is used by a router to calculate the packet forwarding path?",
        options: ["A. Routing table", "B. MAC address table", "C. ACL", "D. Whitelist"],
        answer: "A. Routing table",
        explanation: "A router uses its routing table, which contains network destinations and next-hop information, to make forwarding decisions."
    },
    {
        id: 13,
        type: 'mc',
        question: "The configuration of an interface on a switch is as follows:\ninterface g0/0/1\nport link trunk\nport trunk allow-pass vlan 10 11 12\nWhen a data frame tagged with VLAN ID 20 passes through this interface, which of the following actions will the switch take?",
        options: ["A. Forward the data frame without removing the VLAN tag", "B. Discard the data frame", "C. Remove the VLAN tag and forward the data frame", "D. Change the VLAN tag to the default one and forward the data frame"],
        answer: "B. Discard the data frame",
        explanation: "The command `port trunk allow-pass vlan 10 11 12` configures the trunk port to only permit frames with VLAN tags 10, 11, or 12. A frame with VLAN tag 20 will be discarded."
    },
    {
        id: 14,
        type: 'mc',
        question: "As a company has strict regulations on employees' permissions, which of the following methods is recommended for VLAN assignment?",
        options: ["A. Interface-based assignment", "B. MAC address-based assignment", "C. Protocol-based assignment", "D. IP subnet-based assignment"],
        answer: "B. MAC address-based assignment",
        explanation: "MAC address-based VLAN assignment binds a specific device to a VLAN regardless of the physical port it connects to, providing a higher level of security and control."
    },
    {
        id: 15,
        type: 'mc',
        question: "Which class of IPv4 addresses is used for multicast?",
        options: ["A. Class A", "B. Class B", "C. Class C", "D. Class D"],
        answer: "D. Class D",
        explanation: "Class D addresses, ranging from 224.0.0.0 to 239.255.255.255, are reserved for multicast traffic."
    },
    {
        id: 16,
        type: 'mc',
        question: "Which of the following is the the basic unit of RAID 2.0?",
        options: ["A. CK", "B. CKG", "C. Volume", "D. Extent"],
        answer: "A. CK",
        explanation: "In Huawei's RAID 2.0+ architecture, disks are divided into fixed-size data blocks called Chunks (CKs). These CKs are the basic units for virtualization and data distribution."
    },
    {
        id: 17,
        type: 'mc',
        question: "Which of the following methods costs the highest to store 10 TB data?",
        options: ["A. RAID 0", "B. RAID 1", "C. RAID 5", "D. RAID 6"],
        answer: "B. RAID 1",
        explanation: "RAID 1 (mirroring) requires double the raw storage capacity (20 TB of disks to store 10 TB of data), making it the most expensive in terms of disk cost per usable capacity."
    },
    {
        id: 18,
        type: 'mc',
        question: "Which of the following is a unique performance metric of HDDs?",
        options: ["A. Capacity", "B. Rotational speed", "C. IOPS", "D. Data transmission rate"],
        answer: "B. Rotational speed",
        explanation: "Rotational speed (RPM) is a key characteristic of Hard Disk Drives (HDDs) that impacts performance. SSDs do not have this metric."
    },
    {
        id: 19,
        type: 'mc',
        question: "Which of the following interacts with IPMI to manage computers?",
        options: ["A. BIOS", "B. BMC", "C. OS", "D. UEFI"],
        answer: "B. BMC",
        explanation: "The BMC (Baseboard Management Controller) is a microcontroller that uses the IPMI standard to provide out-of-band server management."
    },
    {
        id: 20,
        type: 'mc',
        question: "Which of the following drives provides the best read and write performance in ideal working conditions?",
        options: ["A. SATA", "B. SAS", "C. NL-SAS", "D. SSD"],
        answer: "D. SSD",
        explanation: "Solid-State Drives (SSDs) have no moving parts, resulting in significantly lower latency and higher IOPS compared to traditional spinning disks."
    },
    {
        id: 21,
        type: 'mc',
        question: "In modern computers, CPUs cannot directly read data from disks. Instead, the data must be first read to which of the following devices?",
        options: ["A. Cache", "B. Memory", "C. Register", "D. Arithmetic logic unit"],
        answer: "B. Memory",
        explanation: "Data from storage disks is loaded into the main system memory (RAM), from which the CPU can access it quickly."
    },
    {
        id: 22,
        type: 'mc',
        question: "Which of the following is the input/output device of a computer?",
        options: ["A. CPU", "B. Memory", "C. Drive", "D. Mouse"],
        answer: "D. Mouse",
        explanation: "A mouse is a classic input device used to send signals to the computer. CPU, Memory, and Drives are core components, not I/O peripherals in the same sense."
    },
    {
        id: 23,
        type: 'mc',
        question: "Which of the following components is not a must for a server?",
        options: ["A. CPU", "B. Power supply", "C. Display", "D. Fan"],
        answer: "C. Display",
        explanation: "Servers are often managed remotely (headless) and do not require a dedicated display to function. CPU, power, and cooling (fans) are essential."
    },
    {
        id: 24,
        type: 'mc',
        question: "A multinational group has built its own data center and deployed HCS (HUAWEI CLOUD Stack). To meet business expansion requirements, a new resource pool is created on HUAWEI CLOUD and managed together with the HCS. Which of the following cloud computing deployment modes is used by the group?",
        options: ["A. Public cloud", "B. Private cloud", "C. Hybrid cloud", "D. Hybrid public cloud"],
        answer: "C. Hybrid cloud",
        explanation: "A hybrid cloud combines a private cloud (on-premises HCS) with a public cloud (HUAWEI CLOUD), allowing them to be managed as a single, integrated environment."
    },
    // Part 2: Multiple-Answer Questions (Questions 25-42)
    {
        id: 25,
        type: 'mc',
        multi: true,
        question: "Which of the following statements about adding VMs to a domain are correct when creating a desktop cloud VM template?",
        options: ["A. When creating a Full Copy VM template, you need to add the VM to a domain", "B. When creating a Linked Clone VM template, you need to add the VM to a domain", "C. When creating a QuickPrep VM template, you need to add the VM to a domain", "D. When creating a Kylin Linux VM template, you need to add the VM to a domain"],
        answer_set: ["B. When creating a Linked Clone VM template, you need to add the VM to a domain", "C. When creating a QuickPrep VM template, you need to add the VM to a domain"],
        explanation: "For both Linked Clone and QuickPrep provisioning methods, the template VM is typically joined to the domain. This allows the cloned desktops to inherit the domain membership and be managed correctly."
    },
    { id: 26, type: 'mc', multi: true, question: "Which of the following access modes are supported by FusionAccess?", options: ["A. TC", "B. SC", "C. Mobile terminal", "D. VNC"], answer_set: ["A. TC", "B. SC", "C. Mobile terminal", "D. VNC"], explanation: "FusionAccess supports a wide range of access methods, including dedicated Thin Clients (TC), Software Clients (SC) on PCs, mobile apps, and even standard protocols like VNC for basic access." },
    { id: 27, type: 'mc', multi: true, question: "Which of the following desktop groups support 'Add User (Group)'?", options: ["A. Assign a computer to a user", "B. Assign a computer to multiple users", "C. Static pool", "D. Dynamic pool"], answer_set: ["C. Static pool", "D. Dynamic pool"], explanation: "The 'Add User (Group)' function is used to assign users to pools of desktops, which applies to both Static and Dynamic pools." },
    { id: 28, type: 'mc', multi: true, question: "On FusionAccess, which of the following methods are used by virtual desktops to obtain IP addresses?", options: ["A. DHCP assignment", "B. Manual assignment", "C. DNS resolution", "D. Template address"], answer_set: ["A. DHCP assignment", "B. Manual assignment"], explanation: "Virtual desktops, like physical machines, can have their IP addresses configured manually or assigned automatically by a DHCP server." },
    { id: 29, type: 'mc', multi: true, question: "Which of the following statements are true about FusionCompute installation?", options: ["A. CNA hosts can be installed in PXE mode or by mounting ISO images", "B. CNA hosts must be deployed on physical machines", "C. VRM nodes can be deployed on VMs by using a specified tool or by mounting ISO images", "D. It is recommended that VRM nodes be deployed on VMs"], answer_set: ["A. CNA hosts can be installed in PXE mode or by mounting ISO images", "B. CNA hosts must be deployed on physical machines", "D. It is recommended that VRM nodes be deployed on VMs"], explanation: "CNA (the hypervisor) must be installed on bare-metal physical servers, via PXE or ISO. It is recommended to deploy the VRM (the manager) as a VM for flexibility and HA. The option to deploy VRM via ISO on a VM is not a standard procedure." },
    { id: 30, type: 'mc', multi: true, question: "In command line mode of Vim, which of the following are used to save the file and exit the current editor?", options: ["A. :wq", "B. :q", "C. :wq!", "D. :q!"], answer_set: ["A. :wq", "C. :wq!"], explanation: ":wq writes (saves) and quits. :wq! forces the write and quits." },
    { id: 31, type: 'mc', multi: true, question: "What are the common modes of Vim?", options: ["A. Normal mode", "B. Insert mode", "C. Command line mode", "D. Privileged mode"], answer_set: ["A. Normal mode", "B. Insert mode", "C. Command line mode"], explanation: "Vim's primary modes are Normal, Insert, and Command-line. Privileged mode is not a standard Vim concept." },
    { id: 32, type: 'mc', multi: true, question: "Which of the following Linux distributions are developed based on openEuler?", options: ["A. Kylin V10", "B. iSoft v5.1", "C. Eulix OS", "D. CentOS 7.3"], answer_set: ["A. Kylin V10", "B. iSoft v5.1", "C. Eulix OS"], explanation: "Kylin V10, iSoft v5.1, and Eulix OS are all commercial distributions built upon openEuler. CentOS is based on RHEL." },
    { id: 33, type: 'mc', multi: true, question: "Which of the following statements about Linux operating system directories and their storage contents are correct?", options: ["A. /bin: Stores binary executable programs", "B. /dev: Stores Linux external device files", "C. /lib: Stores the Linux dynamic connection shared library", "D. /etc: Stores core files during Linux startup"], answer_set: ["A. /bin: Stores binary executable programs", "B. /dev: Stores Linux external device files", "C. /lib: Stores the Linux dynamic connection shared library"], explanation: "/etc stores configuration files, not startup core files (which are in /boot)." },
    { id: 34, type: 'mc', multi: true, question: "Which of the following items should be included in complete route information?", options: ["A. Destination network", "B. Next-hop address", "C. Source network address", "D. Destination subnet and mask"], answer_set: ["A. Destination network", "B. Next-hop address", "D. Destination subnet and mask"], explanation: "A complete route entry in a routing table specifies the destination network, its subnet mask, and the next-hop address to which packets for that destination should be forwarded." },
    { id: 35, type: 'mc', multi: true, question: "Which of the following actions may a switch take on data frames?", options: ["A. Flood", "B. Forward", "C. Discard", "D. Block"], answer_set: ["A. Flood", "B. Forward", "C. Discard"], explanation: "A Layer 2 switch will forward a frame to a known port, flood it to all ports if the destination is unknown, and discard it if it's corrupted or violates a policy." },
    { id: 36, type: 'mc', multi: true, question: "Which of the following devices can query the routing table?", options: ["A. Router", "B. Firewall", "C. Layer 2 switch", "D. Layer 3 switch"], answer_set: ["A. Router", "B. Firewall", "D. Layer 3 switch"], explanation: "Routers, Layer 3 switches, and Firewalls all operate at Layer 3 and use routing tables. A Layer 2 switch uses a MAC address table." },
    { id: 37, type: 'mc', multi: true, question: "Which of the following configurations are sufficient for packets to be sent from a PC and forwarded to the VLAN 30 network?", options: ["A. port link-type access / port default vlan 30", "B. port link-type trunk / port trunk allow-pass vlan 30", "C. port link-type hybrid / port hybrid tagged vlan 30", "D. port link-type hybrid / port hybrid pvid vlan 30 / port hybrid untagged vlan 30"], answer_set: ["A. port link-type access / port default vlan 30", "D. port link-type hybrid / port hybrid pvid vlan 30 / port hybrid untagged vlan 30"], explanation: "An access port or a properly configured hybrid port can connect an end device like a PC to a specific VLAN." },
    { id: 38, type: 'mc', multi: true, question: "If optical fibers are used to carry storage services, which of the following storage network types can be used?", options: ["A. IP-SAN", "B. FC-SAN", "C. DAS", "D. FAN"], answer_set: ["A. IP-SAN", "B. FC-SAN", "C. DAS"], explanation: "Fibre Channel SAN (FC-SAN) and IP-SAN (like iSCSI) can run over optical fiber. Direct-Attached Storage (DAS) can also use fiber optic connections (e.g., via a Fibre Channel HBA) to connect a server directly to a storage device." },
    { id: 39, type: 'mc', multi: true, question: "RAID uses the parity check algorithm (XOR) for data verification. Which of the following XOR functions have a result of 0?", options: ["A. 0 XOR 0 XOR 0", "B. 0 XOR 0 XOR 1", "C. 1 XOR 0 XOR 0", "D. 1 XOR 0 XOR 1"], answer_set: ["A. 0 XOR 0 XOR 0", "D. 1 XOR 0 XOR 1"], explanation: "The XOR operation results in 0 if there is an even number of 1s in the input." },
    { id: 40, type: 'mc', multi: true, question: "Which of the following drives transmit data in serial mode?", options: ["A. SATA", "B. SAS", "C. NL-SAS", "D. SSD"], answer_set: ["A. SATA", "B. SAS", "C. NL-SAS", "D. SSD"], explanation: "SATA, SAS, and NL-SAS are all serial protocols. SSDs also connect via serial interfaces like SATA or SAS." },
    { id: 41, type: 'mc', multi: true, question: "Based on the service models for cloud computing, which of the following items are considered the running environment of applications?", options: ["A. Operating system", "B. Dependency library for application running", "C. CPU and memory", "D. Middleware"], answer_set: ["A. Operating system", "B. Dependency library for application running", "D. Middleware"], explanation: "The application running environment (PaaS) includes the OS, middleware, and libraries. CPU and memory are part of the underlying infrastructure (IaaS)." },
    { id: 42, type: 'mc', multi: true, question: "Which of the following statements describe computing resources without virtualization?", options: ["A. The operating system is closely coupled with hardware", "B. Computing resources are abstracted as computing resource pools", "C. The operating system running does not require hardware", "D. Computing resources are independent of each other"], answer_set: ["A. The operating system is closely coupled with hardware", "D. Computing resources are independent of each other"], explanation: "Without virtualization, the OS is installed directly on the hardware, and each physical server is an isolated, independent resource." },

    // Part 3: True or False (Questions 43-50)
    { id: 43, type: 'tf', question: "A server has ten disks. Among them, two disks form a RAID 1 group, seven disks form a RAID 5 group, and the other one is configured as the hot spare disk. If any disk in the RAID groups fails, the hot spare disk automatically replaces the faulty disk, ensuring the system redundancy. This hot spare disk is a global hot spare disk.", options: ["True", "False"], answer: "True", explanation: "A global hot spare is a standby disk that can be used to replace a failed disk in any RAID group within the system, which matches the description." },
    { id: 44, type: 'tf', question: "Both FusionCompute and FusionAccess support the rights separation mode, which effectively improves system security.", options: ["True", "False"], answer: "True", explanation: "Both platforms support role-based access control (RBAC) or rights separation to create different roles with specific, limited permissions." },
    { id: 45, type: 'tf', question: "Centralized storage means that all disks are centrally deployed in a cabinet. Distributed storage means that disks are deployed in different cabinets.", options: ["True", "False"], answer: "False", explanation: "The key difference is architectural. Centralized storage has dedicated controllers, while distributed storage uses software to pool disks from multiple independent nodes. Physical location is not the defining characteristic." },
    { id: 46, type: 'tf', question: "In FusionCompute, a pair of VRM nodes must be deployed each time a cluster is created.", options: ["True", "False"], answer: "False", explanation: "A pair of VRM nodes manages the entire FusionCompute site (which can contain multiple clusters). You do not deploy new VRM nodes for each new cluster." },
    { id: 47, type: 'tf', question: "If a desktop on FusionAccess needs to call the camera of a terminal, device redirection is recommended.", options: ["True", "False"], answer: "True", explanation: "Device redirection is the policy used to map peripherals like cameras from the local client to the remote virtual desktop." },
    { id: 48, type: 'tf', question: "Each VM in a full copy VM group has a system disk, and the VM template type is full copy.", options: ["True", "False"], answer: "True", explanation: "This is the definition of a full copy desktop group. Each VM is a complete, independent clone with its own system disk." },
    { id: 49, type: 'tf', question: "On FusionAccess, if a Linux desktop is assigned to multiple users, users can log in to the desktop at the same time.", options: ["True", "False"], answer: "False", explanation: "While Linux is a multi-user OS, standard FusionAccess desktop assignments typically bind a single desktop session to a single user at a time for resource management and isolation, even if the underlying OS supports more." },
    { id: 50, type: 'tf', question: "HDP enables FusionAccess components communication and real-time data synchronization. It also ensures that components deployed in active/standby mode can obtain the status of each other at any time.", options: ["True", "False"], answer: "False", explanation: "While HDP is the user-facing display protocol, the internal communication, data synchronization, and high-availability status checks between management components are handled by an internal message bus, not HDP." },

    // Part 4: Fill-in-the-Blank (Converted to MC)
    { id: 51, type: 'mc', question: "In a computer, the (_______________________) is a basic, important, and indispensable connection device. It provides functions such as data transmission and reception, data encapsulation and decapsulation, link management, encoding, and decoding.", options: ["A. CPU", "B. Motherboard", "C. NIC", "D. Power Supply"], answer: "C. NIC" },
    { id: 52, type: 'mc', question: "Ideally, it takes (_______________________) seconds for a computer to read a 10 GB file over a 2 Gbit/s link.", options: ["A. 5", "B. 20", "C. 40;forty", "D. 80"], answer: "C. 40;forty", explanation: "Calculation: 10 GB = 10 * 8 Gbit = 80 Gbit. Time = Total Data / Speed = 80 Gbit / 2 Gbit/s = 40 s." },
    { id: 53, type: 'mc', question: "On a communication network, the MAC address table is maintained by a (_______________________).", options: ["A. Hub", "B. Router", "C. switch", "D. Firewall"], answer: "C. switch" },
    { id: 54, type: 'mc', question: "In TCP/IP-based data communication, a (_______________________) header will be added to the data that passes through the transport layer.", options: ["A. IP", "B. Ethernet", "C. TCP", "D. MAC"], answer: "C. TCP" },
    { id: 55, type: 'mc', question: "On Linux, everything is a (_______________________).", options: ["A. process", "B. file", "C. socket", "D. command"], answer: "B. file" },
    { id: 56, type: 'mc', question: "Linux provides the graphical user interface (GUI) and (_______________________) for users to interact with the system.", options: ["A. API", "B. SDK", "C. BIOS", "D. CLI;Command Line Interface"], answer: "D. CLI;Command Line Interface" },
    { id: 57, type: 'mc', question: "On FusionAccess, the vLB implements load balancing when a user accesses the (_______________________).", options: ["A. HDC (Huawei Desktop Controller)", "B. vAG (Virtual Access Gateway)", "C. WI", "D. ITA (IT Adapter)"], answer: "C. WI" },
    { id: 58, type: 'mc', question: "A (_______________________) desktop group randomly assigns a VM to a user during the first login of the user, and then the VM is bound to the user. A user can be bound to only one VM.", options: ["A. dynamic", "B. static pool", "C. full copy", "D. linked clone"], answer: "B. static pool" },
    { id: 59, type: 'mc', question: "On FusionAccess, the (_______________________) component is used for service access and self-service maintenance.", options: ["A. HDC (Huawei Desktop Controller)", "B. VAG", "C. Backup Server", "D. HDA (Huawei Desktop Agent)"], answer: "B. VAG", explanation: "The vAG (Virtual Access Gateway) is the component that handles external user access. The WI (Web Interface) is the portal, but the vAG is the gateway for the actual service connection." },
    { id: 60, type: 'mc', question: "In the cloud computing service model, (_______________________) means that cloud platform provides servers, storage devices, networks, and virtual resources, and users only need to pay attention to the system and application layers.", options: ["A. Platform as a Service (PaaS)", "B. Software as a Service (SaaS)", "C. Function as a Service (FaaS)", "D. IaaS;Infrastructure as a Service"], answer: "D. IaaS;Infrastructure as a Service" }
];