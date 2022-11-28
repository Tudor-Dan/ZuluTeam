### Agile Workshop Practice

Node:
- Before running the app, please install the required project dependencies with this command from terminal:
    - `npm i`
- Afterwards, you can run the app with:
    - `node app`

Git flow:

- Before creating a new branch choose which is the source branch
    - `git checkout master`
    - If you get an error it most probably is caused that you have uncommited files on the current branch (`git status`)
- Name the new branch following the pattern ID_short_description_of_ticket
    - `git checkout -b 1_delete_transaction`
- Write your code and then commit it
    - `git add .`
    - `git commit -m "meaningful commit message about you have modified"`
- Push your code to github
    - `git push origin 1_delete_transaction` (supposed our branch name is 1_delete_transaction)
- On GitHub create a new Pull Request
    - Press the `Pull requests button`
    - Press the `New pull request button`
    - Press the `compare` button and select then name of your branch you pushed at the previous step
    - Press the `base` button and select the `master` branch
    - Press the `Create pull request` button