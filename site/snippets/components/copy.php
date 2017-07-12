<section class="text <?php if(isset($copyClass)) echo "text" . $copyClass ?>">
  <p class="text__copy <?php if(isset($copyClass)) echo "text__copy" . $copyClass ?>"><?php echo $data->copy()->html() ?></p>
</section>
