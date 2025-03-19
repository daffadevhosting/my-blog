// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  };
  
  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Fungsi Login
  function loginAdmin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        // Cek apakah email admin
        if (user.email === "admin@dev.id") {
          alert("Login berhasil! Redirecting...");
          window.location.href = "dashboard.html"; // Halaman admin
        } else {
          alert("Anda bukan admin!");
          auth.signOut();
        }
      })
      .catch((error) => {
        alert("Login gagal: " + error.message);
      });
  }
  
  // Fungsi Logout
  function logout() {
    auth.signOut().then(() => {
      alert("Logout berhasil!");
      window.location.href = "index.html"; // Kembali ke halaman utama
    });
  }
  
  // Cek Status Login
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User login:", user.email);
    } else {
      console.log("User tidak login");
    }
  });