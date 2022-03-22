<template>
  <body>
    <div class="main">
      <div class="content-position content1">
        <div class="bg-position img1">
          <div class="textbox1">
            <h3>모두의 테이스팅 노트</h3>
            <h1 class="mt-1 mb-1">
              세계의 모든 술이, 한자리에.
            </h1>
            <h1>BYOB</h1>
          </div>
        </div>
      </div>
      <div class="content-position content2">
        <div class="bg-position img2">
          <div class="textbox2" />
        </div>
      </div>
      <div class="content-position content3">
        <div class="bg-position img3">
          <div class="textbox3" />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
.main {
  z-index: 0;
  overflow: hidden;
  @include flex($w: wrap);

  .content-position {
    @include rel;
    height: 0;
    padding-top: 56.25%;
  }
  .bg-position {
    @include abs;
    width:100%;
    height:100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
  @include XS {
      .img1 {
        background-image: url("~assets/img/main/main_xs_1_(576x324).png");
      }
      .img2 {
        background-image: url("~assets/img/main/main_xs_2_(576x324).png");
      }
      .img3 {
        background-image: url("~assets/img/main/main_xs_3_(576x324).png");
      }
  }

  //   .textbox1 {
  //     @include abs;
  //     width: 100%;
  //     text-align: center;
  //     margin-top: 10%;

  //     h3 {
  //       color: $grey-color;
  //       font-weight: 500;
  //       font-size: 3vh;
  //     }

  //     h1 {
  //       color: $black-color;
  //       font-weight: 700;
  //       font-size: 5vh;
  //     }
  //   }
  // }

// .content1 {
//   width: 100%;
//   height: 100vh;
//   background-color: $white-color;
//   padding: 0 10%;

//   @include LG {
//     padding: 0 0;
//   }
}
</style>
