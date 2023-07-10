window.addEventListener('DOMContentLoaded', function() {
  var profileImage = document.querySelector('.profile-image');
  
  profileImage.addEventListener('load', function() {
    profileImage.classList.add('visible');
  });
  
  profileImage.classList.remove('hidden');
});
