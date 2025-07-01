---
title: 'How I published my first app to the Pebble Appstore'
description:
  'A step-by-step guide to publishing your first Pebble smartwatch app to the
  Pebble Appstore. Learn about the submission process and common gotchas for iOS
  users.'
date: 2014-12-10
tags: ['pebble', 'smartwatch', 'app-development', 'app-store']
readingTime: '3 min read'
slug: 'how-i-published-my-first-app-to-the-pebble-appstore'
---

Publishing
<a href="https://apps.getpebble.com/applications/53b0d17bb9bff87a3e000077" target="_blank" rel="noopener noreferrer">Coffee
Finder</a> to the Pebble Appstore was quick and painless! The whole process only
took about 10 minutes. <sup>1</sup>

It all started on the
<a href="https://dev-portal.getpebble.com/developer" target="_blank" rel="noopener noreferrer">Pebble
Dev Portal</a> where I had to make a profile. Then I had to choose what kind of
application I wanted to publish. In my case, I published a
<a href="https://dev-portal.getpebble.com/applications/new?type=watchface" target="_blank" rel="noopener noreferrer">_watchface_</a>.

Following I had to fill out a form that asked a few questions about the
application I intended to publish. This was also very quick as it only asked for
a Title, Description, website and source code url (which were both optional
fields). In this same page I also uploaded a screenshot of my Pebble app.

On the next page I was able to create a _New Release_, which I called version
1.0, and along with this release I finally uploaded my `.pbw` file.

The last step I took was making the application public. As soon as I made the
application public I was able to find my application on the Pebble Appstore
using my phone.

This was a great experience thanks to the
<a href="https://twitter.com/pebbledev" target="_blank" rel="noopener noreferrer">@PebbleDev</a>
who did a great job at making this whole process so quick and painless.

###_Gotcha:_ "Coming Soon" message instead of "Add" on iOS Devices On the iOS
version of the Pebble Appstore, new apps are
<a href="http://forums.getpebble.com/discussion/12172/coming-soon-instead-of-add-in-pebble-appstore" target="_blank" rel="noopener noreferrer">not
available for download right away.</a> Instead, they are only made available
once Pebble releases a new version of its application to the
<a href="https://itunes.apple.com/us/app/pebble-smartwatch/id592012721?mt=8" target="_blank" rel="noopener noreferrer">App
Store</a>. Further explanation for this can be found
<a href="http://forums.getpebble.com/discussion/12172/coming-soon-instead-of-add-in-pebble-appstore" target="_blank" rel="noopener noreferrer">here</a>.
I also quickly learned the
<a href="https://twitter.com/pebbledev" target="_blank" rel="noopener noreferrer">@PebbleDev</a>
team keeps third-party developers posted when new Apple App Store releases
happen so new updates can be submitted.

#### Personal remarks

Download my app on the Pebble Appstore now:
https://apps.getpebble.com/applications/53b0d17bb9bff87a3e000077

**Thinking of building your own Pebble app?** Take a look at my source code to
learn how I built mine: https://github.com/sergiocruz/pebble-coffee-finder _(I
should be writing a blog post about this soon!)_

<small>_1. Excludes the time it took to actually write the code to make this
application functional._</small>
