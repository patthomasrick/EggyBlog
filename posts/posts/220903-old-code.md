---
title: "Discovering Old Code"
subtitle: "Code from when I was learning to program."
date: "2022-09-03"
image: "/images/posts/old-code-super-crab.svg"
tags:
  - "personal"
  - "blog"
---

Recently I was collecting all of my documents and code that I produced in college for archival and backing-up. When doing this, I came across code that I wrote in 2011 when I was learning to program for the first time. It was fun to look back on the code and see how far I've come since then; this code took weeks for me to make and is now something that I can produce in a sitting or two.

![Background and player sprite from a platforming game I was making called Super Crab.](/images/posts/old-code-super-crab.svg)

_Background and player sprite from a 2D platforming game that I was making called Super Crab. The inspiration was from my pet hermit crab and older Mario games._

To make sure I didn't lose the five or so projects that I discovered forever, I uploaded them to private repositories in my GitHub. I haven't made them public yet since I don't know how much information is contained in them, but hopefully I can make them public in the future.

All of the projects are Python 2.5, which was the version of Python out at the time and also the same version used in the book that I taught myself from. It would take a bit of work to get these running again since this was way before I learned about `requirements.txt` and dependency control; I'm not sure how I even installed [pygame](https://www.pygame.org) and I remember [PythonCard](http://pythoncard.sourceforge.net/) being tricky to get and install even back then.

```py
def DisplayMap(level, mapx, mapy): #Renders Map only
    ycord = 0
    count = 0
    for i in range(15,mapy + 15):
        for l in range(0,mapx):
            xcord = l * 30
            if level[count] == 'b':
                blockimage = pygame.image.load('beigewall.png').convert()
                screen.blit(blockimage, [xcord,ycord])
            if level[count] == 'B':
                blockimage = pygame.image.load('bluewall.png').convert()
                screen.blit(blockimage, [xcord,ycord])
            if level[count] == 'G':
                blockimage = pygame.image.load('graywall.png').convert()
                screen.blit(blockimage, [xcord,ycord])
            if level[count] == 'g':
                blockimage = pygame.image.load('grass.png').convert()
                screen.blit(blockimage, [xcord,ycord])
            if level[count] == 'd':
                blockimage = pygame.image.load('dirt.png').convert()
                screen.blit(blockimage, [xcord,ycord])
            count += 1
        xcord = 0
        ycord = ycord + 30
```

_Example function that renders a map. One of the better examples of bad code from when I was learning to program. I like the lack of `elif`s, the function naming scheme, and the lack of underscores in variable names. Above all, the entire function could be reduced to a map from character to image name and a single `dict` lookup. Architecture is non-existent._
