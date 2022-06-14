export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a809a1830d6f4206002be5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uz3ewysy',
                  apiId: '2c14729c-2d4c-4ce4-a928-b2e6b05cd953'
                },
                {
                  buildHookId: '62a809a227e39942404a2bce',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rfo6hjjn',
                  apiId: 'a218d294-a30b-4182-b6b9-025d11a6fca3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/n-b-54/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rfo6hjjn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
