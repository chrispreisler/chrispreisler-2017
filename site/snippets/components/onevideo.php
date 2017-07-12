<section class="onevideo">
  <?php
    if(!$data->headline()->empty()):
  ?>
  <div class="onevideo__text">
    <h3 class="onevideo__sl"><?php echo $data->subline()->html(); ?></h3>
    <h2 class="onevideo__hl"><?php echo $data->headline()->html(); ?></h2>
    <p class="onevideo__copy"><?php echo $data->copy()->html(); ?></p>
  </div>
  <?php
    endif;
  ?>
  <div class="onevideo__item">
    <?php includevideo($page->video($data->video()), 1328, 680, 'onevideo__video'); ?>
  </div>
</section>
