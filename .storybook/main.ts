import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    config!.module!.rules!.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic', // Поддержка react-jsx
                },
              ],
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    });

	config!.module!.rules!.push({
		test: /\.s[ac]ss$/i,
		use: [
			'style-loader',
			'css-loader',
			'sass-loader',
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							[
								"autoprefixer",
								{
									// Options
								},
							],
						],
					},
				}
			}
		]
	  });

    config!.resolve!.extensions!.push('.ts', '.tsx', '.css', '.scss');
    return config;
  },
};
export default config;
