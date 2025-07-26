// إنشاء تأثير الريبل عند النقر على الأزرار
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// إنشاء تأثير الجسيمات الخلفية
const particles = document.getElementById('particles');
const colors = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFC107'];

function createParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 10 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    particles.appendChild(particle);
    
    const animationDuration = Math.random() * 20 + 10;
    
    particle.animate([
        { transform: 'translateY(0)' },
        { transform: `translateY(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100 + 50}px)` }
    ], {
        duration: animationDuration * 1000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
    
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, animationDuration * 1000);
}

// إنشاء 50 جسيماً
for(let i = 0; i < 50; i++) {
    createParticle();
}
