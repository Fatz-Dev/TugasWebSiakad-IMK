
// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  
  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    window.location.href = 'index.html';
    return;
  }
  
  // Setup logout functionality
  const logoutBtn = document.querySelector('a[href="#logout"]');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Clear session
      sessionStorage.clear();
      
      // Redirect to login page
      window.location.href = 'index.html';
    });
  }
});
