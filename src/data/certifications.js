const certificates = {

  fullStack: {
    id: 'full-stack',

    title:
      'Full Stack Developer',

    issuer:
      'Apna College',

    year:
      '2024',

    category:
      'FULL STACK DEVELOPMENT',

    link:
      '',
  },


  dsa: {
    id: 'dsa',

    title:
      'Data Structures & Algorithms',

    issuer:
      'Apna College',

    year:
      '2025',

    category:
      'DATA STRUCTURES & ALGORITHMS',

    link:
      '',
  },


  aiMl: {
    id: 'ai-ml',

    title:
      'AI / ML Engineer',

    issuer:
      'Apna College',

    year:
      '2026',

    category:
      'ARTIFICIAL INTELLIGENCE / ML',

    link:
      '',
  },

}


/* ==========================================
   PROFILE-SPECIFIC ORDER
========================================== */

export const certificationsData = {

  software: [
    certificates.fullStack,
    certificates.dsa,
    certificates.aiMl,
  ],

  ai: [
    certificates.aiMl,
    certificates.dsa,
    certificates.fullStack,
  ],

}