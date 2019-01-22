export const setFieldTone = tone => {
  switch (tone) {
    case 'critical':
      return 'critical';
    case 'positive':
      return 'positive';
    default:
      return 'neutral';
  }
};
