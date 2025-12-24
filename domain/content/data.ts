import type { Step, Advantage, Feature, UseCase, FAQ } from './types'

export const HOW_TO_USE_STEPS: Step[] = [
  {
    id: 1,
    title: 'Describe your scene',
    description: 'Choose text-to-video or image-to-video, add characters, actions, camera, duration, aspect ratio, and more.',
  },
  {
    id: 2,
    title: 'Generate',
    description: 'Generate multi-shot sequences that maintain world and character continuity. Specify transitions and pacing.',
  },
  {
    id: 3,
    title: 'Refine & export',
    description: 'Adjust prompts or extend shots. Download for social media, ads, product demos, and more.',
  },
]

export const WHY_SORA2_ADVANTAGES: Advantage[] = [
  {
    id: 1,
    title: 'Real-world feel',
    description: 'Motion and lighting follow real physics, making generated footage feel grounded and believable.',
  },
  {
    id: 2,
    title: 'Audio included',
    description: 'Dialogue, ambient sound, and effects are rendered in sync with visuals—no separate audio post-production.',
  },
  {
    id: 3,
    title: 'Continuity across shots',
    description: 'Characters, costumes, and world state stay consistent across multiple generated shots.',
  },
  {
    id: 4,
    title: 'Style range',
    description: 'From commercial to cinematic, anime to social media—Sora2 adapts to your creative direction.',
  },
  {
    id: 5,
    title: 'Faster pipeline',
    description: 'Skip location scouting and reshoots. Iterate quickly and publish faster.',
  },
]

export const KEY_FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Text & Image to Video',
    description: 'Generate videos from text prompts or reference images with precise control.',
    icon: 'Video',
  },
  {
    id: 2,
    title: 'Audio in the same pass',
    description: 'Dialogue, ambient sound, and effects are rendered in sync with visuals.',
    icon: 'Volume2',
  },
  {
    id: 3,
    title: 'Shot & timeline control',
    description: 'Control individual shots, transitions, and pacing across your timeline.',
    icon: 'Film',
  },
  {
    id: 4,
    title: 'Identity consistency',
    description: 'Keep characters, costumes, and world state consistent across shots.',
    icon: 'User',
  },
  {
    id: 5,
    title: 'Aspect ratios & quality',
    description: 'Support for 9:16, 1:1, 16:9 with multiple quality options.',
    icon: 'Monitor',
  },
  {
    id: 6,
    title: 'Versioning',
    description: 'Save multiple versions, roll back, and branch your creative work.',
    icon: 'GitBranch',
  },
]

export const USE_CASES: UseCase[] = [
  {
    id: 1,
    title: 'Brands & eCommerce',
    description: 'Product highlights, launch teasers, and how-to videos.',
    icon: 'ShoppingBag',
  },
  {
    id: 2,
    title: 'Social & Creators',
    description: 'Daily Shorts/Reels with consistent story worlds.',
    icon: 'Smartphone',
  },
  {
    id: 3,
    title: 'Education & Training',
    description: 'Course explainers, lab simulations, and process demos.',
    icon: 'GraduationCap',
  },
  {
    id: 4,
    title: 'Product & Engineering',
    description: 'App flows, hardware demos, and concept simulations.',
    icon: 'Cpu',
  },
  {
    id: 5,
    title: 'Pre-viz for film',
    description: 'Shot exploration, lighting tests, and shot planning.',
    icon: 'Clapperboard',
  },
]

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: 'Can I use Sora2-generated videos commercially?',
    answer: 'Yes, videos generated with Sora2 can be used for commercial purposes, including advertising, social media, and product demonstrations.',
  },
  {
    id: 2,
    question: 'How do I control the audio in my videos?',
    answer: 'Sora2 generates audio in sync with your video. You can specify dialogue, ambient sounds, and effects in your prompt for precise control.',
  },
  {
    id: 3,
    question: 'How do I keep characters consistent across shots?',
    answer: 'Use character references and consistent descriptions in your prompts. Sora2 maintains identity continuity across multiple generated shots.',
  },
  {
    id: 4,
    question: 'What aspect ratios are supported?',
    answer: 'Sora2 supports 9:16 (vertical), 1:1 (square), and 16:9 (horizontal) aspect ratios for different platforms.',
  },
  {
    id: 5,
    question: 'Can I use reference images?',
    answer: 'Yes, you can upload reference images to guide the visual style, characters, and scenes in your generated videos.',
  },
  {
    id: 6,
    question: 'How is Sora2 different from traditional video production?',
    answer: 'Sora2 eliminates the need for physical sets, actors, and equipment. You can iterate quickly, test ideas, and produce content without reshoots.',
  },
]
