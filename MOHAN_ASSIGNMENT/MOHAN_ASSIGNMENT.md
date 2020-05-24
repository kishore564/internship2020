# GIT ASSINMENT
**1) Difference between text file, XML file, JSON file**
 
 *JSON file*
* JSON stands for JavaScript Object Notation.
* JSON is data-oriented.
* JSON doesn't provide display capabilities.
* JSON supports only text and number data type.

 *XML file*
* XML stands for eXtensible Markup Language.
* XML is document-oriented.
* XML provides the capability to display data because it is a markup language.
* XML support many data types such as text, number, images, charts, graphs etc. 

*TXT file*
* A text file is a computer file that only contains text.
* Windows computers text files are identified with the .txt


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
* Git uses multiple repositories including a centralized repository and server, as well as some local repositories. SVN does not have a centralized repository or server.

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

**!0) What is GIT stash?**
* *ometimes you want to switch the branches, but you are working on an incomplete part of your current project. 
* You don't want to make a commit of half-done work. Git stashing allows you to do so. 
* The git stash command enables you to switch branches without committing the current branch.

* The below figure demonstrates the properties and role of stashing concerning repository and working directory.

![alt text](https://static.javatpoint.com/tutorial/git/images/git-stash.png)

* Generally, the stash's meaning is "store something safely in a hidden place.
* " The sense in Git is also the same for stash; Git temporarily saves your data safely without committing.







