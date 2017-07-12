<?php
  // $sizes = array(1400, 700, 900, 450, 700, 350, 360, 190);
  $sizes = array(1400, 700, 900, 450, 700, 350, 1088, 544);
?>

<section class="teaser barba-container" data-namespace="teaser">
  <h3 class="teaser__ol"><?php echo $data->headline()->html(); ?></h3>
  <h2 class="teaser__hl"><?php echo $data->subline()->html(); ?></h2>
  <div class="teaser__itemgroup">
<?php

  $teasercount = ceil(count($data->teaserlist()->split()) / 2);
  $counter = 0;

  foreach($data->teaserlist()->split() as $projects):
    $project = page('projects')->find($projects);
    $image = $project->image($project->teaserimage());

  if($counter == 0 || $counter == $teasercount):
?>
  <div class="teaser__column">
<?php
  endif;
?>

  <div class="teaser__item">
    <?php
      //echo "Counter: " . $counter . "<br>";
      //echo "Teaser Count: " . $teasercount . "<br>";
    ?>
    <a class="teaser__link" href="<?php echo $project->url(); ?>" data-namespace="teaser"  data-project-name="<?php echo $project->uid() ?>">
      <div class="teaser__item__hover teaser__item__hover--<?php echo $project->uid() ?>">
        <div class="image__overlay image__overlay--<?php echo $project->uid() ?>"></div>
        <?php
          retinaimages($image, $sizes, 'teaser__item__image');
        ?>
      </div>
      <h4 class="teaser__item__hl"><?php echo $project->teaserhl()->html(); ?></h4>
    </a>
    <h3 class="teaser__item__sl"><?php echo $project->teasersl()->html(); ?></h3>
  </div>

<?php
  if($counter == $teasercount - 1):
?>
  </div>
<?php
  endif;
  $counter++;
  endforeach;
?>
</div>
</section>
