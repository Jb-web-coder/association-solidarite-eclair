document.getElementById("volunteer-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Merci pour votre engagement ! Nous vous contacterons bientôt.");
});

function openDonation() {
  document.getElementById("donation-modal").style.display = "flex";
}

function closeDonation() {
  document.getElementById("donation-modal").style.display = "none";
}
