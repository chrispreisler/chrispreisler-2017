<?php
  $project = page('projects')->find($data->teaseritem());
  $image = $project->image($project->teaserimage());
  $video = $project->video($project->teaservideo());
  $videofallback = $project->image($project->teaservideofallback());
  $sizes = array(1600, 992, 768, 1088);
?>
<section class="largeteaser" data-namespace="teaser">
  <!--<h3 class="largeteaser__scroll">
    <span>S</span><span>c</span><span>r</span><span>o</span><span>l</span><span>l</span>
  </h3>-->
  <div class="largeteaser__text">
    <a class="largeteaser__hover" href="<?php echo $project->url(); ?>" data-namespace="teaser" data-project-name="<?php echo $project->uid() ?>">
    <h3 class="largeteaser__ol">
      <span class="largeteaser__ol__line"></span>
      <span class="largeteaser__ol__text"><?php echo $project->teasersl()->html(); ?></span>
    </h3>
    <h1 class="largeteaser__hl"><?php echo $project->teaserhl()->html(); ?></h1>
    <span class="largeteaser__link">View project</span>
    </a>
  </div>
    <a class="largeteaser__video-link largeteaser__hover" href="<?php echo $project->url(); ?>" data-namespace="teaser" data-project-name="<?php echo $project->uid() ?>">
    <div class="largeteaser__video-wrapper">
      <div class="image__overlay image__overlay--<?php echo $project->uid() ?>"></div>
      <video class="largeteaser__video"
             autoplay muted playsinline webkit-playsinline
             width="1200" height="960"
             poster="<?php echo $videofallback->resize(null, null, 80)->url(); ?>">
        <source src="<?php echo $video->url(); ?>" />
        <img src="<?php echo $image->resize('544', null, 80)->url(); ?>" alt="<?php echo $image->name() ?>" />
      </video>
    </div>
    </a>
</section>
