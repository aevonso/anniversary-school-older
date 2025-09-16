function getBasePath() {
            const path = window.location.pathname;
            if (path.includes('pages')) {
                return '../';
            } else {
                return '';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const basePath = getBasePath();
            
            fetch(basePath + 'layout.html?v=1')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header-container').innerHTML = data;
                    if (typeof initHeader === 'function') {
                        initHeader();
                    }
                })
                .catch(error => {
                    console.error('Ошибка загрузки хедера:', error);
                });
                
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease-in';
                document.body.style.opacity = '1';
            }, 100);
        });

        function goBack() {
            window.history.back();
        }