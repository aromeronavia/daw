"use strict";

( function() {

var typeToIcon = {
		sampleCreate: "paint",
		sampleRemove: "delete",
	};

// "paint cut delete move crop select slip"

ui.historyAction = function( actobj ) {
	var tpl = document.querySelector( "#historyAction" ).content,
		elRoot = document.importNode( tpl, true ),
		icon = typeToIcon[ actobj.type ];

	ui.dom.templateCloned.appendChild( elRoot );
	elRoot = ui.dom.templateCloned.querySelector( ".historyAction" );
	elRoot.remove();

	this.elRoot = elRoot;
	elRoot.querySelector( ".type" ).classList.add( icon );
	elRoot.querySelector( ".title" ).textContent = icon;
	elRoot.querySelector( ".text" ).textContent = actobj.text;
};

} )();
