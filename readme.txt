Git Flow

Always work on develop branch

Git Flow

1. Ensure your local repository is up-to-date

> git fetch origin

2. Switch to the master branch:
You need to be on the master branch to merge develop into it.
If you're not already on master, switch to it with: develop branch

> git checkout master

3. Merge the develop branch into master: Now, merge the changes from develop into master:
> git merge develop

4. Push the changes to the remote repository:
After the merge is complete and any conflicts are resolved, push the changes to the remote repository:

> git push origin master

5. (after published switch back again to develop branch)