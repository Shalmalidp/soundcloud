//sound cloud client_id =e84021211bbf87595b51c198b00e4167


import $ from 'jquery';
//console.log($);

var url   = 'https://api.soundcloud.com/';
var token ='e84021211bbf87595b51c198b00e4167';
var lists = $('.lists');
var form  = $('.myForm');
var song ;

var pagedata;

form.on('submit',function(event){
  event.preventDefault();
  var search  = $('#search').val();
  $.getJSON(url + 'tracks?client_id=' +token + '&q='+ search).then(function(res){
    console.log('res', res);
    res.forEach(function(x){
      if (x.artwork_url !==null){
        pagedata=`<li><img src= ${x.artwork_url}/>
          <p> ${x.title}</p></li>`
        lists.append(pagedata);
        song = x.stream_url;
      }
      else{
        pagedata=`<li><img src="http://placehold.it/100x100"></li>`
        lists.append(pagedata);
      }
    });
  });

});


lists.on('click',function(event){
  event.preventDefault();
  play(song, token);

});

function play(song,token) {
  // console.log('in function play',song);
  // console.log('token',token);
  $('audio').attr('src',song + '?client_id=' + token);
  
 }



