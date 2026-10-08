// Click-to-load YouTube embeds (nothing from YouTube loads until a visitor presses play).
document.querySelectorAll('.yt button[data-id]').forEach(function(b){
  b.addEventListener('click',function(){
    var f=document.createElement('iframe');
    f.src='https://www.youtube-nocookie.com/embed/'+b.dataset.id+'?autoplay=1&rel=0';
    f.title=b.dataset.title||'Soul Resonances on YouTube';
    f.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen=true; f.loading='lazy';
    b.parentNode.replaceChild(f,b);
  });
});
