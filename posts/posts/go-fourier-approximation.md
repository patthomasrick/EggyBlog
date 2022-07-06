---
title: "Golang Fourier Approximation"
date: "2020-05-11"
time: "12:00"
image: /images/posts/plot_square.png
tags:
  - "project"
---

![](/images/posts/plot-square.png)

This project was designed as a proof-of-concept and as a test for myself in using Go's concurrency tools. In addition, this project doesn't use any external numerical libraries, so all mathematical functions were either provided by standard Go or implemented by hand (like numerical integration).

Plotting was done via outputting the data directly to a text file and then plotting the data within through Gnuplot.

Check it out on Github here: <https://github.com/patthomasrick/go-fourier-series>
