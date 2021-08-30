function searchAll() {
  var input, filter, container, card, h3, i, txtValue;
  input = document.querySelector(".search-box");
  filter = input.value.toUpperCase();
  container = document.querySelector(".card-container");
  card = document.querySelector(".card");
  
  for (i = 0; i < card.length; i++) {
    h3 = card[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    alert(input.value);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "flex";
    } else {
      card[i].style.display = "none";
    }
  }
}
