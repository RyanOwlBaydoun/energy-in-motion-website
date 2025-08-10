// Temporary file for HomeMainPage interface until main types file is updated
import { SanityImage } from "./sanity";

export interface HomeMainPage {
  _id: string;
  heroSection: {
    minHeightDesktopPx?: number;
    minHeightMobilePx?: number;
    bottomSpacingPx?: number;
    backgroundImage: SanityImage;
    overlayOpacity: number;
    mainTitle1: string;
    mainTitle2: string;
    mainTitle3: string;
    subtitle: string;
    ctaButtonText: string;
    ctaButtonLink: string;
  };
  bookingSection?: {
    headingSize?: string;
    bodySize?: string;
    buttonLabel?: string;
    buttonHref?: string;
  };
  energyInMotionSection: {
    content: string;
  };
  servicesSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    ctaButtonText: string;
    ctaHref?: string;
    ctaStyle?: 'primary' | 'secondary';
    tabs: Array<{
      tabName: string;
      services: Array<{
        serviceName: string;
        serviceSubname: string;
        iconSource?: 'upload' | 'library';
        iconSvg?: any;
        iconKey?: string;
      }>;
    }>;
  };
  assessmentsSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    sectionDescription: string;
    ctaButtonText: string;
    ctaHref?: string;
    leftAssessments: Array<{
      title: string;
      description: string;
    }>;
    rightAssessments: Array<{
      title: string;
      description: string;
    }>;
  };
  latestProgramsSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    tabs: Array<{
      tabName: string;
      programs: Array<{
        _type: string;
        _id: string;
        title: string;
        slug: { current: string };
        description: string;
        category: string;
        heroImage?: SanityImage;
      }>;
      overrides?: Array<{
        overrideTitle?: string;
        overrideExcerpt?: string;
        overrideCtaLabel?: string;
        overrideCtaHref?: string;
      }>;
      cardMaxWidthPx?: number;
      cardsPerRowDesktop?: number;
      cardsPerRowMobile?: number;
    }>;
  };
  aboutSarahSection: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    description: string;
    photo: SanityImage;
    imageAspectRatio?: string;
    containerWidthPercentDesktop?: number;
    containerWidthPercentMobile?: number;
    credentials: string[];
    buttonText: string;
    buttonLink: string;
  };
  instagramSection: {
    sectionTitle: string;
    posts: Array<{
      image: SanityImage;
      title: string;
      link: string;
      order: number;
    }>;
  };
  testimonialsSection: {
    sectionTitle: string;
    sectionSubtitle: string;
    testimonials: Array<{
      quote: string;
      name: string;
      company: string;
      order: number;
    }>;
  };
  industryInsightsSection: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    sectionHighlight: string;
    blogPosts: Array<{
      title: string;
      description: string;
      image: SanityImage;
      link: string;
      order: number;
    }>;
  };
  metaTitle: string;
  metaDescription: string;
}
