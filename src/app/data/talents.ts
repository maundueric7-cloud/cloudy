export interface Talent {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  location: string;
  availability: string;
}

export const TALENTS: Talent[] = [
  {
    slug: 'rico',
    name: 'Rico',
    role: 'Vocalist',
    bio: 'Lead vocalist blending rich tone, emotional storytelling, and stagecraft that commands a room from the first note to the final encore.',
    image: 'images/talent-rico.jpg',
    specialties: ['Live vocals', 'Brand campaigns', 'Recording sessions'],
    location: 'Los Angeles, CA',
    availability: 'Booking Q4',
  },
  {
    slug: 'nova',
    name: 'Nova',
    role: 'Producer',
    bio: 'A production-minded creative shaping polished sonic identities, spatial mixes, and performance-ready soundtracks for modern brands and artists.',
    image: 'images/talent-nova.jpg',
    specialties: ['Beat design', 'Mixing', 'Creative direction'],
    location: 'New York, NY',
    availability: 'Available now',
  },
  {
    slug: 'jade',
    name: 'Jade',
    role: 'Dancer',
    bio: 'Performer and choreographer known for dynamic movement, visual impact, and elegant control in both live and commercial environments.',
    image: 'images/talent-jade.jpg',
    specialties: ['Choreography', 'Live performance', 'Video concepts'],
    location: 'Chicago, IL',
    availability: 'Travel available',
  },
];