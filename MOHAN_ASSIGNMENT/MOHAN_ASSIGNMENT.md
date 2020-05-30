# GIT ASSINMENT
**1) Difference between text file, XML file, JSON file?**
 
 | JSON file | XML file |
 | --------- | --------- |
| JSON stands for JavaScript Object Notation.| XML stands for eXtensible Markup Language.|
| JSON is data-oriented. | XML is document-oriented. |
| JSON doesn't provide display capabilities. | XML provides the capability to display data because it is a markup language.|
| JSON supports only text and number data type.| XML support many data types such as text, number, images, charts, graphs etc. |


*TXT file*
* A text file is a computer file that only contains text.
* text files are identified with the .txt


**2) What is GIT?**
* Git is a distributed version-control system for tracking changes in source code during software development. 
* It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.
 


**3) What is a repository in GIT?**
* GitHub Repositories are used to store all the files, folders and other resources which you care about. 
* A git repository contains, among other things, the following: A set of commit objects. A set of references to commit objects, called heads.


**4) What is the command you can use to write a commit message?**
* git commit -m "commit message" < m is a flag that is used for connecting commit messages>


**5)  What is the difference between GIT and SVN?**

* The difference between Git and SVN version control systems is that Git is a distributed version control system, whereas SVN is a centralized version control system. 
* Git uses multiple repositories including a centralized repository and server, as well as some local repositories. SVN does not have a centralized repository or server.|

# GIT-WORK-FLOW 
![alt text ](https://hackbrightacademy.com/content/uploads/2013/08/git_work_flow.png)


# SVN-WORK-FLOW 
![alt text](https://hackbrightacademy.com/content/uploads/2013/08/svn_work_flow.png)

**6)  What are the advantages of using GIT?**

* Git has a staging area. This just means that if you made 100 new changes to your code.
* you can break these 100 changes into 10 or 20 or more commits each with their own comments and their own detailed explanation of what just happened!

**7)   What is the function of ‘GIT PUSH’ in GIT?**
1. The git push command is used to upload local repository content to a remote repository. 
2. Pushing is how you transfer commits from your local repository to a remote repo. 
3. It's the counterpart to git fetch , but whereas fetching imports commits to local branches, pushing exports commits to remote branches.

**8)  Why GIT better than Subversion?**
* Git may have more difficulty compressing and storing binary files, while SVN doesn't as much. 
* That said, many claim Git is better than SVN because it works well even for developers who aren't always connected to the master repository, as it is available offline. 

**9)  What is “Staging Area” or “Index” in GIT?**
* The Git index is used as a staging area between your working directory and your repository.
* You can use the index to build up a set of changes that you want to commit together.
* When you create a commit, what is committed is what is currently in the index, not what is in your working directory.

**10)  what is GIT stash?**
* Git stash is a temporary storage.
* Sometimes you want to switch the branches, but you are working on an incomplete part of your current project. 
* You don't want to make a commit of half-done work. Git stashing allows you to do so. 
* The git stash command enables you to switch branches without committing the current branch.
* The below figure demonstrates the properties and role of stashing concerning repository and working directory.

# GIT STASH

![alt text ](https://static.javatpoint.com/tutorial/git/images/git-stash.png)


* Generally, the stash's meaning is "store something safely in a hidden place.
* " The sense in Git is also the same for stash; Git temporarily saves your data safely without committing.


**11) What is GIT stash drop?**
* we use git stash drop command to remove it from the list of stashes.
* By default, this command removes to latest added stash
* To remove a specific stash we specify as argument in the git stash drop <stashname> command.


**12) How will you know in GIT if a branch has been already merged into master?**
* We can use following commands for this purpose:
* git branch --merged master : This prints the branches merged into master
* git branch --merged lists : This prints the branches merged into HEAD (i.e. tip of current branch)
* git branch --no-merged : This prints the branches that have not been merged
* By default this applies only to local branches.
* We can use -a flag to show both local and remote branches.
* we can use -r flag to show only the remote branches.


**13)  What is the function of GIT CLONE?**
*  git clone is primarily used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location.
* The original repository can be located on the local filesystem or on remote machine accessible supported protocols.
* The git clone command copies an existing Git repository.




**14)  What is the function of 'GIT CONFIG'?**
* The git config command is a convenience function that is used to set Git configuration values on a global or local project level.
* These configuration levels correspond to . gitconfig text files. 
* Executing git config will modify a configuration text file.
# GIT CONFIG
![alt text ](https://poftut.b-cdn.net/wp-content/uploads/2019/08/img_5d4a5e05f02de.png)


**15)  What does commit object contain?**
* The commit object contains the directory tree object hash, parent commit hash, author, committer, date and message. 
* I'll use git cat-file to show the contents of the hashed files in . git/objects , but cat-file is a relatively obscure git command that you will probably not need in your daily git work.
#  commit object contain
![alt text ](https://shafiul.github.io/gitbook/assets/images/figure/objects-example.png)


**16)  How can you create a repository in GIT?**

   *Start a new git repository*
 1. Create a directory to contain the project.
 2. Go into the new directory.
 3. Type git init .
 4. Write some code.
 5. Type git add to add the files (see the typical use page).
 6. Type git commit
 # 
![alt text ](https://help.github.com/assets/images/help/repository/create-repository-desc.png)
    

**17)  What is the 'head' in GIT and how many heads can be created in a repository?**
* There can only be one HEAD - the symbolic reference that points to either the branch (which itself points to a sha1), or the sha1 itself (when you are in a detached head state), which you currently have checked out, and which will be the parent of your next commit.

* Technically, a “head” is just a commit, though. Each branch is a potential head, a place where a new commit could be created. Also, each commit. Also, each tag.

**18)  What is the purpose of branching in GIT?**
* In Git branches are a part of your everyday development process.
* Git branches are effectively a pointer to a snapshot of your changes.
* When you want to add a new feature or fix a bug—no matter how big or how small—you spawn a new branch to encapsulate your changes.


**19)  What is the common branching pattern in GIT?**

# common branching patterns
* it is an systmatic way to develop a project
* the common branching pattern means the new features are merge from develop branch to master branch
* master
* develop
* feature
* hotfix
* release







**20) How can you bring a new feature in the main branch?** 
* create a new branch (git checkout -b marys-feature master)
* check status , add files and then commit 
* <git status
* git add <some-file>
* git commit >







**21) What is a 'conflict' in GIT?**
* A conflict arises when two separate branches have made edits to the same line in a file, or when a file has been deleted in one branch but edited in the other. 
* Conflicts will most likely happen when working in a team environment. There are many tools to help resolve merge conflicts.


**22) How can conflict in GIT resolved?**
* first check the ("git - status")
* then check the status and add the missing files (conflict ) to the branch
* and merge the new branch with feature branch 




**23) To delete a branch what is the command that is uesd?**
* The -d option will delete the branch only if it has already been pushed and merged with the remote branch.
* Use -D instead if you want to force the branch to be deleted, even if it hasn't been pushed or merged yet.

command

 *delete branch locally*
git branch -d localBranchName

 *delete branch remotely*
git push origin --delete remoteBranchName

**24) What is another option for merging in GIT?**
* Using git rebase Instead of git merge. 
* Using the "git merge" command is probably the easiest way to integrate changes from one branch into another.
* However, it's not your only option: "git rebase" offers another, slightly different way of integration.
# 

![alt text ](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTacjwvwCSFYrMLpA0X2DFkoem6AHDMJlOPaolxN7CFNG7rrT5o&usqp=CAU)


**25) What is the syntax for "Rebasing" in GIT?**
#### Start a new feature
* git checkout -b new-feature master
#### Edit files
* git commit -a -m "Start developing a feature"
#### Create a hotfix branch based off of master
* git checkout -b hotfix master
#### Edit files
* git commit -a -m "Fix security hole"
#### Merge back into master
* git checkout master
* git merge hotfix
* git branch -d hotfix
* git checkout new-feature
* git rebase master
* git checkout master
* git merge new-feature




**26) What is the difference between 'GIT REMOTE' and 'GIT CLONE'?**
* Git remote is used to refer to a remote repository or your central repository.
* Git clone is used to copy or clone a different repository


**27) What is GIT version control?**
*  Git (/ɡɪt/) is a distributed version-control system for tracking changes in source code during software development.
* It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.
# GIT version control
![alt text ](https://i.ytimg.com/vi/OqmSzXDrJBk/maxresdefault.jpg)



**28) What is 'GIT STATUS' is used for?**
* The git status command displays the state of the working directory and the staging area. 
* It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.
*  Status output does not show you any information regarding the committed project history.
# GIT STATUS
![alt text ](https://miro.medium.com/max/1458/1*B2sgTZoPNqZKGLsTh9pg6A.png)


**29) What is the difference between the 'GIT Diff' and 'GIT STATUS'?**
* Git status command will only let you know, what are in staging area, it will show you whether there is some file which is untracked etc. ...
*  “Git diff --cached” or “git diff –staged” will compare the staged state and last commit state

**30) What is the function of 'GIT CHECKOUT' in GIT?**
* The git checkout command lets you navigate between the branches created by git branch.
* Checking out a branch updates the files in the working directory to match the version stored in that branch, and it tells Git to record all new commits on that branch
# GIT CHECKOUT
![alt text ](https://media.geeksforgeeks.org/wp-content/uploads/20190902185659/1406-1.png)



**31) What is the function of 'GIT RM'?**
* The git rm command can be used to remove individual files or a collection of files. 
* The primary function of git rm is to remove tracked files from the Git index. 
* Additionally, git rm can be used to remove files from both the staging index and the working directory.

# GIT RM
![alt text ](https://static.javatpoint.com/tutorial/git/images/git-rm-3.png)

**32) What is the function of 'GIT stash apply?**
* Use git stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. 
* The command saves your local modifications away and reverts the working directory to match the HEAD commit.


**33) What is the use of 'GIT LOG'?**
* The Git Log tool allows you to view information about previous commits that have occurred in a project. 
* The simplest version of the log command shows the commits that lead up to the state of the currently checked out branch.
* These commits are shown in reverse chronological order (the most recent commits first)


**34) What is 'GIT ADD' is used for?**
* The git add is a command, which adds changes in the working directory to the staging area.
* With the help of this command, you tell Git that you want to add updates to a certain file in the next commit.
* But in order to record changes, you need to run git commit too.
# GIT ADD
![alt text ](https://www.w3docs.com/uploads/media/default/0001/03/ad19114d2f18ae7f7e8b99a5110d1a2f339282c6.png)



**35)  What is the function of 'GIT RESET?**

* Git reset is a powerful command that is used to undo local changes to the state of a Git repo.
* Git reset operates on "The Three Trees of Git".
* These trees are the Commit History ( HEAD ), the Staging Index, and the Working Directory.
# GIT RESET

![alt text ](https://git-scm.com/book/en/v2/images/reset-checkout.png)

**36) EXplain what is commit message?**
* Commit messages can do exactly that and as a result, a commit message shows whether a developer is a good collaborator. 
* If you haven't given much thought to what makes a great Git commit message, it may be the case that you haven't spent much time using git log and related tools

[image of commit message](https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgs.xkcd.com%2Fcomics%2Fgit_commit_2x.png&imgrefurl=https%3A%2F%2Fchris.beams.io%2Fposts%2Fgit-commit%2F&tbnid=0VroJibtHXUD5M&vet=12ahUKEwish76C6dPpAhXCeysKHWNUDjoQMygBegUIARDrAQ..i&docid=PM7POmjONviswM&w=878&h=501&q=EXplain%20what%20is%20commit%20message&hl=en-GB&ved=2ahUKEwish76C6dPpAhXCeysKHWNUDjoQMygBegUIARDrAQ)


**37) How can you fix a broken commit?**
* Commit again with the fix. Use an interactive rebase with a branch or commit that is earlier than the commit that introduced the spelling error. 
* If master is earlier than the spelling mistake, I'd run “git rebase -i master” An interactive rebase will list all your new commits along with “pick” on the left