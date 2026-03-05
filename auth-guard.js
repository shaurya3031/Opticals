/* ===============================
   FINAL AUTH GUARD
================================ */

const firebaseConfig = {
  apiKey: "AIzaSyAXdfOykXPQURyK8zHZgn2fUruhs3fyUQ4",
  authDomain: "safar-database-bca32.firebaseapp.com",
  databaseURL: "https://safar-database-bca32-default-rtdb.firebaseio.com",
  projectId: "safar-database-bca32"
};

/* SAFE INIT */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

/* LOGIN CHECK */
const username = localStorage.getItem("loggedInUser");

if (!username) {
  alert("Please login first");
  window.location.href = "auth.html";
}

/* VERIFY USER EXISTS */
db.ref("users/" + username).once("value")
.then(snapshot => {

  if (!snapshot.exists()) {
    localStorage.removeItem("loggedInUser");
    alert("Please login first");
    window.location.href = "auth.html";
  }

});
