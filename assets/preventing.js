
(function () {
    // Function to disable F12 key and other common DevTools shortcuts
    function disableKeys(e) {
        // List of key codes to disable (F12 is 123, and others can be added if needed)
        const disabledKeys = [123, 18, 91]; // 123: F12, 18: Alt, 91: Command (Mac)

        if (disabledKeys.includes(e.keyCode) || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85) || (e.ctrlKey && e.shiftKey)) {
            e.preventDefault(); // Prevent the default action
            e.stopPropagation(); // Stop the event from propagating
        }
    }

    // Function to detect and handle DevTools usage
    function detectDevTools() {
        // Detect if DevTools is open by checking the width of the screen
        const devToolsDetector = () => {
            const threshold = 160; // Customize this threshold value as needed
            const isDevToolsOpen = window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold;
            if (isDevToolsOpen) {
                // Optionally, you could redirect or take some other action
                // window.location.href = 'about:blank'; // Example: Redirect to a blank page
            }
        };

        // Periodically check for DevTools
        setInterval(devToolsDetector, 1000);
    }

    // Attach event listener for keydown to disable specific keys
    document.addEventListener('keydown', disableKeys);

    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Detect DevTools usage
    window.addEventListener('load', detectDevTools);
})();


