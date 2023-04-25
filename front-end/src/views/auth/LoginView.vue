<template>
  <div class="login">
    <div class="background">
      <div class="main-content">
        <div class="login__title">Đăng nhập ứng dụng</div>
        <div class="form">
          <form>
            <div class="form-sub">
              <v-input
                class="mb-4"
                placeholder="Nhập email của bạn"
                :label="'Email'"
                :isRequired="true"
                v-model.trim="user.email"
              ></v-input>
              <v-input
                placeholder="Nhập mật khẩu của bạn"
                :label="'Mật khẩu'"
                :isRequired="true"
                v-model.trim="user.password"
              ></v-input>
            </div>
            <div class="forgot-password">Quên mật khẩu?</div>
            <div class="login__form__button">
              <div class="login__form__bgbtn"></div>
              <div class="button" type="submit" @click="validateBeforePost">
                Đăng nhập
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <v-toast
      v-if="toastConfig.isShow"
      :content="toastConfig.content"
      :actionStatus="Enum.action_status.error"
    />
  </div>
</template>

<script>
// libraries
import { reactive, getCurrentInstance, ref } from "vue";
// components
import VInput from "@/components/base/input/VInput.vue";
// apis
import { login } from "@/apis/auth";
// utils
import { setCookie } from "@/utils/commonFn";
// resources
import Enum from "@/assets/js/enum";

export default {
  name: "LoginView",
  components: {
    VInput,
  },
  setup() {
    // special variables
    const { proxy } = getCurrentInstance();
    const errorMessage = "Trường bắt buộc nhập";
    // reactive variables
    const user = reactive({
      email: "",
      password: "",
    });
    const errorConfig = reactive([
      {
        displayField: "email",
        isError: false,
        message: errorMessage,
      },
      {
        displayField: "password",
        isError: false,
        message: errorMessage,
      },
    ]);
    // Validate and Submit
    var isValid = ref(true);
    var toastConfig = reactive({
      isShow: false,
      content: "",
    });
    const validateBeforePost = () => {
      // Validate
      isValid = true;
      proxy.errorConfig.forEach((item) => {
        if (!user[item.displayField]) {
          proxy.isValid = false;
          item.isError = true;
        }
      });
      // Call API
      if (isValid.value) {
        login(user.email, user.password)
          .then((res) => {
            if (res && res.data) {
              setCookie("username", res.data.user_name, 1);
            }
          })
          .catch((e) => {
            console.log(e);
            // show toast
            toastConfig.isShow = true;
            if (e.response) toastConfig.content = e.response.data.message;
            // close toast
            setTimeout(() => {
              toastConfig.isShow = false;
            }, 2000);
          });
      }
    };

    return {
      user,
      errorConfig,
      isValid,
      toastConfig,
      validateBeforePost,
      Enum,
    };
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    // background: url(@/assets/images/background/banner.jpg);
    background: url(@/assets/images/background/bg.webp);
    background-size: cover;
    overflow: hidden;

    .main-content {
      position: relative;
      width: 36%;
      // background: rgba(4, 4, 4, 0.56);
      background: #fff;
      border-radius: 8px;
      padding: 65px 55px 54px;
      font-size: 14px;

      .login__title {
        margin: 0 auto;
        font-size: xx-large;
        font-family: P Regular;
        padding-bottom: 49px;
      }

      .form {
        padding: 0 40px 60px;

        .form-sub {
          label {
            margin-bottom: 0;
          }

          input {
            padding-left: 1rem;
            border-bottom: 2px solid #d9d9d9;
            border-radius: 0;

            &:focus {
              border-color: #7f7f7f;
              transition: all 0.5s;
            }
          }
        }

        .forgot-password {
          text-align: right;
          padding: 8px 0 31px;
          cursor: pointer;
        }

        .login__form__button {
          position: relative;
          width: 100%;
          border-radius: 25px;
          overflow: hidden;
          margin: 0 auto;
          box-shadow: 0 5px 30px 0 rgba(3, 216, 222, 0.2);
          z-index: 1;
          cursor: pointer;

          &:hover {
            .login__form__bgbtn {
              left: 0;
            }
          }

          .login__form__bgbtn {
            position: absolute;
            z-index: -1;
            width: 300%;
            height: 100%;
            background: -webkit-linear-gradient(
              right,
              #00dbde,
              #fc00ff,
              #00dbde,
              #fc00ff
            );
            top: 0;
            left: -100%;
            transition: all 0.4s;
          }

          .button {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: #fff;
            line-height: 1.2;
            text-transform: uppercase;
            padding: 0 20px;
            width: 100%;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>