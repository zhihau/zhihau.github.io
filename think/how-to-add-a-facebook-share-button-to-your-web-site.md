# How to add a facebook share button to your web site
[[site]]
<!-- vim-markdown-toc GitLab -->

* [Steps](#steps)
    * [Button Script](#button-script)
    * [Facebook Share Button](#facebook-share-button)
* [Reference](#reference)

<!-- vim-markdown-toc -->

## Steps
Add below codes to your page body.
### Button Script
<pre class="html">
<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
</pre>

### Facebook Share Button
<pre class="html">
<!-- Your share button code -->
<div class="fb-share-button" 
data-href="you_site_page_url" 
data-layout="button_count">
</div>
</pre>

## Reference
[Facebook HELP](https://developers.facebook.com/docs/plugins/share-button/)

