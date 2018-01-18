$(document).ready( function() {

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 300);
          return false;
        }
      }
    });
  });

  // Init Prev & Next Selectors
  Flickity.createMethods.push('_createPrevNextCells');
  Flickity.prototype._createPrevNextCells = function() {
    this.on( 'cellSelect', this.setPrevNextCells );
  };
  Flickity.prototype.setPrevNextCells = function() {
    // remove classes
    if ( this.previousCell ) {
      classie.remove( this.previousCell.element, 'is-previous' );
    }
    if ( this.nextCell ) {
      classie.remove( this.nextCell.element, 'is-next' );
    }
    // set cells
    this.previousCell = this.cells[ this.selectedIndex - 1 ];
    this.nextCell = this.cells[ this.selectedIndex + 1 ];
    // add classes
    if ( this.previousCell ) {
      classie.add( this.previousCell.element, 'is-previous' );
    }
    if ( this.nextCell ) {
      classie.add( this.nextCell.element, 'is-next' );
    }
  };

  var fitGfx = $('.tb-fit-flick').flickity({
      prevNextButtons: false,
      pageDots: true,
      imagesLoaded: true,
      watchCSS: true
  });

  var mnpGfx = $('.tb-mnp-flick').flickity({
      prevNextButtons: false,
      pageDots: true,
      imagesLoaded: true,
      watchCSS: true,
      cellSelector: '.bridge-gfx'
  });

  $('.mnp-nav-item').on( 'click', function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    var index = $(this).index();
    mnpGfx.flickity( 'select', index );
  });

  $('.tb-mnp-flick').find('.arrow.right').on( 'click', function() {
    mnpGfx.flickity('next', true);
  });

  $('.tb-mnp-flick').find('.arrow.left').on( 'click', function() {
    mnpGfx.flickity('previous', true);
  });

  var mnpFlkty = mnpGfx.data('flickity');

  mnpGfx.on( 'cellSelect.flickity', function() {
    var activeBridge = $(mnpFlkty.selectedElement).index();
    $('.mnp-nav-item').eq(activeBridge).addClass('selected').siblings().removeClass('selected');
  });

  $('.video-trigger').click(function(e) {
      e.preventDefault();
      var vidFrame = $(this).parent().find(".video-iframe");
      $(vidFrame).attr("src", $(vidFrame).attr("title"));
      $(vidFrame).show();
  });







  $(".tabnav a").on("click", function(e) {
      e.preventDefault();
      $(this).addClass('selected').siblings().removeClass('selected');

      var oldH = $('.mat-desc').css('height');
      $('.mat-desc').css('height', oldH);
      var targetMaterial = $(this).data('material');
      var targetDesc = $(this).data('desc');
      var targetCta = $(this).data('cta');
      var targetUrl = $(this).data('url');
      $('.mat-img#' + targetMaterial).addClass('selected').siblings().removeClass('selected');
      $('.mat-desc').html(targetDesc + "<br><a href='" + targetUrl + "' role='button' class='btn btn-default' id='mat-btn'>" + targetCta + "<i class='fa fa-long-arrow-right' aria-hidden='true'></i></a>");
  });




  var shopFlick = $('.shop-flick').flickity({
      prevNextButtons: false,
      pageDots: true,
      imagesLoaded: true,
      watchCSS: true
  });

  var shopFlkty = shopFlick.data('flickity');

  shopFlick.on( 'cellSelect.flickity', function() {
    var activeCTA = $(shopFlkty.selectedElement).data('cta');
  });




  var bookFlick = $('.book-flick').flickity({
      prevNextButtons: false,
      pageDots: true,
      imagesLoaded: true,
      watchCSS: true
  });

  var bookFlkty = bookFlick.data('flickity');

  bookFlick.on( 'cellSelect.flickity', function() {
    var activeURL = $(bookFlkty.selectedElement).data('url');
    $('#book-btn').attr("href", activeURL);
  });





  var processGfx = $('.process-flick').flickity({
      prevNextButtons: false,
      pageDots: false,
      imagesLoaded: true,
      watchCSS: true
  });

  var processFlkty = processGfx.data('flickity');

  processGfx.on( 'cellSelect.flickity', function() {
    var activeStep = $(processFlkty.selectedElement).data('step');
    $('.process-dot#' + activeStep).addClass('active').siblings().removeClass('active');
  });

  
});










