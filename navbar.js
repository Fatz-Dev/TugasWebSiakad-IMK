
// Dropdown functionality for navbar
document.addEventListener('DOMContentLoaded', function() {
  // Get all dropdown toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      const dropdown = this.nextElementSibling;
      const isCurrentlyOpen = dropdown && !dropdown.classList.contains('hidden');
      
      // Close all dropdowns
      dropdownToggles.forEach(otherToggle => {
        const otherDropdown = otherToggle.nextElementSibling;
        if (otherDropdown && otherDropdown.classList.contains('dropdown-menu')) {
          otherDropdown.classList.add('hidden');
          otherToggle.classList.remove('bg-white/10');
        }
      });
      
      // Toggle current dropdown
      if (dropdown && dropdown.classList.contains('dropdown-menu')) {
        if (isCurrentlyOpen) {
          dropdown.classList.add('hidden');
          this.classList.remove('bg-white/10');
        } else {
          dropdown.classList.remove('hidden');
          this.classList.add('bg-white/10');
        }
      }
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
      dropdownToggles.forEach(toggle => {
        toggle.classList.remove('bg-white/10');
      });
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.add('hidden');
      });
    }
  });
});
