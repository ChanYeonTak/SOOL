<template>
  <body>
    <div class="feather-wrapper">
      <div class="feather-wrap main1">
        <div class="text-wp1">
          <h1 class="mb-3">직관적인 데이터</h1>
          <h3>주류마다 세분화된 데이터로 만나는 </h3>
          <h3 class="mb-3">한국형 테이스팅 노트</h3>
          <h5>기능을 선보이기 위해 개발하고 있습니다.</h5>
        </div>
      </div>
      <div class="feather-wrap main2">
        <div class="text-wp2">
          <h1 class="mb-3">프라이빗 테이스팅 노트</h1>
          <h3>내가 마신 술마다 따로 모아보고,</h3>
          <h3 class="mb-3">평가를 비교해 보세요.</h3>
          <h5>멋진 사이트로 돌아올 그날까지 기다려주세요.</h5>
        </div>
      </div>
      <div class="feather-wrap main3">
        <div class="text-wp3">
          <h1 class="mb-3">끊임없는 커뮤니케이션</h1>
          <h3>당신의 감상을 들려주고</h3>
          <h3 class="mb-3">테이스팅 퀘스트도 달성해보세요.</h3>
          <a href="mailto:byob_master@naver.com">
            <h5>메일로 문의하기 ></h5>
          </a>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Feature'
}
</script>

<style lang="scss" scoped>
.feather-wrapper {
  z-index: 0;
  overflow: auto;
  @include flex($w: wrap);

  .feather-wrap {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: $white-color;
    width: 100%;
    height: 0;
    padding-top: 50%;
    @include rel;
    @include flexCol;
    text-align: left;
    h1 {
      font-size: 3vw;
      font-weight: 700;
      color: $black-color;
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
  .text-wp1 {
    @include abs;
    left: 25%;
    transform: translateX(-25%);
    top: 20%;
  }
  .text-wp2 {
    @include abs;
    left: 60%;
    transform: translateX(-25%);
    top: 20%;
  }
  .text-wp3 {
    @include abs;
    left: 25%;
    transform: translateX(-25%);
    top: 20%;
  }

  .main1 {
    background-image: url("~assets/img/feather/feather_lg_1_(1280x640).png");
  }
  .main2 {
    background-image: url("~assets/img/feather/feather_lg_2_(1280x640).png");
  }
  .main3 {
    background-image: url("~assets/img/feather/feather_lg_3_(1280x640).png");
  }
  @include LG {
    .main1 {
    background-image: url("~assets/img/feather/feather_lg_1_(1280x640).png");
    }
    .main2 {
    background-image: url("~assets/img/feather/feather_lg_2_(1280x640).png");
    }
    .main3 {
    background-image: url("~assets/img/feather/feather_lg_3_(1280x640).png");
    }
    @include MD {
      .main1 {
    background-image: url("~assets/img/feather/feather_lg_1_(1280x640).png");
      }
      .main2 {
    background-image: url("~assets/img/feather/feather_lg_2_(1280x640).png");
      }
      .main3 {
    background-image: url("~assets/img/feather/feather_lg_3_(1280x640).png");
      }
      @include XS {
        .main1 {
    background-image: url("~assets/img/feather/feather_lg_1_(1280x640).png");
        }
        .main2 {
    background-image: url("~assets/img/feather/feather_lg_2_(1280x640).png");
        }
        .main3 {
    background-image: url("~assets/img/feather/feather_lg_3_(1280x640).png");
        }
      }
    }
  }
}
</style>
