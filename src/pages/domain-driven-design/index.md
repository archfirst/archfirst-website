---
title: 1. Domain-Driven Design - Introduction
date: '2015-02-22T15:00:00.000Z'
---

Domain-Driven Design, or DDD, is an approach for building high-quality software that meets core business objectives. It emphasizes collaboration among domain experts, developers, UX designers and other disciplines to create a domain model that reflects the needs of the business. This involves agreeing on common terminology (a.k.a. the _Ubiquitous Language_), identifying business entities, their behavior and relationships and organizing them in a way that lends itself to a clean and modular implementation.

This article explains DDD concepts using the example of a trading application called Bullsfirst. It is a sample application that demonstrates the use of best practices in software development. The diagram below shows the architecture of Bullsfirst.

![Bullsfirst Platform](../bullsfirst/bf-platform.png)

At a very high level, users can enter orders to buy and sell securities through the front-end. The orders are managed by an Order Management System (OMS), which is typically owned by a brokerage firm. The OMS places the orders in an Exchange where a matching engine matches them and executes trades.

This article has been structured to introduce the fundamental DDD concepts upfront. If you are a domain expert, developer, UX designer, tester or anyone generally interested in learning about DDD, go through sections 2 (Ubiquitous Language) and 3 (Domain Model). For a deeper understanding, especially for developers, go through all the remaining sections.

## Navigation

1. Introduction
2. [Ubiquitous Language](../domain-driven-design-2-ubiquitous-language)
3. [Domain Model](../domain-driven-design-3-domain-model)
4. [Bounded Context](../domain-driven-design-4-bounded-context)
5. [Command-Query Separation](../domain-driven-design-5-command-query-separation)
6. [Layered Architecture](../domain-driven-design-6-layered-architecture)
7. [Domain Layer](../domain-driven-design-7-domain-layer)
8. [Conclusion](../domain-driven-design-8-conclusion)
