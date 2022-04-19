import styles from './styles.module.css';
import Link from 'next/link';

const Card = (props) => {
  return (
    <article className={styles.card}>
      <Link
        href={props.href}
        scroll={false}
      >
        <a>
          <img
            src={props.imgSrc}
            alt={props.imgAlt}
          />
          <div className={styles.content}>
            <span className={styles.prefix}>{props.prefix}</span>
            <h3>{props.title}</h3>
            <span className={styles.subhead}>{props.subhead}</span>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default Card;
