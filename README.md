# Culture Counts Hire Tech Test

Hello! Thanks for agreeing to take our tech test. We did this test ourselves and it took us a couple of hours. You should complete the test on the same day we send it to you.

Ok, let's get started!

![How to code](https://bitbucket.org/culturecounts1/hire-tech-test-completed/raw/master/how-to-code.gif)

## The Test

You will modify a basic TODO list app.

There are 2 client side code questions, 1 server side code question, and 1 CSS/design question.

We want to know:

 1. How you adapt to the constraints of an existing project.
 2. That you can write code that is clear, modular, efficient, logical & understandable.
 3. That you can write both client and server side code.
 4. That you are able to jump in and learn a new stack quickly.

If you are unable to finish the test in time or get stuck, **that's ok!**

Please send us your answers anyway and identify the areas you had trouble with and why.

The project itself is based on a popular Backbone TODO list app example.

It uses socket.io to talk to the server.

## Instructions

 * Check out the source code with git.
 * Answer each question in any order you like.
 * Commit each answer on a separate branch.
 * At the end, merge the question branches into the master branch.
 * Push all branches to a public repository.
 * Send us the URL for your completed repository.

## Install

Inside the freshly checked out repository:

Set up the nodeenv environment - see below for nodeenv install.

	$ nodeenv --prebuilt nodeenv

Get into the environment.

	$ source ./nodeenv/bin/activate

Install the dependencies.

	$ npm install

Run the server.

	$ PORT=8000 node server.js

Then browse to <http://localhost:8000/>

#### Nodeenv install

You can install nodeenv globally with `easy_install`:

	$ sudo easy_install nodeenv

or with `pip`:

	$ sudo pip install nodeenv

Both require Python. On OSX you may need to use `--no-use-wheel`.

---

## Task Details

Remember to create a branch for each answer, merge all answers into a single branch at the end, and push all branches to your public repository before emailing us.

### Task: Numbering items.

Add numbers next to each task. Numbers should correspond to the task's position in the list. If a task is removed from the list, the remaining task numbers should update to reflect their new position. New tasks should go to the top of the list with number '1'.

![add numbers](http://i.imgur.com/nrJT5s5.png)

### Task: Search

Add search functionality to the app. The search should be an text input that filters the tasks, only displaying tasks that match what the user has entered. The input should search as the user types into the box. See below for an example.

![search with nothing typed in](http://i.imgur.com/EyLyOPH.png)

![search with "ty" typed in](http://i.imgur.com/I831JQg.png)

Your search feature does not have to look exactly like the above examples, as long as it matches the functionality described above.

### Task: Make it Flat

Designers love flat UI these days, and right now, this project is not flat. Your first task is to alter the stylesheet to look as close as possible to the design below. The project includes bootstrap, the popular front-end framework, which you may use to help you style the app, however it is also fine for you to write your own styles.

![make it flat](http://i.imgur.com/5Oe5SN0.png)

This task should not alter the core functionality of the app.

### Task: Persist to disk

Modify the server side code to persist the TODO list datastructure to the hard drive with filename `TODO.json`.

Make sure the server loads the existing data from the `TODO.json` file when it is started.

The file should always contain the current latest copy of the TODO list as seen in the browser.

## Done!

Nice work, now merge your question branches and push all branches somewhere where we can pull your work.

Thanks for taking the test!
