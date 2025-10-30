
        function updateLastModified() {
            const lastModified = document.lastModified;
            document.getElementById('last-modified').textContent = lastModified;
        }

    
        function updateYear() {
            const year = new Date().getFullYear();
            document.getElementById('current-year').textContent = year;
        }

        updateLastModified();
        updateYear()