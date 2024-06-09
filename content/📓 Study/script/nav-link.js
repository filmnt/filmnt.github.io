var url = document.getElementById( 'links' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#links').prop('selectedIndex',0);};