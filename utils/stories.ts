import communityImage from '~/assets/ts1789889675508/IMG-20260919-WA0055.jpg'
import volunteeringImage from '~/assets/ts1789889675508/IMG-20260919-WA0071.jpg'
import supportImage from '~/assets/ts1789889675508/IMG-20260919-WA0019.jpg'

// Editorial stories: add verified dates only when publishing dated news or event reports.
export const stories = [
  {
    slug: 'community-at-the-heart',
    title: 'Community at the heart of every act of kindness',
    category: 'Our community',
    excerpt: 'The people and shared moments behind our commitment to care, dignity, and a stronger community.',
    image: communityImage,
    imageAlt: 'Community members gathered with Almannan Charity Foundation at an outreach event',
    sections: [
      { heading: 'Care starts with people', paragraphs: [
        'Almannan Charity Foundation brings people together around a simple belief: everyone deserves care, dignity, and the opportunity to thrive. Our mission connects support for everyday needs with education and skills that can help people move forward.',
        'Community is at the centre of that work. The people who offer their time, share resources, and take part in our outreach all contribute to a shared purpose.'
      ] },
      { heading: 'The moments behind the mission', paragraphs: [
        'Our photo and video gallery offers a glimpse of these connections. It brings together moments from the foundation’s outreach, from community gatherings to the sharing of essential supplies.',
        'Explore the gallery to see the people behind our work and the moments our team has captured along the way.'
      ] },
    ],
    action: { label: 'Explore our outreach gallery', to: '/gallery' },
  },
  {
    slug: 'find-your-way-to-volunteer',
    title: 'There is more than one way to lend a hand',
    category: 'Volunteering',
    excerpt: 'Your time, practical help, and everyday skills can all be a starting point. Discover how to introduce yourself to our team.',
    image: volunteeringImage,
    imageAlt: 'People sharing supplies during an Almannan Charity Foundation outreach activity',
    sections: [
      { heading: 'Start with what you can share', paragraphs: [
        'Volunteering begins with a willingness to help. You might enjoy connecting with people, lending a hand with supplies, or sharing experience in education or organising. Tell us what interests you and how you would like to contribute.',
        'Our volunteer page introduces three areas to explore: community outreach, practical support, and sharing your skills. These are ways to start a conversation with the team about where your contribution could fit.'
      ] },
      { heading: 'Introduce yourself', paragraphs: [
        'Use the volunteer form to share your name, email, and area of interest. You can also tell us about your skills and availability, and why you would like to volunteer.',
        'The form prepares an email draft for you to review. Open your email app to send it to the foundation, or copy the text into an email yourself. Preparing a draft does not send your application.'
      ] },
    ],
    action: { label: 'Explore volunteering', to: '/volunteer' },
  },
  {
    slug: 'everyday-essentials-lasting-hope',
    title: 'Everyday essentials, lasting hope',
    category: 'Our work',
    excerpt: 'Why practical support and opportunities for tomorrow belong together in the foundation’s mission.',
    image: supportImage,
    imageAlt: 'Foundation representatives and community partners standing beside donated supplies',
    sections: [
      { heading: 'Responding to everyday needs', paragraphs: [
        'Food, clothing, and access to care matter to everyday life. Almannan Charity Foundation’s work includes support for essential needs alongside a commitment to education, skills, and community development.',
        'These areas reflect a belief that practical assistance and opportunities for greater independence can support the same goal: a life of dignity.'
      ] },
      { heading: 'Looking towards tomorrow', paragraphs: [
        'Our programs cover food and essentials, education, health and wellbeing, shelter and clothing, skills, and community support. Visit Our Work to learn more about these areas and the projects described by the foundation.',
        'If you would like to help, you can explore volunteering, make a contribution through the donation section, or contact the team to discuss supporting our work.'
      ] },
    ],
    action: { label: 'Discover our work', to: '/projects' },
  },
]
export type Story = typeof stories[number]
export function readingTime(story: Story) {
  const words = story.sections.flatMap(section => [section.heading, ...section.paragraphs]).join(' ').split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}
