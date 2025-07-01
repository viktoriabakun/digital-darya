<script>
	/** @type {{
	 * color?: 'dark' | 'light',
	 * size?: 'md' | 'lg',
	 * class?: string }}
	 * */
	let { color = 'dark', size = 'md', class: className = '' } = $props();

	const colorVariants = {
		dark: 'rgba(255, 255, 255, 0.1)',
		light: 'white'
	};

	const sizeVariants = {
		md: {
			viewBox: '0 0 358 422',
			d: 'M261.508 12.2396C258.386 4.82292 251.123 0 243.075 0H20C8.9543 0 0 8.95431 0 20V402C0 413.046 8.95431 422 20 422H338C349.046 422 358 413.046 358 402V114.882C358 106.957 353.321 99.7799 346.069 96.5824L293.112 73.2307C288.439 71.1698 284.731 67.3989 282.749 62.6912L261.508 12.2396Z'
		},
		lg: {
			viewBox: '0 0 625 414',
			d: 'M443.245 11.2581C439.898 4.37147 432.913 0 425.256 0H20.0625C9.01681 0 0.0625 8.95432 0.0625 20V394C0.0625 405.046 9.0168 414 20.0625 414H604.062C615.108 414 624.062 405.046 624.062 394V175.498C624.062 167.206 618.946 159.774 611.2 156.815L499.212 114.035C494.463 112.221 490.583 108.666 488.36 104.093L443.245 11.2581Z'
		}
	};
</script>

<svg
	class={['h-full w-full', className]}
	viewBox={sizeVariants[size].viewBox}
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="none"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d={sizeVariants[size].d}
		fill={colorVariants[color]}
	/>
</svg>
