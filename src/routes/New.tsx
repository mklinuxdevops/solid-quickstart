import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>MK</Title>
      <h1>New DevOps Interview Questions!</h1>

      <p>1. List The Essential DevOps Tools?<br />
Answer:</p>

<p>Git<br />
Jenkins<br />
Selenium<br />
Puppet<br />
Chef<br />
Ansible<br />
Nagios<br />
Docker<br />
Monit<br />
ELK &ndash;Elasticsearch, Logstash, Kibana<br />
Collected/Collect<br />
Git(GitHub)</p>

<p>2. Why Hybrid Clouds Are So Important?<br />
Answer: Cloud Bursting:<br />
Access Capacity Or Specialized Software Is Available In The Public Cloud And Not In A Private Cloud<br />
Examples: Virtual Amazon And Dynamo<br />
Leverage The Best Of Both Worlds:<br />
VCloud:<br />
It Is VM Ware Cloud<br />
It Is Expensive<br />
Enterprise Quality<br />
Open Stack:<br />
It Has Commodity Servers And Storage.<br />
It Is Less Reliable.<br />
We Can Run Web Servers On OpenStack.<br />
The Database Is Built On VCloud.</p>

<p>3. Explain How Can I Vertically Scale An Amazon Instance?<br />
Answer: This Is One Of The Essential Features Of AWS And Cloud Virtualization. SpinUp A Newly Developed Large Instance Where We Pause That Instance And Detach The Root Ebs Volume From The Server And Discard. Later Stop Your Live Instance, Detach Its Root Volume Connected. Note Down The Unique Device ID And Attach The Same Root Volume To The New Server. And Restart It Again. This Results In A Vertically Scaled Amazon Instance.</p>

<p>Server Group Provides 80 And 443 From Around The World, But Only Port 22 Are Vital Among The Jump Box Group. Database Group Allows Port 3306 From The Webserver Group And Port 22 From The Jump Box Group. Addition Of Any Machines To The Webserver Group Can Store In The Database. No One Can Directly Ssh To Any Of Your Boxes.</p>

<p>4. What Are The Building Blocks In Cloud Architecture?<br />
Answer:</p>

<p>Reference Architecture<br />
Technical Architecture<br />
Deployment Operation Architecture<br />
Reference Architecture<br />
Technical Architecture<br />
Deployment Operation Architecture</p>

<p>5. DevOps Toolchain?<br />
Answer: DevOps Toolchain:</p>

<p>Code: Code Development And Review, Source Code Management Tools, Code Merging<br />
Build: Continuous Integration Tools, Build Status<br />
Test: Continuous Testing Tools That Provide Feedback On Business Risks<br />
Package: Artifact Repository, Application Pre-Deployment Staging<br />
Release: Change Management, Release Approvals, Release Automation<br />
Configure: Infrastructure Configuration And Management, Infrastructure As Code Tools<br />
Monitor: Applications Performance Monitoring, End-User Experience<br />
Some Categories Are More Essential In A DevOps Toolchain Than Others; Especially Continuous Integration (E.G. Jenkins) And Infrastructure As Code (E.G. Puppet).<br />
Source: Wikipedia<br />
We Have The Comprehensive DevOps Training Courses To Give You A Head Start In Your Career.</p>

<p>6. Mention Some Important Features Of Memcached?<br />
Answer: Important Features Of Memcached Includes:<br />
CAS Tokens: A CAS Token Is Attached To Any Object Retrieved From Cache. You Can Use That Token To Save Your Updated Object.<br />
Callbacks: It Simplifies The Code<br />
Get Delayed: It Reduces The Delay Time Of Your Script Which Is Waiting For Results To Come Back From The Server<br />
Binary Protocol: You Can Use Binary Protocol Instead Of ASCII With The Newer Client</p>

<p>In Binary: Previously, The Client Always Used To Do Serialization Of The Value With Complex Data, But With Memcached, You Can Use The Binary Option.</p>

<p>7. How Is DevOps Different From Agile / SDLC?<br />
Answer: I Would Advise You To Go With The Below Explanation:<br />
Agile Is A Set Of Values And Principles About How To Produce I.E. Develop Software. Example: If You Have Some Ideas And You Want To Turn Those Ideas Into Working Software, You Can Use The Agile Values And Principles As A Way To Do That. But, That Software Might Only Be Working On A Developer&rsquo;s Laptop Or In A Test Environment. You Want A Way To Quickly, Easily And Repeatably Move That Software Into Production Infrastructure, In A Safe And Simple Way. To Do That You Need DevOps Tools And Techniques.</p>

<p>You Can Summarize By Saying Agile Software Development Methodology Focuses On The Development Of Software But DevOps, On The Other Hand, Is Responsible For Development As Well As The Deployment Of The Software In The Safest And Most Reliable Way Possible. Here&rsquo;s A Blog That Will Give You More Information On The Evolution Of DevOps.</p>

<p>8. List The Major Difference Between The Agile And DevOps?<br />
Agile:<br />
Agile Is About Software Development<br />
Devops:<br />
DevOps Is About Software Deployment And Management.<br />
DevOps Does Not Replace Agile Or Lean. It Does This By Killing Waste, Removing Handovers, And Streamlining Deployments To Allow Faster And More Continuous Deployments To PRODUCTION.</p>

<p>9. What Are The Core Roles Of DevOps Engineers In Terms Of Development And Infrastructure?<br />
Answer:</p>

<p>The Core Job Roles Of DevOps Engineer<br />
Application Development<br />
Code Developing<br />
Code Coverage<br />
Unit Testing<br />
Packaging<br />
Deployment With Infrastructure<br />
Continuous Integration<br />
Continuous Testing<br />
Continuous Deployment<br />
Provisioning<br />
Configuration<br />
Orchestration<br />
Deployment</p>

<p>10. What Is Version Control?<br />
Answer: This Is Probably The Easiest Question You Will Face In The Interview. My Suggestion Is To First Give A Definition Of Version Control. It Is A System That Records Changes To A File Or Set Of Files Over Time So That You Can Recall Specific Versions Later. Version Control Systems Consist Of A Central Shared Repository Where Teammates Can Commit Changes To A File Or Set Of File. Then You Can Mention The Uses Of Version Control.</p>

<p>Revert Files Back To A Previous State.<br />
Revert The Entire Project Back To A Previous State.<br />
Compare Changes Over Time.<br />
See Who Last Modified Something That Might Be Causing A Problem.<br />
Who Introduced An Issue And When.</p>

<p>11. How Would You Prepare For Migration?<br />
Answer: This Question Evaluates Your Experience Of Real Projects With All The Awkwardness And Complexity They Bring. Include Terms Like Cut-Over, Dress Rehearsals, Roll-Back And Roll-Forward, DNS Solutions, Feature Toggles, Branch By Abstraction, And Automation In Your Answer. Developing Greenfield Systems With Little Or No Existing Technology In Place Is Always Easier Than Having To Deal With Legacy Components.</p>

<p>12. Explain Security Management In Terms Of Cloud Computing?<br />
Answer: Identity Management Access Provides The Authorization Of Application Services.<br />
Access Control Permission Is Given To The Users To Have Complete Controlling Access Of Another User Who Is Entering Into The Cloud Environment.<br />
Authentication And Authorization Provide Access To Only The Authorized And Authenticated Users Only To Access The Data And Applications.</p>

<p>13. What Are The Anti-Patterns Of DevOps?<br />
Answer: A Pattern Is A Common Usage Usually Followed. If A Pattern Commonly Adopted By Others Does Not Work For Your Organization And You Continue To Blindly Follow It, You Are Essentially Adopting An Anti-Pattern. There Are Myths About DevOps. (Oracle Apex Training Online )</p>

<p>14. How Do All These Tools Work Together?<br />
Answer:<br />
Given Below Is A Generic Logical Flow Where Everything Gets Automated For Seamless Delivery. However, This Flow May Vary From Organization To Organization As Per The Requirement.<br />
Developers Develop The Code And This Source Code Is Managed By Version Control System Tools Like Git Etc.<br />
Developers Send This Code To The Git Repository And Any Changes Made In The Code Is Committed To This Repository.<br />
Jenkins Pulls This Code From The Repository Using The Git Plugin And Builds It Using Tools Like Ant Or Maven.<br />
Configuration Management Tools Like Puppet Deploys &amp; Provisions Testing Environment And Then Jenkins Releases This Code On The Test Environment On Which Testing Is Done Using Tools Like Selenium.<br />
Once The Code Is Tested, Jenkins Send It For Deployment On The Production Server (Even Production Server Is Provisioned &amp; Maintained By Tools Like A Puppet).<br />
After Deployment, It Is Continuously Monitored By Tools Like Nagios.<br />
Docker Containers Provide A Testing Environment To Test The Build Features.</p>

<p>15. What Is The Difference Between Active And Passive Check In Nagios?<br />
Answer: For This Answer, First, Point Out The Basic Difference Active And Passive Checks. The Major Difference Between Active And Passive Checks Is That Active Checks Are Initiated And Performed By Nagios, While Passive Checks Are Performed By External Applications.<br />
If Your Interviewer Is Looking Unconvinced With The Above Explanation Then You Can Also Mention Some Key Features Of Both Active And Passive.</p>

<p>16. Mention What Are The Key Aspects Or Principle Behind DevOps?<br />
Answer: The Key Aspects Or Principle Behind DevOps Is</p>

<p>Infrastructure As Code<br />
Continuous Deployment<br />
Automation<br />
Monitoring<br />
Security</p>

<p>17. What DevOps Tools Have You Worked With?<br />
Answer: Software Configuration Management And Build/Release (Version Control) Tools, Including Apache Subversion, Mercurial, Fossil And Others, Help Document Change Requests. Developers Can More Easily Follow The Company&rsquo;s Best Practices And Policies While Software Changes.<br />
Continuous Integration (CI) Tools Such As Rational Build Forge, Jenkins And Semaphore Merge All Developer Copies Of The Working Code Into A Central Version. These Tools Are Important For Larger Groups Where Teams Of Developers Work On The Same Codebase Simultaneously. QA Experts Use Code Analyzers To Test Software For Bugs, Security, And Performance. If You&rsquo;ve Used HP&rsquo;s Fortify Static Code Analyzer, Talk About How It Identified Security Vulnerabilities In Coding Languages. Also Speak About Tools Like Gramma Tech&rsquo;s Code Sonar That You Used To Identify Memory Leaks, Buffer Underruns And Other Defects For C/C++ And Java Code. It Is Essential That You Have An Adequate Command Of The Principal Languages Like Ruby, C#, .NET, Perl, Python, Java, PHP, Windows Power Shell, And Are Comfortable With The Associated OS Environments Windows, Linux, And Unix.</p>

<p>18. What Testing Is Necessary To Ensure A New Service Is Ready For Production?<br />
Answer: DevOps Is All About Continuous Testing Throughout The Process, Starting With Development Through To Production. Everyone Shares The Testing Responsibility. This Ensures That Developers Are Delivering Code That Doesn&rsquo;t Have Any Errors And Is Of High Quality, And It Also Helps Everyone Leverage Their Time Most Effectively. ( Oracle Apex Training Online )</p>

<p>19. What Is State Stalking In Nagios?<br />
Answer: I Will Advise You To First Give A Small Introduction On State Stalking. It Is Used For Logging Purposes. When Stalking Is Enabled For A Particular Host Or Service, Nagios Will Watch That Host Or Service Very Carefully And Log Any Changes It Sees In The Output Of Check Results.<br />
Depending On The Discussion Between You And Interviewer You Can Also Add, &ldquo;It Can Be Very Helpful In Later Analysis Of The Log Files. Under Normal Circumstances, The Result Of A Host Or Service Check Is Only Logged If The Host Or Service Has Changed State Since It Was Last Checked.</p>

<p>20. What Is Meant By Continuous Integration?<br />
Answer:<br />
I Will Advise You To Begin This Answer By Giving A Small Definition Of Continuous Integration (CI). It Is A Development Practice That Requires Developers To Integrate Code Into A Shared Repository Several Times A Day. Each Check-In Is Then Verified By An Automated Build, Allowing Teams To Detect Problems Early.<br />
I Suggest That You Explain How You Have Implemented It In Your Previous Job. You Can Refer To The Below-Given Example:<br />
Developers Check Out Code Into Their Private Workspaces.<br />
When They Are Done With It They Commit The Changes To The Shared Repository (Version Control Repository).<br />
The CI Server Monitors The Repository And Checks Out Changes When They Occur.<br />
The CI Server Then Pulls These Changes And Builds The System And Also Runs Unit And Integration Tests.<br />
The CI Server Will Now Inform The Team Of The Successful Build.<br />
If The Build Or Tests Fail, The CI Server Will Alert The Team.<br />
The Team Will Try To Fix The Issue At The Earliest Opportunity.<br />
This Process Keeps On Repeating.</p>

<p>21. Why Do You Need A Continuous Integration Of Dev &amp; Testing?<br />
Answer: For This Answer, You Should Focus On The Need For Continuous Integration. My Suggestion Would Be To Mention The Below Explanation In Your Answer:<br />
Continuous Integration Of Dev And Testing Improves The Quality Of Software And Reduces The Time Taken To Deliver It, By Replacing The Traditional Practice Of Testing After Completing All Development. It Allows The Dev Team To Easily Detect And Locate Problems Early Because Developers Need To Integrate Code Into A Shared Repository Several Times A Day (More Frequently). Each Check-In Is Then Automatically Tested. ( Data Science Training )</p>

<p>22. What Is Git?<br />
Answer: I Will Suggest That You Attempt This Question By First Explaining The Architecture Of Git As Shown In The Below Diagram. You Can Refer To The Explanation Given Below:</p>

<p>Git Is A Distributed Version Control System (DVCS). It Can Track Changes To A File And Allows You To Revert Back To Any Particular Change.<br />
Its Distributed Architecture Provides Many Advantages Over Other Version Control Systems (VCS) Like SVN One Major Advantage Is That It Does Not Rely On A Central Server To Store All The Versions Of A Project&rsquo;s Files. Instead, Every Developer &ldquo;Clones&rdquo; A Copy Of A Repository I Have Shown In The Diagram Below With &ldquo;Local Repository&rdquo; And Has The Full History Of The Project On His Hard Drive So That When There Is A Server Outage, All You Need For Recovery Is One Of Your Teammate&rsquo;s Local Git Repository.</p>

<p>There Is A Central Cloud Repository As Well Where Developers Can Commit Changes And Share It With Other Teammates As You Can See In The Diagram Where All Collaborators Are Committing Changes &ldquo;Remote Repository&rdquo;. ()</p>

<p>23. Explain What Is Memcached?<br />
Answer: Memcached Is A Free And Open-Source, High-Performance, Distributed Memory Object Caching System. The Primary Objective Of Memcached Is To Enhance The Response Time For Data That Can Otherwise Be Recovered Or Constructed From Some Other Source Or Database. It Is Used To Avoid The Need To Operate SQL Database Or Another Source Repetitively To Fetch Data For The Concurrent Request.<br />
Memcached Can Be Used For</p>

<p>Social Networking -&gt; Profile Caching<br />
Content Aggregation -&gt; HTML/ Page Caching<br />
Ad Targeting -&gt; Cookie/Profile Tracking<br />
Relationship -&gt; Session Caching<br />
E-Commerce -&gt; Session And HTML Caching<br />
Location-Based Services -&gt; Database Query Scaling<br />
Gaming And Entertainment -&gt; Session Caching<br />
Memcache Helps In<br />
Speed Up Application Processes<br />
It Determines What To Store And What Not To<br />
Reduce The Number Of Retrieval Requests To The Database<br />
Cuts Down The I/O ( Input/Output) Access (Hard Disk)<br />
The Drawback Of Memcached Is<br />
It Is Not A Persistent Data Store<br />
Not A Database<br />
It Is Not An Application-Specific<br />
It Cannot Cache Large Object</p>

<p>24. What Is Automation Testing?<br />
Answer: Automation Testing Or Test Automation Is A Process Of Automating The Manual Process To Test The Application/System Under Test. Automation Testing Involves The Use Of Separate Testing Tools Which Lets You Create Test Scripts Which Can Be Executed Repeatedly And Doesn&rsquo;t Require Any Manual Intervention.</p>

<p>25. How To Launch The Browser Using WebDriver?<br />
Answer:<br />
The Following Syntax Can Be Used To Launch Browser:</p>

<p>WebDriver Driver = New FirefoxDriver();<br />
WebDriver Driver = New ChromeDriver();<br />
WebDriver Driver = New InternetExplorerDriver();</p>

<p>26. What Are The Goals Of Configuration Management Processes?<br />
Answer: The Purpose Of Configuration Management (CM) Is To Ensure The Integrity Of A Product Or System Throughout Its Life-Cycle By Making The Development Or Deployment Process Controllable And Repeatable, Therefore Creating A Higher Quality Product Or System. The CM Process Allows Orderly Management Of System Information And System Changes For Purposes Such As To:</p>

<p>Revise Capability,<br />
Improve Performance,<br />
Reliability Or Maintainability,<br />
Extend Life,<br />
Reduce Cost,<br />
Reduce Risk And<br />
Liability, Or Correct Defects.</p>

<p>27. What Is Chef?<br />
Answer: Begin This Answer By Defining Chef. It Is A Powerful Automation Platform That Transforms Infrastructure Into Code. A Chef Is A Tool For Which You Write Scripts That Are Used To Automate Processes. What Processes? Pretty Much Anything Related To IT.<br />
Now You Can Explain The Architecture Of Chef, It Consists Of:</p>

<p>Chef Server: The Chef Server Is The Central Store Of Your Infrastructure&rsquo;s Configuration Data. The Chef Server Stores The Data Necessary To Configure Your Nodes And Provides Search, A Powerful Tool That Allows You To Dynamically Drive Node Configuration Based On Data.</p>

<p>Chef Node: A Node Is Any Host That Is Configured Using Chef-Client. Chef-Client Runs On Your Nodes, Contacting The Chef Server For The Information Necessary To Configure The Node. Since A Node Is A Machine That Runs The Chef-Client Software, Nodes Are Sometimes Referred To As &ldquo;Clients&rdquo;.</p>

<p>Chef Workstation: A Chef Workstation Is A Host You Use To Modify Your Cookbooks And Other Configuration Data.</p>

<p>28. What Is Continuous Testing?<br />
Answer: I Will Advise You To Follow The Below-Mentioned Explanation:<br />
Continuous Testing Is The Process Of Executing Automated Tests As Part Of The Software Delivery Pipeline To Obtain Immediate Feedback On The Business Risks Associated With The Latest Build. In This Way, Each Build Is Tested Continuously, Allowing Development Teams To Get Fast Feedback So That They Can Prevent Those Problems From Progressing To The Next Stage Of Software Delivery Life-Cycle. This Dramatically Speeds Up A Developer&rsquo;s Workflow As There&rsquo;s No Need To Manually Rebuild The Project And Re-Run All Tests After Making Changes.</p>

<p>29. What Are The Success Factors For Continuous Integration?<br />
Answer: Here You Have To Mention The Requirements For Continuous Integration. You Could Include The Following Points In Your Answer:</p>

<p>Maintain A Code Repository<br />
Automate The Build<br />
Make The Build Self-Testing<br />
Everyone Commits To The Baseline Every Day<br />
Every Commit (To Baseline) Should Be Built<br />
Keep The Build Fast<br />
Test In A Clone Of The Production Environment<br />
Make It Easy To Get The Latest Deliverables<br />
Everyone Can See The Results Of The Latest Build<br />
Automate Deployment.</p>

<p>30. What Is Puppet?<br />
Answer: I Will Advise You To First Give A Small Definition Of Puppet. It Is A Configuration Management Tool Which Is Used To Automate Administration Tasks.</p>

<p>Now You Should Describe Its Architecture And How Puppet Manages Its Agents. Puppet Has A Master-Slave Architecture In Which The Slave Has To First Send A Certificate Signing Request To Master And Master Has To Sign That Certificate In Order To Establish A Secure Connection Between Puppet Master And Puppet Slave As Shown In The Diagram Below. Puppet Slave Sends A Request To Puppet Master And Puppet Master Then Pushes Configuration On Slave.</p>

<p>31. What Is The Puppet Manifests?<br />
Answer: It Is A Very Important Question So Make Sure You Go In The Correct Flow. According To Me, You Should First Define Manifests. Every Node (Or Puppet Agent) Has Got Its Configuration Details In Puppet Master, Written In The Native Puppet Language. These Details Are Written In The Language Which Puppet Can Understand And Are Termed As Manifests. They Are Composed Of Puppet Code And Their Filenames Use The .Pp Extension.</p>

<p>Now Give An Example. You Can Write A Manifest In Puppet Master That Creates A File And Installs Apache On All Puppet Agents (Slaves) Connected To The Puppet Master.</p>

<p>32. What Testing Is Necessary To Ensure That A New Service Is Ready For Production?<br />
Answer: DevOps Is All About Continuous Testing Throughout The Process, Starting With Development Through To Production. Everyone Shares The Testing Responsibility. This Ensures That Developers Are Delivering Code That Doesn&rsquo;t Have Any Errors And Is Of High Quality, And It Also Helps Everyone Leverage Their Time Most Effectively.</p>

<p>33. Explain How Memcached Should Not Be Used?<br />
Answer:<br />
Memcached Common Misuse Is To Use It As A Data Store, And Not As A Cache Never Use Memcached As The Only Source Of The Information You Need To Run Your Application. Data Should Always Be Available Through Another Source As Well. Memcached Is Just A Key Or Value Store And Cannot Perform Query Over The Data Or Iterate Over The Contents To Extract Information. Memcached Does Not Offer Any Form Of Security Either In Encryption Or Authentication</p>

<p>34. Explain Your Understanding And Expertise On Both The Software Development Side And The Technical Operations Side Of An Organization You&rsquo;ve Worked For In The Past?<br />
Answer: DevOps Engineers Almost Always Work In A 24/7 Business-Critical Online Environment. I Was Adaptable To On-Call Duties And Able To Take Up Real-Time, Live-System Responsibility. I Successfully Automated Processes To Support Continuous Software Deployments. I Have Experience With Public/Private Clouds, Tools Like Chef Or Puppet, Scripting And Automation With Tools Like Python And PHP, And A Background In AGILE.</p>

<p>35. Explain Whether It Is Possible To Share A Single Instance Of A Memcache Between Multiple Projects?<br />
Answer: Yes, It Is Possible To Share A Single Instance Of Memcache Between Multiple Projects. Memcache Is A Memory Store Space, And You Can Run Memcache On One Or More Servers. You Can Also Configure Your Client To Speak To A Particular Set Of Instances. So, You Can Run Two Different Memcache Processes On The Same Host And Yet They Are Completely Independent. Unless, If You Have Partitioned Your Data, Then It Becomes Necessary To Know From Which Instance To Get The Data From Or To Put Into.</p>

<p>36. Explain How You Can Minimize The Memcached Server Outages?<br />
Answer:<br />
When One Instance Fails, Several Of Them Goes Down, This Will Put A Larger Load On The Database Server When Lost Data Is Reloaded As The Client Make A Request. To Avoid This, If Your Code Has Been Written To Minimize Cache Stampedes Then It Will Leave A Minimal Impact<br />
Another Way Is To Bring Up An Instance Of Memcached On A New Machine Using The Lost Machines IP Address<br />
Code Is Another Option To Minimize Server Outages As It Gives You The Liberty To Change The Memcached Server List With Minimal Work<br />
Setting Timeout Value Is Another Option That Some Memcached Clients Implement For Memcached Server Outage. When Your Memcached Server Goes Down, The Client Will Keep Trying To Send A Request Till The Time-Out Limit Is Reached</p>

<p>37. Is Continuous Delivery Related To The Dev-Ops Movement? How So?<br />
Answer: Absolutely. In Any Organization Where There Is A Separate Operations Department, And Especially Where There Is An Independent QA Or Testing Function, We See That Much Of The Pain In Getting Software Delivered Is Caused By Poor Communication Between These Groups, Exacerbated By An Underlying Cultural Divide. Apps Are Measured According To Throughput, And Ops Are Measured According To Stability. Testing Gets It In The Neck From Both Sides, And Like Release Management, Is Often A Political Pawn In The Fight Between Apps And Ops. The Point Of Dev-Ops Is That Developers Need To Learn How To Create High-Quality, Production-Ready Software, And Ops Need To Learn That Agile Techniques Are Actually Powerful Tools To Enable Effective, Low-Risk Change Management. Ultimately, We&rsquo;re All Trying To Achieve The Same Thing &ndash; Creating Business Value Through Software &ndash; But We Need To Get Better At Working Together And Focusing On This Goal Rather Than Trying To Optimize Our Own Domains. Unfortunately, Many Organizations Aren&rsquo;t Set Up In A Way That Rewards That Kind Of Thinking. According To Forrester.</p>

<p>38. What Are The Advantages Of DevOps With Respect To Technical And Business Perspective?<br />
Answer:<br />
Technical Benefits:</p>

<p>Software Delivery Is Continuous.<br />
Reduces Complexity In Problems.<br />
Faster Approach To Resolve Problems<br />
Manpower Is Reduced.<br />
Business Benefits:</p>

<p>The High Rate Of Delivering Its Features<br />
Stable Operating Environments<br />
More Time Gained To Add Values.<br />
Enabling Faster Feature Time To Market</p>

<p>39. Explain AWS?<br />
Answer: AWS Stands For Amazon Web Service Which Is A Collection Of Remote Computing Services Also Known As Cloud Computing. This Technology Of Cloud Computing Is Also Known As IaaS Or Infrastructure As A Service.</p>

<p>40. What Is DevOps Engineer&rsquo;s Duty With Regards To Agile Development?<br />
Answer: DevOps Engineer Works Very Closely With Agile Development Teams To Ensure They Have An Environment Necessary To Support Functions Such As Automated Testing, Continuous Integration, And Continuous Delivery. DevOps Engineer Must Be In Constant Contact With The Developers And Make All Required Parts Of The Environment Work Seamlessly.</p>

<p>41. What Is The Most Important Thing DevOps Helps Us Achieve?<br />
Answer: According To Me, The Most Important Thing That DevOps Helps Us Achieve Is To Get The Changes Into Production As Quickly As Possible While Minimizing Risks In Software Quality Assurance And Compliance. This Is The Primary Objective Of DevOps. Learn More In This DevOps Tutorial Blog.<br />
However, You Can Add Many Other Positive Effects Of DevOps. For Example, Clearer Communication And Better Working Relationships Between Teams I.E. Both The Ops Team And Dev Team Collaborate Together To Deliver Good Quality Software Which In Turn Leads To Higher Customer Satisfaction.</p>

<p>42. Which VCS Tool You Are Comfortable With?<br />
Answer: You Can Just Mention The VCS Tool That You Have Worked On Like This: &ldquo;I Have Worked On Git And One Major Advantage It Has Over Other VCS Tools Like SVN Is That It Is A Distributed Version Control System.&rdquo;<br />
Distributed VCS Tools Do Not Necessarily Rely On A Central Server To Store All The Versions Of A Project&rsquo;s Files. Instead, Every Developer &ldquo;Clones&rdquo; A Copy Of A Repository And Has The Full History Of The Project On Their Own Hard Drive.</p>

<p>43. Which Testing Tool Are You Comfortable With And What Are The Benefits Of That Tool?<br />
Answer: Here Mention The Testing Tool That You Have Worked With And Accordingly Frame Your Answer. I Have Mentioned An Example Below:<br />
I Have Worked On Selenium To Ensure High Quality And More Frequent Releases.</p>

<p>Some Advantages Of Selenium Are:</p>

<p>It Is Free And Open Source<br />
It Has A Large User Base And Helping Communities<br />
It Has Cross Browser Compatibility (Firefox, Chrome, Internet Explorer, Safari, Etc.)<br />
It Has Great Platform Compatibility (Windows, Mac OS, Linux, Etc.)<br />
It Supports Multiple Programming Languages (Java, C#, Ruby, Python, Pearl, Etc.)<br />
It Has Fresh And Regular Repository Developments<br />
It Supports Distributed Testing</p>

<p>44. Why Is Continuous Monitoring Necessary<br />
Answer: I Will Suggest You Go With The Below-Mentioned Flow:<br />
Continuous Monitoring Allows Timely Identification Of Problems Or Weaknesses And Quick Corrective Action That Helps Reduce Expenses Of An Organization. Continuous Monitoring Provides A Solution That Addresses Three Operational Disciplines Known As:</p>

<p>Continuous Audit<br />
Continuous Controls Monitoring<br />
Continuous Transaction Inspection<br />
45. What Is The One Most Important Thing DevOps Helps Do?<br />
Answer: The Most Important Thing DevOps Helps Do Is To Get The Changes Into Production As Quickly As Possible While Minimizing Risks In Software Quality Assurance And Compliance. That Is The Primary Objective Of DevOps. However, There Are Many Other Positive Side-Effects To DevOps. For Example, Clearer Communication And Better Working Relationships Between Teams Which Creates A Less Stressful Working Environment.</p>

<p>46. Describe Two-Factor Authentication?<br />
Answer: Two-Factor Authentication Is A Security Process In Which The User Provides Two Means Of Identification From Separate Categories Of Credentials; One Is Typically A Physical Token,</p>

<p>47. Explain How Can Create A Backup And Copy Files In Jenkins?<br />
Answer: Answer To This Question Is Really Direct. To Create A Backup, All You Need To Do Is To Periodically Back Up Your JENKINS_HOME Directory. This Contains All Of Your Build Jobs Configurations, Your Slave Node Configurations, And Your Build History. To Create A Back-Up Of Your Jenkins Setup, Just Copy This Directory. You Can Also Copy A Job Directory To Clone Or Replicate A Job Or Rename The Directory.</p>

<p>48. What Is Cloud Computing?<br />
Answer: It Is Advance Stage Technology Implemented So That The Cloud Provides The Services Globally As Per The User Requirements. It Provides A Method To Access Several Servers Worldwide.</p>

<p>49. Explain With A Use Case Where DevOps Can Be Used In Industry/ Real-Life?<br />
Answer: There Are Many Industries That Are Using DevOps So You Can Mention Any Of Those Use Cases, You Can Also Refer The Below Example:<br />
Etsy Is A Peer-To-Peer E-Commerce Website Focused On Handmade Or Vintage Items And Supplies, As Well As Unique Factory-Manufactured Items. Etsy Struggled With Slow, Painful Site Updates That Frequently Caused The Site To Go Down. It Affected Sales For Millions Of Etsy&rsquo;s Users Who Sold Goods Through The Online Market Place And Risked Driving Them To The Competitor.</p>

<p>With The Help Of A New Technical Management Team, Etsy Transitioned From Its Waterfall Model, Which Produced Four-Hour Full-Site Deployments Twice Weekly, To A More Agile Approach. Today, It Has A Fully Automated Deployment Pipeline, And Its Continuous Delivery Practices Have Reportedly Resulted In More Than 50 Deployments A Day With Fewer Disruptions.</p>

<p>50. Explain How Would You Handle Revision (Version) Control?<br />
Answer: My Approach To Handling Revision Control Would Be To Post The Code On SourceForge Or GitHub So Everyone Can View It. Also, I Will Post The Checklist From The Last Revision To Make Sure That Any Unsolved Issues Are Resolved.</p>

<p>51. How Would You Make Software Deployable?<br />
Answer: The Ability To Script The Installation And Reconfiguration Of Software Systems Is Essential Towards Controlled And Automated Change. Although There Is An Increasing Trend For New Software To Enable This, Older Systems And Products Suffer From The Assumption That Changes Would Be Infrequent And Minor, And So Make Automated Changes Difficult. As A Professional Who Appreciates The Need To Expose Configuration And Settings In A Manner Accessible To Automation, I Will Work With Concepts Like Inversion Of Control (IoC) And Dependency Injection, Scripted Installation, Test Harnesses, Separation Of Concerns, Command-Line Tools, And Infrastructure As Code.</p>


      
      <Counter />
    </main>
  );
}
