# python extract substring between two markers
[[python]]

<pre class="py">
import re
print re.search('AAA(.*?)ZZZ', 'gfgfdAAA1234ZZZuijjk').group(1)
</pre>
