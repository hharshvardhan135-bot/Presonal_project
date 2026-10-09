import styles from "./style.module.scss";

type InputpropsType = {
  label: string;
  onClick?: () => void;
  loading?: boolean;
  disable?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
};
export const Button = (
    
  {label,
  onClick,
  loading = false,
  disable = false,
  variant = "primary",
  size = "medium",
}: InputpropsType) => {
  const btnVariant = styles[variant];
  const sizeVar = styles[size];

  return (
    <>
      <button
        className={`${styles["comp-button"]} ${sizeVar} ${btnVariant} ${loading ? "disableButton" : ""}`}
        disabled={disable}
        onClick={onClick}
      >
        {loading ? "loading.." : label}
      </button>
    </>
  );
};
