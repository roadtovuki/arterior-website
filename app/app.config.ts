export default defineAppConfig({
  ui: {
    colors: {
      primary: 'stone',
      neutral: 'stone',
    },
    button: {
      variants: {
        size: {
          '2xl': {
            base: 'px-4 py-3 text-md gap-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
          },
        },
      },
    },
  },
});
