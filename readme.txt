🔄 Daily Work Flow
master    → production (live site)
develop   → staging / integration
feature/* → individual features

Git Flow via Git Bash

Working Branch:
git checkout -b feature/navbar-update
git add .
git commit -m "commit msg"
git push origin feature/navbar-update

2️⃣ Merge feature → develop
git checkout develop
git pull origin develop
git merge --no-ff feature/navbar-update
git push origin develop

3️⃣
after merge feature → feature/navbar-update
Delete Branch
git branch -d feature/navbar-update

4️⃣ Release to Production (Deploy)
git checkout master
git pull origin master
git merge --no-ff develop
git push origin master

5️⃣ Create Version Tag
para ito sa git name (yung date sa araw ng pagm-merge)

E.g,
260226.01

git tag -a 260226.01 -m "Portfolio release 260226.01"
git push origin 260226.01