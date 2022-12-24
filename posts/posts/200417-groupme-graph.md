---
title: 'GroupMe Graph'
subtitle: 'Export GroupMe chat information into Neo4j for graph analysis'
date: '2020-04-17'
image: '/images/posts/groupme-graph-1.png'
tags:
  - 'project'
---

![](/images/posts/groupme-graph-1.png)

![](/images/posts/groupme-graph-2.png)

GroupMe is a chat service popular among some communities and colleges such as
the University of Virginia and is often the chat tool of choice for groups and
organizations at UVa. This tool communicates with
[GroupMe's REST API](https://dev.groupme.com/) and provides interfaces to
download and access various about groups, messages, and users in shared groups.
This information is exported into Neo4j, a graph database, such that the
information can then be analyzed and accessed in a natural way with apparent
relationships between various data.

---

Check out the source [here](https://github.com/patthomasrick/groupme-graph)!
