"use strict";

function UImixerInit() {
	const win = UIwindows.window( "mixer" );

	win.append( UImixer.rootElement );
	win.onresize = () => UImixer.resize();
	win.onresizing = () => UImixer.resizing();
	UImixer.attached();
	UImixer.setDAWCore( DAW );
	UImixer.onselectChan = id => UIeffectsSelectChan( id );
}

function UImixerOpenChanPopup( objFamily, objId ) {
	const currChanId = DAW.get[ objFamily ]( objId ).dest;

	gsuiPatterns.selectChanPopupSelect.value = currChanId;
	gsuiPopup.custom( {
		title: "Channels",
		element: gsuiPatterns.selectChanPopupContent,
		submit( { channel } ) {
			if ( channel !== currChanId ) {
				DAW.callAction( "redirectToChannel", objFamily, objId, channel );
				UImixer.selectChannel( channel );
			}
		}
	} );
}
