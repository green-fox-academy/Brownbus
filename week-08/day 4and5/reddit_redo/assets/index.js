'use strict';

let postArea = document.getElementsByClassName('postArea');
const title = document.querySelector('head').querySelector('title')
let userDisp = document.getElementById('userDisp').innerHTML;
let postUser = document.getElementById('postUser');
postUser.setAttribute('value', userDisp)










function poster(endpoint) {
  $.get(endpoint, (data) => {
    for (let i = 0; i < data.length; i++) {
      let post = document.createElement('div')
      post.setAttribute('class', 'post');
      let votes = document.createElement('div')
      votes.setAttribute('class', 'votes');

      let up = document.createElement('div');
      up.setAttribute('class', 'up');
      //up.innerHTML = 'up'
      up.addEventListener('click', () => {
        likeNum.innerHTML = parseInt(likeNum.innerHTML) + 1
        $.post(`/post_id/${data[i].post_id}/upvote_post`)
      });

      let likeNum = document.createElement('span');
      likeNum.innerHTML = data[i].number_of_likes;
      likeNum.setAttribute('class', 'likeNum');


      let down = document.createElement('div');
      down.setAttribute('class', 'down');
      //down.innerHTML = 'down';
      down.addEventListener('click', () => {
        if (parseInt(likeNum.innerHTML) - 1 >= 0) {
          likeNum.innerHTML = parseInt(likeNum.innerHTML) - 1
          $.post(`/post_id/${data[i].post_id}/downvote_post`)
        };
      });


      let deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'deleteButton')
      deleteButton.innerHTML = 'X'
      deleteButton.onclick = () => {
        if(data[i].poster_name === userDisp || userDisp === 'admin' ){
        let deletable = document.getElementsByClassName('postArea')
        deletable[0].removeChild(post)
        $.post(`/${data[i].post_id}/delete_post`)
      }else{
        alert(`You are not authorized to delete ${data[i].poster_name}'s post`)
      }
      }

      votes.appendChild(up);
      votes.appendChild(likeNum);
      votes.appendChild(down);
      votes.appendChild(deleteButton)

      post.appendChild(votes);

      let textInPost = document.createElement('div');
      textInPost.setAttribute('class', 'textInPost');

      let threadUpperLine = document.createElement('div')
      threadUpperLine.setAttribute('style', 'display:flex')


      let logo = document.createElement('img')
      logo.setAttribute('src', 'assets/logo.png')
      logo.setAttribute('style', 'border: solid 1px white; width:20px; height:20px; border-radius:100%; margin:19px; margin-right:5px;;')


      let threadName = document.createElement('p');
      threadName.setAttribute('class', 'threadName');
      threadName.innerHTML = `<a href=#>g/${data[i].thread_name}</a>`;


      let user = document.createElement('p');
      user.setAttribute('class', 'user');
      user.innerHTML = `  uploaded by <a class="displayedUser" href='user/${data[i].u_id}/profile'> ${data[i].poster_name} </a> user at ${data[i].post_date}`;

      let postText = document.createElement('p');
      postText.setAttribute('class', 'postText')
      postText.innerHTML = data[i].post_text;

      let commentBody = document.createElement('div')
      let comments = document.createElement('p');
      comments.setAttribute('class', 'comments')
      comments.setAttribute('style', 'color:green;')

      comments.addEventListener('mouseover', () => {
        comments.setAttribute('style', 'color:green; text-decoration: underline; cursor: pointer;')
      });

      comments.addEventListener('mouseleave', () => {
        comments.setAttribute('style', 'color:green; text-decoration: none;')
      });

      
      comments.innerHTML = 'Comments';
      let innerComments = document.createElement('div');


      commentBody.setAttribute('class', 'commentBody')
      let addComment = document.createElement('form')
      addComment.setAttribute('action', `/comment/${data[i].post_id}`)
      addComment.setAttribute('method', 'post')
      let commentTxt = document.createElement('textarea')
      commentTxt.setAttribute('name', "comment_text")
      commentTxt.setAttribute('id', 'commentTxt')
      commentTxt.setAttribute('cols', '80')
      commentTxt.setAttribute('rows', '5')
      commentTxt.setAttribute('placeholder', 'Comment something')
      let comment_btn = document.createElement('input');
      comment_btn.setAttribute('type', 'submit')
      comment_btn.setAttribute('id', 'comment_button')
      comment_btn.setAttribute('value', 'Comment')
      addComment.appendChild(commentTxt)
      addComment.appendChild(comment_btn) 
      commentBody.appendChild(addComment)
      
      comments.onclick = () => {
        if (commentBody.getAttribute('style') !== 'display: flex') {
          commentBody.setAttribute('style', 'display: flex')
          
          
          function loader(){
            comments.onclick = () => {
              if (commentBody.getAttribute('style') !== 'display: flex') {
                commentBody.setAttribute('style', 'display: flex')
              }else{
                commentBody.setAttribute('style', 'display: none')
              }
            };
            $.get('/api/comments', (comments) => {
              let innerComments = document.createElement('div');
            innerComments.setAttribute('class', "innerComments")
            for (let j = 0; j < comments.length; j++) {
              if (comments[j].post_id == data[i].post_id) {
                let commentItself = document.createElement('div')
                commentItself.setAttribute('class', "commentItself")
                let h4 = document.createElement('h4')
                h4.innerHTML = comments[j].poster_name;
                
                let pTag = document.createElement('p')
                pTag.innerHTML = comments[j].comment_text
                commentItself.appendChild(h4)
                commentItself.appendChild(pTag)
                innerComments.appendChild(commentItself)
              }
            }
            commentBody.appendChild(innerComments)
          });
          }
          
          if(commentBody.childNodes[1] == undefined){
          loader()
          }
          
          setInterval(() => {
              if(commentBody.childNodes[1] != undefined){
                commentBody.removeChild(commentBody.childNodes[1])
               //commentBody.removeChild(commentBody.childNodes[0][1])
            }
            loader()
        }, 5000);
        } else {
          commentBody.setAttribute('style', 'display: none;')
        }
      }

      threadUpperLine.appendChild(logo)
      threadName.appendChild(user)
      threadUpperLine.appendChild(threadName)
      textInPost.appendChild(threadUpperLine)
      //textInPost.appendChild(user);
      textInPost.appendChild(postText);
      textInPost.appendChild(comments);
      textInPost.appendChild(commentBody)

      post.appendChild(textInPost)
      postArea[0].appendChild(post);
    }
  });
}






if (title.innerHTML == 'Popular') {
  poster('/api/popular')
} else if (title.innerHTML == 'Trending') {
  poster('/api/trending')
} else {
  poster('/api/main')
}

//////////////SIDEBAR
let sidecCont = document.getElementsByClassName('sidecCont');

$.get('/api/trending', (data)=>{
  let dataLength;
if(data.length <= 10){
dataLength = data.length
}else{
dataLength = 10;
}
for(let i = 0; i < dataLength; i++){
 sidecCont[i].innerHTML = 'g/'+data[i].thread_name 
}
});

