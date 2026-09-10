---
layout: page
permalink: /publications/
title: publications
description: in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% assign total_citations = 0 %}
{% for paper in site.data.citations.papers %}
{% assign total_citations = total_citations | plus: paper[1].citations %}
{% endfor %}

<p>
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
  citations: <strong>{{ total_citations }}</strong>
</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
