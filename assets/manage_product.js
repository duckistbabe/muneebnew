
function buyNow() {
    // Get the current URL's parameters
    const params = new URLSearchParams(window.location.search);

    // Redirect to address.html with the same parameters
    window.location.href = `address.html?${params.toString()}`;
}
