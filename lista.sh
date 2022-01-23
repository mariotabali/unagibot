grep -v '^#' sites.txt > sites2.txt
while IFS="" read -r p || [ -n "$p" ]
do
  node src/runcli.js "$p"
  echo
done < sites2.txt
