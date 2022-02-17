<template>
  <div class="content">
    <div class="content__item">
      <div class="content__video">
        <iframe src="https://www.youtube.com/embed/DkGV5F4XnfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p class="content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus asperiores commodi dignissimos id ipsam iure modi nemo,
        nesciunt officiis pariatur quasi ratione sapiente sed tempora veritatis.
        Architecto assumenda possimus ratione.</p>
    </div>
  </div>
</template>

<style>
.content {
  margin: auto;
  max-width: 100%;
  padding: 0 20px;
  width: calc(100% - 64px);
}

.content__item {
  margin-bottom: 30px;
}

@media (min-width: 800px) {
  .content {
    max-width: 800px;
  }
}

.content__video {
  height: 0;
  margin-bottom: 25px;
  overflow: hidden;
  padding-bottom: 56.25%; /* задаёт высоту контейнера для 16:9 (если 4:3 — поставьте 75%) */
  position: relative;
}

.content__video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline-width: 0;
}

.content__text {
  text-align: left;
}
</style>

<script>

</script>
