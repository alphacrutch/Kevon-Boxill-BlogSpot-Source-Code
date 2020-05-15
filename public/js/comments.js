 'use strict';

 const commentInputElement = document.getElementById('comment-input');

 const commentAuthorElement = document.getElementById('author-input');


 const db = firebase.firestore();

 function getAnonAuthor() {
     return commentAuthorElement.value;
 }

 function getAnonComment() {
     return commentInputElement.value;
 }

 function getAuthor() {
     return firebase.auth().currentUser.displayName;
 }

 // function getComment() {
 //   return firebase.firestore().collection().
 // }



 function postComment(data) {
     let POST = `<h4 id="post-author">${data.name}</h4>
        <p id="posted-comment">${data.comment}
        </p>`;
     let div = document.createElement('div');
     div.setAttribute("id", "comment");
     div.innerHTML = POST;
     docu.append(div);
 }

 function clearInputs() {
     commentAuthorElement.value = "";
     commentInputElement.value = "";
 }

 $(document).ready(function() {
     // for (let i = 0; i < postData.length; i++) {
     //    postComment(postData[i])
     //}

     $('#post-btn').click(function() {
         let addObj = {
             "name": getAnonAuthor(),
             "comment": getAnonComment()
         };
         //postData.push(addObj);
         postComment(addObj);

         clearInputs();
     });


 });