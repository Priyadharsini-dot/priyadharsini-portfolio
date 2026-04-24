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
    problem: 'Existing apps are often cluttered with long forms, lack pricing transparency (hidden fees), and have complicated policies, leading to high abandonment rates.',
    impact: 'Users can now book a car in just 3 simple steps: Choosing, Confirming, and Paying. No hidden charges, just real-time availability.',
    behanceLink: 'https://www.behance.net/gallery/236477433/Car-rental-app-UXUI-Case-Study',
    sections: [
      {
        id: 'c1',
        title: 'Frictionless Booking',
        content: 'We stripped away every distraction. The interface focuses on essential steps, allowing users to find and book their ideal vehicle without navigating through endless menus.',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Car booking flow'
      },
      {
        id: 'c2',
        title: 'Price Transparency',
        content: 'A major pain point was "hidden fees." Our solution displays a comprehensive breakdown upfront, building trust and reducing anxiety at the checkout.',
        image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Payment transparency UI'
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
    problem: 'Users struggle with time-consuming meal planning, choice paralysis over recipes, and unorganized pantry shopping across multiple scattered tools.',
    impact: 'Reduces food waste and shopping stress by integrating AI-based recipe suggestions with automated pantry lists and direct delivery options.',
    behanceLink: 'https://www.behance.net/gallery/238553887/MealZa-The-Complete-Food-Journey-in-One-App',
    sections: [
      {
        id: 'm1',
        title: 'AI Recipe Engine',
        content: 'Personalized meal suggestions based on taste, dietary needs, and ingredients already in your kitchen. It’s like having a chef who knows your pantry.',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'AI Recipe interface'
      },
      {
        id: 'm2',
        title: 'Smart Pantry Sync',
        content: 'Pantry lists are automatically generated from selected recipes. These items can be ordered for delivery with a single tap, bridging the gap between planning and having ingredients.',
        image: 'https://images.unsplash.com/photo-1590311825124-73ec5233cb0a?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Smart pantry UI'
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
    problem: 'Manual scheduling causes errors, doctors are often overloaded, and patients are frustrated by mandatory account creation just to book a simple slot.',
    impact: 'Introduced login-free appointment requests and a centralized dashboard that reduced errors and improved doctor-patient visibility.',
    behanceLink: 'https://www.behance.net/gallery/245544973/HospitALL-Smarter-Hospital-Management',
    sections: [
      {
        id: 'h1',
        title: 'The Unified Dashboard',
        content: 'Admins can manage the entire facility from one view, while doctors get a dedicated space to track patient history and manage their specific sessions.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Admin Dashboard interface'
      },
      {
        id: 'h2',
        title: 'Login-Free Requests',
        content: 'Reduced booking friction by 60% by allowing patients to request appointments using only basic details, with a hassle-free rescheduling system.',
        image: 'https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&q=80&w=1200&h=800',
        imageAlt: 'Patient booking UI'
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
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  },
  {
    id: 'd3',
    title: 'Glasses Store UI',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  },
  {
    id: 'd4',
    title: 'Flight Booking UI',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  },
  {
    id: 'd5',
    title: 'Cafe Kiosk UI',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  },
  {
    id: 'd6',
    title: 'Television UI Design',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://dribbble.com/shots/26523931-Smart-home-app-UI-design'
  }
];
