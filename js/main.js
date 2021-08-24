function handleNav() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (!btn.classList.contains('on')) {
    btn.classList.add('on');
    nav.classList.add('active');
  } else {
    btn.classList.remove('on');
    nav.classList.remove('active');
  }
}

function handleSearch() {
  const search = document.querySelector('#search img');
  const search_area = document.getElementById('search_area');

  if (search.src.match('btn')) {
    search.src = './images/search_close.png';
    search_area.classList.add('active');
  } else {
    search.src = './images/search_btn.png';
    search_area.classList.remove('active');
  }
}

new fullpage('#fullpage', {
  anchors: ['page1', 'page2', 'page3', 'page4'],
  autoScrolling: true,
  responsive: 900,
  menu: '#nav',
  navigation: true,
  //  continuousVertical: true,
  onLeave: function (origin, destination, direction) {
    $('.line').removeClass('active')
  },
  afterLoad: function (origin, destination, direction) {
    $('.line').addClass('active')
  }
});
