import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Welcome</Title>
      <h1>Welcome Dracula!</h1>

      <p>DevOps Interview Questions<br />

        
Q1) Can you tell us the fundamental differences between DevOps &amp; Agile?</p>

<p>A: Although DevOps shares some similarities with the Agile methodology, which is one of the most popular SDLC methodologies, both are fundamentally different approaches to software development. Following are the various fundamental differences between the two:</p>

<p>Agile Approach &ndash; The agile approach is only meant for development in Agile while the Devops approach is meant for both development and operations in DevOps.</p>

<p>Practices and Processes &ndash; While agile involves practices such as Agile Scrum and Agile Kanban, DevOps involves processes such as CD (Continuous Delivery), CI (Continuous Integration), and CT (Continuous Testing).</p>

<p>Priority &ndash; Agile prioritizes timeliness whereas, DevOps gives equal priority to timeliness and quality.</p>

<p>Release Cycles &ndash; DevOps offers smaller release cycles with immediate feedback while Agile offers only smaller release cycles without immediate feedback.</p>

<p>Feedback Source &ndash; Agile relies on feedback from customers while feedback from self (monitoring tools) is involved in DevOps.</p>

<p>Scope of Work &ndash; For Agile, the scope of work is agility only but for DevOps, it is agility and the need for automation.</p>

<p>Q2) Why do we need DevOps?</p>

<p>A: Organizations these days are trying to transport small features to customers via a series of release trains instead of releasing big feature sets. There are several benefits of doing so, including better software quality and quick customer feedback.</p>

<p>All such benefits lead to a higher level of customer satisfaction, which is the most important goal for any product development project. To do so, companies need to:</p>

<p>Increase deployment frequency<br />
Lessen lead time between fixes<br />
Lower failure rate of new releases<br />
In case of new release crashing, have a faster mean time to recovery<br />
DevOps helps in fulfilling all these requirements and thus, achieving seamless software delivery. Full-fledged organizations like Amazon, Etsy, and Google have adopted DevOps methodology resulting in achieving performance levels that were previously uncharted.</p>

<p>With the adoption of DevOps methodology, organizations are able to accomplish tens to thousands of deployments in a single day. Moreover, doing so while offering first-rate reliability, security, and stability.</p>

<p>Q3) What are the important business and technical benefits of using DevOps?</p>

<p>A: DevOps brings a lot of business and technical benefits to the table. Some of the most important ones are listed down as follows:</p>

<p>Business benefits:</p>

<p>Enhanced operating environment stability<br />
Faster delivery of features<br />
More time for adding value to the product<br />
Technical benefits:</p>

<p>Continuous software delivery<br />
Faster problem resolution<br />
Lesser complex problems<br />
Q4) Can you name some of the most-used DevOps tools?</p>

<p>A: Following is a list of some of the most widely used DevOps tools:</p>

<p>Ansible &ndash; A configuration management and application deployment tool<br />
Chef &ndash; A configuration management and application deployment tool<br />
Docker &ndash; A containerization tool<br />
Git &ndash; A version control system (VCS) tool<br />
Jenkins &ndash; A continuous integration (CI) tool<br />
Jira &ndash; An agile team collaboration tool<br />
Nagios &ndash; A continuous monitoring tool<br />
Puppet &ndash; A configuration management and application deployment tool<br />
Selenium &ndash; A continuous testing (CT) tool<br />
Q5) What is Selenium used for?</p>

<p>A: Selenium is used for continuous testing in DevOps. The tool specializes in functional and regression forms of testing.<br />
Q6) What do you understand by Puppet in DevOps?</p>

<p>A: It is a configuration management tool that is used for automating administration tasks. Puppet makes use of the Master-Slave architecture in which the two entities communicate via an encrypted channel.</p>

<p>System admins need to perform a lot of repetitive tasks, notably installing and configuring servers. Writing scripts for automating such tasks is an option but it becomes hectic when the infrastructure is large. Configuration management is a great workaround for this.</p>

<p>Puppet helps in configuring, deploying, and managing servers. Not only does it make such redundant tasks easier but also cuts a significant portion of the total work time. The mature configuration management tool:</p>

<p>Continuously checks whether the needed configuration for a host is in place or not. If altered, the configuration is automatically reverted back<br />
Defines distinct configurations for every host<br />
Does dynamic scaling (up and down) of machines<br />
Provides control over all the configured machines so that a centralized change can automatically get propagated to all of them<br />
Q7) What do you understand by anti-patterns of DevOps?</p>

<p>A: When a DevOps pattern commonly adopted by other organizations doesn&rsquo;t work in a specific context and still the organization continues using it, it leads to the adoption of an anti-pattern. In other words, anti-patterns are myths about DevOps. Some of the notable anti-patterns are:</p>

<p>An organization needs to have a separate DevOps group<br />
Agile equals DevOps<br />
DevOps is a process<br />
DevOps is development-driven release management<br />
DevOps is not possible because the organization is unique<br />
DevOps is not possible because the people available are unsuitable<br />
DevOps means Developers Managing Production<br />
DevOps will solve all problems<br />
Failing to include all aspects of the organization in an ongoing DevOps transition<br />
Not defining KPIs at the start of a DevOps transition<br />
Reduce the silo-based isolation of development and operations with a new DevOps team that silos itself from other parts of the organization<br />
Q8) DevOps has something called CI. What is it and what is its purpose?</p>

<p>A: CI in DevOps stands for Continuous Integration. CI is a development practice in which developers integrate code into a shared repository multiple times in a single day.</p>

<p>Continuous Integration of development and testing enhances the quality of the software as well as reducing the total time required for delivery.</p>

<p>The developer has broken the build if a team member checking in code runs into a compilation failure. As such, other developers are not able to sync with the shared source code repository without introducing compilation errors into their own workspaces.</p>

<p>This disrupts the collaborative and shared development process. Hence, as soon as a CI build breaks, it&rsquo;s important to identify and correct the problem immediately.</p>

<p>Typically, a CI process includes a suite of unit, integration, and regression tests that run each time the compilation succeeds. In case any of the aforesaid tests fail, the CI build is considered unstable (which is common during an Agile sprint when development is ongoing) and not broken.</p>

<p>Q9) More often than not we hear shift left in DevOps. What is it?</p>

<p>A: The traditional software development lifecycle when graphed on a paper has two sides, left and right. While the left side of the graph includes design and development, the right side includes production staging, stress testing, and user acceptance.</p>

<p>To shift left in DevOps simply means the necessity of taking as many tasks on the right i.e. that typically happens toward the end of the application development process and incorporate them into earlier stages of a DevOps methodology.</p>

<p>There are several ways of accomplishing a shit left in DevOps, most notably:<br />
Create production-ready artifacts at the end of every Agile sprint<br />
Incorporating static code analysis routines in every build<br />
The level of doing the DevOps the right way is directly dependent on the degree of shifting left as much as possible.</p>

<p>Q10) What does CAMS in DevOps stand for?</p>

<p>A: The acronym CAMS is usually used for describing the core creeds of DevOps methodology. It stands for:</p>

<p>Culture</p>

<p>Automation</p>

<p>Measurement</p>

<p>Sharing</p>

<p>Q11) What are the several KPIs used to gauge DevOps success?</p>

<p>A: KPIs is a contracted form of Key Performance Indicators. In order to measure the success of a DevOps process, several KPIs can be used. Some of the most popular ones are:</p>

<p>Application performance</p>

<p>Application usage and traffic</p>

<p>The automated test pass percentage</p>

<p>Availability</p>

<p>Change volume</p>

<p>Customer tickets</p>

<p>Defect escape rate</p>

<p>Deployment frequency</p>

<p>Deployment time</p>

<p>Error rates</p>

<p>Failed deployments</p>

<p>Lead time</p>

<p>Meantime to detection (MTTD)</p>

<p>Mean time to recovery (MTTR)</p>

<p>Q12) In your opinion, what are the major benefits of implementing DevOps automation?</p>

<p>A: Following are the major benefits of implementing DevOps automation:</p>

<p>Removal of the possibility of human error from the CD equation (Core benefit)</p>

<p>As tasks become more predictable and repeatable, it is easy to identify and correct when something goes wrong. Hence, it results in producing more reliable and robust systems</p>

<p>Removes bottlenecks from the CI pipeline. It results in increased deployment frequency and decreased number of failed deployments. Both of them are important DevOps KPIs</p>

<p>Q13) What do you understand by containers?</p>

<p>A: Containers are a form of lightweight virtualization that help in providing isolation among processes. Containers are heavier than a chroot but lighter than a hypervisor.<br />
Q14) Microservices are a core part of DevOps. Can you name any two popular Java development frameworks for creating microservices?</p>

<p>A: There are several Java frameworks that allow creating microservices. However, Eclipse MicroProfile and Spring Boot stand out from the herd as the two leading Java development frameworks used in DevOps for creating microservices.<br />
Q15) What do you understand by a Version Control System (VCS)? Define its uses.</p>

<p>A: A Version Control System or VCS is a system that is capable of recording changes made to a file or a group of files over time. Git and Mercurial are two of the most popular version control systems. Important uses of a VCS are:</p>

<p>Check what was the last modification that caused a problem</p>

<p>Compare the changes made over time</p>

<p>Identifying who introduced a new issue and at what time</p>

<p>Revert a file or files to some earlier state</p>

<p>Revert the complete project to a previous state</p>

<p>Q16) Git is a popular DevOps tool. Tell us how you will revert a commit that has already been pushed and made public.</p>

<p>A: There are two ways of doing so:</p>

<p>By creating a new commit to undo all changes made by the commit that has already been pushed and made public. Following command is used for doing so:</p>

<p>git revert</p>

<p>By fixing or removing the bad file in a new commit and then pushing it to the remote repository. After making necessary changes to the file, commit it to the remote repository using the command:</p>

<p>git commit -m &ldquo;commit message&rdquo;</p>

<p>Q17) What are post mortem meetings?</p>

<p>A: Many times there is a need to discuss what went wrong during a DevOps process. For this, post mortem meetings are arranged. These meetings yield steps that should be taken to avoid the same failure or set of failures in the future for which the meeting was arranged in the first place.<br />
Q18) Draw a comparison between Asset Management and Configuration Management.</p>

<p>A: The process of monitoring as well as maintaining things of value to an entity or group is called an Asset Management.<br />
Configuration Management refers to the process of controlling, identifying, planning for, and verifying the configuration items within service in support of Change Management.</p>

<p>Q19) Can you state and explain various key elements of continuous testing?</p>

<p>A: Various key elements of continuous testing are:</p>

<p>Advanced analysis &ndash; Used for forecasting and predicting unknown future events<br />
Policy analysis &ndash; Meant for improving the testing process<br />
Requirement traceability &ndash; Refers to the ability to describe as well as follow the life of a requirement, from its origin to deployment<br />
Risk assessment &ndash; The method or process of identifying hazards and risk factors that can cause potential damage<br />
Service virtualization &ndash; Allows using virtual services instead of production services. Emulates software components for simple testing<br />
Test optimization &ndash; Improve the overall testing process<br />
Q20) Please explain the core operations of DevOps in terms of development and infrastructure.</p>

<p>A: Core operations of DevOps in terms of development and infrastructure are:</p>

<p>Application development &ndash; Developing a product that is able to meet all customer requirements and offers a remarkable level of quality<br />
Code coverage &ndash; Measurement of the total number of blocks or lines or arcs of the code executed while the automated tests are running<br />
Code developing &ndash; Prepare the code base required for the product development<br />
Configuration &ndash; Allowing the product to be used in an optimum way<br />
Deployment &ndash; Installing the software to be used by the end-user<br />
Orchestration &ndash; Arrangement of several automated tasks<br />
Packaging &ndash; Activities involved when the release is ready for deployment<br />
Provisioning &ndash; Ensuring that the infrastructure changes arrive just-in-time with the code that requires it<br />
Unit testing &ndash; Meant for testing individual units or components<br />
Q21) What Do You Know about DevOps?</p>

<p>Your answer must be simple and straightforward. Begin by explaining the growing importance of DevOps in the IT industry. Discuss how such an approach aims to synergize the efforts of the development and operations teams to accelerate the delivery of software products, with a minimal failure rate. Include how DevOps is a value-added practice, where development and operations engineers join hands throughout the product or service lifecycle, right from the design stage to the point of deployment.<br />
Q22) Why Has DevOps Gained Prominence over the Last Few Years?</p>

<p>Before talking about the growing popularity of DevOps, discuss the current industry scenario. Begin with some examples of how big players such as Netflix and Facebook are investing in DevOps to automate and accelerate application deployment and how this has helped them grow their business. Using Facebook as an example, you would point to Facebook&rsquo;s continuous deployment and code ownership models and how these have helped it scale up but ensure the quality of experience at the same time. Hundreds of lines of code are implemented without affecting quality, stability, and security.</p>

<p>Your next use case should be Netflix. This streaming and on-demand video company follow similar practices with fully automated processes and systems. Mention the user base of these two organizations: Facebook has 2 billion users while Netflix streams online content to more than 100 million users worldwide.</p>

<p>These are great examples of how DevOps can help organizations to ensure higher success rates for releases, reduce the lead time between bug fixes, streamline and continuous delivery through automation, and an overall reduction in manpower costs.</p>

<p>Q23) Which Are Some of the Most Popular DevOps Tools? Do You Have Experience Working with Any of These Tools?</p>

<p>The more popular DevOps tools include:</p>

<p>Selenium<br />
Puppet<br />
Chef<br />
Git<br />
Jenkins<br />
Ansible<br />
Docker<br />
Q24) Do You Want to Master All These Devops Tools?</p>

<p>Thoroughly describe any tools that you are confident about, what it&rsquo;s abilities are and why you prefer using it. For example, if you have expertise in Git, you would tell the interviewer that Git is a distributed Version Control System (VCS) tool that allows the user to track file changes and revert to specific changes when required. Discuss how Git&rsquo;s distributed architecture gives it an added edge where developers make changes locally and can have the entire project history on their local Git repositories, which can be later shared with other team members.<br />
Q25) What Is Version Control and Why Should VCS Be Used?</p>

<p>Define version control and talk about how this system records any changes made to one or more files and saves them in a centralized repository. VCS tools will help you recall previous versions and perform the following:</p>

<p>Go through the changes made over a period of time and check what works versus what doesn&rsquo;t.</p>

<p>Revert specific files or specific projects back to an older version.<br />
Examine issues or errors that have occurred due to a particular change<br />
Using VCS gives developers the flexibility to simultaneously work on a particular file and all modifications can be logically combined later.</p>

<p>Q26) Is There a Difference Between Agile and DevOps? If Yes, Please Explain.</p>

<p>As a DevOps Engineer, interview questions like this are quite expected. Start by describing the obvious overlap between DevOps and Agile. Although the implementation of DevOps is always in sync with Agile methodologies, there is a clear difference between the two. The principles of Agile are associated with seamless production or development of a piece of software. On the other hand, DevOps deals with the development, followed by deployment of the software, ensuring faster turnaround time, minimum errors, and reliability.<br />
Q27) Why Are Configuration Management Processes and Tools Important?</p>

<p>Talk about multiple software builds, releases, revisions, and versions for each software or testware that is being developed. Move on to explain the need for storing and maintaining data, keeping track of development builds and simplified troubleshooting. Don&rsquo;t forget to mention the key CM tools that can be used to achieve these objectives. Talk about how tools like Puppet, Ansible, and Chef help in automating software deployment and configuration on several servers.<br />
Q28) How Is Chef Used as a CM Tool?</p>

<p>The chef is considered to be one of the preferred industry-wide CM tools. Facebook migrated its infrastructure and backend IT to the Chef platform, for example. Explain how Chef helps you to avoid delays by automating processes. The scripts are written in Ruby. It can integrate with cloud-based platforms and configure new systems. It provides many libraries for infrastructure development that can later be deployed within a software. Thanks to its centralized management system, one Chef server is enough to be used as the center for deploying various policies.<br />
Q29) How Would You Explain the Concept of &ldquo;Infrastructure as Code&rdquo;(IaC)?</p>

<p>It is a good idea to talk about IaC as a concept, which is sometimes referred to as a programmable infrastructure, where infrastructure is perceived in the same way as any other code. Describe how the traditional approach to managing infrastructure is taking a back seat and how manual configurations, obsolete tools, and custom scripts are becoming less reliable. Next, accentuate the benefits of IaC and how changes to IT infrastructure can be implemented in a faster, safer and easier manner using IaC. Include the other benefits of IaC like applying regular unit testing and integration testing to infrastructure configurations, and maintaining up-to-date infrastructure documentation.</p>

<p>If you have completed a certification on Amazon Web Services (AWS), and are interviewing for niche roles such as AWS-certified DevOps engineer, here are some AWS DevOps interview questions that you must be prepared for:</p>

<p>Q30) What Is the Role of AWS in DevOps?</p>

<p>When asked this question in an interview, get straight to the point by explaining that AWS is a cloud-based service provided by Amazon that ensures scalability through unlimited computing power and storage. AWS empowers IT enterprises to develop and deliver sophisticated products and deploy applications on the cloud. Some of its key services include Amazon CloudFront, Amazon SimpleDB, - - - Amazon Relational Database Service, and Amazon Elastic Computer Cloud. Discuss the various cloud platforms and emphasize any big data projects that you have handled in the past using cloud infrastructure.<br />
Q31) How Is IaC Implemented Using AWS?</p>

<p>Start by talking about the age-old mechanisms of writing commands onto script files and testing them in a separate environment before deployment and how this approach is being replaced by IaC. Similar to the codes written for other services, with the help of AWS, IaC allows developers to write, test, and maintain infrastructure entities in a descriptive manner, using formats such as JSON or YAML. This enables easier development and faster deployment of infrastructure changes.</p>

<p>Go through this Simplilearn video on &ldquo;DevOps Interview Questions&rdquo; delivered by our DevOps certification expert that will help you crack any interview.</p>

<p>Q32) What are the success factors for Continuous Integration?</p>

<p>Examples of answers:<br />
Maintain a code repository<br />
Automate the build<br />
Make the build self-testing<br />
Everyone commits to the baseline every day<br />
Every commit (to baseline) should be built<br />
Keep the build fast<br />
Test in a clone of the production environment<br />
Make it easy to get the latest deliverables<br />
Everyone can see the results of the latest build<br />
Automate deployment<br />
Q33) How would you implement CI (continuous delivery) - end to end, including source control, branches, tools, etc. ?</p>

<p>Q34) What is Continious Delivery? Continious Deployment?</p>

<p>Q35) What is the difference between Continuous Integration, Continious Delivery and Continious Deployment?</p>

<p>Q36) What&rsquo;s the difference between git and github ? What about git and SVN ?</p>

<p>Q37) What is git rebase?</p>

<p>Q38) In Git how do you revert a commit that has already been pushed and made public?</p>

<p>Q39) What is puppet/chef/ansible used for? What are the advantages over shell scripts ?</p>

<p>Q40) What do you understand by &ldquo;Infrastructure as code&rdquo;? How does it fit into the DevOps methodology? What purpose does it achieve?</p>

<p>Q41) How do you give your developers access to the production logs ?</p>

<p>Q42) Tell me about the worst-run/best-run outage you&rsquo;ve been a part of. What made it bad/well-run?</p>

<p>Q43) How do you monitor your application ? How do you make sure it is working ? How do you get alerts when it stops working ?</p>

<p>Q44) What would be the availability and performance metrics for a key value store ? What about for MySQL replication ?</p>

<p>Q45) How would you deploy software to 5000 systems?</p>

<p>Q46) What is caching ? Where should a large scale application cache, and what data should be cached ?</p>

<p>Programming:<br />
Q1) What is your favorite scripting/programming language(s)? Why ?</p>

<p>Q2) General CS, algorithms Q&amp;A: 5 minutes</p>

<p>Q3) Data structures - discuss possible implementations and applications:</p>

<p>Binary tree<br />
Hash map<br />
Heap<br />
Q4) Complexity classes - discuss and give examples:</p>

<p>Linear<br />
Polynomial<br />
NP Complete / NP Hard<br />
Q5) Sorting algorithms - discuss:</p>

<p>What is the fastest sorting algorithm?<br />
What is the complexity of quick sort?<br />
Q6) Distributed systems:</p>

<p>What&rsquo;s Paxos?<br />
What&#39;s Raft?<br />
What&rsquo;s consistent hashing?<br />
Q7) Hands-on coding:</p>

<p>Inverse a string in place<br />
Q8) Deep Concept of DP and Graphs:</p>

<p>Q9) Development Coding Questions.</p>

<p>Q10) Describe a dev/test/production workflow using GIT</p>

<p>Feature branching vs trunk based development<br />
Advantages of requiring pull requests and approvals<br />
Q11) More on Front-end Developer Job Interview Questions</p>

<p>OS-LINUX:<br />
Q1) How can you view running processes?</p>

<p>ps aux<br />
top(htop)<br />
Q2) How do you check server uptime?</p>

<p>uptime<br />
top<br />
Q3) How do you start/stop services?</p>

<p>(deprecated) service start/stop service_name<br />
systemctl start/stop service_name<br />
Q4) How do you display the shell&rsquo;s environment variables?</p>

<p>env<br />
printenv<br />
Q5) What does #!/bin/bash at the top of a script do?</p>

<p>It say to shell, what interpreter to use when run this script<br />
Q6) What does &quot;&amp;&quot; after a command do?</p>

<p>It run command in background<br />
Q7) What does piping commands mean?</p>

<p>piping with &#39;|&#39; transfer stdout of one command to another, for example, ps aux | grep httpd - first command show all running processes, then, transfer stdout to stdin of second command, whose find only strings where &#39;httpd&#39;.<br />
Q8) What distributions have you used on servers?Why?</p>

<p>Ubuntu - very fresh kernels and packages<br />
CentOS/RHEL - Enterprise and stability<br />
Q9) What is your favorite editor?</p>

<p>Q10) What is RAID? What is RAID0, RAID1, RAID5, RAID10?</p>

<p>Q11) Describe the general file system hierarchy of a Linux system.</p>

<p>Q12) Describe what each of the following command line utilities do:</p>

<p>tee<br />
awk<br />
tr<br />
cut<br />
curl<br />
tail<br />
sed<br />
Q13)Command line demo:</p>

<p>Search for &quot;my konfu is the best&quot; in all *.py files<br />
Replace the occurrence of &quot;my konfu is the best&quot; with &quot;I&#39;m a linux jedi master&quot; in all *.txt files<br />
Find all files which have been accessed within the last 30 days<br />
Q14) What is the difference between virtual memory and swap ?</p>

<p>Q15) What is the difference between hardlinks and symlinks?</p>

<p>Q16) What is an inode and what fields are stored in an inode?</p>

<p>Q17) What are zombie processes ?</p>

<p>Q18) Can you have several HTTPS virtual hosts sharing the same IP?</p>

<p>Yes, I can. I can setup several virtual hosts on one IP and split up yhem with different ports.<br />
Q19) What is the difference between processes and threads?</p>

<p>Q20) What is the difference between exec and fork?</p>

<p>Q21) How nginx can handle a lot of connections? What does it use inside?</p>

<p>Example of answer: Eventloop.<br />
Q22) What is &quot;nohup&quot; used for?</p>

<p>Q23) What is an atomic operation?</p>

<p>Q24) I&#39;ve added my public ssh key into authorized_keys but I&#39;m still getting a password prompt, what can be wrong?</p>

<p>Q25) How do you catch a SIGHUP ? What about SIGSEGV ? What about SIGKILL ?</p>

<p>Q26) What is the Linux Kernel OOM and how does it work ?</p>

<p>Q27) What&#39;s a chroot jail?</p>

<p>Q28) Describe the Linux boot process with as much detail as possible, starting from when the system is powered on and ending when you get a prompt.</p>

<p>Q29) What&#39;s LD_PRELOAD and when is it used?</p>

<p>Q30) You ran a binary and nothing happened. How would you debug this?</p>

<p>I run binary with strace, for example: strace binary_name<br />
Q31) When can a socket receive E_AGAIN ?</p>

<p>Q32) What is a dynamically/statically linked file?</p>

<p>Q33) A careless sysadmin executes the following command: chmod 444 /bin/chmod - what do you do to fix this?</p>

<p>Q34) I&#39;ve lost my root password, what can I do?</p>

<p>Q35) You have accidentally deleted a running script, how could you restore it ?</p>

<p>Q36) What load balancers have you used ?</p>

<p>Q37) AWS:</p>

<p>What is the difference between an AMI and an instance ?<br />
What&rsquo;s EBS ? What&rsquo;s an EBS snapshot ? What is the real cost of having an EBS snapshot ?<br />
What&rsquo;s a VPC ?<br />
What&rsquo;s the difference between a region and an availability zone ?<br />
What&rsquo;s an ELB ?<br />
What&rsquo;s S3 ? What are the features supported on S3 ?<br />
Networking:<br />
Q1) What is IPv6 ? Why should we care?</p>

<p>Q2) How does ping work ? What about traceroute ?</p>

<p>Q3) I type http://www.yahoo.com in my browser&rsquo;s URL bar and I press enter. What happens ? (discuss at every OSI layer - Physical, data link, network, transport, session, presentation, application)</p>

<p>DNS &amp; anycast, IP, UDP, routing, BGP, TCP, HTTP, transparent proxy<br />
What is BGP?<br />
What&rsquo;s a PTR in DNS? Why should we care?<br />
Q4) What if I change from http://www.yahoo.com to https://www.yahoo.com ?</p>

<p>Public/private certificates, CAs, proxying, MiTM, etc.<br />
Q5) What happens when I press the send button in my email client ?</p>

<p>Q6) How do we prevent bots crawling ? How would you deal with a syn flood ?</p>

<p>Q7) How many hosts in a /24 network? What about a /22 ?</p>

<p>Q8) What is the difference between DNAT and SNAT ? When do you use either ?</p>

<p>Q9) What is a virtual IP address? What is a cluster?</p>

<p>Q10) What is IPv6 ? Why should we care?</p>

<p>Security:<br />
Q1) What is the importance of SSL?</p>

<p>Q2) What is a SQL injection?</p>

<p>Q3) What is cross-site scripting (XSS)?</p>

<p>Q4) Why shouldn&rsquo;t you roll your own crypto?</p>

<p>Q5) How are passwords stored on databases?</p>

<p>Q6) What is a Man-in-the-middle attack?</p>

<p>Q7) How do you safely manage environment variables in a cloud environment?</p>

<p>Q8) How do you manage security updates?</p>

<p>Q9) How do you keep encryption keys and credentials secure but make them available to machines that need them?</p>

<p>Docker<br />
Q1) What is docker for?</p>

<p>Q2) How to ask docker cli to show all containers&amp;</p>

<p>Q3) How to delete image with container, who use this image?</p>

<p>Q4) What command help you to delete all old unused images?</p>

<p>Q5) What is docker-compose? What is docker-compose.yml?</p>

<p>Q6) How to expose ports in docker-compose file?</p>

<p>Q7) How to reduce docker images?</p>

<p>Q8) Where you can store docker images?</p>

<p>Q9) What is alpine and why we need it?</p>

<p>kubernetes<br />
Q1) What is Kubernetes? -A: Kubernetes is an open-source container management tool that holds the responsibilities of container deployment, scaling &amp; descaling of containers &amp; load balancing. Being Google&rsquo;s brainchild, it offers excellent community and works brilliantly with all the cloud providers. So, we can say that Kubernetes is not a containerization platform, but it is a multi-container management solution.</p>

<p>Q2) How is Kubernetes related to Docker? -A: It&rsquo;s a known fact that Docker provides the lifecycle management of containers and a Docker image builds the runtime containers. But, since these individual containers have to communicate, Kubernetes is used. So, Docker builds the containers and these containers communicate with each other via Kubernetes. So, containers running on multiple hosts can be manually linked and orchestrated using Kubernetes.</p>

<p>-Q3) What is Container Orchestration? -A: Consider a scenario where you have 5-6 microservices for an application. Now, these microservices are put in individual containers, but won&rsquo;t be able to communicate without container orchestration. So, as orchestration means the amalgamation of all instruments playing together in harmony in music, similarly container orchestration means all the services in individual containers working together to fulfill the needs of a single server.\</p>

<p>-Q4) What do you know about clusters in Kubernetes? -A: The fundamental behind Kubernetes is that we can enforce the desired state management, by which I mean that we can feed the cluster services of a specific configuration, and it will be up to the cluster services to go out and run that configuration in the infrastructure. So, as you can see in the above diagram, the deployment file will have all the configurations required to be fed into the cluster services. Now, the deployment file will be fed to the API and then it will be up to the cluster services to figure out how to schedule these pods in the environment and make sure that the right number of pods are running.</p>

<p>So, the API which sits in front of services, the worker nodes &amp; the Kubelet process that the nodes run, all together make up the Kubernetes Cluster.</p>

<p>-Q5) How to do maintenance activity on the K8 node? -A:Whenever there are security patches available the Kubernetes administrator has to perform the maintenance task to apply the security patch to the running container in order to prevent it from vulnerability, which is often an unavoidable part of the administration. The following two commands are useful to safely drain the K8s node.</p>

<p>kubectl cordon kubectl drain &ndash;ignore-daemon set The first command moves the node to maintenance mode or makes the node unavailable, followed by kubectl drain which will finally discard the pod from the node. After the drain command is a success you can perform maintenance.</p>

<p>Note: If you wish to perform maintenance on a single pod following two commands can be issued in order:</p>

<p>kubectl get nodes: to list all the nodes kubectl drain : drain a particular node</p>

<p>-Q6) What is the role of Load Balance in Kubernetes? -A: Load balancing is a way to distribute the incoming traffic into multiple backend servers, which is useful to ensure the application available to the users. In Kubernetes, as shown in the above figure all the incoming traffic lands to a single IP address on the load balancer which is a way to expose your service to outside the internet which routes the incoming traffic to a particular pod (via service) using an algorithm known as round-robin. Even if any pod goes down load balances are notified so that the traffic is not routed to that particular unavailable node. Thus load balancers in Kubernetes are responsible for distributing a set of tasks (incoming traffic) to the pods</p>

<p>-Q7) How to monitor the Kubernetes cluster? -A: Prometheus is used for Kubernetes monitoring. The Prometheus ecosystem consists of multiple components.</p>

<p>Mainly Prometheus server which scrapes and stores time-series data. Client libraries for instrumenting application code. Push gateway for supporting short-lived jobs. Special-purpose exporters for services like StatsD, HAProxy, Graphite, etc. An alert manager to handle alerts on various support tools</p>

<p>-Q8) Can you explain the differences between Docker Swarm and Kubernetes? -A: Below are the main difference between Kubernetes and Docker:</p>

<p>The installation procedure of the K8s is very complicated but if it is once installed then the cluster is robust. On the other hand, the Docker swarm installation process is very simple but the cluster is not at all robust. Kubernetes can process the auto-scaling but the Docker swarm cannot process the auto-scaling of the pods based on incoming load. Kubernetes is a full-fledged Framework. Since it maintains the cluster states more consistently so autoscaling is not as fast as Docker Swarm.</p>

<p>-Q9) How can containers within a pod communicate with each other? -A: Containers within a pod share networking space and can reach other on localhost. For instance, if you have two containers within a pod, a MySQL container running on port 3306, and a PHP container running on port 80, the PHP container could access the MySQL one through localhost:3306.</p>

<p>-Q10) Explain what is a Master Node and what component does it consist of? -A: The master node is the most vital component responsible for Kubernetes architecture It is the central controlling unit of Kubernetes and manages workload and communications across the clusters The master node has various components, each having its process. They are: -ETCD -Controller Manager -Scheduler -API Server</p>

<p>ETCD (Cluster store): -This component stores the configuration details and essential values -It communicates with all other components to receive the commands and work in order to perform an action -It also manages network rules and posts forwarding activity</p>

<p>Controller Manager -It is responsible for most of the controllers and performs a task -It is a daemon which runs in a continuous loop and is responsible for collecting and sending information to API server -The key controllers handle nodes, endpoints, etc.</p>

<p>Scheduler: -It is one of the key components of the master node associated with the distribution of workload -The scheduler is responsible for workload utilization and allocating pod to a new node -The scheduler should have an idea of the total resources available as well as resources allocated to existing workloads on each node</p>

<p>Architecture:<br />
-1. Question: Explain the components of Kubernetes architecture and their roles. Solution: Kubernetes architecture consists of several key components:</p>

<p>Master Node: Manages the cluster and its components. API Server: Exposes the Kubernetes API. Controller Manager: Ensures the desired state of the cluster. Scheduler: Assigns nodes to newly created pods. etcd: Consistent and highly-available key-value store used as Kubernetes&#39; backing store. Node (Minion) Nodes: Where containers are launched. Kubelet: Ensures that containers are running in a Pod. Kube Proxy: Maintains network rules for Pod communication. Container Runtime: Software responsible for running containers.</p>

<p>-2. Question: What is a Kubernetes Pod and how does it work in a cluster? Solution: A Pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process in a cluster. Pods can contain multiple containers that share the same network namespace, allowing them to communicate with each other using localhost. Pods are scheduled to run on nodes and can be horizontally scaled by creating multiple replicas managed by Controllers like Deployments.</p>

<p>-3. Question: How does Kubernetes ensure high availability and fault tolerance? Solution: Kubernetes achieves high availability through:</p>

<p>Replication: Replicating applications across multiple nodes. Self-healing: Automatically replaces failed containers or reschedules Pods. Load Balancing: Distributes network traffic across multiple Pods. Additionally, Kubernetes ensures fault tolerance through features like node monitoring, automatic scaling, and rolling updates, which allow applications to be updated without downtime.</p>

<p>-4. Question: Explain the concept of Kubernetes Services and their types. Solution: Kubernetes Services provide stable endpoints for Pods. There are several types of Services:</p>

<p>ClusterIP: Exposes the Service on a cluster-internal IP. NodePort: Exposes the Service on each Node&#39;s IP at a static port. LoadBalancer: Exposes the Service externally using a cloud provider&#39;s load balancer. ExternalName: Maps the Service to the contents of the externalName field (e.g., a DNS name).</p>

<p>-5. Question: What are Kubernetes Deployments, and how do they manage application updates? Solution: Deployments in Kubernetes describe an application&rsquo;s life cycle, enabling declarative updates for Pods and ReplicaSets. They provide a way to describe an application&rsquo;s desired state. When a Deployment&rsquo;s Pod template (e.g., container image version) is updated, it triggers a rolling update, ensuring zero-downtime updates. Old Pods are replaced by new ones gradually, minimizing disruptions.</p>

      
      <Counter />
    </main>
  );
}
