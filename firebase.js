<!-- วางใน <head> ของ index.html -->
<script type="module">
  // เรียกใช้ Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "",
    authDomain: "dream-community-f781a.firebaseapp.com",
    projectId: "dream-community-f781a",
    storageBucket: "dream-community-f781a.firebasestorage.app",
    messagingSenderId: "955028911393",
    appId: "1:955028911393:web:d11ebe3f88985254f2fa60"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // เช็คสถานะผู้ใช้
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      const role = snap.exists() ? snap.data().role : null;

      if (!role) {
        window.location.href = "/choose-role.html"; // ยังไม่เลือกบทบาท
      } else if (role === "idea_creator") {
        // ให้ใช้โพสต์ไอเดียได้
        console.log("คุณเป็นผู้คิดไอเดีย");
      }
    } else {
      console.log("คุณเป็นผู้เยี่ยมชม");
    }
  });

</script>
