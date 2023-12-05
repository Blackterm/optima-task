<template >
  <div class="login_box">
    <div class="left">
      <div class="contact">
        <Form
          autocomplete="off"
          @submit="onSubmitLogin"
          :validation-schema="login"
          data-test="loginForm"
        >
          <h3>{{ $t("welcome") }}</h3>
          <!--begin::Input group--->
          <div class="fv-row mb-8 fv-plugins-icon-container">
            <!--begin::username-->
            <Field
              type="text"
              :placeholder="$t('login.username')"
              name="username"
              autocomplete="off"
              class="form-control bg-transparent"
              data-test="username"
            />
            <!--end::username-->
            <div class="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage data-test="username-failed" name="username" />
            </div>
          </div>

          <!--end::Input group--->
          <div class="fv-row mb-3 fv-plugins-icon-container">
            <!--begin::Password-->
            <Field
              type="password"
              :placeholder="$t('login.password')"
              name="password"
              autocomplete="off"
              class="form-control bg-transparent"
              data-test="password"
            />
            <!--end::Password-->
          </div>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage data-test="password-failed" name="password" />
            </div>
          </div>
          <!--end::Input group--->

          <!--begin::Wrapper-->
          <div
            class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8"
          >
            <div></div>

            <!--begin::Link-->

            <!--end::Link-->
          </div>
          <!--end::Wrapper-->

          <!--begin::Submit button-->
          <div class="d-grid mt-3">
            <button
              tabindex="3"
              type="submit"
              data-test="loginSubmit"
              ref="submitButton"
              id="kt_sign_in_submit"
              class="btn text-light"
              style="background-color: #6610f2"
            >
              {{ $t("button_name.login") }}
            </button>
          </div>
          <!--end::Submit button-->
        </Form>
      </div>
    </div>

    <div class="right">
      <div class="right-text">
        <h2>{{ $t("weather") }}</h2>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
export default {
  name: "login",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const userName = ref("");
    const password = ref("");

    const { t } = useI18n();
    const router = useRouter();

    const login = Yup.object().shape({
      username: Yup.string().required().label(t("login.username")),
      password: Yup.string().min(4).required().label(t("login.password")),
    });

    const onSubmitLogin = (values) => {
      if (values["username"] == "admin" && values["password"] == "123456") {
        router.push({ name: "home" });
      } else {
        Swal.fire({
          icon: "error",
          title: t("error_message.userError"),
          text: t("error_message.somethingError"),
          confirmButtonText: t("button_name.okey"),
        });
      }
    };
    return {
      login,
      userName,
      password,

      onSubmitLogin,
    };
  },
};
</script>

<style>
.login_box {
  width: 1050px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 4px 22px -8px #0004;
  display: flex;
  overflow: hidden;
}
.login_box .left {
  width: 41%;
  height: 100%;
  padding: 25px 25px;
}
.login_box .right {
  width: 59%;
  height: 100%;
}
.left .top_link a {
  color: #452a5a;
  font-weight: 400;
}
.left .top_link {
  height: 20px;
}
.left .contact {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
  width: 73%;
  margin: auto;
}
.left h3 {
  text-align: center;
  margin-bottom: 40px;
}
.left input {
  border: none;
  width: 80%;
  margin: 15px 0px;
  border-bottom: 1px solid #4f30677d;
  padding: 7px 9px;
  width: 100%;
  overflow: hidden;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
}
.left {
  background: linear-gradient(-45deg, #dcd7e0, #fff);
}
.submit {
  border: none;
  padding: 15px 70px;
  border-radius: 8px;
  display: block;
  margin: auto;
  margin-top: 120px;
  background: #583672;
  color: #fff;
  font-weight: bold;
  -webkit-box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
  -moz-box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
  box-shadow: 0px 9px 15px -11px rgba(88, 54, 114, 1);
}

.right {
  background: url(https://akdenizgercekcomtr.teimg.com/crop/1280x720/akdenizgercek-com-tr/uploads/2023/10/meteoroloji-hava-durumu.jpg);
  color: #fff;
  position: relative;
}

.right .right-text {
  height: 100%;
  position: relative;
  transform: translate(0%, 45%);
}
.right-text h2 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
}
.right-text h5 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
}

.right .right-inductor {
  position: absolute;
  width: 70px;
  height: 7px;
  background: #fff0;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, 0%);
}
.top_link img {
  width: 28px;
  padding-right: 7px;
  margin-top: -3px;
}
</style>