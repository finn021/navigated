$('.card').sort(function(a, b) {
  if (a.textContent < b.textContent) {
    return -1;
  } else {
    return 1;
  }
}).appendTo('.card-container');
