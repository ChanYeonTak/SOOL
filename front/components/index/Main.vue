<template>
  <body>
    <div class="main-wrapper">
      <div class="main-wrap main1">
        <div class="text-wp1">
          <h3>모두의 테이스팅 노트</h3>
          <h1 class="mt-1 mb-2">
            세계의 모든 술이, 한자리에.
          </h1>
          <h5>BYOB</h5>
        </div>
      </div>
      <div class="main-wrap main2">
        <div class="text-wp2">
          <h1>다른 사이트에서 </h1>
          <h1>헤매는 것은</h1>
          <h1 class="mb-2">
            이제 그만.
          </h1>
          <h3 class="mb-4">
            당신이 찾는 모든 술이 여기에
          </h3>
          <h5>개발 일정은 아래에서 확인하세요</h5>
        </div>
      </div>
      <div class="main-wrap main3">
        <div class="text-wp3">
          <h1 class="mb-4">
            더 이상 혼자가 아닙니다.
          </h1>
          <h3>전통주 위스키 맥주 와인 일본주 스피릿 </h3>
          <h3>그리고 칵테일까지</h3>
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
.main-wrapper {
  z-index: 0;
  overflow: auto;
  @include flex($w: wrap);

  .main-wrap {
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    padding-top: 56.2%;
    @include rel;
    @include flexCol;
  }
  .text-wp1 {
    @include abs;
    left: 50%;
    transform: translateX(-50%);
    top: 20%;
    text-align: center;
    h1 {
      font-size: 4vw;
      font-weight: 700;
      padding: 0.25em;
     }
    h3 {
      font-size: 2vw;
      font-weight: 500;
      color: $grey-color;
    }
    h5 {
      font-size: 1.5vw;
      font-weight: 700;
      color: $info-color;
    }
  }
  .text-wp2 {
    @include abs;
    left: 25%;
    transform: translateX(-25%);
    top: 20%;
    text-align: center;
    h1 {
      font-size: 4vw;
      font-weight: 700;
      padding: 0.35em;
      color: $white-color;
     }
    h3 {
      font-size: 2vw;
      font-weight: 500;
      color: $grey-color;
    }
    h5 {
      font-size: 1.5vw;
      font-weight: 500;
      color: $info-color;
    }
}
  .text-wp3 {
    @include abs;
    left: 55%;
    transform: translateX(-25%);
    top: 20%;
    text-align: right;
    h1 {
      font-size: 4vw;
      font-weight: 700;
      color: $white-color;
     }
    h3 {
      font-size: 2vw;
      font-weight: 500;
      padding: 0.25em 0;
      color: $white-color;
    }
}

    .main1 {
      background-image: url("~assets/img/main/main_lg_1_(1280x720).png");
    }
    .main2 {
      background-image: url("~assets/img/main/main_lg_2_(1280x720).png");
    }
    .main3 {
      background-image: url("~assets/img/main/main_lg_3_(1280x720).png");

  }
  @include LG {
    .main1 {
      background-image: url("~assets/img/main/main_lg_1_(1280x720).png");
    }
    .main2 {
      background-image: url("~assets/img/main/main_lg_2_(1280x720).png");
    }
    .main3 {
      background-image: url("~assets/img/main/main_lg_3_(1280x720).png");
    }
    @include MD {
      .main1 {
        background-image: url("~assets/img/main/main_md_1_(992x558).png");
      }
      .main2 {
        background-image: url("~assets/img/main/main_md_2_(992x558).png");
      }
      .main3 {
        background-image: url("~assets/img/main/main_md_3_(992x558).png");
      }
      @include XS {
        .main1 {
          background-image: url("~assets/img/main/main_xs_1_(576x324).png");
        }
        .main2 {
          background-image: url("~assets/img/main/main_xs_2_(576x324).png");
        }
        .main3 {
          background-image: url("~assets/img/main/main_xs_3_(576x324).png");
        }
      }
    }
  }
}
</style>
