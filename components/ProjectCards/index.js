import styles from './styles.module.css';

import Card from '../Card';

const ProjectCards = () => {
  return (
    <section className={styles.projectCards}>
      <h2 className="text-fuchsia-600 text-xl mb-8">A few projects</h2>
      <div className={styles.cards}>
        <Card
          href="/projects/visit-idaho"
          imgSrc="/images/projects/visit-idaho/thumb.jpg"
          imgAlt="A family stands overlooking a scenic lake with backs to the viewer"
          prefix="visitidaho.org"
          title="Make a memory"
          subhead="Website UX & Visual Design"
        />
        <Card
          href="/projects/example-project"
          imgSrc="/images/projects/visit-idaho/thumb.jpg"
          imgAlt="A family stands overlooking a scenic lake with backs to the viewer"
          prefix="visitidaho.org"
          title="Make a memory"
          subhead="Website UX & Visual Design"
        />
        <Card
          href="/projects/example-project"
          imgSrc="/images/projects/visit-idaho/thumb.jpg"
          imgAlt="A family stands overlooking a scenic lake with backs to the viewer"
          prefix="visitidaho.org"
          title="Make a memory"
          subhead="Website UX & Visual Design"
        />
      </div>
    </section>
  )
}

export default ProjectCards;
