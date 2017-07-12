<header class="masthead">

  <p class="masthead__bg-copy">
    <?php echo $data->year()->html() ?>
    <?php echo $data->year()->html() ?>
    <?php echo $data->year()->html() ?>
  </p>

  <p class="masthead__copy masthead__copy--left">
    <?php echo $data->client()->html() ?>
  </p>

  <img class="masthead__image masthead__image--glow" src="<?= $page->image($data->image())->resize(10)->url() ?>" />
  <img class="masthead__image" src="<?= $page->image($data->image())->url() ?>" />

  <p class="masthead__copy masthead__copy--right">
    <?php echo $data->role()->html() ?>
  </p>

</header>
