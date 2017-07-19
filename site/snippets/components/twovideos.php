<section class="twovideos barba-container" data-namespace="teaser">
  <h2 class="twovideos__hl"><?php echo $data->headline()->html(); ?></h2>
  <h2 class="twovideos__sl"><?php echo $data->subline()->html(); ?></h2>

  <div class="twovideos__list">
    <div class="twovideos__item">
      <?php includevideo($page->video($data->video1()), 700, 700, 'twovideos__video', $data->videofallback1()->toFile()); ?>
    </div>
    <div class="twovideos__item">
      <?php includevideo($page->video($data->video2()), 700, 700, 'twovideos__video', $data->videofallback2()->toFile()); ?>
    </div>
  </div>
</section>
