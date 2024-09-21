import { BsExclamationTriangle } from "react-icons/bs";
import { CardWrapper } from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <BsExclamationTriangle className="size-8 text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
