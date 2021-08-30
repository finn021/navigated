$('.card').sort(function(a, b) {
  if (a.textContent < b.textContent) {
    return -1;
  } else {
    return 1;
  }
}).appendTo('.card-container');

function searchAll() {
  var input, filter, container, card, a, i, txtValue;
  input = document.querySelector(".search-box");
  filter = input.value.toUpperCase();
  container = document.querySelector(".card-container");
  card = document.querySelector(".card");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < card.length; i++) {
    h3 = card[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}
