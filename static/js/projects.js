
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Category toggle functionality
        console.log("js loaded")
        const categoryHeaders = document.querySelectorAll('.cat-headers');
        
        categoryHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const categoryCard = this.closest('.cat-cards');
                console.log(categoryCard)
                // Toggle this category
                categoryCard.classList.toggle('active');
                
                // Close other categories
                const otherCategories = document.querySelectorAll('.cat-cards');
                otherCategories.forEach(card => {
                    if (card !== categoryCard) {
                        card.classList.remove('active');
                    }
                });
            });
        });
        
        // Project card click toggle
        const projectCards = document.querySelectorAll('.projcard');
        
        projectCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Only toggle if we're not clicking on a link
                if (!e.target.closest('.projlink')) {
                    this.classList.toggle('active');
                }
            });
            
            // Add hover functionality
            card.addEventListener('mouseenter', function() {
                // Show achievements on hover (CSS handles this now)
            });
            
            card.addEventListener('mouseleave', function() {
                // If the card is not active, hide achievements (CSS handles this)
                if (!this.classList.contains('active')) {
                    // This is now handled by CSS
                }
            });
        });
    });
</script>
