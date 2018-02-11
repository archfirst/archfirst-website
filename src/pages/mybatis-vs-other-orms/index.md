---
title: MyBatis vs. Other ORMs
date: "2015-07-01T15:00:00.000Z"
---

Object-Relational Mapping (ORM) frameworks allow us to access relational databases from object-oriented languages. Over the years, I have used several ORMs - [Hibernate](http://hibernate.org/orm/)/[JPA](http://www.oracle.com/technetwork/java/javaee/tech/persistence-jsp-140049.html) for Java, [Bookshelf.js](http://bookshelfjs.org/) and [Sequelize](http://docs.sequelizejs.com/en/latest/) for JavaScript, just to name a few. I was never completely satisfied with these solutions because in one way or another, they did not match my way of thinking. Recently, I tried [MyBatis](http://mybatis.github.io/mybatis-3/) and it was a breath of fresh air! Let me explain why.

## Domain entities should be free of persistence concerns

If you follow [Domain-Driven Design](../domain-driven-design/), you probably subscribe to the idea that domain entities should stand on their own. You should not have to drag along a persistence framework with them. Domain entities form the inner core of the [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture), which focuses only on the business logic. You should be able to stand up this core any way you want - by constructing new objects or retrieving them from a database, the core itself should not care. Many ORMs pollute this core with persistence concerns, and I don't like that. For example, Bookshelf forces you to define entities using [Model](http://bookshelfjs.org/#Model) objects, and Sequelize does the same using [sequelize.define( )](http://docs.sequelizejs.com/en/latest/docs/getting-started/#your-first-model). This creates "hidden" properties and methods inside the entities that teach them to persist themselves. I would rather have pure Java/JavaScript objects that focus on business logic, and then teach the persistence framework to persist them.

Well, that's exactly what MyBatis does. Entities are POJOs that know nothing about persistence (see [here](https://github.com/archfirst/manage-my-money-mybatis/blob/master/src/main/java/org/archfirst/mmm/domain/Transaction.java)). Instead you teach MyBatis how to save and retrieve these entities using SQL statements and result maps (see [here](https://github.com/archfirst/manage-my-money-mybatis/blob/master/src/main/resources/org/archfirst/mmm/persistence/TransactionMapper.xml)). For trivial objects, you don't even have to define result maps, MyBatis figures them out automatically.

## Give me control over SQL

For any serious project that uses a relational database, you can't escape learning SQL. Most ORMs try to insulate you from SQL by providing higher level abstractions. However in exchange, they force you to learn a new API or an abstract query language. These APIs/query languages generate SQL anyway, so the only difference is that you don't know what they are generating until you pop open the hood. In many cases, a query that I can write in a single statement, will be generated in two or more statements, reducing performance. Now I am suddenly going back to the ORM and tweaking it to produce a more efficient query. Sometimes the API is not rich enough to do everything I want, and I have to escape into SQL land anyway. Why bother with all this? If I have to know SQL anyway, why not just write it myself and optimize it directly? Teaching the framework to map the result into objects is much easier.

Guess what, that's exactly what MyBatis does - see the result map [here](https://github.com/archfirst/manage-my-money-mybatis/blob/master/src/main/resources/org/archfirst/mmm/persistence/TransactionMapper.xml). It teaches MyBatis how to map a query result in to a _Transaction_ object with references to an _Account_ and a _Category_. I end up with much cleaner and understandable code.

## Conclusion

I hope you can see why I like MyBatis. This will be my default ORM for Java going forward. However I have yet to see a comparable solution for JavaScript. If there was such a solution, would you switch to it? I would love to hear your thoughts.

## References

Here are the two projects I used for comparing MyBatis to other ORMs:

* [Manage My Money Server - MyBatis](https://github.com/archfirst/manage-my-money-mybatis)
* [Manage My Money Server - Bookshelf](https://github.com/archfirst/manage-my-money-server)
