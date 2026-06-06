window.onload = function() {
    document.querySelectorAll('[id]').forEach(el => {
        if (el.id.endsWith('_position')) return;
    
        const target = document.getElementById(el.id + '_position');
        if (!target) return;
    
        el.addEventListener('click', function(e) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}