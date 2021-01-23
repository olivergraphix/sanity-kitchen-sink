export default {
  widgets: [
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
                  buildHookId: '600c5a595dcdeaeb1e953c84',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ntg7zprp',
                  apiId: 'b5be2aa9-025a-42c2-b077-aeacb5389164'
                },
                {
                  buildHookId: '600c5a5980b2bff3448c0b6d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-twhjnbsi',
                  apiId: '0f1df404-4266-4d4a-8bf9-c039b81dae05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olivergraphix/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-twhjnbsi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
