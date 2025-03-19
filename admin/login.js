// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3ra4E7chQhRzERyKW2aFUTRULMb10vxM",
  authDomain: "blogdaffadev.firebaseapp.com",
  projectId: "blogdaffadev",
  databaseURL: "https://blogdaffadev-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "blogdaffadev.firebasestorage.app",
  messagingSenderId: "489703180131",
  appId: "1:489703180131:web:4383f5ef04c1d414ce3556",
  measurementId: "G-ZWW4K4NVQ6"
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