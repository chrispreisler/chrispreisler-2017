<?php
  $sizes = array(3200, 1600, 1984, 992, 1536, 768, 1088, 544);
  $image = $data->image()->toFile();
?>

<section class="video">
  <div class="video__text">
    <h3 class="video__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="video__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="video__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <div class="video__iframe">
    <iframe id="player"
            class="video-object"
            type="text/html"
            src="http://www.youtube.com/embed/<?php echo $data->videoid()->html() ?>?enablejsapi=1&amp;rel=0&amp;showinfo=0"
            frameborder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowfullscreen="true">
    </iframe>
  </div>
  <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/swIcGXlsr9U?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>-->
  <div class="video__preview">
    <a href="javascript:;" class="video__playbtn">
    </a>
    <?php retinaimages($image, $sizes, 'video__image'); ?>
  </div>
</section>
