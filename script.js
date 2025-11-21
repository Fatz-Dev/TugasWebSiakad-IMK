
document.addEventListener('DOMContentLoaded', function() {
  const togglePasswordBtn = document.querySelector('button[type="button"]');
  const passwordInput = document.getElementById('password');
  const visibilityIcon = togglePasswordBtn.querySelector('.material-symbols-outlined');

  togglePasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      visibilityIcon.textContent = 'visibility_off';
    } else {
      passwordInput.type = 'password';
      visibilityIcon.textContent = 'visibility';
    }
  });

  // Handle form submission
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check credentials
    if (username === '123456789' && password === '123') {
      // Store user session
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', username);
      
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    } else {
      // Show error message
      alert('Username atau password salah! Gunakan NIM: 123456789 dan Password: 123');
    }
  });
});
