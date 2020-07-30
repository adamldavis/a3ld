<#include "header.ftl">
	
	<#include "menu.ftl">

	<div class="page-header">
		<img src="<#if (content.rootpath)??>${content.rootpath}<#else></#if>images/a3ld.png" alt="A3LD">
	</div>

	<article class="note">
	    <p>
        Hi there!
        <br />
        <p>
        I've been a software developer for over fifteen years and have always had a passion for software.
        <p>
        Over the years I've gained a lot of experience in various programming languages, software development practices, systems, and design principles
        - constantly looking to improve and learn.
        <p>
        Take a look around and see what you can get from this site. If you have any questions don't hesitate to email me.
        <p>
        Thanks,
        <br />
        <p>
        Adam L. Davis
    </article>

    <article class="projects">
        <h2>Projects</h2>

        <p><a href="https://bitbucket.org/adamldavis/dollar-lang/wiki/Home">Dollar-lang</a>: An implementation of Tuples and Mabye for Java</p>
        <p><a href="https://github.com/adamldavis/z">Zeta-code</a>: Experimental IDE visualizing code using a ZUI, and breaking files apart into methods/functions</p>
        <p><a href=https://github.com/adamldavis/humblecode">Humblecode</a>: Spring/Webflux/Mongo</p>
        <p><a href="https://www.groocss.org/">GrooCSS</a>: A Groovy-based DSL for CSS generation</p>
        <p><a href="https://github.com/adamldavis/graphql-java-immutables">graphql-java-immutables</a>: Generator for Immutable Java classes from GraphQL Schema</p>

    </article>

<#include "footer.ftl">


