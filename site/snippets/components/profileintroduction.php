<section class="profileintroduction">
  <div class="profileintroduction__text">
    <p class="profileintroduction__copy">
      <?php echo $data->copy()->html() ?>
    </p>
    <a class="profileintroduction__link" href="mailto:<?php echo $data->link() ?>">
      <?php echo $data->linklabel ?>
    </a>
  </div>
</section>
