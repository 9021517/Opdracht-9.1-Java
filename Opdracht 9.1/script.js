function showCookieWall() {
    document.getElementById ('cookiewall').style.display = 'block';
    document.getElementById ('overlayl').style.display = 'block';
}

function checkAge () {
    var age = document.getElementById('ageInput').value;
    if (age >= 18) {
        window.location.href ='https://www.dreamstime.com/royalty-free-stock-image-illustration-red-sign-isolated-white-background-image30009406'
    } else {
        document.getElementById ('cookiewall').style.display = 'none';
        document.getElementById ('overlay').style.display = 'none';
        document.getElementById ('redPage').style.display = 'block';
    }
}