'use strict';

let postArea = document.getElementsByClassName('postArea');

//console.log(postArea)
$.get('/api/main', (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    let post = document.createElement('div')
    post.setAttribute('class', 'post');
    let votes = document.createElement('div')
    votes.setAttribute('class', 'votes');

    let up = document.createElement('button');
    up.setAttribute('class', 'up');
    //up.innerHTML = 'up'
    up.onclick = () => {
      likeNum.innerHTML = parseInt(likeNum.innerHTML) + 1
      $.post(`/post_id/${data[i].post_id}/upvote_post`)
    }

    let likeNum = document.createElement('span');
    likeNum.innerHTML = data[i].number_of_likes;
    likeNum.setAttribute('class', 'likeNum');


    let down = document.createElement('button');
    down.setAttribute('class', 'down');
    //down.innerHTML = 'down';
    down.onclick = () => {
      if (parseInt(likeNum.innerHTML) - 1 >= 0) {
        likeNum.innerHTML = parseInt(likeNum.innerHTML) - 1
        $.post(`/post_id/${data[i].post_id}/downvote_post`)

      };
    };

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton')
    deleteButton.innerHTML = 'X'
    deleteButton.onclick = () => {
      let deletable = document.getElementsByClassName('postArea')
      deletable[0].removeChild(post)
      $.post(`/${data[i].post_id}/delete_post`)
    }

    votes.appendChild(up);
    votes.appendChild(likeNum);
    votes.appendChild(down);
    votes.appendChild(deleteButton)

    post.appendChild(votes);

    let textInPost = document.createElement('div');
    textInPost.setAttribute('class', 'textInPost');

    let threadName = document.createElement('p');
    threadName.setAttribute('class', 'threadName');
    threadName.innerHTML = `<a href=#>/r/${data[i].thread_name}</a>`;
    
    
    let user = document.createElement('p');
    user.setAttribute('class', 'user');
    user.innerHTML = `  uploaded by ${data[i].poster_name} user at ${data[i].post_date}`;
    
    let postText = document.createElement('p');
    postText.setAttribute('class', 'postText')
    postText.innerHTML = data[i].post_text;
    
    let comments = document.createElement('a');
    comments.setAttribute('class', 'comments')
    comments.setAttribute('href', '/' + data[i].post_id + '/comments')
    comments.innerHTML = 'Comments';
    

    threadName.appendChild(user)
    textInPost.appendChild(threadName)
    //textInPost.appendChild(user);
    textInPost.appendChild(postText);
    textInPost.appendChild(comments);
    
    post.appendChild(textInPost)
    postArea[0].appendChild(post);
  }
});

