 // Удаляем код загрузки хедера через Fetch, так как он теперь встроен
        document.addEventListener('DOMContentLoaded', function() {
            // Только анимация появления контента
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease-in';
                document.body.style.opacity = '1';
            }, 100);
        });

        function goBack() {
            window.history.back();
        }