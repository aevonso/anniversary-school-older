function initHeader() {
    console.log('Инициализация хедера...');
    
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.includes('index.html')) {
                e.preventDefault();
                showNavigationNotice(this.textContent.trim());
            }
        });
    });
    
    document.querySelectorAll('a[href="pages/about-developer.html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToAboutDeveloper();
        });
    });
    
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.transition = 'transform 0.5s ease';
            this.style.transform = 'rotate(360deg)';
            
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 500);
        });
    }
    
    initModal();
    initVideoLinks();
}

function initVideoLinks() {
    document.querySelectorAll('.video-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showVideoPlaceholder();
        });
    });
}

function navigateToAboutDeveloper() {
    const basePath = getBasePath();
    window.location.href = basePath + 'pages/about-developer.html';
}

function showVideoPlaceholder() {
    showModal('info', 'Видео в разработке', 'Юбилейное видео находится в процессе подготовки. Скоро будет доступно!');
}

function initModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalBtn = document.querySelector('.modal-button');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', hideModal);
    }
    
    if (modalBtn && modal) {
        modalBtn.addEventListener('click', hideModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
    }
}

function showNavigationNotice(sectionName) {
    showModal('info', 'Раздел в разработке', `Раздел "${sectionName}" находится в разработке. Скоро будет доступен!`);
}

function showModal(type, title, message) {
    const modal = document.getElementById('modal');
    const icon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    
    if (!modal || !icon || !modalTitle || !modalMessage) return;
    
    icon.className = 'modal-icon';
    switch(type) {
        case 'info':
            icon.innerHTML = '<i class="fas fa-info-circle"></i>';
            icon.classList.add('info');
            break;
        case 'success':
            icon.innerHTML = '<i class="fas fa-check-circle"></i>';
            icon.classList.add('success');
            break;
        case 'error':
            icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
            icon.classList.add('error');
            break;
    }
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function hideModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-list li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (!text.includes('Исторические даты') && !text.includes('VKонтакте')) {
                showModal('info', 'Выбор раздела', `Вы выбрали: ${text}`);
            }
        });
    });
    
    const actionButton = document.querySelector('.action-button');
    if (actionButton) {
        actionButton.addEventListener('click', function() {
            showModal('success', 'Отлично!', 'Переходим к изучению исторических дат!');
            setTimeout(() => {
                navigateToHistoricalDates();
            }, 1500);
        });
    }
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

function navigateToHistoricalDates() {
    const basePath = getBasePath();
    window.location.href = basePath + 'pages/historical-dates.html';
}

function getBasePath() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('/')) {
        return '';
    } else {
        return '../';
    }
}