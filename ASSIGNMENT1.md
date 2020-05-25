#      [05/23/2020 ASSIGNMENT_1](https://docs.google.com/document/d/16mFwFcpnkExhPi3K52Qg-q3NnST3hnesq3QrTwbhTec/edit?usp=sharing)

## Questions and Answers using "Table" Element 
| `Question No`      | `Question`      | `Answer`        |
| :-----:            |      :----      |            :--- |
|1|What is GIT? |GIT is a *source control management system*. It enables to record changes to files over time |
|2|What is a repository in GIT?| A repository contains a directory named .git, where git keeps all of its metadata for the repository |
|3|What is the command you can use to write a commit message?| git commit -m "Description of the changes" |
|4|What is the difference between GIT and SVN?|SVN is a Centralized Version Control System (CVCS), and Git is a Distributed Version Control System (DVCS).|
|5|What are the advantages of using GIT?| Open source, Only one.git directory per repository, Supports all kinds of projects |
|6|What is the function of ‘GIT PUSH’ in GIT?|git push is used to move the changes upstream i.e., to move the changes from local branch to remote branch|
|7|Why GIT better than Subversion|GIT is open source.Multiple developers can checkout, and upload changes and each change can then be attributed to a specific developer|
|8|What is “Staging Area” or “Index” in GIT?|git add command will stage the changes to Staging area or Index from the working tree branch. Before completing the commits, it can be formatted and reviewed in an intermediate area known as ‘Staging Area’ or ‘Index’.|
|9|What is GIT stash?|GIT stash takes the current state of the working directory and index and puts in on the stack for later and gives you back a clean working directory.|
|10|What is GIT stash drop?|git stash drop is **used to delete a particular stash**.|
|11|How will you know in GIT if a branch has been already merged into master?|git branch --merged: lists all branches that have been merged into the current branch. git branch --no-merged: lists all teh branches that have not been merged.|
|12|Git Clone|The git clone command creates a copy of an existing Git repository|
|13|What is the function of ‘git config’?|The ‘git config’ command is a convenient way to set configuration options for your Git installation|
|14|What does commit object contain?|A set of files, representing the state of a project at a given point of time. An SHAI name, a 40 character string that uniquely identifies the commit object.|
|15|How can you create a repository in Git?|In Git, to create a repository, create a directory for the project if it does not exist, and then run command “git init”. By running this command .git directory will be created in the project directory|
|16|What is ‘head’ in git and how many heads can be created in a repository?| A ‘head’ is simply a reference to a commit object. In every repository, there is a default head referred as “Master”.  A repository can contain any number of heads.|
|17|What is the purpose of branching in GIT?|The purpose of branching in GIT is that you can create your own branch and jump between those branches.|
|18|What is the common branching pattern in GIT?|Maintain one branch as Master- contains production code. develop,feature,hotfix,release are other branches created during the development cycle.|
|19|How can you bring a new feature in the main branch?|“git merge” or “git pull command|
|20|What is a ‘conflict’ in git?|A conflict arises when two separate branches have made edits to the same line in a file, or when a file has been deleted in one branch but edited in the other.|
|21|How can conflict in git resolved?|Delete the conflict markers <<<<<<<, =======, >>>>>>> and make the changes you want in the final merge.|
##  Questions and Answers using "Blockquote" and "Nested Blockquotes" Element and its syntax
> 22. To delete a branch what is the command that is used?
>
> git branch –d [branch_name]

> 23. What is another option for merging in git?
>
> *Rebasing” is an alternative to merging in git.*

> 24. What is the syntax for “Rebasing” in Git?
>
> *git rebase origin/master*

> 25. What is the difference between ‘git remote’ and ‘git clone’?
> - git remote 
> - git clone is used to create a copy of an existing Git repository

> 26. What is GIT version control?
> - A collection of files and their complete history are stored in a repository.
> - GIT Version control keeps track of every modification to the code.

> 27. What is ‘git status’ is used for?
>>
>> Git Status shows you the **difference between the working directory and the index (staging area).**

> 28. What is the difference between the ‘git diff ’and ‘git status’?
>>
>> git diff’ is similar to ‘git status’, but it shows the differences between various commits and also between the working directory and index.

> 29. What is the function of ‘git checkout’ in git?
>
>> A ‘git checkout’ command is used to **update directories or specific files in your working tree with those from another branch without merging it in the whole branch.**

> 30.  What is the function of ‘git rm’?
>>
>> To remove the file from the staging area and also off your disk ‘git rm’ is used.

> 31. What is the function of ‘git stash apply’?
> 
> git stash apply is used to **bring back the changes onto the working directory.**

> 32. What is the use of ‘git log’?
>>
>> To find specific commits in your project history- by author, date, content or history ‘git log’ is used.

> 33.  What is ‘git add’ is used for?
>>
>>git add *adds file changes in your existing directory to your index*.

> 34. What is the function of ‘git reset’?
>
> git reset is used ***to reset the index as well as the working directory to the state of the last commit***.

> 35. Explain what is commit message?
>>
>> ***A message that appears when committing a change***.

> 36. How can you fix a broken commit?
>>
>> git commit -amend