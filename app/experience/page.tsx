import SubPageHeader from '../components/SubPageHeader'
import WorkExperienceSection from './components/WorkExperienceSection'

export default function Experience() {
  const externalLinkIconClasses = 'fa fa-external-link ml-2 fa-sm'
  return (
    <section>
      <SubPageHeader>Work experience</SubPageHeader>
      <table className="table-auto border-separate border-spacing-y-4">
        <tbody>
          <WorkExperienceSection
            dates="2021 - 2023"
            description="Developed 5 customer facing products, one internal product, and
                one internal frontend library. Core products were to help
                immigrants prepare their required forms for visas. Think
                TurboTax but for immigration."
            link="https://apply.boundless.com/"
            moreDetailsLink="/experience/boundless"
            skills={[
              'Typescript',
              'React',
              'Redux',
              'Ruby on Rails',
              'PostgreSQL',
            ]}
            title="Senior Software Engineer - Boundless Immigration"
          />
          <WorkExperienceSection
            dates="2018 - 2020"
            description="Developed 7 slot machine games for a major gaming products
            company based out of Macau. Games include Door to Riches and
            Gold Dragon"
            link="https://www.ltgame.com/en/"
            skills={['Java', 'Aspect Gaming Platform']}
            title="Software Engineer II - LT Game"
          />
          <WorkExperienceSection
            dates="2017 - 2017"
            description="Developed 2 slot machine games for one of the biggest gaming
            companies in the world"
            link="https://www.igt.com/"
            skills={['C#', 'Unity']}
            title="Software Engineer I - International Game Technology"
          />
          <WorkExperienceSection
            dates="2016 - 2016"
            description="Wrote automated tests and fixed bugs in web product that helped lenders calculate mortgage costs and risks"
            link="https://www.linkedin.com/company/pclender.com/"
            skills={['PHP', 'Selenium C#']}
            title="Software Developer - PCLender LLC"
          />
        </tbody>
      </table>
    </section>
  )
}
