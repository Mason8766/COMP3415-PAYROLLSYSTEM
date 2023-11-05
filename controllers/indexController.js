// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjItgNX9G5m_5FUtjMBiKJo26r7ucxgCY",
    authDomain: "comp3415-payrollsystem.firebaseapp.com",
    projectId: "comp3415-payrollsystem",
    storageBucket: "comp3415-payrollsystem.appspot.com",
    messagingSenderId: "532660971200",
    appId: "1:532660971200:web:54d52bce08c0ff6c806f25",
    measurementId: "G-RD6EGRBLL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase, ref, get, set, child, update, remove}
    from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"


//help from this source: https://www.youtube.com/watch?v=_p4Hgzm_oNQ, https://github.com/kpDemos/simpleDatabase/blob/main/simpleDatabase.html
const db = getDatabase();

var enterID = 101
var enterName = "mason"
var enterAge = "douglas"
var findID = 101
var findName = "mason"
var findAge = "douglas"


// var insertBtn = document.querySelector("#insert");
// var updateBtn = document.querySelector("#update");
// var removeBtn = document.querySelector("#remove");
// var findBtn = document.querySelector("#find");

function InsertData() {
    set(ref(db, "People/"+ enterID),{
        Name: enterName,
        ID: enterID,
        Age: enterAge
    })
        .then(()=>{
            alert("Data added successfully");
        })
        .catch((error)=>{
            alert(error);
        });
}

function FindData() {
    const dbref = ref(db);

    get(child(dbref, "People/" + findID))
        .then((snapshot)=>{
            if(snapshot.exists()){
                // findName.innerHTML = "Name: " + snapshot.val().Name;
                // findAge.innerHTML = "Age: " + snapshot.val().Age;
                console.log(snapshot.val().Age)
            } else {
                alert("No data found");
            }
        })
        .catch((error)=>{
            alert(error)
        })

}
//InsertData()
FindData()



let myCar2 = new Employee("MD#1234567","mason","douglas","it","all","manager","prof","no shifts");
//employeeConstructor(myCar2,"MD#12345  67","mason","douglas","it","all","manager","prof","no shifts")
console.log(myCar2.employeeID)


let myCar3 = new Manager("MD#1956712","mason","douglas","it","all","manager","prof","no shifts","Test","Tester");
console.log(myCar3.employeeID)
console.log(myCar3.testField)

function login(){
    var x = document.getElementById('employeeId').value


}