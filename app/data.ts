type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Proje 1 Hazırlanıyor...',
    description:
      'Bu proje hazırlık aşamasındadır.',
    link: '',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Proje 2 Hazırlanıyor...',
    description:
      'Bu proje hazırlık aşamasındadır.',
    link: '',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Giriş',
    description: 'Bu gönderi sayfanın deneme paylaşımıdır.',
    link: '/blog/giris',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mehmetbardakcime',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/1mehmetbardakci',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/1mehmetbardakci',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/1mehmetbardakci',
  },
]

export const EMAIL = 'soical@mehmetbardakci.me'
