import styles from './styles.module.css';
import Image from 'next/image';

const ProjectImage = (props, children) => {
  return (
    <div className={styles.projectImage}>
      {children}
    </div>
  )
}

export default ProjectImage;
