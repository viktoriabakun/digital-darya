<script>
	import Text from '$lib/components/atoms/Text.svelte';
</script>

<section id="contacts" class="section-scroll-margin overflow-x-hidden">
	<div
		class="mt-[100px] -ml-[170px] h-[55px] w-[calc(100%+200px)] bg-[url(/lets-talk-decoration.svg)] bg-size-[auto_55px] lg:h-20 lg:bg-size-[auto_80px]"
	></div>

	<div class="w-full px-4 xl:px-0">
		<div
			class="bg-brand-blue/5 mx-auto my-[100px] flex w-full max-w-[1216px] flex-col items-center rounded-2xl px-4 py-16"
		>
			<h2 class="text-center text-2xl font-semibold lg:text-4xl">
				Looking for a design consultation?
			</h2>
			<Text class="max-w-[574px] pt-5 text-center !text-[#535862] lg:!text-xl"
				>Leave your email, and I’ll reach out to you as soon as possible with design ideas to assist
				you!</Text
			>

			<form class="mt-8 grid w-full max-w-[480px] grid-cols-1 gap-6">
				<div class="flex w-full flex-col gap-y-6 lg:flex-row lg:gap-x-8">
					<div class="form-group w-full">
						<label class="form-label" for="firstName">First name *</label>
						<input
							class="input"
							id="firstName"
							name="firstName"
							type="text"
							required
							placeholder="First name"
						/>
					</div>

					<div class="form-group w-full">
						<label class="form-label" for="lastName">Last name * </label>
						<input
							class="input"
							id="lastName"
							name="lastName"
							type="text"
							required
							placeholder="Last name"
						/>
					</div>
				</div>

				<div class="form-group">
					<label class="form-label" for="email">Email *</label>
					<input
						class="input"
						id="email"
						name="email"
						type="email"
						required
						placeholder="you@company.com"
					/>
				</div>

				<div class="form-group">
					<label class="form-label" for="message">Message *</label>
					<textarea
						class="input"
						id="message"
						name="message"
						required
						rows="4"
						placeholder="Leave us a message..."
					></textarea>
				</div>

				<button
					class="bg-brand-blue mt-2 w-full rounded-4xl py-3 font-semibold text-white"
					type="submit"
				>
					Send
				</button>

				<!--			honeypot -->
				<div class="sr-only">
					<label for="company"></label>
					<input name="company" type="text" />
				</div>
			</form>
		</div>
	</div>
</section>
