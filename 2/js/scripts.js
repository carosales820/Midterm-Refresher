// Three *new* message when page loads
// Show Number of Messages in Inbox
// Add JavaScript to close button

var msg1 = 'Better your life with more stuff!';
var msg2 = 'Read. Read. Read. Read. Read.';

var totalMail = 100 + 4651;

$('.header').text(msg2);

$('.content p').text('Unread messages:' + total);

$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut(500);
});

//500 equivilant to .5 second