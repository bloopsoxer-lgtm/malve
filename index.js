
        const initialDevicePixelRatio = window.devicePixelRatio || 1;

        function syncHeroZoom() {
            const viewportScale = window.visualViewport ? window.visualViewport.scale : 1;
            const browserZoom = (window.devicePixelRatio || 1) / initialDevicePixelRatio;
            const heroScale = 1 / (browserZoom * viewportScale);

            document.documentElement.style.setProperty("--hero-zoom", heroScale);
        }

        syncHeroZoom();
        window.addEventListener("resize", syncHeroZoom);

        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", syncHeroZoom);
        }