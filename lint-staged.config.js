module.exports = {
  '*.{ts,tsx}': (filenames) => {

    return [
      'tsc -p tsconfig.json --noEmit',
      `eslint --fix --ext .ts,tsx ${filenames.join(' ')}`,
      `prettier -w ${filenames.join(' ')}`,
    ];

  },
};
