<?php snippet('header') ?>

  <main class="main" id="barba-wrapper" role="main">

    <div class="barba-container content" data-namespace="<?php echo $page->id(); ?>">

      <?php
        snippet('components/headline', array('data' => $page, 'headline' => '--about'));
        $sizes = array(2880, 1920, 1984, 992, 1536, 768, 1088, 544);
        $image = $page->fullimage()->toFile();
        $imagemobile = ($page->fullimagemobile()->toFile()) ? $page->fullimagemobile()->toFile() : $image;
      ?>

      <section class="fullimage">
        <?php
          retinaimages($image, $sizes, 'fullimage__image', $imagemobile, 'default');
        ?>
      </section>

      <?php
        snippet('components/copy', array('data' => $page, 'copyClass' => '--about'));
      ?>

      <section class="expertise">
        <h3 class="expertise__ol"><?php echo $page->expertisesubline()->html(); ?></h3>
        <div class="expertise__list">
        <?php foreach($page->expertiseitems()->toStructure() as $item): ?>
          <h2 class="expertise__list__item"><?php echo $item->copy()->html(); ?></h2>
        <?php endforeach; ?>
        </div>
      </section>

      <section class="brands">
        <h3 class="brands__ol"><?php echo $page->brandsubline()->html(); ?></h3>
        <h2 class="brands__hl"><?php echo $page->brandheadline()->html(); ?></h2>
        <div class="brands__list">
        <?php
          $sizes = array(400, 200, 400, 200, 400, 200, 360, 190);
          foreach($page->brandimages()->toStructure() as $brandimage):
            $image = $brandimage->image()->toFile();
        ?>
          <div class="brands__item">
            <?php
              retinaimages($image, $sizes, 'brands__image');
            ?>
          </div>
        <?php endforeach ?>
        </div>
      </section>

      <section class="gallery">
        <h3 class="gallery__ol"><?php echo $page->gallerysubline()->html(); ?></h3>
        <h2 class="gallery__hl"><?php echo $page->galleryheadline()->html(); ?></h2>
        <div class="gallery__container">
          <div class="gallery__list main-carousel">
          <?php foreach($page->galleryimages()->toStructure() as $galleryimage): ?>
            <div class="gallery__item carousel-cell" title="<?php echo $galleryimage->image()->toFile()->caption(); ?>">
            <?php
              $sizes = array(3200, 1600, 1984, 992, 1536, 768, 1088, 544);
              $image = $galleryimage->image()->toFile();
              retinaimages($image, $sizes, '');
            ?>
            </div>
          <?php endforeach ?>
          </div>
          <a class="gallery__controls gallery__controls--right"></a>
          <a class="gallery__controls gallery__controls--left"></a>
        </div>
        <div class="gallery__caption">
          <p class="gallery__caption__copy">&nbsp;</p>
        </div>
        <div class="gallery__indicator">
          <span class="gallery__indicator__item"></span>
        </div>
      </section>
    </div>
  </main>

<?php snippet('footer') ?>
