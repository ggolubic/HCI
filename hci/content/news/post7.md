---
title: Practical Puppeteer
date: 2019-11-15
slug: Practical-Puppeteer
published: true
author: Sony AK
---

If you used to play with Puppetter, you must be already know that when installing Puppeteer (with npm i puppeteer) it will install recent version of Chromium browser. So it's quite big download size and usually takes long time during installation.

Today we will try to use Puppeteer Core (package name puppeteer-core), a version of Puppeteer that doesn't download Chromium by default. It available since Puppeteer version 1.7.0.

The difference between puppeteer and puppeteer-core in the term of launch settings is we have to define the Chrome or Chromium browser executable path. Technically we have to define executablePath option that contains the Chrome or Chromium browser path. We will show this later on the source code.
