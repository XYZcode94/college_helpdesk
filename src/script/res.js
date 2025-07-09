//--JavaScript for Smooth Scroll-- >

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.resource-card').forEach(function (card) {
        card.addEventListener('click', function () {
            const detailId = card.getAttribute('data-detail-id');
            const target = document.getElementById(detailId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
