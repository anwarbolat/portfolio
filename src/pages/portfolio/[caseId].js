import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    category: 'Full Stack Development',
    description: 'A modern e-commerce platform built with Next.js, Node.js, and MongoDB.',
    fullDescription: `
      This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project showcases my ability to create complex, scalable applications using modern web technologies.

      Key Features:
      - Real-time inventory management
      - Secure payment processing
      - Admin dashboard with analytics
      - Mobile-responsive design
      - Advanced search and filtering
      - User authentication and authorization
    `,
    challenges: `
      One of the main challenges was implementing real-time inventory updates across multiple concurrent users. I solved this by:
      - Using WebSocket connections for live updates
      - Implementing optimistic UI updates
      - Creating a robust caching system
      - Handling race conditions in the database
    `,
    solution: `
      The final solution includes:
      - Microservices architecture for scalability
      - Redis caching for improved performance
      - Automated testing with Jest and Cypress
      - CI/CD pipeline with GitHub Actions
      - Comprehensive documentation
    `,
    image: '/images/portfolio/ecommerce.jpg',
    gallery: [
      '/images/portfolio/ecommerce-1.jpg',
      '/images/portfolio/ecommerce-2.jpg',
      '/images/portfolio/ecommerce-3.jpg'
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    nextProject: 'project-2'
  },
  // Add more projects here...
];

export default function CaseStudy() {
  const router = useRouter();
  const { caseId } = router.query;
  
  const project = projects.find(p => p.id === caseId);
  const nextProject = projects.find(p => p.id === project?.nextProject);

  if (!project) {
    return null; // Or a loading state
  }

  return (
    <>
      <Head>
        <title>{project.title} - Portfolio Case Study</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col bg-secondary">
        <Header />
        <main className="pt-32">
          <article className="container pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="heading-1 mb-4">{project.title}</h1>
                <p className="text-xl text-dimWhite mb-6">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 rounded-full text-sm text-dimWhite"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden mb-16">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-invert">
                  <h2>Project Overview</h2>
                  <p className="text-dimWhite whitespace-pre-line">{project.fullDescription}</p>

                  <h2>Challenges</h2>
                  <p className="text-dimWhite whitespace-pre-line">{project.challenges}</p>

                  <h2>Solution</h2>
                  <p className="text-dimWhite whitespace-pre-line">{project.solution}</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </article>

          {nextProject && (
            <section className="bg-white/5 py-20">
              <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-dimWhite mb-4">Next Project</p>
                  <h2 className="heading-2 mb-6">{nextProject.title}</h2>
                  <p className="text-xl text-dimWhite mb-8">{nextProject.description}</p>
                  <Link
                    href={`/portfolio/${nextProject.id}`}
                    className="btn btn-primary inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
