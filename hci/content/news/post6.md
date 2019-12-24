---
title: Flexible code considered harmful
date: 2019-11-10
slug: Flexible-code-considered-harmful
published: true
author: Coding Unicorn
---

🧠 The biggest mistake programmers make is writing flexible and abstract code. Some of us believe that writing flexible and abstract code helps the system evolve fast. We write interfaces, abstract classes, frameworks, and platforms, assuming that they help us fulfill future requirements faster.
⠀
Open-Closed Principle suggests that we should be able to extend the behavior of a system without having to modify that system. It's the most dangerous and widely misunderstood programming principle I am aware of.

🔥 In theory, it's a good idea. But there is a caveat. All those extension points introduce extra complexity. Complexity makes the system harder to understand and harder to charge. What's worse, our abstractions are usually wrong, because often we design them up-front, before the actual flexibility is needed.

Flexible and abstract and flexible code is hard to use and also hard to understand. It slows us down. Keep in mind that speed is achieved by writing simple and direct code with as few abstractions as possible.
