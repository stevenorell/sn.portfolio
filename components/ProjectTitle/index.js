import styles from './styles.module.css';

const ProjectTitle = (props) => {

  return (
    <section className={styles.title}>
      <h1>{props.title}</h1>
      <span className={styles.subtitle}>{props.subtitle}</span>
      {props.agency &&
        <div className={styles.agency}>
          Agency:{' '}
          {props.agencyUrl ? (
            <a href={props.agencyUrl} target="_blank" rel="noopener noreferrer">
              {props.agency}
            </a>
          ) : props.agency}
        </div>
      }
    </section>
  )
}

export default ProjectTitle;
