import s from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
