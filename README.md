# typereact

### Git Workflow
1. Checkout a feature branch (e.g. 'git checkout –b feature/addlogin')

2. Make changes to repo

3. Add and commit changes

4. Rebase from the upstream dev branch to your feature branch (e.g. 'git pull –rebase upstream dev' Be sure to do this while you are on your feature branch)

5. Resolve merge conflicts (if there are any)

6. Push changes to your personal github account (e.g. 'git push origin feature/addlogin')

7. Submit pull request from your personal github to the org’s github (the pull request should be from your feature branch to the org’s dev branch)

8. Once your pull request has been merged to the org's dev branch, git checkout your local dev branch (e.g. 'git checkout dev') and rebase from the org's dev branch (e.g. 'git pull --rebase upstream dev') before beginning work on a new branch
