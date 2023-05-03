# how-to-open-multiple-urls-via-command

[[javascript]]
## define the commands
- `vi ~/.bashrc`
```
alias chrome='/mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe'
alias bm='_open_bookmarks() { chrome "file:\\G:\OtherComputer\MyComputer\Archive\Note\other\bookmarks.html?g=$1";}; _open_bookmarks'
```
- `source ~/.bashrc` to read new config

## create bookmarks.html
vi bookmarks.html
```
<html>
    <body>

<script>
    const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
    let group = params.g; //  g is group. eg. ?g=php
    let md=`
      # php
      - https://www.w3schools.com/php/
      - https://www.php.net/manual/en/index.php
      - https://codebeautify.org/jsonviewer
      # py
      - http://peterdowns.com/posts/first-time-with-pypi.html
      - https://github.com/vinta/awesome-python
    `;
    //console.log(md);
    part=md.split('\n');
    links=[];
    flag=0;
    //console.log(group);
    s_group="# "+group
    for(var i=0;i<part.length;i++){
            p=part[i].trim();
            if(p.indexOf('- ')>-1 && flag==1){
                    link=p.replace("- ","");
                    links.push(link);
                    /*
                    console.log(p);
                    console.log(flag);
                    console.log(group);
   */
            }
            if(p.indexOf('# ')>-1 && p.indexOf(s_group)>-1 &&flag==0){
                    console.log('11');
                    flag=1;
            }
            if(p.indexOf('# ')>-1 && p.indexOf(s_group)<=-1&&flag==1){
                    /*
                    console.log('22');
                    console.log(p);
                    console.log(flag);
                    console.log(group);
   */
                    flag=0;
            }
    }
    console.log(links);
    for(var i=0;i<links.length;i++){
            if(i==0){
                window.open(links[i],"_self");
            }else{
                window.open(links[i]);
            }
    };

    //window.open('http://yoururl2.com');
</script>
    </body>
</html>
```

## use the command
`bm php` to open php group bookmarks

## chrome settings
click always allow popup window for the file bookmarks.html
