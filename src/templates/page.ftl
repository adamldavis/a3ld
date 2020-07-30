<#include "header.ftl">

	<#include "menu.ftl">

	<#if (content.title)??>
	<div class="page-header">
		<h1><#escape x as x?xml>${content.title}</#escape></h1>
	</div>
	<#else></#if>

	<p>${content.body}</p>

	<hr />


	<p><i>Updated: ${content.date?string("dd MMMM yyyy")}</i></p>


<#include "footer.ftl">