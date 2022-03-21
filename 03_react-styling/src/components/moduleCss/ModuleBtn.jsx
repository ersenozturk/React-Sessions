import styles from './moduleBtn.module.css';

const ModuleBtn = ({btnStyle,btnName}) => {
  return (
    <div className={styles.main}>
        <button className={styles[btnStyle]}>
            {btnName}
        </button>
    </div>
  )
}

export default ModuleBtn
