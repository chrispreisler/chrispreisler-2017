<?php
  $sizes = array(1400, 700, 900, 450, 700, 350, 360, 190);
?>

<section class="twoteaser barba-container" data-namespace="teaser">
  <h3 class="twoteaser__sl"><?php echo $data->headline()->html(); ?></h3>
  <h2 class="twoteaser__hl"><?php echo $data->subline()->html(); ?></h2>
  <div class="twoteaser__itemgroup">
<?php

  foreach($data->teaser()->split() as $projects):
    $project = page('projects')->find($projects);
    $image = $project->image($project->teaserimage());
?>

  <div class="twoteaser__item">

    <a class="twoteaser__link" href="<?php echo $project->url(); ?>" data-namespace="teaser" data-project-name="<?php echo $project->uid() ?>">
      <div class="twoteaser__item__hover twoteaser__item__hover--<?php echo $project->uid() ?>">
        <div class="image__overlay image__overlay--<?php echo $project->uid() ?>"></div>
        <?php
          retinaimages($image, $sizes, 'twoteaser__item__image');
        ?>
      </div>
      <h4 class="twoteaser__item__hl"><?php echo $project->teaserhl()->html(); ?></h4>
    </a>
    <h3 class="twoteaser__item__sl"><?php echo $project->teasersl()->html(); ?></h3>

  </div>

<?php
  endforeach;
?>
</div>
</section>
