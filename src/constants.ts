import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'car-rental-app',
    title: 'Car Rental Service',
    category: 'Mobile / UX Design',
    coverImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'Simplifying the car booking process with transparency and ease.',
    overview: 'A user-centric mobile application designed to eliminate the friction typically found in car rentals, focusing on speed and clear pricing.',
    myRole: 'UI/UX Designer',
    targetUsers: 'Frequent travelers and local commuters looking for reliable short-term vehicle access.',
    problem: 'Existing car rental applications are often plagued by cluttered interfaces, long forms, and a lack of pricing transparency. Users frequently encounter hidden fees at the final stage of booking, leading to high abandonment rates and loss of trust.',
    research: 'Conducted user interviews and competitive analysis of 5 major rental platforms. Found that 70% of users prioritize "estimated total cost" over "base daily rate". Users felt overwhelmed by unnecessary upgrade prompts during the checkout flow.',
    painPoints: [
      'Lack of clear pricing breakdown until the payment screen.',
      'Overwhelming number of upsells and insurance options.',
      'Mandatory registration before seeing vehicle availability.'
    ],
    persona: {
      name: 'Alex Johnson',
      role: 'Project Manager (Business Traveler)',
      goal: 'To book a reliable car in under 2 minutes upon landing at the airport.',
      frustration: 'Wasting time on repetitive forms and being surprised by "airport convenience fees" at checkout.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400'
    },
    userJourney: 'Alex lands at the airport -> Opens app -> Filters by "Ready for Pickup" -> Sees total price including all fees -> 1-tap booking with saved profile -> Receives digital key code.',
    wireframes: 'The wireframe phase focused on a "single-path navigation" strategy. We eliminated the global menu during the booking flow to keep the user focused on completion. Key UI elements like "Total Price" were placed in a sticky footer for constant visibility.',
    uiDesign: 'Applied a clean, professional aesthetic using a high-contrast palette. Used bold typography for pricing components and a soft grey background to reduce cognitive load. Interactive map elements allow users to see exactly where their car is located.',
    solution: 'A 3-step booking flow: Select Vehicle -> Review Total -> Confirm. By moving the "Terms & Conditions" to a collapsed section and auto-applying the most common insurance, we reduced the time-to-book by 45%.',
    outcome: {
      metrics: [
        '45% reduction in booking time.',
        '28% increase in conversion rate.',
        '92% user satisfaction score based on post-launch surveys.'
      ],
      summary: 'The project successfully transformed a complex logistical task into a seamless digital experience. By prioritizing transparency, we built genuine user trust.'
    },
    sections: [
      {
        id: 'c1',
        title: 'Frictionless Booking',
        content: 'We stripped away every distraction. The interface focuses on essential steps, allowing users to find and book their ideal vehicle without navigating through endless menus.',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Car booking flow'
      }
    ]
  },
  {
    id: '2',
    slug: 'mealza-food-app',
    title: 'MealZa Journey',
    category: 'Food Delivery / Meal Planning',
    coverImage: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'The complete food journey—from planning and prep to doorstep delivery.',
    overview: 'MealZa is an all-in-one ecosystem that simplifies meal planning, recipe discovery, and grocery ordering into a single cohesive experience.',
    myRole: 'Lead UI/UX Designer',
    targetUsers: 'Busy professionals and health-conscious home cooks.',
    problem: 'People struggle with "What should we eat today?" leading to unhealthy choices and grocery waste. Scattered tools for recipes and shopping make the process fragmented.',
    research: 'Surveys showed that 60% of people end up ordering fast food because they lack ingredients for planned healthy meals. Existing apps focus on EITHER recipes OR shopping, but rarely the bridge between them.',
    painPoints: [
      'Fragmented experience between recipe discovery and shopping lists.',
      'Food waste from buying ingredients serving only one specific recipe.',
      'Choice paralysis when browsing hundreds of disconnected recipes.'
    ],
    persona: {
      name: 'Sarah Chen',
      role: 'Marketing Executive',
      goal: 'To have healthy meal ingredients ready for her when she gets home from work.',
      frustration: 'Spending 30 minutes scrolling for recipes only to realize she is missing one key spice.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400'
    },
    userJourney: 'Sarah receives a notification with a recipe based on her pantry -> Taps "Add to Weekly Plan" -> App automatically identifies missing items -> Sarah adds them to the cart -> Ingredients delivered by 6 PM.',
    wireframes: 'Focus was placed on the "Pantry Sync" dashboard. The UI needed to clearly distinguish between "Ingredients I Have" and "Ingredients I Need". Wireframes utilized a split-screen approach for managing lists effortlessly.',
    uiDesign: 'Used warm, appetizing colors (Sage Green and Saffron) to evoke freshness. Card-based layouts for recipes make them visually scanable. Each recipe card dynamically updates its "Match Score" based on user preferences.',
    solution: 'Integrated an AI engine that scans the user’s digital pantry and suggests recipes that maximize existing ingredients. A one-tap "Sync to Cart" feature handles the logistical gap between planning and eating.',
    outcome: {
      metrics: [
        '30% reduction in reported food waste.',
        '50% faster meal planning session duration.',
        'Positive feedback on the "Pantry Auto-Refill" feature.'
      ],
      summary: 'MealZa solved the choice paralysis and logistical friction of home cooking by providing a holistic, data-driven food journey.'
    },
    sections: [
      {
        id: 'm1',
        title: 'AI Recipe Engine',
        content: 'Personalized meal suggestions based on taste, dietary needs, and ingredients already in your kitchen. It’s like having a chef who knows your pantry.',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'AI Recipe interface'
      }
    ]
  },
  {
    id: '3',
    slug: 'hospitall-management',
    title: 'HospitALL',
    category: 'Web App / SaaS Design',
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600&h=900',
    description: 'A smarter way to manage hospital operations and patient flow.',
    overview: 'A comprehensive management platform designed for both admins and doctors to streamline scheduling and patient tracking.',
    myRole: 'UI/UX Designer',
    targetUsers: 'Hospital administrators, doctors, and nursing staff.',
    problem: 'Hospital administrative tasks are often manual and prone to human error. Doctors face scheduling conflicts, and patient wait times are frequently unoptimized due to lack of real-time data.',
    research: 'Shadowed 3 hospital receptionists for a day. Observed that 20% of their time was spent manualy cross-referencing doctor schedules with appointment requests. Staff reported burnout from navigating complex legacy systems.',
    painPoints: [
      'Inconsistent patient records across departments.',
      'Manual scheduling leading to double-booked sessions.',
      'Legacy software that requires 10+ clicks for simple entries.'
    ],
    persona: {
      name: 'Dr. Robert Miller',
      role: 'Senior Orthopedic Surgeon',
      goal: 'To see his daily patient list and historical data without technical friction.',
      frustration: 'Slow software that crashes during patient consultations.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400'
    },
    userJourney: 'Doctor logs in -> Sees high-level patient queue -> Taps patient for full history (lab results, previous visits) -> Adds new record -> Nurse receives instant update for post-op care.',
    wireframes: 'The core challenge was information density. We designed a "progressive disclosure" UI where the most critical patient vitals are always visible, but deep history is just one click away. Side panels were used for quick-action shortcuts.',
    uiDesign: 'Selected a clinical but calming blue palette. High emphasis on accessibility (WCAG AA compliant) with large touch targets for medical staff wearing gloves. Dark mode option included for night shift staff.',
    solution: 'A unified SaaS platform with real-time synchronization. Automated conflict detection for doctors and a "Quick-Book" patient portal that reduced intake time by 60%.',
    outcome: {
      metrics: [
        '60% faster patient registration.',
        'Zero reported scheduling conflicts in first 3 months.',
        'High adoption rate among senior medical staff.'
      ],
      summary: 'HospitALL brought modern efficiency to a critical infrastructure, prioritizing clarity and speed to allow medical professionals to focus on care.'
    },
    sections: [
      {
        id: 'h1',
        title: 'The Unified Dashboard',
        content: 'Admins can manage the entire facility from one view, while doctors get a dedicated space to track patient history and manage their specific sessions.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Admin Dashboard interface'
      }
    ]
  }
];

export interface DribbbleShot {
  id: string;
  title: string;
  image: string;
  link: string;
}

export const RESUME_LINK = 'https://drive.google.com/file/d/11Es0300vJ0EQ4luTCibKVnHL4wC9PHcO/view?usp=drive_link';

export const DRIBBBLE_SHOTS: DribbbleShot[] = [
  {
    id: 'd1',
    title: 'Smart Home App UI',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  },
  {
    id: 'd2',
    title: 'E-commerce App UI',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26494367-Ecommerce-application-UI-design'
  },
  {
    id: 'd3',
    title: 'Glasses Store UI',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26461243-Glasses-Store-UI'
  },
  {
    id: 'd4',
    title: 'Flight Booking UI',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26436377-Flight-booking-app-UI-design'
  },
  {
    id: 'd5',
    title: 'Cafe Kiosk UI',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26410095-Cafe-Kiosk-UI-design'
  },
  {
    id: 'd6',
    title: 'Television UI Design',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26407774-Television-UI-design'
  }
];
