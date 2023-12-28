<template lang="">
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
      class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            class="w-32 mx-auto"
          />
        </div>
        <Form
          @submit="handleLogin"
          :validation-schema="schema"
          @invalid-submit="onInvalidSubmit"
          class="mt-12 flex flex-col items-center"
        >
          <h1 class="text-2xl xl:text-3xl font-extrabold">Chào mừng trở lại</h1>
          <div class="w-full flex-1 mt-8">
            <div class="mx-auto max-w-xs">
              <div>
                <Field
                  name="userName"
                  class="w-full p-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Tài khoản"
                />
                <ErrorMessage name="userName" class = "px-1 text-xs text-red-500" />
              </div>
              <div>
                <Field
                  name="password"
                  class="w-full p-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Mật khẩu"
                />
                <ErrorMessage name="password" class = "px-1 text-xs text-red-500" />
              </div>

              <button
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span class="ml"> Đăng nhập </span>
              </button>
            </div>
          </div>
        </Form>
      </div>
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style="
            background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import actions from "./actions";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default defineComponent({
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const schema = Yup.object({
      userName: Yup.string()
        .required("Vui lòng không để trống")
        .min(1, "Tên quá ngắn")
        .max(64, "Tên quá dài"),
      password: Yup.string().required("Vui lòng không để trống"),
    });


    const handleLogin = async (values) => {
      const payload = {
        userName: values.userName,
        password: values.password,
      };

      const response = actions.submitFormOneDemo(payload);

      console.log(response);
    };

    const onInvalidSubmit = ({ values, errors, results }) => {
        console.log(values); // current form values
        console.log(errors); // a map of field names and their first error message
        console.log(results); // a detailed map of field names and their validation results
    };

    return {
      store,
      schema,
      handleLogin,
      onInvalidSubmit
    };
  },
});
</script>
<style lang=""></style>
