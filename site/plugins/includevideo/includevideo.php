<?php
  function includevideo($video, $width, $height, $class, $image) {
?>
    <video
      class="<?php echo $class ?> b-lazy"
      autoplay muted playsinline loop 
      width="<?php echo $width ?>" height="<?php echo $height ?>"
      poster="<?php echo $image->resize('544')->url(); ?>">
        <source data-src="<?php echo $video->url(); ?>" type="video/mp4" />
    </video>
<?php
  }
?>
