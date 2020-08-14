# !/bin/bash (shebang to tell which shell you want to use)
# `bash script.sh` overrides shebang spec within the file

echo $SHELL #usr/bin/bash
echo $0 		#usr/bin/bash

echo $PATH #env variable 
type git #git is mingw64/bin/git (specifies type of command)
type cd #cd is a shell builtin

printenv #print environment variables

# permissions
chmod u+rwx # gives them to the user
chmod g+rwx # gives them to the group
chmod o=rwx # gives them to others
chmod 770

A && B # logic AND; B depends on A
A || B # logic  OR; if A not B

& # at the end of a command allows you to execute it on the background
  # eg: tar czvf archive.tar.gz /var &
fg # return to foreground

nohup # supplemental command that tells the Linux system not to stop another command once it has started. https://www.maketecheasier.com/nohup-and-uses/#:~:text=Nohup%20is%20a%20supplemental%20command,sh%20your%2Dscript.sh%20%26

stdin(0) # def input; keyboard
stout(1) # def output; screen
stderr(2) # err output

ls -l > test.txt # file list to .txt
ls -l >> test.txt # append instead of overwriting
ls -l 2> /dev/null # sends errors to void (null device)
ls -l &> test.txt # regular output + errors to .txt

#eg outputs
tar czvf file.tar.gz / var &> logtar 2> logtarerr

apt upgrade < 'y' # passes 'y' as input to y/n questions that come up


ps aux # shows current processes 

#pipes
ls -a | grep git # searches for 'git' within that file list
ls -l /etc | grep sudo # shows only "sudoers"

# \ to scape chars
# ./srcipt.sh to execute

