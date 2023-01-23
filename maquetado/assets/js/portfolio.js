fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(json => {
    // aquí tenemos el parámetro json que contien el dato que nos ha devuelto el servicio web.
    const post = document.getElementById('containerPost')
    for (let index = 0; index < json.length; index++) {
      const element = json[index];
      console.log(element);
      let htmlPost = '<div class="col-sm-4"> ' +
        '	<div class="card">' +
        '<div class="row">' +
        '<div class="col-md-5 wrapthumbnail">' +
        '	<a href="#">' +
        '	<div class="thumbnail" style="background-image:url(' + element.flags.svg + ');">' +
        '	</div>' +
        '	</a>' +
        '	</div>' +
        '		<div class="col-md-7">' +
        '	<div class="card-block">' +
        '<img class="author-thumb" src="' + element.flags.svg + '" alt="Sal">' +
        '<h2 class="card-title"><a href="#">' + element.name.common + '</a></h2>' +
        '	<h4 class="card-text">' + element.name.official + '</h4>' +
        '	<div class="metafooter">' +
        '<div class="wrapfooter">' +
        '		<span class="meta-footer-thumb">' +
        '</span>' +
        '<span class="author-meta">' +
        '		<span class="post-name"><a target="_blank" href="#">more</a></span><br/>' +
        '<span class="post-date">info</span>' +
        '		</span>' +
        '<span class="post-read-more"><a  target="_blank" href="' + element.maps.googleMaps + '" title="Read Story"><i class="fa fa-link"></i></a></span>' +
        '<div class="clearfix">' +
        '	</div>' +
        '		</div>' +
        '	</div>' +
        '</div>' +
        '	</div>' +
        '	</div>' +
        '	</div>' +
        '	</div> '
      post.insertAdjacentHTML('beforeend', htmlPost)
    }
  });