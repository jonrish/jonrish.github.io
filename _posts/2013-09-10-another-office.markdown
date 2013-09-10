---
layout: post
title: Another New Office
---

One of the nice things about being a developer is flexability. You can work at the mall. You can work at home. You can even work at a hockey rink. 

<img class="post-pics" src="/images/post_images/hockey_rink.jpg">

That's my office tonight. My son skates and I write a blog post. Not too bad. Development seems to be a pretty results oriented business. If you do things well and get things done then when and where you do them doesn't matter quite as much. My old business was pretty much a bottom line proposition as well. You either produced or you didn't, but there wasn't a lot of flexibility. Most of the time games were scheduled when the majority of people are off. Now I can go to hockey practice, football games, soccer practice, etc ... 

The app is still coming along. Right now the title is still: 'You Make The Play!' Not in love with it, but it has grown on me a little and I have yet to come up with anything better. For the most part I now have a bare bones functioning app. You can pick a highlight. Customize it with all of your personal info. Pay me. (the most important seems to work) It sends out emails as the highlight order moves through the processing, accepted, in production and completed states. I can upload an audio file and the user can download it.

There are still a ton of loose ends and holes to fill. I haven't gotten too far on styling, so it's awful to look at. I have a few navigational issues from page to page and just some basic info that seems fairly obvious to me, but may not be for every user. I also need to produce a sample highlight so potential customers have an idea of what they'd be getting. 

Today I decided to push a staging version to Heroku. I'm not giving the address out here, at least not yet. It isn't really a staging version, but it was functional enough and I was curious. I had a couple issues, but for the most part pushing to Heroku went pretty well. It's a rails 4 app. At first the push failed because the assets wouldn't compile. I used the figaro gem for all of my environment variables. It seems like I basically had two choices. I could compile the assets locally and then push, but I decided to try something from Heroku Labs called <a href="https://devcenter.heroku.com/articles/labs-user-env-compile" target="_blank">user-env-compile</a>, and that did the trick. The only other little glitch so far was rendering background images from from stylesheets. This worked fine in development locally:

{% highlight css %}
	background: url('bat_background.png');
{% endhighlight %}

But for it to work on Heroku I had to add and image_path:

{% highlight css %}
	background: url(image_path('bat_background.png'));
{% endhighlight %}

That's it, two glitches. All things considered that's a good day for me!
