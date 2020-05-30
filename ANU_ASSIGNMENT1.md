# Internship2020 
## Assignment1 Questions and Answers 
<font color='red' size='5'>**a) Difference between text file, XML file, JSON file.**</font>   
<font size='5'>**```A text file is a kind of computer file that is structured as a sequence of lines of electronic text. A text file exists stored as data within a computer file system.```**</font>

<font color='blue' size='6'>JSON</font>|<font color='blue' size='6'>XML</font>
 | :--: |:--:|
 |<font size='5'>**```It is JavaScript Object Notation.```**</font>|<font size='5'>**```It is Extensible markup language```**</font>|
|<font size='5'>**```It is based on JavaScript language.```**</font>| <font size='5'>**```	It is derived from SGML.```**</font>|
|<font size='5'>**```It is a way of representing objects.```**</font>|<font size='5'>**```	It is a markup language and uses tag structure to represent data items.```**</font>|
|<font size='5'>**```It does not provides any support for namespaces.```**</font>|<font size='5'>**```It supports namespaces.```**</font>|
|<font size='5'>**```It supports array.```**</font>|<font size='5'>**```It doesn’t supports array.```**</font>|
|<font size='5'>**```Its files are very easy to read as compared to XML.```**</font>|<font size='5'>**```	Its documents are comparatively difficult to read and interpret.```**</font>|
|<font size='5'>**```It doesn’t use end tag.```**</font>	|<font size='5'>**```It has start and end tags.```**</font>|
|<font size='5'>**```It is less secured.```**</font>|<font size='5'>**```It is more secured than JSON.```**</font>|
|<font size='5'>**```It doesn’t supports comments.```**</font>|<font size='5'>**```It supports comments.```**</font>|
<font size='5'>**```It supports only UTF-8 encoding.	```**</font>|<font size='5'>**```It supports various encoding.```**</font>

<font color='red' size='5'>**1). What is Git?**</font>  <font size='5'><p>**`Git` ```is a distributed version-control system for tracking changes in source code during software development. It is designed  for coordinating work among programmers.It can also be used to track changes in any set of files.It goals include speed, data integrity,and support for distributed,non-linear workflows.```**</p></font>
 <font color='red' size='5'>**2). What is a repository in GIT?**</font>  <font size='5'><p>**```A Git repository is the```** <font color='green' size='5'>***.git/***</font> **``` folder inside a project.This repository tracks all changes made to the files in the project,building a history overtime.If we delete```** <font color='green' size='5'>***.git/***</font> **```folder, the projects history will be deleted.```**</p></font>
  <font color='red' size='5'>**3). What is the command you can use to write a commit message?**</font>
  <font size='5'><p>**```git commit -m ```**<font color='green' size='5'>***"Git commit message here."***</p></font>
  <font color='red' size='5'>**4).What is the difference between GIT and SVN?**</font>
  <font color='blue' size='6'>GIT</font>|<font color='blue' size='6'>SVN</font>|
 | :--: |:--:|
 |<font size='5'>**```Git is a distributed VCS```**<br>**```used for source code management.```**</font>|<font size='5'>**```SVN is a centralised versioning and revision control system.```**</font>|
 |<font size='5'>**```It creates a local repository to ```**<br>**```store everything locally```**<br>**```instead of using a centralised server.```**</font>|<font size='5'>**```It uses a centralised server ```**<br>**```to store changes in souce code.```**</font>
 |<font size='5'>**```Network access is not mandatory for Git operations.```**</font>|<font size='5'>**```Network is required for almost all of SVN operations.```**</font>|
 |<font size='5'>**```A sub project is called a Git "sub module". ```**</font>|<font size='5'>**```A sub project is called an "SVN external".```**</font>|
 |<font size='5'>**```Git does not have a global revision number.```**</font>|<font size='5'>**```SVN does have a global revision number.```**</font>|
 |<font size='5'>**```Git contents are cryptographically```**<br>**``` check-summed using the SHA-1 hash algorithm.```**</font>|<font size='5'>**```SVN does not have hashed content.```**</font>|
  
 <font color='red' size='5'>**5). What are the advantages of using GIT?**</font>
 * <font size='5'>**```Source control system.```**</font>
 * <font size='5'>**```Fast! work locally,offline.```**</font>
 * <font size='5'>**``` checkpoints for saving intermediate work.```**</font>
 * <font size='5'>**```Facilitates experimentation.```**</font>
 * <font size='5'>**```The developer is responsible for merging their branch into master.```**</font><br>  
 
<font color='red' size='5'>**7). What is the function of ‘GIT PUSH’ in GIT?**</font>
<font size='5'><p>**```The ```**<font color='green'>***git push***</font>**``` command is used to upload local repository content to a remote repository.```**</p></font>  <font color='red' size='5'>**8). Why GIT better than Subversion?**</font>  
<font size='5'><p>**```Many people prefer Git for version control for a few reasons: It's faster to commit. Because you commit to the central repository more often in SVN, network traffic slows everyone down. Whereas with Git, you're working mostly on your local repository and only committing to the central repository every so often.```**</p></font>  <font color='red' size='5'>**9). What is “Staging Area” or “Index” in GIT?**</font> <font size='5'><p>**```Before completing the commits, it can be formatted and reviewed in an intermediate area known as ‘Staging Area’ or ‘Index’.```**</p></font><font color='red' size='5'>**10). What is GIT stash?**</font>  <font size='5'><p><font color='green'>***git stash***</font>**``` temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on.```**</p></font><font color='red' size='5'>**11). What is GIT stash drop?**</font>  <font size='5'><p>**```In case we do not need a specific stash, we use git stash drop command to remove it from the list of stashes. By default, this command removes to latest added stash. To remove a specific stash we specify as argument in the```** <font color='green' size='5'>***git stash drop "stashname" command.***</font></p></font>
<font color='red' size='5'>**12). How will you know in GIT if a branch has been already merged into master?**</font> <font size='5'><p><font color='green' size='5'>***git branch --merged master***</font> : **```This prints the branches merged into master```**</p></font><font color='red' size='5'>**13). What is the function of git clone?**</font><font size='5'><p>**```The```** <font color='green'>***git clone***</font> **```command creates a copy of an existing Git repository.  To get the copy of a central repository, ‘cloning’  is the most common way used by programmers.```**</p></font><font color='red' size='5'>**14). What is the function of ‘git config’?**</font>  <font size='5'><p>**```The```** <font color='green'>***‘git config’***</font>**``` command is a convenient way to set configuration options for your Git installation. Behaviour of a repository, user info, preferences etc. can be defined through this command.```**</p></font>
* * *
<font color='red' size='5'>**15). What does commit object contain?**</font>  
<font size='5' color='orange'>The commit object contains following information:</font>

<font size='5' color='green'>***HASH:***</font><font size='5'> **```The SHA1 hash of the Git tree that refers to the state of index at commit time.```**</font><br>
<font size='5' color='green'>***Commit Author:***</font><font size='5'> **```The name of```**  <font color='green'>***person/process***</font> **```doing the commit and ```**  <font color='green'>***date/time.***</font><br>
<font size='5' color='green'>***Comment:***</font><font size='5'> **```Some text messages that contains the reason for the commit .```**</font>

<font color='red' size='5'>**16). How can you create a repository in Git?**</font><br>  
* > **```Start a new git repository```**
* > **``` Create a directory to contain the project.```**
* > **``` Go into the new directory.```**
* > **``` Type git init.```**
* > **``` Write some code.```**
* > **``` Type git add to add the files.```**
* > **``` Type git commit .```**<br>

<font color='red' size='5'>**17). What is ‘head’ in git and how many heads can be created in a repository?**</font><br>
**```A head is simply a reference to a commit object. Each head has a name (branch name or tag name, etc). By default, there is a head in every repository called master. A repository can contain any number of heads. At any given time, one head is selected as the “current head.” This head is aliased to HEAD, always in capitals".```**<br>

<font color='red' size='5'>**18). What is the purpose of branching in GIT?**</font><br>
**```The purpose of branching in GIT is that you can create your own branch and jump between those branches. It will allow you to go to your previous work keeping your recent work intact.```**<br>

<font color='red' size='5'>**19). What is the common branching pattern in GIT?**</font><br>
**```The common way of creating branch in GIT is to maintain one as “Main“ branch and create another branch to implement new features. This pattern is particularly useful when there are multiple developers working on a single project.```**

<font color='red' size='5'>**20). How can you bring a new feature in the main branch?**</font><br>
**```To bring a new feature in the main branch, you can use a command ```**<font color='green'>***“git merge”***</font> **```or```**<font color='green'>***“git pull command”***</font>.

<font color='red' size='5'>**21). What is a ‘conflict’ in git?**</font><br>
**```A ‘conflict’ arises when the commit that has to be merged has some change in one place, and the current commit also has a change at the same place. Git will not be able to predict which change should take precedence.```**


<font color='red' size='5'>**22). How can conflict in git resolved?**</font><br>
**```To resolve the conflict in git, edit the files to fix the conflicting changes and then add the resolved files by running ```**<font color='green'>***“git add”***</font> **```after that to commit the repaired merge,run ```**<font color='green'>***“git commit”***</font>.**``` Git remembers that you are in the middle of a merger, so it sets the parents of the commit correctly.```**

<font color='red' size='5'>**23). To delete a branch what is the command that is used?**</font><br>
    **```Once your development branch is merged into the main branch, you don’t need development branch.  To delete a branch use, the command ```**<font color='green'>***“git branch –d [head]”***</font>.

<font color='red' size='5'>**24). What is another option for merging in git?**</font><br>
    **```Using ```**<font color='green'>***git rebase***</font> **``` instead of ```** <font color='green'>***git merge***</font>.

 <font color='red' size='5'>**25). What is the syntax for “Rebasing” in Git?**</font><br>
      **```The syntax used for rebase is ```**<font color='green'>***“git rebase [new-commit] “***</font>

<font color='red' size='5'>**26). What is the difference between ‘git remote’ and ‘git clone’?**</font><br>
<font color='green'>***git remote***</font> **``` add just creates an entry in your git config that specifies a name for a particular URL. You must have an existing git repo to use this.```** <font color='green'>***git clone***</font> **```creates a new git repository by copying an existing one located at the URI you specify.```**
***
<font color='red' size='5'>**27). What is GIT version control?**</font><br>
<font color='green'>***GIT***</font>**``` is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.```**

<font color='red' size='5'>**31). What is ‘git status’ is used for?**</font><br>
**```The ```**<font color='green'>***git status***</font>**``` command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.Status output does not show you any information regarding the committed project history.```**

<font color='red' size='5'>**32). What is the difference between the ‘git diff ’and ‘git status’?**</font><br>
<font color='green'>***‘git diff’***</font> **``` is similar to ```** <font color='green'>***‘git status’***</font> **```, but it shows the differences between various commits and also between the working directory and index.```**

<font color='red' size='5'>**33). What is the function of ‘git checkout’ in git?**</font><br>
**```A ```**<font color='green'>***‘git checkout’***</font>**``` command is used to update directories or specific files in your working tree with those from another branch without merging it in the whole branch.```**

<font color='red' size='5'>**34). What is the function of ‘git rm’?**</font><br>
**```To remove the file from the staging area and also off your disk ```**<font color='green'>***‘git rm’***</font>**``` is used.```**

<font color='red' size='5'>**35). What is the function of ‘git stash apply’?**</font><br>
**```When you want to continue working where you have left your work, ```**<font color='green'>***‘git stash apply’***</font>**``` command is used to bring back the saved changes onto the working directory.```**

 <font color='red' size='5'>**36). What is the use of ‘git log’?**</font><br>
**```To find specific commits in your project history- by author, date, content or history ```**<font color='green'>***‘git log’***</font>**``` is used.```**

 <font color='red' size='5'>**37). What is ‘git add’ is used for?**</font><br>
 <font color='green'>***‘git add’***</font>**``` adds file changes in your existing directory to your index.```**

  <font color='red' size='5'>**38). What is the function of ‘git reset’?**</font><br>
**```The function of ```**<font color='green'>***‘git reset’***</font>**``` is to reset your index as well as the working directory to the state of your last commit.```**

<font color='red' size='5'>**42). Explain what is commit message?**</font><br>
**```Commit message is a feature of git which appears when you commit a change. Git provides you a text editor where you can enter the modifications made in commits.```**

<font color='red' size='5'>**43). How can you fix a broken commit?**</font><br>
**```To fix any broken commit, you will use the command ```**<font color='green'>***“git commit—amend”***</font>.**```By running this command, you can fix the broken commit message in the editor.```**
***












