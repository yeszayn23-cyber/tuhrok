function enterPalace() {
    let password = document.getElementById("passInput").value;
    
    // سأشرح لكِ كيف تربطين هذا بـ Firebase لاحقاً
    if(password === "1234") { 
        document.getElementById("gate-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("كلمة سر خاطئة يا أميرة!");
    }
}
