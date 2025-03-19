// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA3ra4E7chQhRzERyKW2aFUTRULMb10vxM",
    authDomain: "blogdaffadev.firebaseapp.com",
    projectId: "blogdaffadev",
    databaseURL: "https://blogdaffadev-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "blogdaffadev.firebasestorage.app",
    messagingSenderId: "489703180131",
    appId: "1:489703180131:web:4383f5ef04c1d414ce3556",
    measurementId: "G-ZWW4K4NVQ6"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

const adminEmail = "admin@example.com"; // Ganti dengan email admin

// Cek status login
auth.onAuthStateChanged((user) => {
    if (user && user.email === adminEmail) {
        document.getElementById("postForm").style.display = "block";
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
    } else {
        document.getElementById("postForm").style.display = "none";
        document.getElementById("loginBtn").style.display = "inline-block";
        document.getElementById("logoutBtn").style.display = "none";
    }
    loadPosts();
});

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => alert("Login gagal: " + error.message));
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    auth.signOut();
});

// Tambah post
document.getElementById("postForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    let postRef = database.ref("posts").push();
    postRef.set({
        id: postRef.key,
        title: title,
        content: content,
        timestamp: new Date().toISOString()
    });

    document.getElementById("postForm").reset();
});

// Load postingan
function loadPosts() {
    let postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    database.ref("posts").on("value", (snapshot) => {
        postsDiv.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            let post = childSnapshot.val();
            let postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <div id="actions-${post.id}"></div>
            `;

            postsDiv.appendChild(postElement);

            // Cek apakah admin yang login
            auth.onAuthStateChanged((user) => {
                if (user && user.email === adminEmail) {
                    let actionsDiv = document.getElementById(`actions-${post.id}`);
                    actionsDiv.innerHTML = `
                        <button onclick="editPost('${post.id}', '${post.title}', '${post.content}')">Edit</button>
                        <button onclick="deletePost('${post.id}')">Hapus</button>
                    `;
                }
            });
        });
    });
}

// Edit post
function editPost(id, oldTitle, oldContent) {
    let newTitle = prompt("Edit Judul:", oldTitle);
    let newContent = prompt("Edit Konten:", oldContent);

    if (newTitle && newContent) {
        database.ref("posts/" + id).update({
            title: newTitle,
            content: newContent
        });
    }
}

// Hapus post
function deletePost(id) {
    database.ref("posts/" + id).remove();
}