"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "@/app/services/auth";
import { useEffect } from "react";
import { setCredentials } from "@/features/auth/authSlice";
import { toast } from "react-toastify";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      //onsole.log(userInfo);
      navigate("/");
    }
  }, [navigate, userInfo]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
      const res = await login(data).unwrap();
      //console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      //console.log(error?.data?.message || error.error);
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-primary dark:text-primary font-sans text-2xl font-bold">
        Login
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-1/4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary dark:text-primary">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary dark:text-primary">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password"
                    {...field}
                    className="text-black"
                  />
                </FormControl>
                <FormDescription className="text-primary dark:text-primary">
                  Password must be six characters.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
      <div className="text-primary dark:text-primary text-sm">
        Don't have an account?{" "}
        <Link className="underline" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
