import type {ReactNode} from 'react';
import Link from '@docusaurus/Link'
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type FeatureItem = {
  title: string;
  link: string;
  // img: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

// const {siteConfig} = useDocusaurusContext();
// const {themeConfig: {features: FeatureList}} = siteConfig;


const FeatureList: FeatureItem[] = [
  {
    title: 'LEDGER',
    link: '/ledger',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Programmable ledger for financial transactions.
        Tracks money movements and account balances across your entire financial operation.
      </>
    ),
  },
  {
    title: 'PAYMENTS',
    link: '/payments',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Payments module for any type of transaction no matter which currency is used.
      </>
    ),
  },
  {
    title: 'INTEGRATIONS',
    link: '/integrations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        IKFT integrates with the most popular payment messengers and Apps.
      </>
    ),
  },
];

function Feature({title, link, Svg, description}: FeatureItem) {
  return (
    <Link to={link}  className={clsx('col feature')}>
      <div>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--left padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
