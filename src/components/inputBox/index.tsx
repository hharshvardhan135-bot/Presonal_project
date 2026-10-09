import styles from './style.module.scss';

type InputpropsType = {
  placeholder?: string;
  type?: string;
  classname ?: string;
};
export const InputBox = ({ placeholder, type ,classname = "defaultInput"}: InputpropsType) => {
  return (
    <>
      <div className={styles.outerBox}>
        <input type={type} placeholder={placeholder} className={` ${styles['defaultInput']} ${styles['inpBox']} ${classname ?? ""}`} />
      </div>
    </>
  );
};
