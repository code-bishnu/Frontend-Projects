// Tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const accordionItem = this.parentElement;
                const accordionContent = this.nextElementSibling;
                
                // Close all other accordion items
                document.querySelectorAll('.accordion-item').forEach(item => {
                    if (item !== accordionItem) {
                        item.querySelector('.accordion-content').classList.remove('active');
                    }
                });
                
                // Toggle current accordion item
                accordionContent.classList.toggle('active');
            });
        });
    }
    
    // Circle progress animation
    const circleProgress = document.querySelector('.circle-progress');
    if (circleProgress) {
        const progressValue = circleProgress.getAttribute('data-value');
        const circleFill = circleProgress.querySelector('.circle-fill');
        
        if (circleFill) {
            // Calculate the circumference of the circle
            const radius = circleFill.getAttribute('r');
            const circumference = 2 * Math.PI * radius;
            
            // Set the stroke-dasharray based on the progress value
            const dashOffset = circumference - (progressValue / 100) * circumference;
            circleFill.setAttribute('stroke-dasharray', circumference);
            circleFill.setAttribute('stroke-dashoffset', dashOffset);
        }
    }
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Simulate course progress (for demo purposes)
    const progressItems = document.querySelectorAll('.progress-item');
    if (progressItems.length > 0) {
        progressItems.forEach(item => {
            const progressText = item.querySelector('p');
            const progressBar = item.querySelector('.progress');
            
            if (progressText && progressBar) {
                const percent = parseInt(progressText.textContent);
                progressBar.style.width = percent + '%';
            }
        });
    }
});