<template>
  <div class="register-view">
    <a class="icon-cancel"></a>
    <template>
      <h1 class="title">欢迎加入豆瓣</h1>
      <form method="post" @submit.prevent="onSubmit()">
        <div class="form-alias">
            <input
              v-model.trim="email"
              type="text"
              name="email"
              placeholder="邮箱"/>
          <span class="icon clear-input"></span>
        </div>
        <div class="form-pass">
            <template v-if="passType==='password'">
              <input v-model.trim="password"
                     type="password"
                     name="password"
                     placeholder="密码"/>
            </template>
            <template v-else="passType==='text'">
              <input v-model.trim="password"
                     type="text"
                     name="password"
                     placeholder="密码"/>
            </template>
            <span class="icon openpwd" @click="showPwd()"></span>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
  export default {
    name: "RegisterView",
    data() {
      return {
        isShow: 0,
        passType: 'password',
      }
    },
    methods: {
      onSubmit() {

      },
      showPwd() {
        this.isShow = this.isShow ? 0 : 1;
        this.passType = this.isShow ? 'text' : 'password'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-view {
    padding-top: 1.6rem;
    .icon-cancel {
      height: 1.6rem;
      width: 1.6rem;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EGroup 31%3C/title%3E%3Cg stroke='%23494949' stroke-width='2' fill='none' fill-rule='evenodd' stroke-linecap='round'%3E%3Cpath d='M30.872 1.128L1 31M30.872 31L1 1.128'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 1.6rem;
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
    }
    h1 {
      font-weight: 300;
      color: #42bd56;
      font-size: 4rem;
      text-align: center;
    }

    form {
      padding: 2rem 1.5rem;

      input::placeholder {
        color: #ccc;
      }

      input[type="text"], input[type="password"] {
        border: 1px solid #ccc;
        width: 100%;
        height: 4.4rem;
        padding: 0 0.8rem;
        font-size: 1.5rem;
        box-sizing: border-box;
        background: #fff;
      }

      .form-alias input{
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
      }

      .form-pass input{
        border-top: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
      }

    }
  }

</style>
