"use client";

import Button from "@/components/core/button";
import Title from "@/components/core/title";
import ValidationInput from "@/components/core/validation-input";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const { values, touched, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      email: "",
      postcode: "",
      superPower: "",
    },
    onSubmit: () => {
      router.push("/quiz");
    },
  });

  return (
    <div className="h-[100vh] flex flex-col items-center overflow-auto hide-scroll grow">
        <p className="text-2xl font-bold p-2">Let's Get To Know You Better!</p>
      <section className="w-full hide-scroll my-4 p-3 bg-white-base rounded-xl h-fit">
        <div className="flex flex-col items-start p-6">
          <Title text="What's your name?"/>
          <ValidationInput
            error={errors.name}
            touched={touched.name}
            value={values.name}
            onChange={(e) => setFieldValue("name", e.target.value)}
            placeholder="Enter your name"
            className="mt-4"
          />
        </div>

       <div className="flex flex-col items-start p-6">
          <Title text="What's your age?" />
          <ValidationInput
            error={errors.age}
            touched={touched.age}
            value={values.age}
            onChange={(e) => setFieldValue("age", e.target.value)}
            placeholder="Enter your age"
            className="mt-4"
          />
        </div>

       <div className="flex flex-col items-start p-6">
          <Title text="What's your gender?" />
          <ValidationInput
            error={errors.gender}
            touched={touched.gender}
            value={values.gender}
            onChange={(e) => setFieldValue("gender", e.target.value)}
            placeholder="Male, Female or Other"
            className="mt-4"
          />
        </div>

       <div className="flex flex-col items-start p-6">
          <Title text="What's your email?" />
          <ValidationInput
            error={errors.email}
            touched={touched.email}
            value={values.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
            placeholder="jenny@email.com"
            className="mt-4"
          />
        </div>

       <div className="flex flex-col items-start p-6">
          <Title text="What's your postcode?" />

          <ValidationInput
            error={errors.postcode}
            touched={touched.postcode}
            value={values.postcode}
            onChange={(e) => setFieldValue("postcode", e.target.value)}
            placeholder="4010"
            className="mt-4"
          />
        </div>

       <div className="flex flex-col items-start p-6">
          <Title text="What's your Superpower?" />
          <small>
            e.g. Fundraising, volunteering, spreading awareness...etc.
          </small>
          <ValidationInput
            error={errors.superPower}
            touched={touched.superPower}
            value={values.superPower}
            onChange={(e) => setFieldValue("superPower", e.target.value)}
            className="mt-4"
          />
        </div>
      </section>

      <Button onClick={handleSubmit} text="Start Quiz" />
    </div>
  );
}
