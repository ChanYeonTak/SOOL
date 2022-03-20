<template>
  <footer>
    <div class="company">
      <ul class="contents">
        <li class="content">
          <h5>COMPANY</h5>
          <h6>
            비와이오비(BYOB)
          </h6>
        </li>
        <li class="content">
          <h5>OWNER</h5>
          <h6>
            TAK CHAN YEON
          </h6>
        </li>
        <li class="content">
          <h5>BUSINESS LICENCE</h5>
          <h6>584-04-02450</h6>
        </li>
      </ul>
    </div>
    <div class="links">
      <a href="tel:070-8064-2956">
        <fa-layers class="fa-2x link">
          <fa-icon class="link-icon" icon="phone" />
        </fa-layers>
      </a>
      <a href="mailto:byob_master@naver.com">
        <fa-layers class="fa-2x link">
          <fa-icon class="link-icon" icon="envelope" />
        </fa-layers>
      </a>
      <a href="https://www.instagram.com/justbyob/">
        <fa-layers class="fa-2x link">
          <fa-icon :icon="['fab', 'instagram']" class="link-icon" />
        </fa-layers>
      </a>
    </div>
    <div class="copyright">
      Copyright
      Copyright ⓒ BYOB. All rights reserved.
      <!-- 서비스 약관 추후 링크 추가 -->
      <a>  · Terms of Use </a>
      <!--  개인정보처리 정책 추후 링크 추가 -->
      <a> · Privacy Policy </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  font-size: 0.75em;
  background-color: $dark-color;
  color: $light-color;
  padding: 1em;
  text-align: center;
}
.company {
  @include flex($h:center);
  .contents {
  width: 550px;
  @include flex($v: center, $h:space-between);
  .content {
    @include SM {
      @include flex($w: wrap);
    }
  }
 }
}

footer .company h5 {
  display:inline;
  font-size: 1em;
  font-weight: 500;
  padding: 0.25em
}

footer .company h6 {
  display:inline;
  font-size: 1em;
  font-weight: 300;
  padding: 0.125em
}

footer .links .link {
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-color: $light-color;
  padding: 0.75em;
  margin: 0.5em 0.25em;
}

footer .link .link-icon {
  color: $dark-color;
}
</style>
