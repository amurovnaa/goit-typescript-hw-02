import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-hot-toast";
import { useId } from "react";
import s from "./SearchBar.module.css";

type SearchBarProps = {
  handleChangeQuery: (query: string) => void;
};

type FormValues = {
  query: string;
};

const SearchBar = ({ handleChangeQuery }: SearchBarProps) => {
  const keywordId = useId();
  const initialValues: FormValues = {
    query: "",
  };
  const handleSubmit = (
    values: FormValues,
    options: FormikHelpers<FormValues>
  ) => {
    if (values.query.trim() === "") {
      toast.error("Enter a keyword");
      return;
    }

    handleChangeQuery(values.query);
    options.resetForm();
  };
  return (
    <header className="section">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.formContainer}>
          <div className={s.inputWrapper}>
            <label className={s.inputName} htmlFor={keywordId}>
              Search images:
            </label>
            <Field
              className={s.input}
              name="query"
              id={keywordId}
              placeholder="Enter a keyword"
            />
          </div>
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;
