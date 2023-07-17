import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    title: 'Practica clinica para recien egresados',
    rating: 5,
    ratingCount: 8,
    price: 500,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',
    title: 'Practica pirvada para especialidades clinicas',
    rating: 5,
    ratingCount: 15,
    price: 1200,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'Practica privada para especialistas quirurjicos',
    rating: 4,
    ratingCount: 7,
    price: 1200,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',
    title: 'Inteligencia Artificial en la practica Médica',
    rating: 4,
    ratingCount: 12,
    price: 500,
    category: 'Intermediate',
  },

]
