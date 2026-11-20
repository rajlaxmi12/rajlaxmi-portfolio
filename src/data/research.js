export const researchData = [

  /* ==========================================
     MANIT RESEARCH INTERNSHIP
  ========================================== */

  {
    id: '01',

    type: 'RESEARCH INTERNSHIP',

    title: 'Low-Light Image Enhancement',

    fullTitle:
      'Deep Learning Based Low-Light Image Enhancement',

    organization:
      'Maulana Azad National Institute of Technology (MANIT), Bhopal',

    period:
      'MAY 2026 — JUN 2026',

    status:
      'RESEARCH',

    subject:
      'COMPUTER VISION / DEEP LEARNING',

    role:
      'RESEARCH INTERN',

    description:
      'Research focused on improving the visual quality of low-light images using deep-learning-based image enhancement techniques.',

    approach:
      'Designed and trained an encoder-decoder CNN in PyTorch for low-light image enhancement. The work explored Multi-Scale Perceptual Loss and Adaptive Instance Normalization and included systematic evaluation and ablation studies.',

    metrics: [

      {
        value: '20.38',
        label: 'PSNR (dB)',
      },

      {
        value: '0.7807',
        label: 'SSIM',
      },

      {
        value: '68.7%',
        label: 'LPIPS REDUCTION',
      },

      {
        value: 'CNN',
        label: 'ARCHITECTURE',
      },

    ],

    technologies: [
      'Python',
      'PyTorch',
      'CNN',
      'Deep Learning',
      'Computer Vision',
      'Image Processing',
      'AdaIN',
    ],
  },


  /* ==========================================
     DGAL-NET
  ========================================== */

  {
    id: '02',

    type: 'RESEARCH PAPER',

    title: 'DGAL-Net',

    fullTitle:
      'Difficulty Guided Adaptive Low-Light Image Enhancement Network',

    organization:
      '11th International Conference on Computer Vision & Image Processing (CVIP 2026)',

    period:
      '2026',

    status:
      'SUBMITTED',

    paperId:
      '1170',

    subject:
      'IMAGE / VIDEO PROCESSING',

    role:
      'AUTHOR',

    description:
      'A difficulty-aware low-light image enhancement network that adapts its restoration strategy according to the degradation level of each input image.',

    approach:
      'DGAL-Net introduces a lightweight Difficulty Estimation Module that estimates image difficulty from encoder features. This guides feature modulation and adaptive loss weighting, allowing stronger restoration for severely degraded images while avoiding unnecessary enhancement of easier samples.',

    metrics: [

      {
        value: '23.350',
        label: 'PSNR (dB)',
      },

      {
        value: '0.842',
        label: 'SSIM',
      },

      {
        value: '5.497M',
        label: 'PARAMETERS',
      },

      {
        value: '79.14',
        label: 'FPS',
      },

    ],

    technologies: [
      'Python',
      'PyTorch',
      'CNN',
      'Deep Learning',
      'Computer Vision',
      'Image Processing',
    ],
  },

]