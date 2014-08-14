// ==UserScript==
// @name        Neopets Neoquest Keyboard Navigation
// @namespace   demeiz
// @description Neopets Neoquest Keyboard Navigation, Move character with numpad, Access skills/item menu and fully fight with keypad.
// @include     http://www.neopets.com/games/neoquest/neoquest.phtml*
// @version     0.1
// @grant       none
// ==/UserScript==


// This part of the code automatically clicks the return to map after a battle has finished.
// As it's a form input button i'm unsure of a way to bind it to a key. this way works fine though.
for(i=0;i<document.forms.length;i++){    
    if(document.forms[i].elements[0].value=="Click here to return to the map"){
                         document.forms[i].submit();
    }
}

// Main keybind function
function nq_keyboardnavigation_bindings(e)
{
	// Go West (LEFT)
	if(e.keyCode == 100) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=4"
	}
	// Go East (RIGHT)
	if(e.keyCode == 102) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=5"
	}
	// Go North (UP)
	if(e.keyCode == 104) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=2"
	}
	// Go South (DOWN)
	if(e.keyCode == 98) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=7"
	}	
	// Go North-West (UP+LEFT)
	if(e.keyCode == 103) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=1"
	}
	// Go North-East (UP+RIGHT)
	if(e.keyCode == 105) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=3"
	}
	// Go South-West (DOWN+LEFT)
	if(e.keyCode == 97) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=6"
	}
	// Go South-East (DOWN+RIGHT)
	if(e.keyCode == 99) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir=8"
	}
	// items I
	if(e.keyCode == 73) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=items"
	}
	// skills S
	if(e.keyCode == 83) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=skill"
	}
	// Sneaking mode -
	if(e.keyCode == 173) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?movetype=3"
	}
	// Hunting mode +
	if(e.keyCode == 61) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?movetype=2"
	}
	// attack Z
	if(e.keyCode == 90) {
		document.location.href="javascript:setdata('attack', 0);"
	}
		// Cast Absorbtion X
	if(e.keyCode == 88) {
		document.location.href="javascript:setdata('special', 4003);"
	}
			// Weak healing pot C
	if(e.keyCode == 67) {
		document.location.href="javascript:setdata('item', 220000);"
	}	
			// Standard Healing pot V
	if(e.keyCode == 86) {
		document.location.href="javascript:setdata('item', 220001);"
	}	
		 // Back/Main map numpad 5
	if(e.keyCode == 101) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml"
	}
		// Standstill Find fight num-Enter
	if(e.keyCode == 13) {
		document.location.href="http://www.neopets.com/games/neoquest/neoquest.phtml?action=move&movedir="
	}
}
window.addEventListener('keydown', nq_keyboardnavigation_bindings, true);