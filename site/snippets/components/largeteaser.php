<?php
  $project = page('projects')->find($data->teaseritem());
  $image = $project->image($project->teaserimage());
  $video = $project->video($project->teaservideo());
  $sizes = array(1600, 992, 768, 1088);
?>
<section class="largeteaser" data-namespace="teaser">
  <!--<h3 class="largeteaser__scroll">
    <span>S</span><span>c</span><span>r</span><span>o</span><span>l</span><span>l</span>
  </h3>-->
  <div class="largeteaser__text">
    <h3 class="largeteaser__ol">
      <span class="largeteaser__ol__line"></span>
      <span class="largeteaser__ol__text"><?php echo $project->teasersl()->html(); ?></span>
    </h3>
    <h1 class="largeteaser__hl"><?php echo $project->teaserhl()->html(); ?></h1>
    <a class="largeteaser__link" href="<?php echo $project->url(); ?>" data-namespace="teaser" data-project-name="<?php echo $project->uid() ?>">
      View project
    </a>
  </div>
  <!--<div class="largeteaser__image-wrapper largeteaser__image-wrapper--<?php //echo $project->uid() ?>" href="<?php echo $project->url(); ?>">-->
    <!--<a class="largeteaser__imagelink" data-namespace="teaser">-->
      <?php
        //retinaimages($image, $sizes, 'largeteaser__image', null, $project->uid());
      ?>
    <!--</a>-->
    <a class="largeteaser__video-link" href="<?php echo $project->url(); ?>" data-namespace="teaser" data-project-name="<?php echo $project->uid() ?>">
    <div class="largeteaser__video-wrapper">
      <div class="image__overlay image__overlay--<?php echo $project->uid() ?>"></div>
      <video class="largeteaser__video" autoplay muted playsinline width="1200" height="960">
        <source src="<?php echo $video->url(); ?>" type="video/mp4" />
      </video>
    </div>
    </a>
  <!-- </div> -->
  <!--<div class="largeteaser__fullscreen"></div>-->
</section>
