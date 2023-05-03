# python markdown to html
[[python]]

## How
`sudo apt-get update`
`sudo apt install python3-pip`
`pip install markdown`
<pre class="py">
#!/usr/bin/python3
import markdown
with open('input.md', 'r',encoding='utf8') as f:
    text = f.read()
    html = markdown.markdown(text)
with open('output.html', 'w',encoding='utf8') as f:
    f.write(html)
</pre>

## Related
https://www.digitalocean.com/community/tutorials/how-to-use-python-markdown-to-convert-markdown-text-to-html
