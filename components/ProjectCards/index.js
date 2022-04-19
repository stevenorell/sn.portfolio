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
          href="/projects/cbh-homes"
          imgSrc="/images/projects/cbh-homes/thumb.jpg"
          imgAlt="Front of gray house with white garage door and green grass"
          prefix="cbhhomes.com"
          title="The love of your lifestyle"
          subhead="Website UX & Visual Design"
        />
        <Card
          href="/projects/iccu-card-control"
          imgSrc="/images/projects/iccu-card-control/thumb.jpg"
          imgAlt="Illustrated graphic of debit and credit cards"
          prefix="iccu.com/cardcontrol"
          title="Take control"
          subhead="Product Page Design & Dev"
        />
      </div>
    </section>
  )
}

export default ProjectCards;
