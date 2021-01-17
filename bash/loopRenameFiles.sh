# IFS: Input field separator https://mywiki.wooledge.org/IFS
# set IFS to newline only; substitute name part for newName; reset IFS
# https://unix.stackexchange.com/questions/9496/looping-through-files-with-spaces-in-the-names
OIFS="$IFS"
IFS=$'\n'
for file in `find . -type f -name "*name*"`  
do
     mv ${file} "${file/\[name\]/newName}"
done
IFS="$OIFS"
