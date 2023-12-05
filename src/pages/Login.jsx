import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/users/userSlice";
import { useDispatch } from "react-redux";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("logged in as Guest user");
      navigate("/");
      // return null;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "something went wrong";
      toast.error(errorMessage);
      // return null;
    }
  };
  return (
    <section className="grid h-screen place-content-center">
      <Form
        method="POST"
        className="flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4"
      >
        <h4 className="text-3xl font-bold text-center">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={() => {
            loginAsGuestUser();
          }}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 capitalize link link-hover link-primary"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
