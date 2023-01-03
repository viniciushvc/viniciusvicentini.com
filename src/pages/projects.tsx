import { NextSeo } from 'next-seo'

import { Text } from '@/components/primitives/text'
import { Grid } from '@/components/primitives/grid'
import { Link } from '@/components/primitives/link'

import { Hero } from '@/components/hero'
import { ProjectCard } from '@/components/project-card'

import { projectLinks } from '@/constants/project-links'
import { Stack } from '@/components/primitives/stack'

const ProjectsPage = () => {
  return (
    <>
      <NextSeo title="Projects" />

      <Hero start="#4568dc" end="#b06ab3">
        projects
      </Hero>

      <Stack direction="column">
        <Grid
          css={{
            columns: 'repeat(1, 1fr)',
            gap: '$10',
            '@md': {
              columns: 'repeat(3, 1fr)',
              gap: '$5',
            },
          }}
        >
          {projectLinks?.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </Grid>

        <Text as="h4" weight="normal" css={{ py: '$10' }}>
          {'Check out all my projects on '}

          <Link
            href="https://github.com/vinihvc?tab=repositories"
            decorated
            isExternal
            css={{
              color: '$primary',
              '&:hover': {
                color: '$primary',
              },
            }}
          >
            GitHub
          </Link>
        </Text>
      </Stack>
    </>
  )
}

export default ProjectsPage
