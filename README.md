# typereact

### Git Workflow 
1. Checkout a feature branch (e.g. 'git checkout –b feature/addlogin')

- Make changes to repo

- Add and commit changes

- Rebase from the upstream dev branch to your feature branch (e.g. 'git pull –rebase upstream dev' Be sure to do this while you are on your feature branch)

- Resolve merge conflicts (if there are any)

- Push changes to your personal github account (e.g. 'git push origin feature/addlogin')

-  Submit pull request from your personal github to the org’s github (the pull request should be from your feature branch to the org’s dev branch)

- Once your pull request has been merged to the org's dev branch, git checkout your local dev branch (e.g. 'git checkout dev') and rebase from the org's dev branch (e.g. 'git pull --rebase upstream dev') before beginning work on a new branch
