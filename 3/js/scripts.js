// Remove explitives from comments
// REF: http://api.jquery.com/contains-selector
// REF: http://api.jquery.com/addclass/
// Extend into an array of explitives

$('.text:contains("doodoo")').addClass('bad');
//:contains is a jquery method to filter

console.log($('.text:contains("doodoo")').length);

var bad = ['doodoo', 'nerd', '378', ':-)'];

for (var i=0; i < bad.length; i++){
	console.log(bad[i]);

}