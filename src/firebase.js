import firebase from 'firebase/app'
import 'firebase/firestore'//雲端資料庫
import 'firebase/auth'//身分認證

const firebaseConfig = { //firebase專案設定 要去官網取得貼上
    apiKey: "AIzaSyCcTsx8H1m9-KW5mP9pJX4aw3F9IiSVpUI",
    authDomain: "universe-1.firebaseapp.com",
    databaseURL: "https://universe-1.firebaseio.com",
    projectId: "universe-1",
    storageBucket: "universe-1.appspot.com",
    messagingSenderId: "643696251944",
    appId: "1:643696251944:web:04c3e2588fe0ad64a5511d"
};

firebase.initializeApp(firebaseConfig) //啟用
const db = firebase.firestore() //資料庫


export const firebaseAuth = firebase.auth()//身分認證方法
export const dbProductsRef = db.collection('products')//資料庫Product方法
export const dbOrderRef = db.collection('orders')//資料庫Order方法
