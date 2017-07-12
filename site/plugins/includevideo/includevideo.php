<?php
  function includevideo($video, $width, $height, $class) {
?>
    <video class="<?php echo $class ?> b-lazy" autoplay muted playsinline loop width="<?php echo $width ?>" height="<?php echo $height ?>">
        <source src="<?php echo $video->url(); ?>" type="video/mp4" />
    </video>
<?php
  }
?>
