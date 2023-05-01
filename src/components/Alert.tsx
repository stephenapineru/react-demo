import { ReactNode } from "react";

// children is a built in prop that allows us to pass in any children components, ReactNode allows any type of children
interface AlertProps {
  children: ReactNode;
  onClose?: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
