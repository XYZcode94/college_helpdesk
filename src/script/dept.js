document.addEventListener('DOMContentLoaded', function () {
    // Listen for clicks on department-item divs
    document.querySelectorAll('.department-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const deptId = item.getAttribute('data-dept-id');
            const target = document.getElementById(deptId);
            
            if (target) {
                // Method 1: Using scrollIntoView (most reliable)
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
                
                // Alternative Method 2: Manual calculation with offset
                // Uncomment if you need custom offset for fixed header
                /*
                const headerOffset = 80; // adjust based on your header height
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                */
            } else {
                console.warn('No element found for ID:', deptId);
            }
        });
    });
    
    // Additional: Handle navigation links smooth scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});